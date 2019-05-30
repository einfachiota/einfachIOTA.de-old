<template>
  <nav v-bind:class="{ open: navStateOpen }" class="main-nav">
    <router-link to="/" class="nav-item nav-item--logo" exact-active-class="active">
      <img alt="einfachIOTA" class="logo" src="../assets/logo.svg">
    </router-link>

    <div v-bind:class="{ open: navStateOpen }" class="menu-btn-container" @click="toggleNav">
      <div class="menu-btn">
        <span class="top"></span>
        <span class="center"></span>
        <span class="bottom"></span>
      </div>
    </div>

    <div v-bind:class="{ open: navStateOpen }" class="nav-menu">
      <router-link v-on:click.native="navStateOpen = false" to="/news" class="nav-item" active-class="active">
        <span >Neuigkeiten</span>
      </router-link>
      <router-link v-on:click.native="navStateOpen = false"  to="/knowledge" class="nav-item" active-class="active">
        <span>Wissen</span>
      </router-link>
      <router-link v-on:click.native="navStateOpen = false"  to="/projects" class="nav-item" active-class="active">
        <span>Projekte</span>
      </router-link>
      <router-link v-on:click.native="navStateOpen = false"  to="/workshop" class="nav-item" active-class="active">
        <span>Workshop</span>
      </router-link>
      <router-link v-on:click.native="navStateOpen = false"  to="/tutorials" class="nav-item" active-class="active">
        <span>Tutorials</span>
      </router-link>
      <router-link v-on:click.native="navStateOpen = false"  to="/coordicide" class="nav-item" active-class="active">
        <span>Coordicide</span>
      </router-link>
      <router-link v-on:click.native="navStateOpen = false"  to="/supporter" class="nav-item" active-class="active">
        <span>Unterstützer</span>
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navStateOpen: false
    };
  },
  methods: {
    toggleNav() {
      this.navStateOpen = !this.navStateOpen;
    }
  }
};
</script>

<style lang="scss">
// ------------------------------------------
//  N A V I G A T I O N
// ------------------------------------------

.main-nav {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--white);
  border-bottom: 5px solid var(--primary);
  transition: all 200ms ease-in-out;
  .menu-btn {
    display: none;
  }
  .nav-menu {
    height: 100%;
    display: flex;
    align-items: center;
  }
  .nav-item {
    position: relative;
    overflow: hidden;
    height: 100%;
    padding: 0 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--dark);
    font-family: "Roboto Slab";
    font-weight: bold;
    text-decoration: none;
    opacity: 0.75;
    transition: all 200ms ease-in-out;
    &--logo {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 20px;
      opacity: 1;
      img.logo {
        width: auto;
        height: 35px;
        transition: all 200ms ease-in-out;
      }
    }
    &:before {
      content: "";
      position: absolute;
      top: -5px;
      height: 10px;
      width: 0;
      border-radius: var(--border-radius);
      transition: all 200ms ease-in-out;
    }
    &:hover,
    &.active {
      opacity: 1;
      background-color: var(--black_5);
      color: var(--primary);
      &:before {
        content: "";
        position: absolute;
        top: -5px;
        bottom: -5px;
        height: 10px;
        width: 50px;
        border-radius: var(--border-radius);
        background-color: var(--primary);
      }
    }
    &:hover {
      cursor: pointer;
      &:before {
        width: 10px;
      }
    }
  }
}

// ------------------------------------------
//  M O B I L E
// ------------------------------------------

@media only screen and (max-width: 1100px) {
  .main-nav {
    .nav-menu {
      .nav-item {
        padding: 0 40px;
      }
    }
  }
}

@media only screen and (max-width: 992px) {
  .main-nav {
    &.open {
      background-color: var(--white);
      &.normal {
        background-color: var(--white);
      }
    }
    .menu-btn-container {
      height: 70px;
      width: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 300ms ease-in-out;
      .menu-btn {
        position: relative;
        height: 29px;
        width: 29px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: all 300ms ease-in-out;
        span {
          position: absolute;
          height: 3px;
          width: 100%;
          background-color: var(--dark);
          border-radius: var(--border-radius-sm);
          transition: all 300ms ease-in-out;
        }
        .top {
          top: 5px;
        }
        .bottom {
          bottom: 5px;
        }
      }
      &.open {
        background-color: var(--white_10);
        .menu-btn {
          transform: rotate(180deg);
        }
        .center {
          width: 3px;
        }
        .top {
          transform: rotate(45deg);
          top: 13px;
        }
        .bottom {
          transform: rotate(-45deg);
          bottom: 13px;
        }
      }
      &:hover {
        cursor: pointer;
        background-color: var(--white_10);
        .center {
          width: 15px;
        }
        .top,
        .bottom {
          width: 25px;
        }
      }
      &.open:hover {
        .center {
          width: 3px;
        }
      }
      &.normal {
        span {
          background-color: var(--dark);
        }
        &:hover {
          background-color: var(--black_10);
        }
      }
    }
    .nav-menu {
      display: none;
      .nav-item {
        height: 100px;
        border-bottom: var(--border-sm_light);
        &:first-child {
          border-top: var(--border-sm_light);
        }
        &:before {
          left: -5px;
          bottom: auto;
          width: 10px;
          height: 50px;
          top: 25px;
        }
      }
      &.open {
        position: fixed;
        top: 70px;
        left: 0;
        width: 100%;
        height: calc(100vh - 70px);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: stretch;
        background-color: var(--white);
      }
      &.normal {
        background-color: var(--white);
        .nav-item {
          border-bottom: var(--border-sm_dark);
          &:first-child {
            border-top: var(--border-sm_dark);
          }
        }
      }
    }
  }
}
</style>