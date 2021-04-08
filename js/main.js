let totalCoins = 0;
let toSpendCoins = 0;
let smallUpgradeCount = 0;
let smallUpgradePrice = 10;
let bigUpgradeCount = 0;
let bigUpgradePrice = 90;

setInterval(function () {
    if (toSpendCoins >= smallUpgradePrice) {
        document.querySelector('#upgrade-1-btn').disabled = false;
    } else {
        document.querySelector('#upgrade-1-btn').disabled = true;
    };

    if (toSpendCoins >= bigUpgradePrice) {
        document.querySelector('#upgrade-10-btn').disabled = false;
    } else {
        document.querySelector('#upgrade-10-btn').disabled = true;

    };

    totalCoins += (smallUpgradeCount + (10 * bigUpgradeCount)) / 100;
    toSpendCoins += (smallUpgradeCount + (10 * bigUpgradeCount)) / 100;
    document.querySelector('#total-coins').innerHTML = Math.floor(totalCoins);
    document.querySelector('#spend-coins').innerHTML = Math.floor(toSpendCoins);
    document.querySelector('#upgrade-1').innerHTML = smallUpgradeCount;
    document.querySelector('#upgrade-10').innerHTML = bigUpgradeCount;
    document.querySelector('#upgrade-1-price').innerHTML = parseFloat(smallUpgradePrice.toFixed(1));
    document.querySelector('#upgrade-10-price').innerHTML = parseFloat(bigUpgradePrice.toFixed(1));
}, 10);


//click button listener
document.querySelector('#click-me').addEventListener('click', function () {
    totalCoins++;
    toSpendCoins++;
});

//1x upgrade button listener
document.querySelector('#upgrade-1-btn').addEventListener('click', function () {
    smallUpgradeCount++;
    toSpendCoins -= smallUpgradePrice;
    smallUpgradePrice *= 1.1;

})

//10x upgrade button listener
document.querySelector('#upgrade-10-btn').addEventListener('click', function () {
    bigUpgradeCount++;
    toSpendCoins -= bigUpgradePrice;
    bigUpgradePrice *= 1.1;
})


