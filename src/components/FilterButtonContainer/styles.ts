import { Seperator } from '@/components/Seperator';
import styled from 'styled-components';

export const FilterButtonContainer = styled.div`
  display: flex;
  border: none;
`;

export const FilterButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const StyledSeperator = styled(Seperator)`
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;
