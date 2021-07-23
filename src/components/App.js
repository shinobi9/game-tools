import {
    Switch,
    Route
} from "react-router-dom";

import Welcome from './Welcome'
import Borderlands2Calculator from './Borderlands2Calculator'

export default function App() {
    return (
        <Switch>
            <Route path="/">
                <Welcome>
                    <Switch>
                        <Route path="/borderlands2/calculator">
                            <Borderlands2Calculator />
                        </Route>
                    </Switch>
                </Welcome>
            </Route>
        </Switch>
    )
}