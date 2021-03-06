import {MenuItem, TextField, Grid, Divider} from '@material-ui/core';
import {withStyles} from '@material-ui/core/styles';
import React from "react";
import {
    calcFinalBy,
    calcModuleBy,
    calcShieldBy,
    moduleFactories,
    realityPool,
    shieldFactories
} from '../../misc/SheildAndModuleCalculator';

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

class HpCalc extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shieldLevel: 90,
            shieldLevelMin: 0,
            shieldLevelMax: 90,
            shieldAlpha: "NONE",
            shieldBeta: "NONE",
            shieldGamma: "NONE",
            shieldReality: "WHITE",

            moduleLevel: 90,
            moduleLevelMin: 0,
            moduleLevelMax: 90,
            moduleBeta: "NONE",
            moduleGamma: "NONE",

            hp: 1410475,
            bonus: 1.10,
        };
    }

    checkShieldLevel(value) {
        let {shieldLevelMin, shieldLevelMax} = this.state
        if (value < shieldLevelMin) {
            this.setState({shieldLevel: shieldLevelMin})
            return
        }
        if (value > shieldLevelMax) {
            this.setState({shieldLevel: shieldLevelMax})
            return
        }
        this.setState({shieldLevel: value})
    }

    checkModuleLevel(value) {
        let {moduleLevelMin, moduleLevelMax} = this.state
        if (value < moduleLevelMin) {
            this.setState({moduleLevel: moduleLevelMin})
            return
        }
        if (value > moduleLevelMax) {
            this.setState({moduleLevel: moduleLevelMax})
            return
        }
        this.setState({moduleLevel: value})
    }

    handleChange(event) {
        console.debug(event.target)
        let {name, value} = event.target
        let checkMap = new Map([
            ["shieldLevel", (value, _this) => _this.checkShieldLevel(value)],
            ["moduleLevel", (value, _this) => _this.checkModuleLevel(value)],
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
        const {classes} = this.props;
        let {
            shieldAlpha,
            shieldBeta,
            shieldGamma,
            shieldLevel,
            shieldReality,
            moduleBeta,
            moduleGamma,
            moduleLevel,
            hp,
            bonus
        } = this.state
        let shield = calcShieldBy(shieldAlpha, shieldBeta, shieldGamma, shieldLevel || 0, shieldReality)
        let module = calcModuleBy(moduleBeta, moduleGamma, moduleLevel || 0)
        let result = calcFinalBy(hp || 0, shield.maxHpDecrease, bonus || 1, module.maxHpIncrease)
        return (
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField label="????????????" name="shieldLevel" placeholder="????????????"
                                       required={true} type="number" value={this.state.shieldLevel}
                                       onChange={e => this.handleChange(e)}/>
                            <TextField label="??" name="shieldAlpha" placeholder="??"
                                       required={true} value={this.state.shieldAlpha}
                                       onChange={e => this.handleChange(e)}
                                       select>
                                {
                                    [...shieldFactories].map(element => {
                                        return <MenuItem key={element[0]}
                                                         value={element[0]}>{element[1].name}</MenuItem>
                                    })
                                }
                            </TextField>
                            <TextField label="??" name="shieldBeta" placeholder="??"
                                       required={true} value={this.state.shieldBeta}
                                       onChange={e => this.handleChange(e)}
                                       select>
                                {
                                    [...shieldFactories].map(element => {
                                        return <MenuItem key={element[0]}
                                                         value={element[0]}>{element[1].name}</MenuItem>
                                    })
                                }
                            </TextField>
                            <TextField label="??" name="shieldGamma" placeholder="??"
                                       required={true} value={this.state.shieldGamma}
                                       onChange={e => this.handleChange(e)}
                                       select>
                                {
                                    [...shieldFactories].map(element => {
                                        return <MenuItem key={element[0]}
                                                         value={element[0]}>{element[1].name}</MenuItem>
                                    })
                                }
                            </TextField>
                            <TextField label="?????????" name="shieldReality" placeholder="?????????"
                                       required={true} value={this.state.shieldReality}
                                       onChange={e => this.handleChange(e)}
                                       select>
                                {
                                    [...realityPool].map(element => {
                                        return <MenuItem key={element[0]}
                                                         value={element[0]}>{element[1].name}</MenuItem>
                                    })
                                }
                            </TextField>
                        </form>
                    </Grid>
                    <Grid item xs={12}>
                        <form className={classes.root} noValidate autoComplete="off">

                            <TextField label="????????????" name="moduleLevel" placeholder="????????????"
                                       required={true} type="number" value={this.state.moduleLevel}
                                       onChange={e => this.handleChange(e)}/>

                            <TextField label="??" name="moduleBeta" placeholder="??"
                                       required={true} value={this.state.moduleBeta}
                                       onChange={e => this.handleChange(e)}
                                       select>
                                {
                                    [...moduleFactories.beta].map(element => {
                                        return <MenuItem key={element[0]}
                                                         value={element[0]}>{element[1].name}</MenuItem>
                                    })
                                }
                            </TextField>

                            <TextField label="??" name="moduleGamma" placeholder="??"
                                       required={true} value={this.state.moduleGamma}
                                       onChange={e => this.handleChange(e)}
                                       select>
                                {
                                    [...moduleFactories.gamma].map(element => {
                                        return <MenuItem key={element[0]}
                                                         value={element[0]}>{element[1].name}</MenuItem>
                                    })
                                }
                            </TextField>
                        </form>
                    </Grid>
                    <Grid item xs={12}>
                        <form className={classes.root} noValidate autoComplete="off">
                            <TextField label="???????????????" name="hp" placeholder="???????????????"
                                       required={true} type="number" value={this.state.hp}
                                       onChange={e => this.handleChange(e)}/>
                            <TextField label="????????????" name="bonus" placeholder="????????????"
                                       required={true} type="number" value={this.state.bonus}
                                       onChange={e => this.handleChange(e)}/>
                        </form>
                    </Grid>
                    <Grid item xs={12}>
                        <Divider/>
                    </Grid>
                    <Grid item xs={12}>
                        <div>
                            <ul className={classes.ul}>
                                <li>{`????????????: ${shield.capacity}`} </li>
                                <li>{`????????????: ${shield.speed}`} </li>
                                <li>{`????????????: ${shield.delay}`} </li>
                                <li>{`??????????????????: ${shield.maxHpDecrease}`} </li>
                            </ul>
                            <ul className={classes.ul}>
                                <li>{`????????????: ${module.maxHpIncrease}`} </li>
                                <li>{`????????????: ${module.recovery}`} </li>

                            </ul>
                            <ul className={classes.ul}>
                                <li>{`????????????: ${result}`} </li>
                            </ul>
                        </div>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(useStyles)(HpCalc);