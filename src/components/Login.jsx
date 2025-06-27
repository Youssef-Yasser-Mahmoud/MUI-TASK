import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Avatar,
  Grid,
  Link,
  Checkbox,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormLabel,
  FormControl,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false,
    gender: 'male', // Default value
    comments: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'rememberMe' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login data:', formData);
    navigate('/');
  };

  return (
    <Container component='main' maxWidth='xs'>
      <Paper
        elevation={6}
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 4,
          borderRadius: 2,
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}></Avatar>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1, width: '100%' }}>
          <TextField
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='email'
            autoFocus
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
            value={formData.password}
            onChange={handleChange}
          />

          {/* Gender Selection */}
          <FormControl component='fieldset' sx={{ mt: 2, width: '100%' }}>
            <FormLabel component='legend'>Gender</FormLabel>
            <RadioGroup row name='gender' value={formData.gender} onChange={handleChange}>
              <FormControlLabel value='male' control={<Radio />} label='Male' />
              <FormControlLabel value='female' control={<Radio />} label='Female' />
            </RadioGroup>
          </FormControl>

          {/* Comments Text Area */}
          <TextField
            margin='normal'
            fullWidth
            name='comments'
            label='Additional Comments'
            multiline
            rows={4}
            value={formData.comments}
            onChange={handleChange}
          />

          <FormControlLabel
            control={
              <Checkbox name='rememberMe' color='primary' checked={formData.rememberMe} onChange={handleChange} />
            }
            label='Remember me'
          />
          <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href='#' variant='body2'>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href='#' variant='body2'>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
}

export default Login;
