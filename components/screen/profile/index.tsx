import * as React from 'react';
import { Box } from '../../common/box';
import { Typography } from '../../common/typography';


import { styles } from './style';

function ProfileScreen() {
  return (
    <Box style={styles.container}>
      <Typography style={styles.title}>Tab Two</Typography>
    </Box>
  );
}

export { ProfileScreen };
