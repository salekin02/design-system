import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Button Component', () => {
  test('renders the Button component with default props', () => {
    render(<Button>Default Button</Button>);

    // Check if button renders with default text
    const buttonElement = screen.getByRole('button', { name: /default button/i });
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders different types of buttons based on props', () => {
    render(<Button type="primary">Primary Button</Button>);
    const primaryButton = screen.getByRole('button', { name: /primary button/i });

    render(<Button type="dashed">Dashed Button</Button>);
    const dashedButton = screen.getByRole('button', { name: /dashed button/i });

    // Assert correct rendering
    expect(primaryButton).toHaveClass('ant-btn-primary');
    expect(dashedButton).toHaveClass('ant-btn-dashed');
  });

  test('renders disabled button', () => {
    render(<Button disabled>Disabled Button</Button>);

    const buttonElement = screen.getByRole('button', { name: /disabled button/i });
    expect(buttonElement).toBeDisabled();
  });

  test('applies size variations correctly', () => {
    render(<Button size="small">Small Button</Button>);
    const smallButton = screen.getByRole('button', { name: /small button/i });

    render(<Button size="large">Large Button</Button>);
    const largeButton = screen.getByRole('button', { name: /large button/i });

    // Assert correct size classes
    expect(smallButton).toHaveClass('ant-btn-sm');
    expect(largeButton).toHaveClass('ant-btn-lg');
  });

  test('handles click events', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Clickable Button</Button>);

    const buttonElement = screen.getByRole('button', { name: /clickable button/i });
    fireEvent.click(buttonElement);

    // Assert click handler is called
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test('supports custom class names', () => {
    render(<Button className="custom-class">Custom Button</Button>);

    const buttonElement = screen.getByRole('button', { name: /custom button/i });
    expect(buttonElement).toHaveClass('custom-class');
  });
});
