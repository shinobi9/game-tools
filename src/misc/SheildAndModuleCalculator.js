import * as math from 'mathjs'


const HUNDRED = 100
const PER_LEVEL_HP_BONUS = 1.13
const SPEED_POWER = 10.24
const DELAY_POWER = 3.5
const MAX_HP_DECREASE_POWER = 32
const CAPACITY_POWER = 64
const MAX_HP_INCREASE_POWER = 16
const RECOVERY_POWER = 0.5
const TEN_THOUSAND = 10000
const CAPACITY_OFFSET = 7500
const MAX_LEVEL = 90

/**
 * 单位： ‱
 * maxHpIncrease 最大生命值增幅
 */
class ModuleBeta {
    constructor(name, maxHpIncrease) {
        this.name = name;
        this.maxHpIncrease = maxHpIncrease;
    }
}

/**
 * 单位： ‱
 * recovery 恢复速度增幅
 */
class ModuleGamma {
    constructor(name, recovery) {
        this.name = name;
        this.recovery = recovery;
    }
}

/**
 * 单位 ：‱
 * name
 * capacity 盾容增幅
 * speed 充能速率增幅
 * delay 充能延迟增幅
 * maxHpDecrease 血上限降低增幅
 */
class RealityType {
    constructor(name, capacity, speed, delay, maxHpDecrease) {
        this.name = name;
        this.capacity = capacity;
        this.speed = speed;
        this.delay = delay;
        this.maxHpDecrease = maxHpDecrease;
    }
}

/**
 * 单位 ：‱
 * capacity 盾容增幅
 * speed 充能速率增幅
 * delay 充能延迟增幅
 * maxHpDecrease 血上限降低增幅
 */
class ShieldFactory {
    constructor(name, capacity, speed, delay, maxHpDecrease) {
        this.name = name;
        this.capacity = capacity;
        this.speed = speed;
        this.delay = delay;
        this.maxHpDecrease = maxHpDecrease;
    }
}


const shieldFactories = new Map([
    ["NONE", new ShieldFactory("None", 0, 0, 0, 0)],
    ["TEDIORE", new ShieldFactory("Tediore", -1200, 1200, -1600, -225)],
    ["BANDIT", new ShieldFactory("Bandit", 300, 2400, 800, 1350)],
    ["VLADOF", new ShieldFactory("Vladof", -300, 900, 400, 0)],
    ["DAHL", new ShieldFactory("Dahl", -600, -300, -2800, 225)],
    ["ANSHIN", new ShieldFactory("Anshin", 1500, -2400, 2800, -450)],
    ["MALIWAN", new ShieldFactory("Maliwan", -1500, 300, 0, -1800)],
    ["TORGUE", new ShieldFactory("Torgue", 900, 600, 800, 1125)],
    ["HYPERION", new ShieldFactory("Hyperion", -1200, -600, -3200, -675)],
    ["PANGOLIN", new ShieldFactory("Pangolin", 2400, -2100, 3200, 675)],
])


const moduleFactories = {
    beta: new Map(
        [
            ["NONE", new ModuleBeta("None", 0)],
            ["A0_B0_C0", new ModuleBeta("A0_B0_C0", 0)],
            ["A1_B0_C0", new ModuleBeta("A1_B0_C0", 5)],
            ["A2_B0_C0", new ModuleBeta("A2_B0_C0", 10)],
            ["A3_B0_C0", new ModuleBeta("A3_B0_C0", 15)],
            ["A4_B0_C0", new ModuleBeta("A4_B0_C0", 20)],
            ["A5_B0_C0", new ModuleBeta("A5_B0_C0", 25)],
        ]
    ),
    gamma: new Map(
        [
            ["NONE", new ModuleGamma("None", 0)],
            ["A0_B0_C0", new ModuleGamma("A0_B0_C0", 0)],
            ["A0_B1_C0", new ModuleGamma("A0_B1_C0", 1)],
            ["A0_B2_C0", new ModuleGamma("A0_B2_C0", 2)],
            ["A0_B3_C0", new ModuleGamma("A0_B3_C0", 3)],
            ["A0_B4_C0", new ModuleGamma("A0_B4_C0", 4)],
            ["A0_B5_C0", new ModuleGamma("A0_B5_C0", 5)],
        ]
    )
}

const realityPool = new Map([
    ["WHITE", new RealityType("白色", 0, 0, 0, 0)],
    ["GREEN", new RealityType("绿色", 1200, 0, 0, -1350)],
    ["BLUE", new RealityType("蓝色", 2400, 0, 0, -2700)],
    ["PURPLE", new RealityType("紫色", 3600, 0, 0, -4050)],
])

/**
 *
 * @param {int} rateMaxHp
 * @param {int} shieldLevel
 * @returns
 */

function calcMaxHpDecrease(rateMaxHp, shieldLevel) {
    return math.chain(rateMaxHp).divide(TEN_THOUSAND).add(1)
        .multiply(MAX_HP_DECREASE_POWER)
        .multiply(math.pow(PER_LEVEL_HP_BONUS, shieldLevel))
        .done()
}


