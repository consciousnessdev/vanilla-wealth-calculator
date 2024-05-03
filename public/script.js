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

  compare(a, b) {
    if (a.money < b.money) {
      return 1;
    }

    if (a.money > b.money) {
      return -1;
    }
    return 0;
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

  doubledMoney() {
    const doubledValue = [...this.listPeople].map((item) => ({
      ...item,
      money: item.money * 2,
    }));

    this.listPeople = [...doubledValue];
  }

  showWealthyPeople() {
    return this.listPeople;
  }

  calculateAllWealthy() {
    let totalWealthy = 0;
    for (let index = 0; index < this.listPeople.length; index++) {
      totalWealthy = totalWealthy + this.listPeople[index].money;
    }
    return totalWealthy;
  }

  sortByRichest() {
    const currentList = [...this.listPeople];
    const sortedMoneyByRichest = currentList.sort(this.compare);
    this.listPeople = [...sortedMoneyByRichest];
    return this.listPeople;
  }

  showOnlyMillionaires() {
    const currentList = [...this.listPeople].reduce((temp, iterator) => {
      if (iterator.money >= 100000) {
        temp.push(iterator);
      }
      return temp;
    }, []);

    this.listPeople = [...currentList];
    return this.listPeople;
  }
}

//*Note: to defined module in browser.
// var module = module || {};

module.exports = Wealthy;
