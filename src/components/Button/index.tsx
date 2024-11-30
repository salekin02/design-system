import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd';
import React from 'react';

interface ButtonProps extends AntButtonProps {
  actionType?: 'edit' | 'delete';
}

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <AntButton {...props}>{children}</AntButton>;
};

export default Button;
