const { repair, success, fail } = require("./enhancer");

describe("enhancer.js", () => {
  describe("success()", () => {
    it("enhancement increases by 1", () => {
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
      };

      expect(success(item)).toEqual(expectedIncrease);
    });

    it("update name to reflect new enhancement", () => {
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

      expect(success(item)).toEqual(updatedItem);
    });
  });

  describe("repair()", () => {
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

        expect(repair(item)).toMatchObject(expected);
      });
  });

  describe("fail()", () => {
    //The durability of the item is decreased by 5 if the item's enhancement is between 0 and 14.
    it("durability decreases by 5 when item's enhancement is 14 or less", () => {

      const item = {
          enhancement: 14,
          durability: 85
      };

      const actual = fail(item);

      expect(actual.durability).toBe(80)
    });

    // The durability of the item is decreased by 10 if the item's enhancement is greater than 14.
    it('durability decreases by 10 if enhancement is 14 or greater', () => {
        const item = {
            enhancement: 15,
            durability: 85
        };

        const actual = fail(item);

        expect(actual.durability).toBe(75);
    })

    // If the item's enhancement level is greater than 16 (DUO, TRI, TET), the enhancement level decreases by 1 (a DUO item would go back to PRI on failure).
    it('enhancement level decreases by 1 if enhancement level is greater than 16', () => {
        const item = {
            enhancement: 18
        };

        const actual = fail(item);

        expect(actual.enhancement).toBe(17);
    })

    // The name is updated to reflect the new enhancement level if it was decreased.

    // If the item's enhancement is 14 or lower, the item cannot be enhanced if the durability is below 25.
    it('should not affect item\'s enhancement if enhancement is 14 or lower and durability is below 25', () => {
        const item = {
            enhancement: 14,
            durability: 24
        }

        const actual = fail(item);

        expect(actual).toEqual(item);
    })

    // If the item's enhancement is 15 or higher, the item cannot be enhanced if the durability is below 10.
    it('should not affect item\'s enhancement if enhancement is higher than 15 and durability is less than 10', () => {
        const item = {
            enhancement: 16,
            durability: 9
        };

        const actual = fail(item);

        expect(actual).toEqual(item);
    })
  });
});
