import Wealthy from "../public/script";

describe("Wealth Class", () => {
  const wealthyClass = new Wealthy();

  /** Unit Testing */
  // test("should returned addPeople function type are function", () => {
  //   expect(typeof wealthyClass.addPeople).toBe("function");
  // });

  // test("should returned showWealthyPeople are empty array", () => {
  //   expect(wealthyClass.showWealthyPeople()).toHaveLength(0);
  // });

  // test("addPeople returned object of user", () => {
  //   const expectedObj = {
  //     name: "Shin",
  //     money: 100000,
  //   };

  //   expect(wealthyClass.addPeople()).toEqual(expectedObj);
  // });

  // test("showWealthyPeople to have length 1 after add people", () => {
  //   wealthyClass.addPeople();
  //   expect(wealthyClass.showWealthyPeople()).toHaveLength(1);
  // });

  /** Integration Testing */
  test.skip("should addPeople from randomuser api", async () => {
    await wealthyClass.addPeople();
    await wealthyClass.addPeople();
    const wealthyData = wealthyClass.showWealthyPeople();
    expect(wealthyData).toHaveLength(2);
  });
});
