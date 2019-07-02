<template>
  <div class="content">
    <h1 class="heading">Statistiken</h1>
    <div class="divider"></div>
    <div class="content">
      <h2>Seitenaufrufe</h2>
      <p class="number">{{page_count}}</p>
    </div>
  </div>
</template>

<script>
const iotaLibrary = require("@iota/core");
const iota = iotaLibrary.composeAPI({
  provider: "https://nodes.devnet.thetangle.org:443"
});

export default {
  data() {
    return {
      page_count: 0
    };
  },
  created() {
    iota
      .findTransactions({ addresses: [process.env.VUE_APP_TPT_ADDRESS] })
      .then(transactions => {
        console.log("transactions", transactions);
        this.page_count = transactions.length;
      })
      .catch(err => {
        // handle errors
        console.log("err: " + data[1], err);
      });
  }
};
</script>


<style>
.heading {
  padding-top: 50px;
}
.number {
  font-size: 3em;
  margin: 0;
}
</style>

