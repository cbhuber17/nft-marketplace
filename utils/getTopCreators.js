export const getCreators = (array) => {
  const finalized = [];

  // A top seller is a person with a high sum of all NFTs they've listed
  // return an array of objects [ {price: 'X', seller: 'Y'}, ...]
  const result = array.reduce((res, currentValue) => {
    (res[currentValue.seller] = res[currentValue.seller] || []).push(
      currentValue
    );

    return res;
  }, {});

  Object.entries(result).forEach((itm) => {
    const seller = itm[0];
    const sumAll = itm[1]
      .map((item) => Number(item.price))
      .reduce((prev, curr) => prev + curr, 0);

    finalized.push({ seller, sumAll });
  });

  return finalized;
};
