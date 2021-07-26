import React from 'react'
import {Divider, Typography} from "@material-ui/core";
import {withStyles} from "@material-ui/core/styles";

// noinspection JSUnusedLocalSymbols
const useStyles = theme => ({
    ul: {
        // margin: theme.spacing(1),
        listStyleType: "none",
        padding: 0,
        margin: 10,
    },
    // pre: {
    //     whiteSpace: "pre-wrap",
    //     wordWrap: "break-word",
    // }
});

class SomePassword extends React.Component {
    render() {
        // eslint-disable-next-line no-unused-vars
        const {classes} = this.props;
        return (
            <div>
                <Divider/>
                <Typography variant="h4">虎口夺食</Typography>
                <Divider/>
                <pre><Typography variant="h6">1776 = 喜欢历史</Typography></pre>
                <pre><Typography variant="h6">1234 = 简单或者不说</Typography></pre>
                <pre><Typography variant="h6">2015 = 与crime.net相关</Typography></pre>
                <pre><Typography variant="h6">1212 = 老婆生日</Typography></pre>
            </div>
        )
    }
}

export default withStyles(useStyles)(SomePassword);