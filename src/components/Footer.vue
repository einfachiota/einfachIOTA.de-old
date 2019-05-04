<template>
  <div class="footer">
    <div class="row">
      <div class="footer-main">
        <h4>einfachIOTA</h4>
        <router-link to="news" class="footer-main-link">Neuigkeiten</router-link>
        <router-link to="projects" class="footer-main-link">Projekte</router-link>
        <a href="https://pool.einfachIOTA.de" class="footer-main-link">Pool</a>
      </div>
      <div class="footer-main">
        <h4>Mehr</h4>
        <a href="https://discord.gg/WdfXseU" target="_blank" class="footer-main-link">Discord</a>
        <a href="https://twitter.com/einfachIOTA" target="_blank" class="footer-main-link">Twitter</a>
            <a href="https://github.com/einfachiota" target="_blank" class="footer-main-link">Github</a>
      </div>
      <div class="footer-main">
        <h4>Partner</h4>
        <a href="https://powsrv.io/" target="_blank" class="footer-main-link">powsrv.io</a>
        <a href="https://tanglebay.org/forum/" target="_blank" class="footer-main-link">Tanglebay.org</a>
      </div>
      <div class="footer-main">
        <h4>IOTA</h4>
        <a href="https://www.iota.org" target="_blank" class="footer-main-link">Website</a>
        <a href="https://ecosystem.iota.org" target="_blank" class="footer-main-link">Öksystem</a>
        <a href="https://blog.iota.org" target="_blank" class="footer-main-link">Blog</a>
      </div>
    </div>
    <hr>
    <div class="row">
      <div class="footer-main">
        <router-link to="imprint" class="footer-main-link">Impressum</router-link>
      </div>
      <div class="footer-main">
        <router-link to="privacy" class="footer-main-link">Datenschutz</router-link>
    </div>
    </div>
    
  </div>
</template>

<style lang="scss">
.footer {
  background-color: var(--secondary-2);
  width: 100%;
  padding: 40px 150px;
  box-sizing: border-box;
  text-align: center;
  .container {
    box-sizing: border-box;
    width: auto;
  }
  .footer-main {
    font-size: 0;
    display: inline-block;
    vertical-align: top;
    margin-right: 110px;

    h4 {
      font-size: 18px;
      color: var(--white);
      line-height: 1;
      margin: 0 0 15px 0;
    }
    .footer-main-link {
      display: block;
      margin: 0;
      line-height: 2;
      font-size: 18px;
      color: var(--light);
      text-decoration: none;
      &:hover {
        color: var(--white);
      }
    }
  }
}
</style>
