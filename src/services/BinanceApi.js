import config from "../env";

export const binanceAll = async () => {
  const data = await fetch(`${config.URL}/fapi/v1/exchangeInfo`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-MBX-APIKEY": config.APIKEY,
    },
  }).then((data) => data.json());
  return data;
};

export const binanceTicket = async (ticket) => {
  const data = await fetch(`${config.URL}/fapi/v1/ticker/price`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "X-MBX-APIKEY": config.APIKEY,
    },
  }).then((data) => data.json());
  console.log(data[ticket]);
  return data;
};
