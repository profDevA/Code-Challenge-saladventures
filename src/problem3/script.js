class Datasource {
  async getPrices() {
    return new Promise((resolve, reject) => {
      fetch("https://static.ngnrs.io/test/prices")
        .then((response) => response.json())
        .then((data) => {
          const { prices } = data.data;
          prices.map((price) => {
            price.mid = () => {
              return (price.buy + price.sell) / 2 / 100;
            };
            price.quote = () => {
              return price.pair.substring(3);
            };
          });
          resolve(prices);
        })
        .catch((err) => reject(err));
    });
  }
}

const ds = new Datasource();

ds.getPrices()
  .then((prices) => {
    prices.forEach((price) => {
      console.log(
        `Mid price for ${price.pair} is ${price.mid()} ${price.quote()}.`
      );
    });
  })
  .catch((error) => {
    console.error(error);
  });
