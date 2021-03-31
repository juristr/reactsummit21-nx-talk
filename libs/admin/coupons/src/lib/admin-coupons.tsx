import React from 'react';

import './admin-coupons.module.css';

import { core } from '@reactcourses/core';

/* eslint-disable-next-line */
export interface AdminCouponsProps {}

export function AdminCoupons(props: AdminCouponsProps) {
  core();
  return (
    <div>
      <h1>Welcome to admin-coupons!</h1>
    </div>
  );
}

export default AdminCoupons;
