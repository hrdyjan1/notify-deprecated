import * as React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Box } from '../../common/box';
import { Template } from '../../common/template';
import { Typography } from '../../common/typography';
import { styles } from './style';

function HomeScreen() {
  return (
    <Template>
      <Box style={styles.container}>
        <Typography>
          First screen
        </Typography>
      </Box>
    </Template>
  );
}

export { HomeScreen };
