import React from "react";
import { render } from '@testing-library/react';
import Header from "./header";

test('renders header with title', () => { 
    const { container } = render(<Header title="My App"/>);
    expect(container).toMatchSnapshot();
  });