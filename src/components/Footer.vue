<template>
  <div class="footer">
    <div class="row">
      <div class="footer-main">
        <h4>einfachIOTA</h4>
        <a href="www.einfachIOTA.de/news" class="footer-main-link">News</a>
        <a href="pool.einfachIOTA.de/news" class="footer-main-link">Pool</a>
        <a href="www.einfachIOTA.de/news" class="footer-main-link">Team</a>
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
        <a href="www.einfachIOTA.de/news" class="footer-main-link">Impressum</a>
      </div>
      <div class="footer-main">
      <a href="pool.einfachIOTA.de/news" class="footer-main-link">Datenschutz</a>
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
  height: 340px;
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
