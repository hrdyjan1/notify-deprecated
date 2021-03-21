import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Props } from './types';
import { styles } from './style';
import { Box } from '../../common/box';
import { Typography } from '../../common/typography';

function NotFoundScreen({ navigation }: Props) {
  return (
    <Box style={styles.container}>
      <Typography style={styles.title}>This screen doesn't exist.</Typography>
      <TouchableOpacity onPress={() => navigation.replace('Root')} style={styles.link}>
        <Typography style={styles.linkText}>Go to home screen!</Typography>
      </TouchableOpacity>
    </Box>
  );
}

export { NotFoundScreen };
