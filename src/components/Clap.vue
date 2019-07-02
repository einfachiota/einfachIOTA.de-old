<template>
  <div id="clap">
    <img @click="clap" alt="clap" class="clap-icon" src="../assets/clapping-hands.svg">
  </div>
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
    clap() {
      console.log("clap!");
      this.send(`https://www.einfachiota.de${this.$router.currentRoute.path}`, "clap")
    },
    send(url, type) {
      const seed = generateSeed();
      const obj = {
        timestamp: Date.now(),
        type: type,
        url: url
      };

      const message_in_trytes = Converter.asciiToTrytes(JSON.stringify(obj));
      const transfers = [
        {
          value: 0,
          address: process.env.VUE_APP_CLAP_ADDRESS,
          message: message_in_trytes
        }
      ];

      iota
        .prepareTransfers(seed, transfers)
        .then(trytes => iota.sendTrytes(trytes, 3, 9))
        .then(bundle => {
          console.log(bundle);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }
};
</script>

<style lang="scss">
#clap {
  width: 20%;
  height: 20%;
  position: fixed;
  bottom: 0px;
  right: 0px;
  img {
    cursor: pointer;
    width: 20%;
    height: 20%;
    background-color: var(--secondary-2);
    border-radius: 10px;
    padding: 10px;
    fill: white;
    &:hover {
      background-color: var(--primary);
    }
  }
}
</style>

