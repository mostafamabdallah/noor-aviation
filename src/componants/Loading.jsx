import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

export default function Animations() {
  return (
    <Box sx={{ width: '100%' }}>
      <Skeleton height="50px"/>
      <Skeleton animation="wave" height="50px" />
      <Skeleton animation={false} height="50px"/>
    </Box>
  );
}
