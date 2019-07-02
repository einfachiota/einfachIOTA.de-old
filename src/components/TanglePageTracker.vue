<template>
  <div id="TanglePageTracker"></div>
</template>

<script>
const iotaLibrary = require("@iota/core");
import generateSeed from "../utils/generateSeed.js";
const Converter = require("@iota/converter");

const iota = iotaLibrary.composeAPI({
  provider: "https://nodes.devnet.thetangle.org:443"
});

export default {
  methods: {
    track(url) {
      const seed = generateSeed();
      const obj = {
        timestamp: Date.now(),
        url: url
      };

      const message_in_trytes = Converter.asciiToTrytes(JSON.stringify(obj));
      const transfers = [
        {
          value: 0,
          address: process.env.VUE_APP_TPT_ADDRESS,
          message: message_in_trytes
        }
      ];

      iota
        .prepareTransfers(seed, transfers)
        .then(trytes => iota.sendTrytes(trytes, 3, 9))
        .then(bundle => {
          console.log(
            "Your visit was anonymously tracked in the IOTA Tangle. Read this to learn more: "
          );
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  mounted() {
    if (process.env.NODE_ENV === "production") {
      this.track("https://www.einfachiota.de");
    }
  }
};
</script>

