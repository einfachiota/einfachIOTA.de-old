<template>
  <div>
    <div class="header">
      <h1 class="header__title">Developer Tools</h1>
      <div class="divider"></div>
    </div>
    <div class="content">
      <h2>Generate Developer Seed</h2>
      <p>Use this seed only for development!</p>
      <pre>{{seed}}</pre>
      <button
        type="button"
        @click="generateNewSeed"
        class="el-button el-button--primary"
      >Neuen Seed generieren</button>
      <br />
      <br />

      <h2>Adressen generieren</h2>
      <p>Adresse:</p>
      <pre>{{address}}</pre>
      <button
        type="button"
        @click="generateNewAddress"
        class="el-button el-button--primary"
      >Neue Adresse generieren</button>

      <br />
      <br />
      <h2>Devnet Nachrichten</h2>
      <p>Versende "Zero Value" Transaktionen mit einer Nachricht ins IOTA Devnet!</p>
      <p v-if="transaction">
        Transaction sent! See it here on:
        <a
          :href="'https://devnet.thetangle.org/transaction/'+ transaction"
          target="_blank"
        >TheTangle.org</a>
      </p>
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="Nachricht">
          <el-input v-model="form.message"></el-input>
        </el-form-item>
        <el-form-item label="Adresse">
          <el-input v-model="form.address"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">Senden</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
const iotaLibrary = require("@iota/core");
const iota = iotaLibrary.composeAPI({
  provider: "https://nodes.devnet.thetangle.org:443"
});
const Converter = require("@iota/converter");

import generateSeed from "../utils/generateSeed.js";
export default {
  data() {
    return {
      seed: "",
      address: "",
      form: {
        message: "",
        address: ""
      },
      transaction: ""
    };
  },
  methods: {
    generateNewSeed() {
      this.seed = generateSeed();
    },
    generateNewAddress() {
      iota
        .getNewAddress(this.seed)
        .then(address => {
          this.address = address;
        })
        .catch(err => {
          // ...
        });
    },
    onSubmit() {
      console.log("submit!");
      console.log(this.form);
      const transfers = [
        {
          value: 0,
          address: this.form.address, // Where the data is being sent
          message: Converter.asciiToTrytes(this.form.message) // The message converted into trytes
        }
      ];
      console.log(transfers);
      iota
        .prepareTransfers(this.seed, transfers)
        .then(trytes => iota.sendTrytes(trytes, 3, 9))
        .then(bundle => {
          console.log("Transfer successfully sent");
          bundle.map(tx => {
            console.log(tx);
            this.transaction = tx.hash;
            this.form = {
              message: "",
              address: ""
            };
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.seed = generateSeed();
    this.generateNewAddress();
  }
};
</script>

