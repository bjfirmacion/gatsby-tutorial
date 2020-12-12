import React from 'react';
import Layout from '../components/Layout';
import styles from '../components/blog.module.css';

const blog = () => {
  return (
    <Layout>
      <div className={styles.page}>
        <h1>this is our blog page</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio rerum hic voluptate sed ratione expedita dolores fugit sequi earum itaque nisi, deserunt excepturi quo ea.</p>
      </div>
    </Layout>
  )
}

export default blog