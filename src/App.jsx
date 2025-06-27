import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Box,
  IconButton,
  Paper,
  ThemeProvider,
  createTheme,
  CssBaseline,
} from '@mui/material';
import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from 'react-router-dom';
import Login from './components/Login';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function HomePage() {
  const [elevated, setElevated] = useState(false);

  const cards = [
    {
      id: 1,
      title: 'Web Development',
      description: 'Learn modern web development techniques and frameworks.',
      image: 'https://fakeimg.pl/300/',
    },
    {
      id: 2,
      title: 'UI Design',
      description: 'Master user interface design principles and tools.',
      image: 'https://fakeimg.pl/300/',
    },
    {
      id: 3,
      title: 'Mobile Apps',
      description: 'Build cross-platform mobile applications.',
      image: 'https://fakeimg.pl/300/',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Paper
        sx={{
          position: 'relative',
          backgroundColor: 'grey.800',
          color: '#fff',
          mb: 4,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: 'url(https://source.unsplash.com/random/1600x900/?technology)',
          height: '400px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Container maxWidth='md'>
          <Box sx={{ p: 4 }}>
            <Typography component='h1' variant='h2' color='inherit' gutterBottom>
              Welcome to My Website
            </Typography>
            <Typography variant='h5' color='inherit' paragraph>
              A beautiful website built with React and Material UI
            </Typography>
            <Button variant='contained' size='large'>
              Learn More
            </Button>
          </Box>
        </Container>
      </Paper>

      {/* Main Content */}
      <Container sx={{ py: 8 }} maxWidth='lg'>
        <Typography variant='h4' component='h2' gutterBottom align='center'>
          Our Services
        </Typography>
        <Grid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card.id} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s',
                  '&:hover': { transform: 'scale(1.03)' },
                }}
                onMouseEnter={() => setElevated(true)}
                onMouseLeave={() => setElevated(false)}
                elevation={elevated ? 8 : 2}
              >
                <CardMedia component='img' height='200' image={card.image} alt={card.title} />
                <CardContent sx={{ flexGrow: 1 }}>
                  <Typography gutterBottom variant='h5' component='h2'>
                    {card.title}
                  </Typography>
                  <Typography>{card.description}</Typography>
                </CardContent>
                <CardActions>
                  <Button size='small'>View</Button>
                  <Button size='small'>Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div>
          {/* Navigation Bar */}
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
                My Website
              </Typography>
              <Button color='inherit' component={RouterLink} to='/'>
                Home
              </Button>
              <Button color='inherit' component={RouterLink} to='/about'>
                About
              </Button>
              <Button color='inherit' component={RouterLink} to='/services'>
                Services
              </Button>
              <Button color='inherit' component={RouterLink} to='/login'>
                Contact
              </Button>
            </Toolbar>
          </AppBar>

          {/* Routes */}
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/login' element={<Login />} />
            <Route
              path='/about'
              element={
                <div>
                  <Container sx={{ mt: 4 }}>
                    <Typography variant='h4'>About Page</Typography>
                  </Container>
                </div>
              }
            />
            <Route
              path='/services'
              element={
                <div>
                  <Container sx={{ mt: 4 }}>
                    <Typography variant='h4'>Services Page</Typography>
                  </Container>
                </div>
              }
            />
          </Routes>

          {/* Footer */}
          <Box sx={{ bgcolor: 'background.paper', p: 6, mt: 4 }} component='footer'>
            <Typography variant='h6' align='center' gutterBottom>
              My Website
            </Typography>
            <Typography variant='subtitle1' align='center' color='text.secondary' component='p'>
              Created with Youssef Yasser Mahmoud
            </Typography>
            <Typography variant='body2' color='text.secondary' align='center'>
              {'© '}
              {new Date().getFullYear()}
              {' My Company. All rights reserved.'}
            </Typography>
          </Box>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
