import {
    Switch,
    Route
} from "react-router-dom";

import Welcome from './Welcome'
import Calculator from './borderlands2/Calculator'
import BigOil from './payday2/BigOil'

export default function App() {
    return (
        <Switch>
            <Route path="/">
                <Welcome>
                    <Switch>
                        <Route path="/borderlands2/calculator">
                            <Calculator />
                        </Route>
                        <Route path="/payday2/bigoil">
                            <BigOil />
                        </Route>
                    </Switch>
                </Welcome>
            </Route>
        </Switch>
    )
}