
//takes account for the coins per sec
setInterval(function () {
    let coinsPerSec1 = parseInt(document.querySelector('#upgrade-1').innerHTML);
    let coinsPerSec10 = parseInt(document.querySelector('#upgrade-10').innerHTML);
    let coinsperSec = coinsPerSec1 + 10 * coinsPerSec10;
    document.querySelector('#total-coins').innerHTML = parseInt(document.querySelector('#total-coins').innerHTML) + coinsperSec;
    document.querySelector('#spend-coins').innerHTML = parseInt(document.querySelector('#spend-coins').innerHTML) + coinsperSec;
}, 1000);

//check for button disable/enable
setInterval(function () {
    let availableCoins = parseInt(document.querySelector('#spend-coins').innerHTML);
    let upgradePrice1 = parseInt(document.querySelector('#upgrade-1-price').innerHTML);
    let upgradePrice10 = parseInt(document.querySelector('#upgrade-10-price').innerHTML);
    if (availableCoins >= upgradePrice1) {
        document.querySelector('#upgrade-1-btn').disabled = false;
    } else {
        document.querySelector('#upgrade-1-btn').disabled = true;
    }
    if (availableCoins >= upgradePrice10) {
        document.querySelector('#upgrade-10-btn').disabled = false;
    } else {
        document.querySelector('#upgrade-10-btn').disabled = true;
    }
}, 50);

//click button listener
document.querySelector('#click-me').addEventListener('click', function () {
    let availableCoins = parseInt(document.querySelector('#spend-coins').innerHTML);
    let totalCoins = parseInt(document.querySelector('#total-coins').innerHTML);
    availableCoins += 1;
    totalCoins += 1;
    document.querySelector('#spend-coins').innerHTML = availableCoins;
    document.querySelector('#total-coins').innerHTML = totalCoins;
});

//1x upgrade button listener
document.querySelector('#upgrade-1-btn').addEventListener('click', function () {
    let availableCoins = parseInt(document.querySelector('#spend-coins').innerHTML);
    let upgrades = parseInt(document.querySelector('#upgrade-1').innerHTML);
    let upgradePrice1 = parseInt(document.querySelector('#upgrade-1-price').innerHTML);
    document.querySelector('#spend-coins').innerHTML = availableCoins - upgradePrice1;
    upgradePrice1 *= 1.1;
    document.querySelector('#upgrade-1-price').innerHTML = Math.floor(upgradePrice1);
    document.querySelector('#upgrade-1').innerHTML = upgrades + 1;
})

//10x upgrade button listener
document.querySelector('#upgrade-10-btn').addEventListener('click', function () {
    let availableCoins = parseInt(document.querySelector('#spend-coins').innerHTML);
    let upgrades = parseInt(document.querySelector('#upgrade-10').innerHTML);
    let upgradePrice10 = parseInt(document.querySelector('#upgrade-10-price').innerHTML);
    document.querySelector('#spend-coins').innerHTML = availableCoins - upgradePrice10;
    upgradePrice10 *= 1.1;
    document.querySelector('#upgrade-10-price').innerHTML = Math.floor(upgradePrice10);
    document.querySelector('#upgrade-10').innerHTML = upgrades + 1;
})


