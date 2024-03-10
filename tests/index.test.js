
const { default: testFunc } = await import("../");

describe("let's check the value of cornflowerblue", () => {
    test("checking YIQ value", async () => {
        expect(testFunc(102, 153, 255)).toEqual(149.379);
    });
});

