import React from 'react';

import './admin-sales.module.css';
import { core } from '@reactcourses/core';

/* eslint-disable-next-line */
export interface AdminSalesProps {}

export function AdminSales(props: AdminSalesProps) {
  core();
  return (
    <div>
      <h1>Welcome to admin-sales!</h1>
    </div>
  );
}

export default AdminSales;
