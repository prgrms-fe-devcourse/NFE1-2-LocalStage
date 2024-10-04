import * as S from './styles';
import theme from '@/styles/theme';
import { FidgetSpinnerProps, ThreeDots } from 'react-loader-spinner';

export const Loader = ({ ...rest }: FidgetSpinnerProps) => {
  return (
    <S.LoaderWrapper>
      <ThreeDots color={theme.colors.primary} {...rest} />
    </S.LoaderWrapper>
  );
};
