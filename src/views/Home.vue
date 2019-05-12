<template>
  <div class="home">

    <div class="hero">
      <h1 class="heading">Willkommen bei einfachIOTA.de</h1>
      <p class="sub-heading">Die Seite, die IOTA einfach erklärt!</p>
    </div>

    <div class="section section-background knowledge">
      <div class="container">
        <h2>Du bist neu bei IOTA?</h2>
        <p>Dann haben wir genau das Richtige für dich! Die Grundlagen von IOTA haben wir in unserem Wiki für dich zusammengefasst und einfach erklärt, schau mal rein! Falls du trotzdem noch Fragen hast, zögere nicht uns zu kontaktieren!</p>
        <router-link
          to="/knowledge"
          tag="button"
          class="el-button el-button--primary"
        >Entdecke die Grundlagen</router-link>
      </div>
    </div>

    <div class="section news">
      <div class="container">
        <div class="headline-wrapper">
          <h2>Neuigkeiten</h2>
          <router-link to="/news" tag="button" class="el-button el-button--primary">Alle Neuigkeiten</router-link>
        </div>
        <div class="divider"></div>
        <LatestNews/>
      </div>
    </div>

    <div class="section section-background knowledge">
      <div class="container">
        <h2>Folge uns oder mach mit</h2>
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
    </div>

    <div class="section projects">
      <div class="container">
        <div class="headline-wrapper">
          <h2>Projekte der Woche</h2>
          <router-link
            to="/projects"
            tag="button"
            class="el-button el-button--primary"
          >Entdecke mehr Projekte</router-link>
        </div>
        <div class="divider"></div>
        <LatestProjects/>
      </div>
    </div>

    <div class="section section-background knowledge">
      <div class="container">
        <h2>Werde Unterstützer</h2>
        <p>Wenn dir gefällt was wir tun, kannst du uns auf zweierlei Arten unterstützen. Du kannst unserer Community beitreten und uns bei Aufgaben und Projekten unter die Arme greifen, oder du kannst uns ein paar IOTA schicken..</p>
        <router-link
            to="/supporter"
            tag="button"
            class="el-button el-button--primary"
          >Unsere Unterstützer</router-link>
      </div>
    </div>

    <div class="section tutorials">
      <div class="container">
        <div class="headline-wrapper">
          <h2>Tutorials</h2>
          <router-link
            to="/tutorials"
            tag="button"
            class="el-button el-button--primary"
          >Alle Tutorials</router-link>
        </div>
        <div class="divider"></div>
        <LatestTutorials/>
      </div>  
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import LatestNews from "@/components/LatestNews.vue";
import LatestProjects from "@/components/LatestProjects.vue";
import LatestTutorials from "@/components/LatestTutorials.vue";

export default {
  name: "home",
  components: {
    LatestNews,
    LatestProjects,
    LatestTutorials
  }
};
</script>

<style lang="scss">
.el-main {
  padding: 0px !important;
}
.home {
  text-align: center;
}
.hero {
  margin: 0 10px;
}
.section {
  padding: 80px 0;
  &-background {
    background-color: var(--light);
    p {
      max-width: 600px;
      margin: 15px auto 30px;
    }
    a {
      text-decoration: none;
    }
  }

  .headline-wrapper {
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
@media only screen and (max-width: 740px) {
  .hero {
      padding-top: 40px;
  }
  .headline-wrapper {
    flex-wrap: wrap;
    h2 {
      margin-bottom: 20px;
    }
  }
  .btn-social  {
      margin-bottom: 5px !important;
  }
}

</style>
