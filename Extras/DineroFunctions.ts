import Dinero from 'dinero.js';

    const DineroFunctions = {
    // Dinero object
    Din: Dinero,

    // Callback Function for  total amount in basket
    totalCost: (total: number) => {
      if (!total || typeof total !== "number") {
        return "$0.00";
      }
      let prices = DineroFunctions.Din({ amount: total * 100, currency: "USD" }).toFormat("$0,0.00");
      return prices;
    },

    // CallBack function for calculating bothe Delivery and subtotal:
    totalCostAll: (total: number) => {
      if (!total || typeof total !== "number") {
        return "0.00";
      }
      let prices = DineroFunctions.Din({ amount: total * 100, currency: "USD" }).toFormat("0,0.00");
      return prices;
    },

    // Call back function for every individual Basket item
    priceOfItem: (price : number) => {
      if (isNaN(price)) {
        return "0.00";
      } else {
        const priceOfItems = DineroFunctions.Din({amount: price * 100, currency: "USD"}).toFormat('$0,0.00');
        return priceOfItems;
      }
    }
}

    export const { totalCost, totalCostAll, priceOfItem } = DineroFunctions