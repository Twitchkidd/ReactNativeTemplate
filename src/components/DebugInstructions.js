import React from 'react';
import { Platform, Text } from 'react-native';
import { Highlight } from './Highlight';

export const DebugInstructions = Platform.select({
  ios: () => (
    <Text>
      Press <Highlight>Cmd + D</Highlight> in the simulator or{' '}
      <Highlight>Shake</Highlight> your device to open the React Native debug
      menu.
    </Text>
  ),
  default: () => (
    <Text>
      Press <Highlight>Cmd or Ctrl + M</Highlight> or{' '}
      <Highlight>Shake</Highlight> your device to open the React Native debug
      menu.
    </Text>
  ),
});
