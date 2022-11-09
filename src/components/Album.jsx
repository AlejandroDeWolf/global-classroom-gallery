import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import pic1 from '/assets/pic1.png';
import pic2 from '/assets/pic2.png';
import pic3 from '/assets/pic3.png';

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const cards = [
    {
        title: 'Coding session',
        description: 'This is a media card. You can use this section to describe the content.',
        image: pic1,
        imageText: 'Image Text',
    },
    {
        title: 'City knowledge session',
        description: 'This is a media card. You can use this section to describe the content.',
        image: pic2,
        imageText: 'Image Text',
    },
    {
        title: 'General meeting',
        description: 'This is a media card. You can use this section to describe the content.',
        image: pic3,
        imageText: 'Image Text',
    },
    {
        title: 'Coding session',
        description: 'This is a media card. You can use this section to describe the content.',
        image: pic1,
        imageText: 'Image Text',
    },
    {
        title: 'City knowledge session',
        description: 'This is a media card. You can use this section to describe the content.',
        image: pic2,
        imageText: 'Image Text',
    },
    {
        title: 'General meeting',
        description: 'This is a media card. You can use this section to describe the content.',
        image: pic3,
        imageText: 'Image Text',
    },
];

const theme = createTheme({
    palette: {
        primary: {
            light: '#3282B8',
            main: '#0F4C75',
            dark: '#1B262C',
            contrastText: '#BBE1F1',
        }
    },
});

export default function Album() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <main>
                {/* Hero unit */}
                <Box
                    sx={{
                        pt: 8,
                        pb: 6,
                    }}
                >
                    <Container maxWidth="md">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="primary.dark"
                            gutterBottom
                        >
                            Global Classroom
                        </Typography>
                        <Typography variant="h5" align="center" color="primary.dark" paragraph>
                            Welcome to our dream city gallery. These pictures were made using the AI art generator named Midjourney.
                            Our goal was to create a story about the city of our dreams. We hope you enjoy it!
                        </Typography>
                    </Container>
                </Box>
                <Container maxWidth="xl">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card.title} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardMedia
                                        component="img"
                                        image={card.image}
                                        alt={card.imageText}
                                        height="100%"
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {card.title}
                                        </Typography>
                                        <Typography>
                                            This is a media card. You can use this section to describe the
                                            content.
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </main>
            {/* Footer */}
            <Box sx={{ p: 6 }} component="footer">
                <Typography variant="h6" align="center" gutterBottom>
                    Footer
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    Made with love by Andrea, Ian, Zienab, Marianne, Robin and Alejandro AKA Global Classroom Team 5.
                </Typography>
                <Copyright />
            </Box>
            {/* End footer */}
        </ThemeProvider>
    );
}