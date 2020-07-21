import React from 'react';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { black, lighter } from '../utils';

const StyledImageBackground = styled.ImageBackground`
  padding: 96px 32px 40px 32px;
  background-color: ${lighter};
`;

const StyledText = styled.Text`
  font-size: 40px;
  font-weight: 600;
  text-align: center;
  color: ${black};
`;

export const Header = () => (
  <StyledImageBackground
    accessibilityRole={'image'}
    source={require('../assets/logo.png')}
    imageStyle={styles.logo}>
    <StyledText>Welcome to React</StyledText>
  </StyledImageBackground>
);

const styles = StyleSheet.create({
  logo: {
    opacity: 0.2,
    overflow: 'visible',
    resizeMode: 'cover',
    /*
     * These negative margins allow the image to be offset similarly across screen sizes and component sizes.
     *
     * The source logo.png image is 512x512px, so as such, these margins attempt to be relative to the
     * source image's size.
     */
    marginLeft: -128,
    marginBottom: -192,
  },
});
