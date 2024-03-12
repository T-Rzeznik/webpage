
// SignUp.tsx
import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, Link } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Checkbox from '@mui/material/Checkbox';



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
    MuiTypography: {
      styleOverrides: {
        h4: {
          fontSize: '2rem', // Change font size for h4 to 2rem
        },
        body2: {
          fontSize: '1rem', // Change font size for body2 to 1rem
        },
      },
    },
  },
});

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeToTerms, setAgreeToTerms] = useState(false);

  const handleSignUp = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Implement your sign up logic here
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    // Reset fields after signing up
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <Box mt={5} p={3}>
          <Typography variant="h4" align="left" fontSize="24px">Colaboration starts here</Typography>
          <form onSubmit={handleSignUp}>
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            <TextField
              label="Confirm Password"
              variant="outlined"
              fullWidth
              margin="normal"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
             <Box display="flex" alignItems="center" mb={1}>
              <Checkbox
                checked={agreeToTerms}
                onChange={(e) => setAgreeToTerms(e.target.checked)}
              />
              <Typography variant="body2">
                I agree to Terms of Service and Privacy Policy
              </Typography>
               </Box>
            <Button variant="contained" fullWidth type="submit">
              Sign Up
            </Button>
          </form>
          <Typography variant="body2" align="center">
            <Link href="#">Already have an account? Sign in instead</Link>
          </Typography>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SignUp;
