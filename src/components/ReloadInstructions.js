import React from 'react';
import { Platform, Text } from 'react-native';
import { Highlight } from './Highlight';

export const ReloadInstructions = Platform.select({
  ios: () => (
    <Text>
      Press <Highlight>Cmd + R</Highlight> in the simulator to reload your app's
      code.
    </Text>
  ),
  default: () => (
    <Text>
      Double tap <Highlight>R</Highlight> on your keyboard to reload your app's
      code.
    </Text>
  ),
});
