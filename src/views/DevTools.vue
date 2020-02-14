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
      <br />
      <br />

      <h2>Spark Link generieren</h2>
      <select v-model="selected" @change="spark">
        <option value="Mainnet Sparklink">Mainnet Sparklink</option>
        <option>Devnet Sparklink</option>
        <option>CDA</option>
      </select>
      <span>Ausgewählt: {{ selected }}</span>
      <input v-model="inputaddress" placeholder="IOTA Adresse" class="el-input__inner" @input="spark"/>
      <input v-model="iotaamount" placeholder="IOTA Menge" class="el-input__inner" @input="spark"/>
      <p v-if="sparkerror">Fehler: {{ sparkresult }}</p>
      <a v-else target="_blank" :href="sparkresult"> {{ sparkresult }}</a>
    </div>
  </div>
</template>

<script>
const iotaLibrary = require("@iota/core");
const iota = iotaLibrary.composeAPI({
  provider: "https://nodes.devnet.thetangle.org:443"
});
const converter = require("@iota/converter");
const checksum = require('@iota/checksum');
const cda = require('@iota/cda');

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
      transaction: "",
      selected: "Mainnet Sparklink",
      inputaddress: "",
      sparkresult: "",
      iotaamount: "",
      sparkerror: true
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
          message: converter.asciiToTrytes(this.form.message) // The message converted into trytes
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
    },
    async spark(){
    try {
      let address = this.inputaddress
      let value = this.iotaamount
      //validate address
      if (!(address.length == 90 || address.length == 81) || /[E-V]/.test(address.slice(80, 81))) {
        throw 'Invalide Adresse'
      }
      if (address.length == 90) {
        if (!checksum.isValidChecksum(address)) {
          throw 'Invalide Checksumme'
        }
      }
      //check amount
      if (!Number.isInteger(parseInt(value)) || value < 0 || typeof value == 'undefined') {
        throw 'Invalide IOTA Menge'
      }

      let cdaobject = generateCDA(address, value)
      switch (this.selected) {
        case 'Mainnet Sparklink':
          this.sparkresult = generateSparkLink(cdaobject)
          break;
        case 'Devnet Sparklink':
          this.sparkresult = generateSparkLink(cdaobject, 'devnet')
          break;
        case 'CDA':
          this.sparkresult = cdaobject
      }

      function generateCDA(address, value) {
        let timeoutAt = Math.floor(Date.now() + 24 * 60 * 60 * 1000)
        let expectedAmount = value
        let multiUse = false
        let checksum = converter.tritsToTrytes(cda.CDAChecksum(converter.trytesToTrits(address), converter.valueToTrits(timeoutAt), cda.CDAMultiUseBooleanAsTrit(multiUse), converter.valueToTrits(expectedAmount || 0)))
        let addressWithCDAChecksum = address.slice(0, 81) + checksum
        let newCDA = { address: addressWithCDAChecksum, timeoutAt, multiUse, expectedAmount }
        cda.verifyCDAChecksum(newCDA)
        return newCDA
      }

      function generateSparkLink(cda, network) {
        let { address, timeoutAt, expectedAmount } = cda
        let link
        if (network == 'devnet') {
          link = 'https://spark-devnet.iota.org//?address=' + address + '&timeoutAt=' + timeoutAt + '&amount=' + expectedAmount
        } else {
          link = 'https://spark.iota.org/?address=' + address + '&timeoutAt=' + timeoutAt + '&amount=' + expectedAmount
        }
        return link
      }
this.sparkerror = false
    } catch (e) {
      console.log(e)
      this.sparkerror = true
      this.sparkresult = e
    }
  }
},
  created() {
    this.seed = generateSeed();
    this.generateNewAddress();
  }
};
</script>