/**
 *
 * @param {int} rateCapacity
 * @param {int} shieldLevel
 */
function calcCapacity(rateCapacity, shieldLevel) {
    return math.chain(rateCapacity).divide(TEN_THOUSAND).add(1)
        .multiply(CAPACITY_POWER)
        .multiply(math.pow(PER_LEVEL_HP_BONUS, shieldLevel))
        .done()
}

/**
 *
 * @param {int} rateSpeed
 * @param {int} shieldLevel
 * @returns
 */
function calcSpeed(rateSpeed, shieldLevel) {
    let speedResult = math.divide(rateSpeed, TEN_THOUSAND)
    if (speedResult >= 0) {
        speedResult = math.chain(SPEED_POWER).multiply(math.pow(PER_LEVEL_HP_BONUS, shieldLevel)).multiply(math.add(speedResult, 1)).done()
    } else {
        speedResult = math.chain(SPEED_POWER).multiply(math.pow(PER_LEVEL_HP_BONUS, shieldLevel)).divide(math.add(math.abs(speedResult), 1)).done()
    }
    return speedResult;
}

/**
 *
 * @param {int} rateDelay
 * @returns
 */
function calcDelay(rateDelay) {
    let delayResult = math.divide(rateDelay, TEN_THOUSAND)
    if (delayResult >= 0) {
        delayResult = math.multiply(DELAY_POWER, math.add(delayResult, 1))
    } else {
        delayResult = math.add(math.abs(delayResult), 1)
    }
    return delayResult;
}

/**
 *
 * @param {int} rateMaxHpIncrease
 * @param {int} moduleLevel
 * @returns
 */
function calcMaxHpIncrease(rateMaxHpIncrease, moduleLevel) {
    return math.chain(rateMaxHpIncrease).divide(HUNDRED).add(1)
        .multiply(MAX_HP_INCREASE_POWER)
        .multiply(math.pow(PER_LEVEL_HP_BONUS, moduleLevel))
        .done()
}

/**
 *
 * @param {int} rateRecovery
 * @param {int} moduleLevel
 * @returns
 */
function calcRecovery(rateRecovery, moduleLevel) {
    return math.chain(rateRecovery).divide(HUNDRED).add(1)
        .multiply(RECOVERY_POWER)
        .multiply(math.pow(PER_LEVEL_HP_BONUS, moduleLevel))
        .done()
}

/**
 *
 * @param {number} hp
 * @param {number} maxHpDecrease
 * @param {number} bonus
 * @param {number} maxHpIncrease
 * @returns
 */
function calcFinal(hp, maxHpDecrease, bonus, maxHpIncrease) {
    return math.chain(hp).subtract(maxHpDecrease).multiply(bonus).add(maxHpIncrease).done()
}

/**
 *
 * @param {string} alpha
 * @param {string} beta
 * @param {string} gamma
 * @param {string} reality
 */
function rateCapacityBy(alpha, beta, gamma, reality) {
    return shieldFactories.get(alpha).capacity + shieldFactories.get(beta).capacity + shieldFactories.get(gamma).capacity + realityPool.get(reality).capacity + CAPACITY_OFFSET
}


/**
 *
 * @param {string} alpha
 * @param {string} beta
 * @param {string} gamma
 * @param {string} reality
 */
function rateSpeedBy(alpha, beta, gamma, reality) {
    return shieldFactories.get(alpha).speed + shieldFactories.get(beta).speed + shieldFactories.get(gamma).speed + realityPool.get(reality).speed
}


/**
 *
 * @param {string} alpha
 * @param {string} beta
 * @param {string} gamma
 */
function rateDelayBy(alpha, beta, gamma) {
    return shieldFactories.get(alpha).delay + shieldFactories.get(beta).delay + shieldFactories.get(gamma).delay
}


/**
 *
 * @param {string} alpha
 * @param {string} beta
 * @param {string} gamma
 * @param {string} reality
 */
function maxHpDecreaseBy(alpha, beta, gamma, reality) {
    return shieldFactories.get(alpha).maxHpDecrease + shieldFactories.get(beta).maxHpDecrease + shieldFactories.get(gamma).maxHpDecrease + realityPool.get(reality).maxHpDecrease
}

/**
 *
 * @param {string} gamma
 */
function rateRecoveryBy(gamma) {
    return moduleFactories.gamma.get(gamma).recovery
}

/**
 *
 * @param {string} beta
 */
function rateMaxHpIncreaseBy(beta) {
    return moduleFactories.beta.get(beta).maxHpIncrease
}


/**
 *
 * @param {string} alpha
 * @param {string} beta
 * @param {string} gamma
 * @param {int} shieldLevel
 * @param {string} reality
 */
