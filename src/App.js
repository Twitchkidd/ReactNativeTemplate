import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import styled from 'styled-components/native';
import { SafeAreaView, StatusBar } from 'react-native';
import {
  AppScrollView,
  Container,
  DebugInstructions,
  Header,
  Highlight,
  LearnMoreLinks,
  ReloadInstructions,
} from './components';
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
            <Container>
              <SectionTitle>Step One</SectionTitle>
              <SectionDescription>
                Edit <Highlight>App.js</Highlight> to change this screen and
                then come back to see your edits.
              </SectionDescription>
            </Container>
            <Container>
              <SectionTitle>See Your Changes</SectionTitle>
              <SectionDescription>
                <ReloadInstructions />
              </SectionDescription>
            </Container>
            <Container>
              <SectionTitle>Debug</SectionTitle>
              <SectionDescription>
                <DebugInstructions />
              </SectionDescription>
            </Container>
            <Container>
              <SectionTitle>Learn More</SectionTitle>
              <SectionDescription>
                Read the docs to discover what to do next:
              </SectionDescription>
            </Container>
            <LearnMoreLinks />
          </Body>
        </AppScrollView>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
