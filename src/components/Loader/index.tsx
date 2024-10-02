import theme from '@/styles/theme';
import { FidgetSpinnerProps, ThreeDots } from 'react-loader-spinner';

export const Loader = ({ ...rest }: FidgetSpinnerProps) => {
  return <ThreeDots color={theme.colors.primary} {...rest} />;
};
