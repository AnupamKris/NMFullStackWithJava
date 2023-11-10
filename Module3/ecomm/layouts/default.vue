<template>
  <main>
    <NavBar />
    <slot />
    <footer>
      <div class="col1">
        <h3>Products</h3>
        <span>Gaming</span>
        <span>Graphic Design</span>
        <span>Office</span>
        <span>Home</span>
        <span>Spares</span>
      </div>
      <div class="col2">
        <h3>Locations</h3>
        <span>India</span>
        <span>South Africa</span>
        <span>United States</span>
        <span>United Kingdom</span>
      </div>
      <div class="col3">
        <h3>Help Center</h3>
        <span>FAQs</span>
        <span>Shipping</span>
        <span>Terms & Conditions</span>
        <span>Privacy Policy</span>
      </div>
      <div class="col4">
        <h3>Follow</h3>
        <div class="icons">
          <span class="facebook"><Icon name="uil:facebook" /> </span>
          <span class="instagram"><Icon name="uil:instagram" /></span>
          <span class="twitter"><Icon name="uil:twitter" /></span>
          <span class="youtube"><Icon name="uil:youtube" /></span>
        </div>
      </div>
    </footer>
  </main>
</template>

<script setup></script>

<style lang="scss">
main {
  height: 100vh;
  .page {
    padding-top: 70px;
  }
}

footer {
  height: 230px;
  width: 100%;
  background: #141414;
  color: white;

  display: flex;
  justify-content: space-around;
  align-items: center;

  .col1,
  .col2,
  .col3,
  .col4 {
    display: flex;
    flex-direction: column;
    // justify-content: space-around;
    align-items: center;

    height: 70%;

    h3 {
      width: 100%;
      color: #cccccc;
    }

    span {
      width: 100%;
      color: #808080;
      font-size: 12px;
      margin-top: 10px;
    }
  }

  .col4 {
    .icons {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 10px;
    }
    span {
      display: flex;
      justify-content: space-around;
      margin-right: 15px;
      align-items: center;
      width: 25px;
      height: 25px;

      .icon {
        width: 100%;
        height: 100%;
      }
    }
    .facebook:hover {
      color: #5085f7;
    }

    .instagram:hover {
      color: #e1306c;
    }

    .twitter:hover {
      color: #00acee;
    }

    .youtube:hover {
      color: #ff0000;
    }
  }
}

.col1, .col2, .col3 {
  span:hover{
    color: #5085f7;
  }
}
</style>
