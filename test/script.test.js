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

  test.skip("should doubled each money user", async () => {
    await wealthyClass.addPeople();
    await wealthyClass.addPeople();
    const previousMoney = Array.from(wealthyClass.showWealthyPeople()).map(
      (item) => item.money
    );
    wealthyClass.doubledMoney();
    const nextMoney = [...wealthyClass.showWealthyPeople()].map(
      (item) => item.money
    );
    let checkDoubledVal = [false, false];
    for (let index = 0; index < previousMoney.length; index++) {
      checkDoubledVal[index] = nextMoney[index] === previousMoney[index] * 2;
    }
    expect(checkDoubledVal.every((item) => item === true)).toBe(true);
  });

  test.skip("should calculate all user money", async () => {
    await wealthyClass.addPeople();
    await wealthyClass.addPeople();
    const expectedTotal = [...wealthyClass.showWealthyPeople()].reduce(
      (temp, iterator) => {
        temp = temp + iterator.money;
        return temp;
      },
      0
    );

    const totalByClass = wealthyClass.calculateAllWealthy();
    expect(totalByClass).toEqual(expectedTotal);
  });

  test.skip("should sort money from the richest", async () => {
    await wealthyClass.addPeople();
    await wealthyClass.addPeople();
    await wealthyClass.addPeople();
    await wealthyClass.addPeople();
    await wealthyClass.addPeople();

    const previousSort = [...wealthyClass.showWealthyPeople()].sort(
      (a, b) => b.money - a.money
    );
    expect(previousSort).toEqual(wealthyClass.sortByRichest());
  });

  test("should only show people by money which value are million", async () => {
    await wealthyClass.addPeople();
    await wealthyClass.addPeople();
    await wealthyClass.addPeople();
    await wealthyClass.addPeople();
    await wealthyClass.addPeople();

    wealthyClass.doubledMoney();

    console.log("DEBUG-wealthy current", wealthyClass.showWealthyPeople());

    const expectedMillionaires = [...wealthyClass.showWealthyPeople()].reduce(
      (temp, iterator) => {
        if (iterator.money >= 100000) {
          temp.push(iterator);
        }
        return temp;
      },
      []
    );

    expect(Array.from(wealthyClass.showWealthyPeople().length)).not.toEqual(
      expectedMillionaires.length
    );
  });
});
