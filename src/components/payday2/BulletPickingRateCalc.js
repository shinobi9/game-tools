import React from "react"
import { calcPickingRate } from "../../misc/BulletPickingRateCalculator"
import { TextField, Grid, Divider } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
const useStyles = theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    ul: {
        // margin: theme.spacing(1),
        listStyleType: "none",
        padding: 0,
        margin: 10,
    }
});
class BulletPickingRateCalc extends React.Component {

    constructor() {
        super()
        this.state = {
            aMin: 0,
            aMax: 300,
            bMin: 0,
            bMax: 300,
            a: 1,
            b: 2,
        }
    }
    checkA(value) {
        let { aMax, aMin } = this.state
        if (value < aMin) {
            this.setState({ a: aMin })
            return
        }
        if (value > aMax) {
            this.setState({ a: aMax })
            return
        }
        this.setState({ a: value })
    }

    checkB(value) {
        let { bMax, bMin } = this.state
        if (value < bMin) {
            this.setState({ b: bMin })
            return
        }
        if (value > bMax) {
            this.setState({ b: bMax })
            return
        }
        this.setState({ b: value })
    }


    handleChange(event) {
        console.debug(event.target)
        let { name, value } = event.target
        let checkMap = new Map([
            ["a", (value, _this) => _this.checkA(value)],
            ["b", (value, _this) => _this.checkB(value)],
        ])
        let func = checkMap.get(name)
        console.debug(func)
        if (func) {
            func(value, this)
        } else {
            this.setState({
                [name]: value
            })
        }
    }

    render() {
        const { classes } = this.props;
        let { a, b } = this.state
        let result = calcPickingRate(a, b)
        return (
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField label="捡弹率a" name="a" placeholder="捡弹率a"
                                required={true} type="number" value={a}
                                onChange={e => this.handleChange(e)} />
                            <TextField label="捡弹率b" name="b" placeholder="捡弹率b"
                                required={true} type="number" value={b}
                                onChange={e => this.handleChange(e)} />
                        </form>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider />
                    </Grid>
                    <Grid item xs={12}>
                        <div>
                            <ul className={classes.ul}>
                                {
                                    result.map(item => {
                                        return <li>{`捡 ${item.bullet} 发子弹的概率为 : ${item.rate}%`} </li>
                                    })
                                }
                            </ul>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}


export default withStyles(useStyles)(BulletPickingRateCalc)