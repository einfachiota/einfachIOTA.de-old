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
  provider: "https://nutzdoch.einfachiota.de"
});

export default {
  methods: {
    clap() {
      console.log("clap!");
      this.send("https://www.einfachiota.de", "clap");
    },
    send(url, type) {
      const seed = generateSeed();
      const obj = {
        timestamp: Date.now,
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

      // Hier bereiten wir alles vor uns senden die Transaktion zum Tangle. Wenn alles klappt hat, bekommt ihr ein Budle Objekt in der Konsole angezeigt.
      iota
        .prepareTransfers(seed, transfers)
        .then(trytes => iota.sendTrytes(trytes, 3, 14))
        .then(bundle => {
          console.log(bundle);
        })
        .catch(err => {
          console.error(err);
        });
    }
  },
  mounted() {
    this.send("https://www.einfachiota.de", "page_visit");
  }
};
</script>

<style lang="scss">
#clap {

  display: none;

  width: 200px;
  height: 200px;
  position: fixed;
  bottom: 0px;
  right: 0px;
  img {
    cursor: pointer;
    width: 80px;
    height: 80px;
    background-color: var(--secondary-2);
    border-radius: 100px;
    padding: 10px;
    fill: white;
    &:hover {
      background-color: var(--primary);
    }
  }
}
</style>

