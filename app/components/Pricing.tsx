import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';

// function Copyright(props: any) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }
// const footers = [
//   {
//     title: 'Company',
//     description: ['Team', 'History', 'Contact us', 'Locations'],
//   },
//   {
//     title: 'Features',
//     description: [
//       'Cool stuff',
//       'Random feature',
//       'Team feature',
//       'Developer stuff',
//       'Another one',
//     ],
//   },
//   {
//     title: 'Resources',
//     description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
//   },
//   {
//     title: 'Legal',
//     description: ['Privacy policy', 'Terms of use'],
//   },
// ];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Pricing({  }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      {/* <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Arial',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Project Expense Tracking Software
            </Typography>
  
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                flexGrow: 1,
              }}
            > */}
              {/* {pages.map((page) => (
                <Link href="/Dashboard" key={page.label}>
                  <IconButton
                    key={page.label}
                    onClick={() => console.log(`Clicked ${page.label}`)}
                    sx={{ color: 'purple' }} // Set icon color to black
                  >
                    {page.icon}
                  </IconButton>
                </Link>
              ))} */}
            {/* <h1></h1>
            <h2>Ashik</h2>
            <Avatar alt="Corpse" src="/corpse-logo.jpg" />
            </Box>
          </Toolbar>
      </AppBar> */}
      {/* Hero unit */}
      {/* <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Pricing
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          Quickly build an effective pricing table for your potential customers with
          this layout. It&apos;s built with default MUI components with little
          customization.
        </Typography>
      </Container> */}
      {/* End hero unit */}
      {/* <Container maxWidth="md" component="main">

        <Grid container spacing={2} sx={{ margin: '0 -8px' }}>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ minWidth: 180 }} className='bg-emerald-100 text-white'> 
                <CardContent>
                  <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                    Current Balance
                  </Typography>
                  <Typography sx={{ mb: 1.5, fontSize: 22 }} color="text.secondary">
                    ${total > 0 ? `+${total}` : total}
                  </Typography>
                  <Typography variant="body2" style={{ fontSize: 'larger', color: 'green' }}>
                    32%
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ minWidth: 180 }} className='bg-rose-100 '>
                <CardContent>
                  <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                    Total Income
                  </Typography>
                  <Typography sx={{ mb: 1.5,  fontSize: 22}} color="text.secondary">
                    ${incomeTotal}
                  </Typography>
                  <Typography variant="body2" style={{ fontSize: 'larger', color: 'green' }}>
                    18%
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card sx={{ minWidth: 180 }} className='bg-blue-100'>
                <CardContent>
                  <Typography sx={{ fontSize: 18 }} color="text.secondary" gutterBottom>
                    Total Expense
                  </Typography>
                  <Typography sx={{ mb: 1.5,  fontSize: 22}} color="text.secondary">
                    ${expenseTotal}
                  </Typography>
                  <Typography variant="body2" style={{ fontSize: 'larger', color: 'red' }}>
                    21%
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
        </Grid>
      
      </Container> */}
      {/* Footer */}
      {/* <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="text.secondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Container> */}
      {/* End footer */}
    </ThemeProvider>
  );
}