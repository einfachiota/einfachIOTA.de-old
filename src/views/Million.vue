<template>
  <div>
    <div class="header">
      <h1 class="header__title">einfachIOTA Millionär</h1>
      <div class="divider"></div>
    </div>
    <div class="content">
      <h2>Werde zum IOTA Millionär!</h2>
      <p>Gib deinen IOTA Millionär Code und deine IOTA Adress ein, um ein IOTA Millonär zu werden.</p>
      <el-form label-position="right" label-width="100px" :model="form">
        <el-form-item label="Code">
          <el-input placeholder="Dein einfachIOTA Millionäre Code" v-model="form.key"></el-input>
        </el-form-item>
        <el-form-item label="Adresse">
          <el-input placeholder="Deine IOTA Adresse" v-model="form.address"></el-input>
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
export default {
  name: "Million",
  data() {
    return {
      form: {
        address: "",
        key: ""
      },
      sending: false
    };
  },
  methods: {
    request_tokens() {
      console.log("that");
      this.sending = true;
      let self = this;
      setTimeout(() => {
        self.sending = false;
      }, 1000);
    }
  }
};
</script>

