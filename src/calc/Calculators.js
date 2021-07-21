import * as math from 'mathjs'
/**
 * 单位： ‱
 * maxHpIncrease 最大生命值增幅
 */
class ModuleBeta {
    constructor(name, recovery) {
        this.name = name;
        this.recovery = recovery;
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
const PER_LEVEL_HP_BONUS = 1.13
const SPEED_POWER = 10.24
const DELAY_POWER = 3.5
const MAX_HP_DECREASE_POWER = 32
const CAPACITY_POWER = 64
const MAX_HP_INCREASE_POWER = 16
const RECOVERY_POWER = 0.5
const TEN_THOUSAND = 10000

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

const reality = new Map([
    ["WHITE", new RealityType("白色", 0, 0, 0, 0)],
    ["GREEN", new RealityType("绿色", 1200, 0, 0, -1350)],
    ["BLUE", new RealityType("蓝色", 2400, 0, 0, -2700)],
    ["PURPLE", new RealityType("紫色", 3600, 0, 0, -4050)],
])

function calcMaxHpDecrease(rateMaxHp, shieldLevel) {
    return math.evaluate(`
    (${rateMaxHp} / ${TEN_THOUSAND} + 1) * ${MAX_HP_DECREASE_POWER} * ${PER_LEVEL_HP_BONUS} ^ ${shieldLevel}
    `)
}

export { calcMaxHpDecrease }
