import React from 'react';
import { Text, StyleSheet } from 'react-native';
import styled from 'styled-components/native';
import { Container } from './Container';
import { dark, light, primary } from '../utils';
import openURLInBrowser from 'react-native/Libraries/Core/Devtools/openURLInBrowser';

const links = [
  {
    id: 1,
    title: 'The Basics',
    link: 'https://reactnative.dev/docs/tutorial',
    description: 'Explains a Hello World for React Native.',
  },
  {
    id: 2,
    title: 'Style',
    link: 'https://reactnative.dev/docs/style',
    description:
      'Covers how to use the prop named style which controls the visuals.',
  },
  {
    id: 3,
    title: 'Layout',
    link: 'https://reactnative.dev/docs/flexbox',
    description: 'React Native uses flexbox for layout, learn how it works.',
  },
  {
    id: 4,
    title: 'Components',
    link: 'https://reactnative.dev/docs/components-and-apis',
    description: 'The full list of components and APIs inside React Native.',
  },
  {
    id: 5,
    title: 'Navigation',
    link: 'https://reactnative.dev/docs/navigation',
    description:
      'How to handle moving between screens inside your application.',
  },
  {
    id: 6,
    title: 'Networking',
    link: 'https://reactnative.dev/docs/network',
    description: 'How to use the Fetch API in React Native.',
  },
  {
    id: 7,
    title: 'Help',
    link: 'https://reactnative.dev/help',
    description:
      'Need more help? There are many other React Native developers who may have the answer.',
  },
  {
    id: 8,
    title: 'Follow us on Twitter',
    link: 'https://twitter.com/reactnative',
    description:
      'Stay in touch with the community, join in on Q&As and more by following React Native on Twitter.',
  },
];

const Separator = styled.View`
  background-color: ${light};
  height: 1px;
`;

const LinkContainer = styled.TouchableOpacity`
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
`;

export const LearnMoreLinks = () => (
  <Container>
    {links.map(({ id, title, link, description }) => {
      return (
        <React.Fragment key={id}>
          <Separator />
          <LinkContainer
            accessibilityRole={'button'}
            onPress={() => openURLInBrowser(link)}>
            <Text style={styles.link}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
          </LinkContainer>
        </React.Fragment>
      );
    })}
  </Container>
);

const styles = StyleSheet.create({
  link: {
    flex: 2,
    fontSize: 18,
    fontWeight: '400',
    color: primary,
  },
  description: {
    flex: 3,
    paddingVertical: 16,
    fontWeight: '400',
    fontSize: 18,
    color: dark,
  },
});
