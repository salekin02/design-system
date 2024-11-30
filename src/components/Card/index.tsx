import React from 'react';
import { Card as AntCard, CardProps as AntCardProps } from 'antd';


interface CardProps extends AntCardProps {
    footerItems?: React.ReactNode[];
    body: string | React.ReactNode;
}
const App: React.FC<CardProps> = ({ footerItems, body, ...props }) => (
    <AntCard actions={footerItems} style={{ minWidth: 300 }}>
        <AntCard.Meta description={body} {...props} />
    </AntCard>
);

export default App;