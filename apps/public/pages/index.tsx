import React from 'react';

import styles from './index.module.css';

import { Courseitem } from '@reactcourses/courseitem';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.css file.
   */
  return (
    <div className={styles.page}>
      <Courseitem />
    </div>
  );
}

export default Index;
