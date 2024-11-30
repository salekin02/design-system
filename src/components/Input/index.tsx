// src/Input.tsx
import React from 'react';
import { Input as AntInput, InputProps as AntInputProps } from 'antd';
interface InputProps extends AntInputProps {
    type?: 'text' | 'number';
}

const Input: React.FC<InputProps> = ({ ...props }) => {
    return <AntInput {...props} />;
};

export default Input;
