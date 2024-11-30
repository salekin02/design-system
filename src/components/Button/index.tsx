import { Button as AntButton, ButtonProps as AntButtonProps, ConfigProvider, Tooltip, TooltipProps } from 'antd';
import React from 'react';
import { colors } from '../../tokens/colors';
import { spacing } from '../../tokens/spacing';
import { typography } from '../../tokens/typography';

type ButtonProps = AntButtonProps & Partial<{
  tooltip: TooltipProps;
  colorPrimary: string;
  fontSize: number;
}>

const Button: React.FC<ButtonProps> = ({ children, tooltip, colorPrimary, fontSize, ...props }) => {
  return <ConfigProvider
    theme={{
      token: {
        colorPrimary: colorPrimary || colors.primary,
        colorTextSecondary: colors.textSecondary,
        margin: spacing.medium,
        fontSize: fontSize || typography.fontSize.medium,
      },
    }}
  >{tooltip ?
    <Tooltip {...tooltip}>
      <AntButton {...props}>{children}</AntButton>
    </Tooltip>
    :
    <AntButton {...props}>{children}</AntButton>
    }

  </ConfigProvider>
};

export { Button };
