const gasPool = ["???", "Nitrogen", "Deuterium", "Helium"]
const tubeCountPool = ["???", "H", "2xH", "3xH"] // 0 => don't know tube count
const pressurePool = ["???", ">=5783", "<=5812"]
const engines = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const gasRulePool = new Map([
    [0, []],
    [1, [2, 3, 5, 6, 7, 9, 10, 12]],
    [2, [1, 3, 4, 6, 7, 8, 10, 11]],
    [3, [1, 2, 4, 5, 8, 9, 11, 12]]
])

const tubeCountRulePool = new Map([
    [0, []],
    [1, [3, 4, 5, 6, 7, 8, 9, 10, 11, 12]],
    [2, [1, 2, 7, 8, 9, 10, 11, 12]],
    [3, [1, 2, 3, 4, 5, 6]]
])

const pressureRulePool = new Map([
    [0, []],
    [1, [1, 5, 7, 8, 9]],
    [2, [2, 6, 11, 12]]
])

const errorEngines = [3, 4, 10]

function chooseEngineBy(gas, tubeCount, pressure) {
    let gasExclude = gasRulePool.get(gasPool.indexOf(gas))
    let tubeCountExclude = tubeCountRulePool.get(tubeCountPool.indexOf(tubeCount))
    let pressureExclude = pressureRulePool.get(pressurePool.indexOf(pressure))

    let exlude = Array.from(new Set(gasExclude.concat(tubeCountExclude).concat(pressureExclude)))
    let result = engines.filter(engine => !exlude.includes(engine))
    return result.filter(res => !errorEngines.includes(res))
}

export { chooseEngineBy }
// console.log(chooseEngineBy("Deuterium", "3xH", ">=5783"))