import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { Chip, Grid, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Divider } from '@material-ui/core';
import { chooseEngineBy } from '../../misc/BigOilSelector'
const useStyles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(0.5),
        },
    },
    text: {
        margin: theme.spacing(1)
    }
});

class BigOil extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            gas: "???",
            tubeCount: "???",
            pressure: "???",
        }
    }
    handleChange(event) {
        console.debug(event.target)
        let { name, value } = event.target
        console.debug(`${name} => ${value}`)
        this.setState({
            [name]: value
        })
    }
    render() {
        const { classes } = this.props;
        const { gas, tubeCount, pressure } = this.state
        const result = chooseEngineBy(gas, tubeCount, pressure)

        return (
            <div>
                <Grid container spacing={3}>
                    <Grid item xs={6} sm={3}>
                        <FormControl component="fieldset" >
                            <FormLabel component="legend">gas</FormLabel>
                            <RadioGroup aria-label="gas" name="gas" value={this.state.gas} onChange={e => this.handleChange(e)}>
                                <FormControlLabel value="???" control={<Radio />} label="? ? ?" />
                                <FormControlLabel value="Nitrogen" control={<Radio />} label="Nitrogen" />
                                <FormControlLabel value="Deuterium" control={<Radio />} label="Deuterium" />
                                <FormControlLabel value="Helium" control={<Radio />} label="Helium" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>


                    <Grid item xs={6} sm={3}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">tube count</FormLabel>
                            <RadioGroup aria-label="tubeCount" name="tubeCount" value={this.state.tubeCount} onChange={e => this.handleChange(e)}>
                                <FormControlLabel value="???" control={<Radio />} label="? ? ?" />
                                <FormControlLabel value="H" control={<Radio />} label="H" />
                                <FormControlLabel value="2xH" control={<Radio />} label="2 × H" />
                                <FormControlLabel value="3xH" control={<Radio />} label="3 × H" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>

                    {/* <Divider orientation="vertical" flexItem /> */}
                    <Grid item xs={6} sm={3}>
                        <FormControl component="fieldset">
                            <FormLabel component="legend">pressure</FormLabel>
                            <RadioGroup aria-label="pressure" name="pressure" value={this.state.pressure} onChange={e => this.handleChange(e)}>
                                <FormControlLabel value="???" control={<Radio />} label="? ? ?" />
                                <FormControlLabel value=">=5783" control={<Radio />} label="≥ 5783" />
                                <FormControlLabel value="<=5812" control={<Radio />} label="≤ 5812" />
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider />
                    </Grid>
                    <Grid item xs={12}>
                        <div className={classes.root}>
                            {
                                result.map(engine => (
                                    <Chip
                                        size="small"
                                        label={engine}
                                        clickable
                                        color="primary"
                                    />
                                )
                                )
                            }
                        </div>
                    </Grid>
                </Grid>
            </div >
        )
    }



}

export default withStyles(useStyles)(BigOil)