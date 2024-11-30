import React from 'react';
import Button from './index';
import {render} from '@testing-library/react'
import '@testing-library/jest-dom'

test('loads and displays the button', async () => {
    const { getByText } = render(<Button>Click Me</Button>);
    expect(getByText('Click Me')).toBeInTheDocument();
})

test('supports different variants', async () => {
    const { getByText } = render(<Button variant="outlined">Outlined Button</Button>);
    expect(getByText('Outlined Button').parentNode).toHaveClass('ant-btn-variant-outlined');
});


test('supports disabled state', async () => {
    const { container } = render(<Button className='disabled-btn' disabled>Disabled Button</Button>);
    expect(container.firstChild).toBeDisabled();
    expect(container.firstChild).toHaveClass('disabled-btn');
});