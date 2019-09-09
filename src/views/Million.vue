<template>
  <div>
    <div class="header">
      <h1 class="header__title">einfachIOTA Millionär</h1>
      <div class="divider"></div>
    </div>
    <div class="content">
      <div v-if="!success">
        <h2>Werde zum IOTA Millionär!</h2>
        <p>Gib deinen IOTA Millionär Code und deine IOTA Adress ein, um ein IOTA Millonär zu werden.</p>
        <el-form label-position="right" label-width="100px" :model="form">
          <el-form-item label="Code">
            <el-input placeholder="Dein einfachIOTA Millionäre Code" v-model="form.code"></el-input>
          </el-form-item>
          <el-form-item label="Adresse">
            <el-input placeholder="Deine IOTA Adresse" v-model="form.address"></el-input>
          </el-form-item>

          <vue-recaptcha
            :sitekey="rc_sitekey"
            ref="recaptcha"
            @verify="onCaptchaVerified"
            @expired="onCaptchaExpired"
          ></vue-recaptcha>
          <div v-if="error">
            <p>Fehler! Überprüfe deine Eingaben und versuche es noch einmal.</p>
          </div>
          <el-button
            :disabled="disabled"
            :loading="sending"
            type="primary"
            @click="request_tokens"
            class="el-button el-button--primary"
          >1 Millionen IOTA anfordern</el-button>
        </el-form>
      </div>
      <div v-else>
        <h2>Du bist IOTA Millionär!</h2>
        <p>Herzlichen Glückwunsch!, deine IOTA Tokens sind Unterwegs!</p>
        <p>
          Du kannst hier nach dem Status schauen:
          <a
            :href="'https://devnet.thetangle.org/transactions/' + transaction"
            target="_blank"
          >theTangle.org</a>
        </p>
        <h3>Du willst mehr über IOTA und einfachIOTA erfahren?</h3>
        <p>Folge uns auf Twitter um immer auf dem neusten Stand zu bleinen. Tritt unsere Discord Server und mach bei der Community mit oder schau auf unserem Gibthub vorbei um dir den Code unserer Projekte anzuschauen!</p>
        <a
          href="https://twitter.com/einfachIOTA"
          target="_blank"
          tag="button"
          class="btn-social el-button el-button--primary"
          style="margin: 0"
        >Twitter</a>
        <a
          href="https://discord.gg/rV3TMSU"
          target="_blank"
          tag="button"
          class="btn-social el-button el-button--primary"
          style="margin: 0 30px 0 30px"
        >Discord</a>
        <a
          href="https://github.com/einfachiota"
          target="_blank"
          tag="button"
          class="btn-social el-button el-button--primary"
          style="margin: 0"
        >Github</a>
      </div>

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
import VueRecaptcha from "vue-recaptcha";

export default {
  name: "Million",
  components: { VueRecaptcha },
  data() {
    return {
      form: {
        address: "",
        code: ""
      },
      sending: false,
      success: false,
      transaction: null,
      error: false,
      rc_sitekey: "6LdhUrcUAAAAAL8bY2d6LeagUBo9TlboOb4PhrLW",
      disabled: false
    };
  },
  methods: {
    request_tokens() {
      console.log("request_tokens");
      this.sending = true;
      let self = this;
      axios
        .post(process.env.VUE_APP_MILLIONAIRE_URL, this.form)
        .then(function(response) {
          // handle success
          console.log("handle success");
          console.log(response);
          self.sending = false;
          self.form.code = "";
          self.form.address = "";
          self.success = true;
          self.transaction = response.data;
          self.form.recaptcha = ""
          self.$refs.recaptcha.reset()

        })
        .catch(function(error) {
          // handle error
          console.log("handle error");
          self.sending = false;
          self.error = error;
          self.form.recaptcha = ""
          console.log(error);
          self.$refs.recaptcha.reset()
        });
    },
    onCaptchaVerified: function(recaptchaToken) {
      this.disabled = false
      this.form.recaptcha = recaptchaToken
    },
    onCaptchaExpired: function(data) {
      console.log("onCaptchaExpired", data);
      self.error = error;
      self.form.recaptcha = ""
      this.$refs.recaptcha.reset()
    }
  }
};
</script>

