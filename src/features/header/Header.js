import * as React from 'react';
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { SvgIcon } from '@mui/material';
import { IconButton } from '@mui/material';

export default function Header() {
  const navigate = useNavigate();
  return (
    <Box component="header" style={{ marginBottom: '45px' }}>
      <AppBar position="relative">
        <Toolbar>
          <IconButton onClick={() => navigate('/')}>
            <SvgIcon>
              <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path>
            </SvgIcon>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}