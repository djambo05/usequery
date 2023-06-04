export const fetchCoins = async (skip) => {
  const { data } = await fetch(
    `https://api.coinstats.app/public/v1/coins?skip=${skip}&limit=10`
  );
  return data.coins;
};
