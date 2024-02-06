import * as React from 'react';
import {Box, BottomNavigation, BottomNavigationAction, Paper}from "@mui/material"; 

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>

    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
            console.log(newValue)
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="首页" />
        <BottomNavigationAction label="购物"/>
        <BottomNavigationAction label="消息"  />
        <BottomNavigationAction label="我" />
      </BottomNavigation>
    </Box>
    </Paper>
  );
}

