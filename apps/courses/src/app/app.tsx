import React from 'react';

import styles from './app.module.css';

import { ReactComponent as Logo } from './logo.svg';
import { Courseitem } from '@reactcourses/courseitem';
import { AdminCoupons } from '@reactcourses/admin/coupons';
import { AdminSales } from '@reactcourses/admin/sales';

export function App() {
  return (
    <div className={styles.app}>
      <header className="flex">
        <Logo width="75" height="75" />
        <h1>Welcome to courses!</h1>
      </header>
      <Courseitem />
    </div>
  );
}

export default App;
