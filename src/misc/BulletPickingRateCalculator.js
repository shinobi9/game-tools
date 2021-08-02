import * as math from 'mathjs'
function calcPickingRateByRange(min, max) {
    let arr = []
    let currentL = min
    let currentR
    let offset = math.subtract(max, min)
    console.log(`offset => ${offset}`)
    if (offset < 0) {
        return arr
    }
    if (offset === 0) {
        arr.push(new Result(min, max, min, 100))
        return arr
    }
    if (math.compare(currentL, math.add(math.floor(currentL), 0.5)) === 1) { //  1.2 > 1.5 ?
        currentR = math.add(math.ceil(currentL), 0.5)                // 1.2 + 0.5
    } else {
        currentR = math.add(math.floor(currentL), 0.5)     //  2 + 0.5
    }
    if (math.compare(max, 0.5) <= 0) {
        arr.push(new Result(currentL, currentR, calcBullet(currentL, currentR), calcPickingRate(currentL, currentR, offset)))
        return arr
    }
    while (true) {
        console.debug(`currentL : ${currentL}`)
        console.debug(`currentR : ${currentR}`)
        if (math.compare(currentR, max) <= 0) {
            arr.push(new Result(currentL, currentR, calcBullet(currentL, currentR), calcPickingRate(currentL, currentR, offset)))
        } else {
            arr.push(new Result(currentL, max, calcBullet(currentL, max), calcPickingRate(currentL, max, offset)))
            break
        }
        currentL = currentR
        currentR++
    }
    return arr
}

function calcPickingRate(left, right, offset) {
    let rate = math.chain(right).subtract(left).divide(offset).done()
    return math.round(rate * 100, 3)
}

function calcBullet(a, b) {
    return math.round(average(a, b), 0)
}

function average(a, b) {
    return math.divide(math.add(a, b), 2)
}


class Result {
    constructor(left, right, bullet, rate) {
        this.left = left;
        this.right = right;
        this.bullet = bullet;
        this.rate = rate;
    }
}


export { calcPickingRateByRange as calcPickingRate }