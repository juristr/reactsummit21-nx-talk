import React from 'react';
import { render } from '@testing-library/react';

import AdminCoupons from './admin-coupons';

describe('AdminCoupons', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AdminCoupons />);
    expect(baseElement).toBeTruthy();
  });
});
