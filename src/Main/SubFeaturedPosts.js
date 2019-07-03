import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
    card: {
        maxWidth: 'auto',
    },
    media: {
        height: 0,
        paddingTop: '56.25%'
    }
}));

const featuredPosts = [
    {
        title: 'Featured post1',
        date: 'Nov 16',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
        title: 'Featured post2',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
        title: 'Featured post3',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
        title: 'Featured post4',
        date: 'Nov 12',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
        title: 'Post title1',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
        title: 'Post title2',
        date: 'Nov 10',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
        title: 'Post title3',
        date: 'Nov 11',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
    {
        title: 'Post title4',
        date: 'Nov 10',
        description:
            'This is a wider card with supporting text below as a natural lead-in to additional content.',
    },
];

export default function SubFeaturedPosts() {
    const classes = useStyles();
    return (
        <Grid container spacing={4} className={classes.mainGrid}>
            {featuredPosts.map(post => (
                <Grid item key={post.title} xs={12} md={6}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.media}
                                image={"https://source.unsplash.com/random"}
                                title={post.title}
                            />
                            <CardContent>
                                <Typography gutterBottom variant={'h5'} component={'h2'}>
                                    {post.title}
                                </Typography>
                                <Typography variant={"subtitle1"} color="textSecondary">
                                    {post.date}
                                </Typography>
                                <Typography variant={"subtitle1"} color="textSecondary">
                                    {post.description}
                                </Typography>
                            </CardContent>
                        </Card>
                </Grid>
            ))}
        </Grid>
    )
}