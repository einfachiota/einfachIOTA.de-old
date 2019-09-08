<template>
  <div>
    <div class="header">
      <h1 class="header__title">einfachIOTA Millionär</h1>
      <div class="divider"></div>
    </div>
    <div class="content">
      <h2>Werde zum IOTA Millionär!</h2>
      <p>Gib deinen IOTA Millionär Code und deine IOTA Adress ein, um ein IOTA Millonär zu werden.</p>
      <el-form label-position="right" label-width="100px" :model="data">
        <el-form-item label="Code">
          <el-input placeholder="Dein einfachIOTA Millionäre Code" v-model="data.code"></el-input>
        </el-form-item>
        <el-form-item label="Adresse">
          <el-input placeholder="Deine IOTA Adresse" v-model="data.address"></el-input>
        </el-form-item>
        <el-button
          :loading="sending"
          type="primary"
          @click="request_tokens"
          class="el-button el-button--primary"
        >1 Millionen IOTA anfordern</el-button>
      </el-form>
      <br />
      <br />
      <h2>Fragen und Antworten</h2>
      <p>
        Deine Frage ist nicht dabei? Komm in unser
        <a href="https://discord.gg/rV3TMSU">Discord</a> und frage nach!
      </p>
      <h3>Wie bekomme ich ein einfachIOTA Millionär Code?</h3>
      <p>Finde den Stand von einfachIOTA auf IOTA Meetups.</p>
      <h3>Auf welchen Meetups seid ihr?</h3>
      <ul>
        <li>
          <strong>28.08.2019:</strong>
          <a
            href="https://kompetenzzentrum-saarbruecken.digital/events/iota-meetup/"
            target="_blank"
          >
            IOTA Meetup
            in Saarbrücken
          </a>
        </li>
        <li>
          <strong>12.09.2019:</strong>
          <a href="https://www.meetup.com/de-DE/IOTA-Muc/events/262099878/" target="_blank">
            IOTA Hands-on Meetup
            in München
          </a>
        </li>
      </ul>
      <p></p>
    </div>
  </div>
</template>

<script>
const axios = require("axios");

export default {
  name: "Million",
  data() {
    return {
      data: {
        address: "",
        code: ""
      },
      sending: false
    };
  },
  methods: {
    request_tokens() {
      console.log("request_tokens");
      this.sending = true;
      let self = this;
      axios
        .post(process.env.VUE_APP_MILLIONAIRE_URL, this.data)
        .then(function(response) {
          // handle success
          console.log(response);
          self.sending = false;
          self.code = ""
          self.address = ""
        })
        .catch(function(error) {
          // handle error
          self.sending = false;
          console.log(error);
        });
    }
  }
};
</script>

