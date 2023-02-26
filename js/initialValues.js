const initialState = {
  blackblaze: {
    url: "backblaze.com",
    title: "blackblaze",
    minPayment: 7,
    maxPayment: 0,
    defaultCheck: null,
    prices: {
      storage: 0.005,
      transfer: 0.01,
    },
    chartValue: 0,
    color: "red",
    freeRange: {
      storage: 0,
      transfer: 0,
    },
  },
  bunny: {
    url: "bunny.net",
    title: "bunny",
    minPayment: 0,
    maxPayment: 10,
    defaultCheck: "hdd",
    prices: {
      storage: {
        hdd: 0.01,
        ssd: 0.02,
      },
      transfer: 0.01,
    },
    chartValue: 0,
    color: "orange",
    freeRange: {
      storage: 0,
      transfer: 0,
    },
  },
  scaleway: {
    url: "scaleway.com",
    title: "scaleway",
    minPayment: 0,
    maxPayment: 0,
    prices: {
      storage: {
        multi: 0.06,
        single: 0.03,
      },
      transfer: 0.02,
    },
    chartValue: 0,
    defaultCheck: "multi",
    color: "purple",
    freeRange: {
      storage: 75,
      transfer: 75,
    },
  },
  vultr: {
    url: "vultr.com",
    title: "vultr",
    minPayment: 5,
    maxPayment: 0,
    prices: {
      storage: 0.01,
      transfer: 0.01,
    },
    chartValue: 0,
    defaultCheck: null,
    freeRange: {
      storage: 0,
      transfer: 0,
    },
    color: "blue",
  },
};
