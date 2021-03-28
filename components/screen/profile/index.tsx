import * as React from 'react';
import { Box } from '../../common/box';
import { Template } from '../../common/template';
import { Typography } from '../../common/typography';

import { styles } from './style';

function ProfileScreen() {
  return (
    <Template>
      <Box style={styles.container}>
        <Typography>Second screen</Typography>
      </Box>
    </Template>
  );
}

export { ProfileScreen };
