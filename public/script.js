function generateMoney() {
  let result = 0;
  result = Math.floor(Math.random() * 100000 + 10000);
  return result;
}

class Wealthy {
  listPeople = [];

  formatMoney(value) {
    const formmater = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });
    return formmater.format(value);
  }

  async addPeople() {
    try {
      const { results } = await fetch("https://randomuser.me/api").then((res) =>
        res.json()
      );
      const uuid = results[0].login.uuid;
      const name = `${results[0].name.first} ${results[0].name.last}`;
      const peopleData = {
        uuid,
        name,
        money: generateMoney(),
      };
      return this.listPeople.push(peopleData);
    } catch (error) {
      console.log("DEBUG-error", error);
    }
  }

  showWealthyPeople() {
    return this.listPeople;
  }
}

//*Note: to defined module in browser.
// var module = module || {};

module.exports = Wealthy;
