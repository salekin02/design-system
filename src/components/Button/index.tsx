import { Button as AntButton, ButtonProps as AntButtonProps } from 'antd';
import React, { FC } from 'react';

interface ButtonProps extends AntButtonProps {
  actionType?: 'edit' | 'delete';
}

const Button: FC<ButtonProps> = ({ children, ...props }) => {
  return <AntButton {...props}>{children}</AntButton>;
};

export default Button;
