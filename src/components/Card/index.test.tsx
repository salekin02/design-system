
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './index';

test('renders the card component', async () => {
    const { getByText } = render(<Card body="Card Body" />);
    expect(getByText('Card Body')).toBeInTheDocument();
});

test('displays body content correctly', async () => {
    const { getByText } = render(<Card body={<div>Custom Body</div>} />);
    expect(getByText('Custom Body')).toBeInTheDocument();
});

test('renders footer items', async () => {
    const footerItems = [<span key="1">Footer Item 1</span>, <span key="2">Footer Item 2</span>];
    const { getByText } = render(<Card body="Card Body" footerItems={footerItems} />);
    expect(getByText('Footer Item 1')).toBeInTheDocument();
    expect(getByText('Footer Item 2')).toBeInTheDocument();
});