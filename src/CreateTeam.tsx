import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
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

const CreateTeamPage: React.FC = () => {
  const [teamName, setTeamName] = useState('');

  const handleCreateTeam = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Implement your create team logic here
    console.log('Team Name:', teamName);
    // Reset field after creating team
    setTeamName('');
  };

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="xs">
        <Box mt={5} sx={{ backgroundColor: 'white', padding: '20px' }}>
          <Typography variant="h4" align="left" fontSize="24px">Create Team</Typography>
          <Typography variant="body1" align="left">Get everyone working in one place</Typography>
          <form onSubmit={handleCreateTeam}>
            <TextField
              label="Team name"
              variant="outlined"
              fullWidth
              margin="normal"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
            />
            <Button variant="contained" color="primary" fullWidth type="submit">
              Create
            </Button>
          </form>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default CreateTeamPage;
