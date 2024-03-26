// components/BlogPost.js

import React from 'react';
import styles from '../styles/BlogPost.module.css'; 

const BlogPost = () => {
  return (
    <div className={`${styles.post} ${styles.fadeIn}`}> {}
      <h2 className={styles.title}>Example Blog Post</h2>
      <p className={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis, 
        enim ut blandit feugiat, tortor leo fermentum arcu, at sodales magna ex et ex. 
        Suspendisse potenti. Morbi consequat risus a lorem finibus, ac dictum est 
        pulvinar. Vestibulum vitae vehicula dui. Proin sit amet arcu nisl. Donec 
        vehicula semper mi, eu aliquam eros consequat nec. Nam vitae risus dapibus, 
        tincidunt eros ac, rutrum neque.
      </p>
    </div>
  );
};

export default BlogPost;
