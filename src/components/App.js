import {
    Switch,
    Route
} from "react-router-dom";

import Welcome from './Welcome'
import HpCalc from './borderlands2/HpCalc'
import BigOil from './payday2/BigOil'
import {actuallyAddons, village, Viewer} from './minecraft/MinecraftPictures'
import {HashRouter as Router} from "react-router-dom";
import SomePassword from './payday2/SomePassword'
import BulletPickingRateCalc from './payday2/BulletPickingRateCalc'

export default function App() {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Welcome>
                        <Switch>
                            <Route path="/borderlands2/calculator" component={() => <HpCalc/>}/>
                            <Route path="/payday2/bigoil" component={() => <BigOil/>}/>
                            <Route path="/payday2/somepassword" component={() => <SomePassword/>}/>
                            <Route path="/payday2/bullet-picking-rate-calculator" component={() => <BulletPickingRateCalc/>}/>
                            <Route path="/minecraft/village" component={() => <Viewer images={village}/>}/>
                            <Route path="/minecraft/actuallyaddons"
                                   component={() => <Viewer images={actuallyAddons}/>}/>
                        </Switch>
                    </Welcome>
                </Route>
            </Switch>
        </Router>
    )
}