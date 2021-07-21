
import React from "react";
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { calcMaxHpDecrease, test } from '../calc/Calculators'
const useStyles = theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },

});

class Borderlands2Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.factories = [
            "Tediore", "Bandit", "Vladof", "Dahl", "Anshin", "Maliwan", "Torgue", "Hyperion", "Pangolin"
        ]
        this.state = {
            level: 0,
            factory: "",
            asd: 0,
        };
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        const { classes } = this.props;
        const chooseModule0 = "A3_B0_C0"
        const chooseModule1 = "A0_B2_C0"
        const chooseReality = "WHITE"
        return (
            <form className={classes.root} noValidate autoComplete="off" >
                <TextField label="asd" name="asd" placeholder="asd"
                    required={true} value={calcMaxHpDecrease(1.15,90)} onChange={e => this.handleChange(e)} />
                <TextField label="level" name="level" placeholder="level"
                    required={true} type="number" value={this.state.level} onChange={e => this.handleChange(e)} />
                <TextField label="factory" name="factory" placeholder="factory"
                    required={true} value={this.state.factory} onChange={e => this.handleChange(e)}
                    select
                > {
                        this.factories.map(element => {
                            return <MenuItem key={element} value={element} >{element}</MenuItem>
                        })
                    }</TextField>
            </form >
        );
    }
}

export default withStyles(useStyles)(Borderlands2Calculator);