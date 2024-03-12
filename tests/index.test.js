
const { default: testFunc } = await import("../");

describe("let's check the value of cornflowerblue", () => {
    test("checking YIQ value", async () => {
        expect(testFunc([100, 149, 237])).toEqual(144.381);
    });
});
