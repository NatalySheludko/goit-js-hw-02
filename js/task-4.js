'use strict';

function getShippingCost(country) {
  const deliveryPriceToChina = 100;
  const deliveryPriceToChile = 250;
  const deliveryPriceToAustralia = 170;
  const deliveryPriceToJamaica = 120;

  switch (country) {
    case 'China':
      return `Shipping to ${country} will cost ${deliveryPriceToChina} credits`;

    case 'Chile':
      return `Shipping to ${country} will cost ${deliveryPriceToChile} credits`;

    case 'Australia':
      return `Shipping to ${country} will cost ${deliveryPriceToAustralia} credits`;

    case 'Jamaica':
      return `Shipping to ${country} will cost ${deliveryPriceToJamaica} credits`;

    default:
      return 'Sorry, there is no delivery to your country';
  }
}

console.log(getShippingCost('Australia'));
console.log(getShippingCost('Germany'));
console.log(getShippingCost('China'));
console.log(getShippingCost('Chile'));
console.log(getShippingCost('Jamaica'));
console.log(getShippingCost('Sweden'));
