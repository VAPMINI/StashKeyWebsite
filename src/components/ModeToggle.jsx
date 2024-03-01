import { Switch } from '@mui/joy';
import { useColorScheme } from '@mui/joy/styles';
import React from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode'
import { useState } from 'react';

export default function ModeToggle() {
    const { mode, setMode } = useColorScheme();
    const [checked, setChecked] = useState(mode === 'dark');

    const handleSwitchChange = (event) => {
      setChecked(event.target.checked);
      const newMode = event.target.checked ? 'dark' : 'light';
      setMode(newMode);
    };
  
    return (
        <Switch
            startDecorator={<DarkModeIcon />}
          checked={checked}
          onChange={handleSwitchChange}
        />
    );
  }