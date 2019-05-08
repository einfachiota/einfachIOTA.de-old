<template>
  <div class="supporter">
    <h1>This is an supporter page</h1>
    <el-row :gutter="12">
      <el-col v-for="transaction in transactions" v-bind:key="transaction.hash" :span="12">
        <el-card shadow="hover">
          {{getMessage(transaction.signatureMessageFragment)}}
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { composeAPI } from "@iota/core";
const converter = require('@iota/converter')

const iota = composeAPI({
  provider: "https://nutzdoch.einfachiota.de"
});

export default {
  data() {
    return {
      transactions: []
    }
  },
  methods: {
    getMessage(trytes) {
      return converter.trytesToAscii(trytes + '9') 
    }
  },
  created() {

    iota.getBalances(["IKTYKKCZFZZECSFIJYWYSUUTXCIBNIFPFSPGUIUUAYONDYUSHEZVQBNPDYUTDMTNTHBLABCYYLZKLGIVCINGBALQVX"], 100)
      .then(({ balances }) => {
        console.log("balances", balances)
        // ...
      })
      .catch(err => {
        // ...
      })
    console.log("dd", converter)
    iota
      .findTransactionObjects({
        addresses: [
          "IKTYKKCZFZZECSFIJYWYSUUTXCIBNIFPFSPGUIUUAYONDYUSHEZVQBNPDYUTDMTNTHBLABCYYLZKLGIVCINGBALQVX"
        ]
      })
      .then(transactions => {
              console.log("sd", transactions[0].signatureMessageFragment);
              console.log("sd", converter);
              console.log("sd", converter.trytesToAscii(transactions[0].signatureMessageFragment + '9'));
        console.log("transactions", transactions);
        this.transactions = transactions
        
      })
      .catch(err => {
        // ...
      });
  }
};
</script>
