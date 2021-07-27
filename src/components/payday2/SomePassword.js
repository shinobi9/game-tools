import React from 'react'
import { Divider, Typography, Card, CardActionArea, CardMedia, Grid } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const position = {
    url: "https://cdn.jsdelivr.net/gh/shinobi9/cdn/gametools/payday2/position.jpg",
    title: "站位"
}
const floor = {
    url: "https://cdn.jsdelivr.net/gh/shinobi9/cdn/gametools/payday2/floor.jpg",
    title: "地砖"
}
// noinspection JSUnusedLocalSymbols
const useStyles = theme => ({
    ul: {
        // margin: theme.spacing(1),
        listStyleType: "none",
        padding: 0,
        margin: 10,
    },
    root: {
        margin: 20,
        maxWidth: 400,
    },
    // pre: {
    //     whiteSpace: "pre-wrap",
    //     wordWrap: "break-word",
    // }
});

class SomePassword extends React.Component {
    render() {
        // eslint-disable-next-line no-unused-vars
        const { classes } = this.props;
        return (
            <div>
                <Divider />
                <Typography variant="h4">虎口夺食</Typography>
                <Divider />
                <pre><Typography variant="h6">1776 = 喜欢历史</Typography></pre>
                <pre><Typography variant="h6">1234 = 简单或者不说</Typography></pre>
                <pre><Typography variant="h6">2015 = 与crime.net相关</Typography></pre>
                <pre><Typography variant="h6">1212 = 老婆生日</Typography></pre>
                <Divider />
                <Typography variant="h4">隐藏金库</Typography>
                <Divider />

                <Grid container>

                    <Grid key={1} item xs={6} sm={3}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image={floor.url}
                                    title={floor.title}
                                    alt={floor.title}
                                    height="740"
                                />
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid key={2} xs={6} sm={3}>
                        <Card className={classes.root}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image={position.url}
                                    title={position.title}
                                    alt={position.title}
                                    height="235"
                                />
                            </CardActionArea>

                        </Card>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

export default withStyles(useStyles)(SomePassword);