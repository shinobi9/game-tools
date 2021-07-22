
import React from "react";
import { withStyles } from '@material-ui/core/styles';
import { TextField, MenuItem } from '@material-ui/core';
import { calcShieldBy, calcModuleBy, calcFinalBy, shieldFactories, moduleFactories, realityPool } from '../calc/Calculators'
const useStyles = theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    text: {
        margin: theme.spacing(1)
    }
});

class Borderlands2Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shieldLevel: 90,
            shieldAlpha: "NONE",
            shieldBeta: "NONE",
            shieldGamma: "NONE",
            shieldReality: "WHITE",

            moduleLevel: 90,
            moduleBeta: "NONE",
            moduleGamma: "NONE",

            hp: 1410475,
            bonus: 1.10,
        };
    }
    handleChange(event) {
        console.debug(event.target)
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        const { classes } = this.props;
        let shield = calcShieldBy(this.state.shieldAlpha, this.state.shieldBeta, this.state.shieldGamma, this.state.shieldLevel || 0, this.state.shieldReality)
        let module = calcModuleBy(this.state.moduleBeta, this.state.moduleGamma, this.state.moduleLevel || 0)
        let result = calcFinalBy(this.state.hp || 0, shield.maxHpDecrease, this.state.bonus || 1, module.maxHpIncrease)
        return (
            <div>
                <form className={classes.root} noValidate autoComplete="off" >
                    <TextField label="护盾等级" name="shieldLevel" placeholder="护盾等级"
                        required={true} type="number" value={this.state.shieldLevel} onChange={e => this.handleChange(e)} />
                    <TextField label="α" name="shieldAlpha" placeholder="α"
                        required={true} value={this.state.shieldAlpha} onChange={e => this.handleChange(e)}
                        select >
                        {
                            [...shieldFactories].map(element => {
                                return <MenuItem key={element[0]} value={element[0]} >{element[1].name}</MenuItem>
                            })
                        }
                    </TextField>
                    <TextField label="β" name="shieldBeta" placeholder="β"
                        required={true} value={this.state.shieldBeta} onChange={e => this.handleChange(e)}
                        select >
                        {
                            [...shieldFactories].map(element => {
                                return <MenuItem key={element[0]} value={element[0]} >{element[1].name}</MenuItem>
                            })
                        }
                    </TextField>
                    <TextField label="γ" name="shieldGamma" placeholder="γ"
                        required={true} value={this.state.shieldGamma} onChange={e => this.handleChange(e)}
                        select >
                        {
                            [...shieldFactories].map(element => {
                                return <MenuItem key={element[0]} value={element[0]} >{element[1].name}</MenuItem>
                            })
                        }
                    </TextField>
                    <TextField label="稀有度" name="shieldReality" placeholder="稀有度"
                        required={true} value={this.state.shieldReality} onChange={e => this.handleChange(e)}
                        select >
                        {
                            [...realityPool].map(element => {
                                return <MenuItem key={element[0]} value={element[0]} >{element[1].name}</MenuItem>
                            })
                        }
                    </TextField>
                </form >
                <form className={classes.root} noValidate autoComplete="off" >

                    <TextField label="模组等级" name="moduleLevel" placeholder="模组等级"
                        required={true} type="number" value={this.state.moduleLevel} onChange={e => this.handleChange(e)} />

                    <TextField label="β" name="moduleBeta" placeholder="β"
                        required={true} value={this.state.moduleBeta} onChange={e => this.handleChange(e)}
                        select >
                        {
                            [...moduleFactories.beta].map(element => {
                                return <MenuItem key={element[0]} value={element[0]} >{element[1].name}</MenuItem>
                            })
                        }
                    </TextField>

                    <TextField label="γ" name="moduleGamma" placeholder="γ"
                        required={true} value={this.state.moduleGamma} onChange={e => this.handleChange(e)}
                        select >
                        {
                            [...moduleFactories.gamma].map(element => {
                                return <MenuItem key={element[0]} value={element[0]} >{element[1].name}</MenuItem>
                            })
                        }
                    </TextField>
                </form >
                <form className={classes.root} noValidate autoComplete="off" >
                    <TextField label="最大生命值" name="hp" placeholder="最大生命值"
                        required={true} type="number" value={this.state.hp} onChange={e => this.handleChange(e)} />
                    <TextField label="技能加成" name="bonus" placeholder="技能加成"
                        required={true} type="number" value={this.state.bonus} onChange={e => this.handleChange(e)} />
                </form>

                <ul className={classes.text}>
                    <li>{`护盾容量: ${shield.capacity}`} </li>
                    <li>{`充能速率: ${shield.speed}`} </li>
                    <li>{`充能延迟: ${shield.delay}`} </li>
                    <li>{`扣最大生命值: ${shield.maxHpDecrease}`} </li>
                </ul>
                <ul className={classes.text}>
                    <li>{`护盾容量: ${module.maxHpIncrease}`} </li>
                    <li>{`充能速率: ${module.recovery}`} </li>
                </ul>
                <ul className={classes.text}>
                    <li>{`最终血量: ${result}`} </li>
                </ul>
            </div>
        );
    }
}

export default withStyles(useStyles)(Borderlands2Calculator);