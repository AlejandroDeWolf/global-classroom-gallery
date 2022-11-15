import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import dreamCity from '/assets/dream-city.mp4';
import pic1 from '/assets/image1.png';
import pic2 from '/assets/image2.png';
import pic3 from '/assets/image3.png';
import pic4 from '/assets/image4.png';
import pic5 from '/assets/image5.png';
import pic6 from '/assets/image6.png';
import pic7 from '/assets/image7.png';
import pic10 from '/assets/image10.png';
import pic11 from '/assets/image11.png';
import pic12 from '/assets/image12.png';
import pic13 from '/assets/image13.png';
import pic14 from '/assets/image14.png';
import pic15 from '/assets/image15.png';
import pic16 from '/assets/image16.png';

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
        title: 'Image 1',
        description: 'Sophia wakes up early in the morning, she has to go to her elementary school.',
        image: pic1,
        imageText: 'Image Text',
    },
    {
        title: 'Image 2',
        description: 'Today is THE special day, she enthusiastically wakes up her older sister Emily so she can go along with her on her way to school.',
        image: pic2,
        imageText: 'Image Text',
    },
    {
        title: 'Image 3',
        description: 'They walk through the neighbourhood, a couple of blocks and they arrive at their destination.',
        image: pic3,
        imageText: 'Image Text',
    },
    {
        title: 'Image 4',
        description: 'Emily waves goodbye for her sister and walks to her part-time job in a restaurant, on her way she goes through unique places.',
        image: pic4,
        imageText: 'Image Text',
    },
    {
        title: 'Image 5',
        description: 'Some places have a lot of local fauna because the place is respectful and friendly with them.',
        image: pic5,
        imageText: 'Image Text',
    },
    {
        title: 'Image 6',
        description: 'Other places have a lot of children playing outside, others have people passing by but that does not make the place less walkable.',
        image: pic6,
        imageText: 'Image Text',
    },
    {
        title: 'Image 7',
        description: 'She finally arrives at her workplace, a historic building which has been renovated with a modern restaurant on the inside, which gives the place a unique touch.',
        image: pic7,
        imageText: 'Image Text',
    },
    {
        title: 'Image 8',
        description: 'Emily meets Michael, her boss, who tells her that today it was not necessary for her to come to work considering today is THE special day. Emily still decides to stay because she loves her job.',
        image: pic10,
        imageText: 'Image Text',
    },
    {
        title: 'Image 9',
        description: 'At the end of today’s working day, Michael closes the restaurant and because today is THE special day he goes to his friend Mr James, an old man with walking disability.',
        image: pic11,
        imageText: 'Image Text',
    },
    {
        title: 'Image 10',
        description: 'To get to his destiny, Michael has to cross a river.',
        image: pic12,
        imageText: 'Image Text',
    },
    {
        title: 'Image 11',
        description: 'Despite being in the middle of the city, it is still accessible as there are many bridges that keep both sides of the city connected.',
        image: pic14,
        imageText: 'Image Text',
    },
    {
        title: 'Image 12',
        description: 'Finally Michael meets Mr. James in the city’s Great Park, a place with lots of greenery and biophilic buildings around it.',
        image: pic13,
        imageText: 'Image Text',
    },
    {
        title: 'Image 13',
        description: 'Turns out that Mr. James is the mayor of the city and has invited all of its inhabitants to celebrate the anniversary of the city.',
        image: pic15,
        imageText: 'Image Text',
    },
    {
        title: 'Image 14',
        description: 'Little Sophia, young Emily, Michael the restaurateur and the visionary Mr. James who has helped create the great city that we have been dreaming of.',
        image: pic16,
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
                            Our goal was to create a story about the city of our dreams. We hope you enjoy it. Don't forget to use the <b>media player</b> below to listen along, it makes it way more fun!
                        </Typography>
                    </Container>
                </Box>

                <AudioPlayer
                    autoPlay
                    src={dreamCity}
                />

                {/* container with margin bottom */}
                <Container maxWidth="xl" sx={{ pb: 4 }}>
                    <Typography
                        component="h1"
                        variant="h4"
                        align="left"
                        color="primary.dark"
                        gutterBottom
                    >
                        Introduction - Painting The Picture
                    </Typography>
                    <Typography variant="p" align="left" color="primary.dark" paragraph>
                        A city in which nature is present through the greenery of plants,
                        beautiful rivers that cross it, with a good climate, which also prioritizes
                        pedestrians and cyclists, allocating underground spaces for automobiles.

                        A city in which it is not necessary to travel long distances to reach your destination,
                        be it workplaces, parks or multiple shops and malls that serve your needs, simply by walking.
                    </Typography>

                    <Typography variant="p" align="left" color="primary.dark" paragraph>
                        A city and public spaces that are oriented towards people, towards children,
                        towards people with disabilities, and are animal friendly.

                        A city with urban space with great potential and a strong social fabric.
                        A city that is developing through time, yet it keeps its historical buildings,
                        creating a unique identity.
                    </Typography>

                    <Typography variant="p" align="left" color="primary.dark" paragraph>
                        Now we will see the story of these 4 different individuals that inhabit this dream city:
                        A girl named Sophia, a young lady named Emily, and man named Michael and an elderly man named Mr. James.
                    </Typography>
                </Container>
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
                                        <Typography align='left'>
                                            {card.description}
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
                    The end, we hope you enjoyed it!
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