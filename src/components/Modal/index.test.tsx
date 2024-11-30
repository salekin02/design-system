import { render } from '@testing-library/react';
import { Modal } from '.';

describe('Modal Component', () => {
    it('should render without crashing', () => {
        const { getByText } = render(<Modal modalBody={<div>Test Body</div>} open={true} />);
        expect(getByText('Test Body')).toBeInTheDocument();
    });

    it('should not render when open is false', () => {
        const { queryByText } = render(<Modal modalBody={<div>Test Body</div>} open={false} />);
        expect(queryByText('Test Body')).not.toBeInTheDocument();
    });
});