function calcShieldBy(alpha, beta, gamma, shieldLevel, reality) {
    let rateCapacity = rateCapacityBy(alpha, beta, gamma, reality)
    let rateSpeed = rateSpeedBy(alpha, beta, gamma, reality)
    let rateDelay = rateDelayBy(alpha, beta, gamma)
    let rateMaxHp = maxHpDecreaseBy(alpha, beta, gamma, reality)
    return {
        // capacity: calcCapacity(rateCapacity, shieldLevel),
        capacity: format(calcCapacity(rateCapacity, shieldLevel), 0),
        speed: format(calcSpeed(rateSpeed, shieldLevel), 0),
        delay: format(calcDelay(rateDelay)),
        maxHpDecrease: format(calcMaxHpDecrease(rateMaxHp, shieldLevel), 0),
    }
}

/**
 *
 * @param {string} beta
 * @param {string} gamma
 * @param {int} moduleLevel
 */
function calcModuleBy(beta, gamma, moduleLevel) {
    let rateMaxHpIncrease = rateMaxHpIncreaseBy(beta)
    let rateRecovery = rateRecoveryBy(gamma)
    return {
        maxHpIncrease: format(calcMaxHpIncrease(rateMaxHpIncrease, moduleLevel), 0),
        recovery: format(calcRecovery(rateRecovery, moduleLevel), 0),
    }
}

function calcFinalBy(hp, maxHpDecrease, bonus, maxHpIncrease) {
    return format(calcFinal(hp, maxHpDecrease, bonus, maxHpIncrease), 0)
}


function format(result, decimal = 2) {
    // let format = math.format(result, { notation: "fixed", precision: 16 })
    return math.round(result, decimal)
}


function calcEachCombination(hp, bonus, limit = 3000) {
    let results = new Set()
    for (let a = 0; a < shieldFactories.size; a++) {
        for (let b = 0; b < shieldFactories.size; b++) {
            for (let c = 0; c < shieldFactories.size; c++) {
                let result = math.pow(10, a) + math.pow(10, b) + math.pow(10, c)
                results.add(result)
            }
        }
    }
    console.debug(results)
    console.debug(results.size)
    console.debug(Array.from(shieldFactories.values())[0])

    let mapped = []

    for (let result of results) {
        let factories = [] // [0,0,0]
        // console.debug(result)
        for (let i = 0; i < shieldFactories.size; i++) {
            // noinspection JSUnfilteredForInLoop
            let current = math.chain(result).divide(math.pow(10, i)).mod(10).done()
            while (current >= 1) {
                current = current - 1
                factories.push(i)
            }
        }
        let arr = Array.from(shieldFactories.values())
        console.debug("factories:", factories)
        let alpha = arr[factories[0]]
        console.debug("alpha:", alpha)
        let beta = arr[factories[1]]
        let gamma = arr[factories[2]]
        mapped.push([alpha, beta, gamma])
    }


    let total = 0
    // console.debug(factories)
    for (let reality of realityPool.values()) {
        // reality  1/4
        for (let betaModuleFactory of moduleFactories.beta.values()) {
            // 1/7
            for (let shieldLevel = MAX_LEVEL; shieldLevel > 0; shieldLevel--) {
                // 1/90
                // shieldLevel
                for (let moduleLevel = MAX_LEVEL; moduleLevel > 0; moduleLevel--) {
                    //1/90
                    //moduleLevel
                    for (const map of mapped) {
                        // 1/220
                        /*console.debug(`
                        ${shieldLevel}, ${moduleLevel}, ${JSON.stringify(alpha)}, ${JSON.stringify(alpha)}, ${JSON.stringify(alpha)}, ${JSON.stringify(reality)}, ${JSON.stringify(betaModuleFactory)}, ${hp}, ${bonus}, ${limit}
                        `)*/
                        let [alpha, beta, gamma] = map
                        let hpResult = doForEach(shieldLevel, moduleLevel, alpha, beta, gamma, reality, betaModuleFactory, hp, bonus, limit)
                        console.debug(hpResult)
                        total++
                    }
                }
            }
        }

    }
    console.debug("total:", total)
}

function doForEach(shieldLevel, moduleLevel, alpha, beta, gamma, reality, betaModuleFactory, hpMax, bonus, limit) {

    let rateMaxHp = alpha.maxHpDecrease +
        beta.maxHpDecrease +
        gamma.maxHpDecrease +
        reality.maxHpDecrease

    let maxHpDecreaseResult = calcMaxHpDecrease(rateMaxHp, shieldLevel)
    let maxHpIncreaseResult = calcMaxHpIncrease(betaModuleFactory.maxHpIncrease, moduleLevel)
    let result = calcFinalBy(hpMax, maxHpDecreaseResult, bonus, maxHpIncreaseResult)
    if (4 <= result && result <= limit) {
        console.debug(result)
        return {
            shieldLevel: shieldLevel,
            moduleLevel: moduleLevel,
            alpha: alpha,
            beta: beta,
            gamma: gamma,
            reality: reality,
            betaModuleFactory: betaModuleFactory,
            hpMax: hpMax,
            bonus: bonus,
            result: bonus
        }
    }
}

function calcEachCombinationAsync(hp, bonus, limit = 3000) {
    setTimeout(() => calcEachCombination(hp, bonus, limit = 3000), 0)
}


export {
    calcShieldBy,
    calcModuleBy,
    calcFinalBy,
    shieldFactories,
    moduleFactories,
    realityPool,
}
