const { showHowMuchILoveYou } = require('./index');

describe("showHowMuchILoveYou", () => {

    it("Throws an error when passed a non-numeric value", () => {
        expect(() => {
            showHowMuchILoveYou("not at all");
        }).toThrow("You're just not my type.");
    })

    it("Returns the expected number of 'i's", () => {
        expect(showHowMuchILoveYou(3)).toBe("I love you thiiis much!")
    })

})