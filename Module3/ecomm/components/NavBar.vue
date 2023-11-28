<template>
  <div class="navbar">
    <div class="logo">E-Shop</div>

    <div class="items">
      <NuxtLink class="item" to="/">Home</NuxtLink>
      <NuxtLink class="item" to="/shop">Shop</NuxtLink>
      <NuxtLink class="item" to="/contact">Contact</NuxtLink>
    </div>

    <div class="user">
      <NuxtLink to="/logout" class="icon-u cart" :style="{ color: '#ff0000' }"
        ><Icon name="uil:power"
      /></NuxtLink>
      <NuxtLink to="/profile" class="icon-u profile"
        ><Icon name="uil:user"
      /></NuxtLink>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.navbar {
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;

  z-index: 10;
  background: #141414;
  border-bottom: 1px solid #222222;

  // set text color to inverse of background
  color: #fff;
  .logo {
    padding: 0 40px;
  }

  .items {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 40px;
    border-radius: 10px;

    // color
    .item {
      padding: 0 20px;

      height: 40px;
      border-radius: 11px;
      border-radius: 11px;

      display: flex;
      justify-content: center;
      align-items: center;

      margin: 0 5px;
    }
    a {
      text-decoration: none;
      color: #ffffff;
      transition: 0.3s;
      &:hover {
        color: #85a6ff;
      }
    }
  }

  .user {
    min-width: 80px;
    height: 40px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    margin: 0 20px;
    border-radius: 20px;

    background: #242424;
    color: #ffffff;

    a {
      text-decoration: none;
      color: #ffffff;
    }

    .icon-u {
      width: 30px;
      height: 30px;

      display: flex;
      justify-content: center;
      align-items: center;

      border-radius: 50%;

      transition: 0.3s;
      &:hover {
        cursor: pointer;
        background: #85a6ff;
      }
    }
  }
}
</style>
