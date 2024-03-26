import React, { useState, useEffect} from 'react';
import Header from './Header';
import NavigationBar from './NavigationBar';
import MainContent from './MainContent';
import Footer from './Footer';
import BlogPost from './BlogPost';
import Button from './Button';
import '../styles/styles.css';
import Dropdown from './Dropdown';
import ImageButton from './ImageButton';
import ParallaxImageButton from './ParalaxImageButton';
import ReactSlider from 'react-slider';

const Layout = () => {
    const options = ['Option 1', 'Option 2', 'Option 3'];
    const animationTimes = [0,0.5,1,1.5,2,2.5,3,3.5,4,4.5,5];
    const easeOptions = ['linear', 'ease-in', 'ease-out', 'ease-in-out'];
    const [easingType, setEasingType] = useState(easeOptions[0]);
    const [animationTime, setAnimationTime] = useState(0.5);


    const [revealItems, setRevealItems] = useState([]);

    useEffect(() => {
        const handleScroll = () => {
            const elements = document.querySelectorAll('.reveal-item');
            elements.forEach(element => {
                const elementPosition = element.getBoundingClientRect().top;
                const threshold = window.innerHeight - 100;
                if (elementPosition < threshold) {
                    setRevealItems(prevState => {
                        if (!prevState.includes(element.id)) {
                            return [...prevState, element.id];
                        }
                        return prevState;
                    });
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <div className="layout">
            <NavigationBar />
            <div className="content">

                <BlogPost />

                <div className="centered">
                    <Button />
                    <Dropdown options={options} type={"Set Button Color"}/>
                    <Dropdown options={options} type={"Set Button Color"}/>
                    <Dropdown options={options} type={"Set Button Color"}/>
                    <Dropdown options={easeOptions} onClick={setEasingType} type={"Set Easing Type"}></Dropdown>
                    <Dropdown options={animationTimes} onClick={setAnimationTime} type={"Set Animation Time"}></Dropdown>

                </div>

                <div className='centered content'>
                    <h1>Animation Demo</h1>
                </div>

                <div className="centered image-grid">
                    {Array.from({ length: 20 }).map((_, index) => (
                        <ImageButton key={index} imageUrl={"https://cataas.com/cat"} easing={easingType} animationTime={animationTime} />
                    ))}
                </div>

                <div className='centered content'>
                    <h1>Parlax Demo</h1>
                </div>

                <div className="centered image-grid">
                    {Array.from({ length: 10 }).map((_, index) => (
                        <ParallaxImageButton key={index} imageUrl={"https://cataas.com/cat"}/>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
