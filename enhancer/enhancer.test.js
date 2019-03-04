const { repair, success, fail } = require("./enhancer");

const weapon = {};

const armor = {};


describe("enhancer.js", () => {
  describe("success()", () => {
    it('enhancement increases by 1', () => {
        const item = {
            name: "Lambda Shield",
            type: "armor",
            durability: 44,
            enhancement: 3,
            displayName: "[+3] Lambda Shield"
          };

        const expectedIncrease = {
            ...item,
            enhancement: 4,
            displayName: "[+4] Lambda Shield"
        }

        expect(success(item)).toEqual(expectedIncrease);
    });

    it('update name to reflect new enhancement', () => {
        const item = {
            name: "Lambda Shield",
            type: "armor",
            durability: 44,
            enhancement: 3,
            displayName: "[+3] Lambda Shield"
        };

        const updatedItem = {
            ...item,
            enhancement: 4,
            displayName: "[+4] Lambda Shield"
        };

        expect(success(item)).toMatchObject(updatedItem)
    })

  });

  describe("repair()", () => {
    describe("durability", () => {
      it("should restore durability to 100", () => {
        const item = {
          name: "Lambda Shield",
          type: "armor",
          durability: 44,
          enhancement: 3,
          displayName: "[+3] Lambda Shield"
        };

        const expected = {
          name: "Lambda Shield",
          type: "armor",
          durability: 100,
          enhancement: 3,
          displayName: "[+3] Lambda Shield"
        };

        expect(repair(item)).toMatchObject(expected)
      });
    });
  });

  describe("fail()", () => {
    //The durability of the item is decreased by 5 if the item's enhancement is between 0 and 14.

    // The durability of the item is decreased by 10 if the item's enhancement is greater than 14.

    // If the item's enhancement level is greater than 16 (DUO, TRI, TET), the enhancement level decreases by 1 (a DUO item would go back to PRI on failure).

    // The name is updated to reflect the new enhancement level if it was decreased.

    // If the item's enhancement is 14 or lower, the item cannot be enhanced if the durability is below 25.

    // If the item's enhancement is 15 or higher, the item cannot be enhanced if the durability is below 10.

  });
});
