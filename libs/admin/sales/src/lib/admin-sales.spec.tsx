import React from 'react';
import { render } from '@testing-library/react';

import AdminSales from './admin-sales';

describe('AdminSales', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AdminSales />);
    expect(baseElement).toBeTruthy();
  });
});
