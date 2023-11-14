import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { tabTypes } from './Tabs.consts';

export const DisciplineTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
      <Tabs
        value={value}
        orientation='vertical'
        onChange={handleChange}
        centered
      >
        {tabTypes.map(({ label }) => (
          <Tab label={label} />
        ))}
      </Tabs>
    </Box>
  );
};
