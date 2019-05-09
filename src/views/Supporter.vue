<template>
  <div class="supporter">
    <h1>This is an supporter page</h1>
    <el-row :gutter="12">
      <el-col v-for="transaction in transactions" v-bind:key="transaction.hash" :span="12">
        <el-card shadow="hover">{{getMessage(transaction.signatureMessageFragment)}}</el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { composeAPI } from "@iota/core";
const converter = require("@iota/converter");

const iota = composeAPI({
  provider: "https://nutzdoch.einfachiota.de"
});

export default {
  data() {
    return {
      transactions: [],
      balances: 0
    };
  },
  methods: {
    getMessage(trytes) {
      return converter.trytesToAscii(trytes + "9");
    },
    async fetchTransactions() {
      try {
        let txs = await iota.findTransactionObjects({
          addresses: [
            "IKTYKKCZFZZECSFIJYWYSUUTXCIBNIFPFSPGUIUUAYONDYUSHEZVQBNPDYUTDMTNTHBLABCYYLZKLGIVCINGBALQVX"
          ]
        });
        txs.map(tx => {
          iota
            .getLatestInclusion([tx.hash])
            .then(states => {
              if (states[0] == true) {
                this.transactions.push(tx);
              }
            })
            .catch(err => {
              console.log("Error while fetching latest inclusuin state: ", err);
            });
        });
      } catch (err) {
        console.log("Error while fetching transactions: ", err);
      }
    }
  },
  created() {
    this.fetchTransactions();

    iota
      .getBalances(
        [
          "IKTYKKCZFZZECSFIJYWYSUUTXCIBNIFPFSPGUIUUAYONDYUSHEZVQBNPDYUTDMTNTHBLABCYYLZKLGIVCINGBALQVX"
        ],
        100
      )
      .then(({ balances }) => {
        this.balances = balances;
      })
      .catch(err => {
        console.log("Error fetching balances: ", err)
      });
  }
};
</script>
