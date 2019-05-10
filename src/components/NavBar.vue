<template>
  <nav v-bind:class="{ open: navStateOpen }"  class="main-nav">

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

    <div v-bind:class="{ open: navStateOpen }"  class="nav-menu">
      <router-link to="/news" class="nav-item" active-class="active">
        <span>Neuigkeiten</span>
      </router-link>
      <router-link to="/knowledge" class="nav-item" active-class="active">
        <span>Wissen</span>
      </router-link>
      <router-link to="/projects" class="nav-item" active-class="active">
        <span>Projekte</span>
      </router-link>
      <router-link to="/tutorials" class="nav-item" active-class="active">
        <span>Tutorials</span>
      </router-link>
      <router-link to="/supporter" class="nav-item" active-class="active">
        <span>Unterstützer</span>
      </router-link>
    </div>

  </nav>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      navStateOpen: false
    };
  },
  computed: {
    itemsInCart() {
      let cart = this.$store.getters.cartProducts;
      return cart.reduce((accum, item) => accum + item.quantity, 0);
    }
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
  box-shadow: var(--box-shadow);
  transition: var(--transition-200);
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
    font-weight: bold;
    text-decoration: none;
    opacity: 0.75;
    transition: var(--transition-200);
    &--logo {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 20px;
      opacity: 1;
      img.logo {
        width: auto;
        height: 40px;
        transition: var(--transition-200);
      }
    }
    &:before {
      content: "";
      position: absolute;
      bottom: -5px;
      height: 10px;
      width: 0;
      border-radius: var(--border-radius);
      transition: var(--transition-200);
    }
    &:hover,
    &.active {
      opacity: 1;
      background-color: var(--black_5);
      color: var(--primary);
      &:before {
        content: "";
        position: absolute;
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
  &.top {
    background-color: var(--black_10);
    box-shadow: none;
    .nav-item {
      color: var(--white);
      &--logo {
        .logo-wrapper {
          filter: invert(0%);
        }
        .nile-typo {
          filter: invert(0%);
        }
      }
      &:hover,
      &.active {
        background-color: var(--white_10);
      }
    }
  }
}

img.logo.logo-rotation-2 {
  opacity: 0.1;
}

img.logo.logo-rotation-3 {
  opacity: 0.1;
}

img.logo.logo-rotation-4 {
  opacity: 0.1;
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
      transition: var(--transition-300);
      .menu-btn {
        position: relative;
        height: 29px;
        width: 29px;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: var(--transition-300_cubic);
        span {
          position: absolute;
          height: 3px;
          width: 100%;
          background-color: var(--dark);
          border-radius: var(--border-radius-sm);
          transition: var(--transition-300_cubic);
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