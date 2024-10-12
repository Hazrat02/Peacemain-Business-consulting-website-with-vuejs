import { defineStore } from 'pinia';
import axios from 'axios';

export const useCryptoStore = defineStore('crypto', {
  state: () => ({
    crypto: {},
  }),
  actions: {
    async getCrypto() {
      if (Object.keys(this.crypto).length === 0) {
        try {
          // const response = await axios.get(
          //   'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Clitecoin%2Ctron%2Cdogecoin%2Ccoredao%2Cmatic-network%2Cethereum&vs_currencies=Usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true',
          //   {
          //     headers: {
          //       Authorization: 'CG-DuLvRVJu7DgLMFyyhe1QrgxD',
          //     },
          //   }
          // );
          // this.crypto = response.data;
          this.crypto =''
        } catch (error) {
          console.error(error);
        }
      }
      return this.crypto;
    },
  },
});
