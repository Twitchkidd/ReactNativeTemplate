import React from 'react';
import styled from 'styled-components/native';
import { lighter } from '../utils';

const StyledScrollView = styled.ScrollView`
  background-color: ${lighter};
`;

export const AppScrollView = () => (
  <StyledScrollView contentInsetAdjustmentBehavior="automatic" />
);
