import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Link } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ff007f', // Fuchsia pink 
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          border: '2px solid black', // Black border for the container
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: '#f0f0f0', // Grey background for input boxes
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#ff007f', // Fuchsia pink button
          borderColor: '#ff007f', // Fuchsia pink border for the button
          color: 'white', // White text color for the button
        },
      },
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
      <Box mt={5} sx={{ backgroundColor: 'white', padding: '20px' }}>
        <Typography variant="h4" align="left" fontSize="24px">Welcome to Boardx!</Typography>
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
           <Typography variant="body2" align="center">
              <Link href="#">Forgot password?</Link>
            </Typography>
        </form>
      </Box>
    </Container>
 </ThemeProvider>
  );
};

export default LoginPage;
