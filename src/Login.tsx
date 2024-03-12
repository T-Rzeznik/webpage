import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ff007f', // Fuchsia pink 
    },
  },
});

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Implement your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
    // Reset fields after logging in
    setUsername('');
    setPassword('');
  };

  return (
<ThemeProvider theme={theme}>
    <Container maxWidth="xs">
      <Box mt={5}>
        <Typography variant="h4" align="center">Login</Typography>
        <form onSubmit={handleLogin}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            margin="normal"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" color="primary" fullWidth type="submit">
            Login
          </Button>
        </form>
      </Box>
    </Container>
 </ThemeProvider>
  );
};

export default LoginPage;
