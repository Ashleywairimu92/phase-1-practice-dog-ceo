console.log('%c HI', 'color: firebrick')
describe("Array", () => {
    describe("when empty", () => {
      it("should have length 0", () => {
        const arr = [];
        if (arr.length !== 0) {
          throw new Error("Array length is not 0");
        }
      });
    });
  });
  