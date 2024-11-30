import { render } from '@testing-library/react';
import App from './index';

describe('Modal Component', () => {
    it('should render without crashing', () => {
        const { getByText } = render(<App modalBody={<div>Test Body</div>} open={true} />);
        expect(getByText('Test Body')).toBeInTheDocument();
    });

    it('should not render when open is false', () => {
        const { queryByText } = render(<App modalBody={<div>Test Body</div>} open={false} />);
        expect(queryByText('Test Body')).not.toBeInTheDocument();
    });
});
