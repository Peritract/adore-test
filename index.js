function showHowMuchILoveYou(num) {
    if (typeof num == 'number' && Number.isInteger(num) && num > 0) {
        return `I love you th${'i'.repeat(num)}s much!`;
    } else {
        throw new Error("You're just not my type.");
    }
}

module.exports = {
    showHowMuchILoveYou
}