import Input from './index';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

test('loads and displays the input', async () => {
    const { getByPlaceholderText } = render(<Input placeholder="Enter text" />);
    expect(getByPlaceholderText('Enter text')).toBeInTheDocument();
});

test('supports different types', async () => {
    const { getByPlaceholderText } = render(<Input variant='filled' placeholder="Enter password" />);
    expect(getByPlaceholderText('Enter password')).toHaveClass('ant-input-filled');
});

test('supports disabled state', async () => {
    const { getByPlaceholderText } = render(<Input placeholder="Disabled input" disabled />);
    expect(getByPlaceholderText('Disabled input')).toBeDisabled();
});