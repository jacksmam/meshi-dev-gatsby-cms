import * as React from 'react';
import styled from 'styled-components';

import { theme } from '../theme';

interface OwnProps {

}

export const Header = ({}) => {
  return (
    <StyledHeader><StyledTitle>飯を食うデブ</StyledTitle></StyledHeader>
  );
}

const StyledHeader = styled.div`
  padding: 10px 0;
  background-color: ${theme.color.mainColor};
`

const StyledTitle = styled.div`
  padding-left: 20px;
  color: #fff;
  font-weight: bold;
  font-size: 2em; 
`