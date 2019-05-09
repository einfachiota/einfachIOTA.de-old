<template>
  <nav class="main-nav">


    <router-link to="/" class="nav-item nav-item--logo" exact-active-class="active">
        <img alt="einfachIOTA" class="logo" src="../assets/logo.svg" />
    </router-link>


    <div class="nav-menu">
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
  computed: {
    itemsInCart() {
      let cart = this.$store.getters.cartProducts;
      return cart.reduce((accum, item) => accum + item.quantity, 0);
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
  z-index: 1;
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--white);
  box-shadow: 0 3px 6px rgba(0,0,0,.15);
  transition: all 200ms ease-in-out;
  .nav-menu {
    display: flex;
    align-items: center;
    height: 100%;
  }
  .nav-item {
    position: relative;
    overflow: hidden;
    height: 100%;
    padding: 0 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: var(--dark);
    text-decoration: none;
    opacity: .75;
    transition: all 200ms ease-in-out;
    &--logo {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-left: 15px;
      padding-right: 15px;
      opacity: 1;
    }
    .logo {
      width: 55px;

    }
    &:before {
      content: '';
      position: absolute;
      bottom: -5px;
      height: 10px;
      width: 0;
      border-radius: 10px;
      transition: all 200ms ease-in-out;
    }
    &:hover, &.active {
      opacity: 1;
      background-color: rgba(0,0,0,.05);
      color: var(--secondary-2);
      &:before {
        content: '';
        position: absolute;
        bottom: -5px;
        height: 10px;
        width: 50px;
        border-radius: 10px;
        background-color: var(--secondary-2);
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
    background-color: rgba(0,0,0,.1);
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
      &:hover, &.active {
        background-color: rgba(255,255,255,.1);
      }
    }
  }
}

</style>