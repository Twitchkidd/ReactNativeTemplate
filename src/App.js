import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import styled from 'styled-components/native';
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from 'react-native';
import { AppScrollView, Header } from './components';
import { white, dark, black } from './utils';

const EngineText = styled.Text`
  position: absolute;
  right: 0;
`;

const EngineTextFooter = styled.Text`
  color: ${dark};
  font-size: 12px;
  font-weight: 600;
  padding: 4px;
  padding-right: 12px;
  text-align: right;
`;

const Body = styled.View`
  background-color: ${white};
`;

const SectionContainer = styled.View`
  margin-top: 32px;
  padding: 0 24px 0 24px;
`;

const SectionTitle = styled.Text`
  font-size: 24px;
  font-weight: 600;
  color: ${black};
`;

const SectionDescription = styled.Text`
  margin-top: 8px;
  font-size: 18px;
  font-weight: 400;
  color: ${dark};
`;

const SectionDescriptionHighlight = styled.Text`
  font-weight: 700;
`;

import {
  LearnMoreLinks,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <AppScrollView>
          <Header />
          {global.HermesInternal == null ? null : (
            <EngineText>
              <EngineTextFooter>Engine: Hermes</EngineTextFooter>
            </EngineText>
          )}
          <Body>
            <SectionContainer>
              <SectionTitle>Step One</SectionTitle>
              <SectionDescription>
                Edit{' '}
                <SectionDescriptionHighlight>
                  App.js
                </SectionDescriptionHighlight>{' '}
                to change this screen and then come back to see your edits.
              </SectionDescription>
            </SectionContainer>
            <SectionContainer>
              <SectionTitle>See Your Changes</SectionTitle>
              <SectionDescription>
                <ReloadInstructions />
              </SectionDescription>
            </SectionContainer>
            <SectionContainer>
              <SectionTitle>Debug</SectionTitle>
              <SectionDescription>
                <DebugInstructions />
              </SectionDescription>
            </SectionContainer>
            <SectionContainer>
              <SectionTitle>Learn More</SectionTitle>
              <SectionDescription>
                Read the docs to discover what to do next:
              </SectionDescription>
            </SectionContainer>
            <LearnMoreLinks />
          </Body>
        </AppScrollView>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
