<template>
  <div class="home page">
    <div class="main-product">
      <div class="text">
        <h1>Xbox Controller</h1>
        <h3>Xbox Core Wireless Controller – Carbon Black</h3>
        <p>
          Experience the modernized design of the Xbox Wireless Controller –
          Carbon Black, , featuring sculpted surfaces and refined geometry for
          enhanced comfort during gameplay. Stay on target with a hybrid D-pad
          and textured grip on the triggers, bumpers, and back case. Seamlessly
          capture and share content such as screenshots, recordings, and more
          with the new Share button. Use the Xbox Accessories app to remap
          buttons and create custom controller profiles for your favorite games.
        </p>

        <span>₹4,599</span>

        <button>
          <NuxtLink
            to="/product/xboxc"
            style="text-decoration: none; color: #141414"
            >Buy</NuxtLink
          >
        </button>
      </div>
      <div class="img">
        <img :src="xbox" alt="" />
        <span>XBOX</span>
      </div>
    </div>

    <div class="products">
      <div class="title">
        <h1>PRODUCTS</h1>
        <p>Which type of product are you looking for?</p>
        <span>Show More <Icon name="uil:arrow-right" /></span>
      </div>
      <div class="prods">
        <div class="product">
          <img :src="g102" alt="" />
          <p>Mice</p>
        </div>
        <div class="product">
          <img :src="shifter" alt="" />
          <p>Racing Gear</p>
        </div>
        <div class="product">
          <img :src="kb" alt="" />
          <p>Keyboard</p>
        </div>
      </div>
    </div>

    <div class="services">
      <div class="title">
        <h1>SERVICES</h1>
        <p>We provide top of the class after purchase services</p>
        <span>Read More <Icon name="uil:arrow-right" /></span>
      </div>

      <div class="cards">
        <div class="card">
          <p>Best Price</p>
          <span>
            We provide the best price for our products. We also provide
            discounts on bulk orders.
          </span>
        </div>
        <div class="card">
          <p>24/7 Support</p>
          <span>
            We provide 24/7 support for our customers. We are always there for
            you.
          </span>
        </div>
        <div class="card">
          <p>Fast Delivery</p>
          <span>
            We provide fast delivery for our customers. We are always there for
            you.
          </span>
        </div>
        <div class="card">
          <p>Returns and Refunds</p>
          <span
            >Recieved a faulty product, no worries. We got you covered.*</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import xbox from "@/assets/xbox.png";
import g102 from "@/assets/g102.png";
import shifter from "@/assets/shifter.webp";
import kb from "@/assets/kb.png";
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  background: linear-gradient(180deg, #141414 0%, #3a3a3a 100%);

  display: flex;
  align-items: center;
  flex-direction: column;

  .main-product {
    min-height: calc(100vh - 350px);
    width: 100%;
    max-width: 1200px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    .text {
      width: calc(50% - 60px);
      height: 100%;

      display: flex;
      justify-content: center;
      // align-items: center;
      flex-direction: column;

      font-family: "Poppins", sans-serif;

      // text-align: center;

      color: #ffffff;

      h1 {
        width: 100%;
        text-transform: uppercase;
        padding-top: 10px;
      }

      h3 {
        width: 100%;
        padding-top: 10px;

        color: #868686;
      }

      p {
        padding-top: 10px;
        font-size: 12px;
        text-align: justify;
      }

      span {
        padding-top: 10px;
        font-size: 24px;
        width: 100%;
      }

      button {
        height: 50px;
        padding: 0 20px;
        border-radius: 5px;

        outline: none;
        border: none;

        background: #85a6ff;
        color: #ffffff;
        width: 150px;

        margin-top: 10px;
      }
    }

    .img {
      width: 50%;
      height: 100%;

      display: flex;
      // justify-content: center;
      align-items: center;
      position: relative;

      img {
        width: 70%;
        z-index: 1;
      }

      span {
        font-size: 128px;
        right: 0;
        transform: rotateZ(-90deg);
        font-weight: 600;
        color: #85a6ff;

        position: absolute;
        right: 0px;
        z-index: 0;
      }
    }
  }

  .title {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;

    h1 {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: -35px;
      font-size: 48px;

      color: #85a6ff55;
    }

    p {
      color: #ffffff;
    }

    span {
      color: #85a6ff;
    }
  }

  .products {
    height: 100%;
    width: 100%;
    max-width: 1200px;
    padding-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;

    padding-bottom: 50px;

    .prods {
      width: 100%;
      height: 300px;

      margin-top: 50px;

      display: flex;
      justify-content: space-around;
      align-items: flex-end;

      .product {
        width: 300px;
        height: 200px;

        background: #242424;
        border-radius: 10px;

        display: flex;
        justify-content: flex-end;
        align-items: center;
        flex-direction: column;

        position: relative;

        img {
          width: 100%;
          height: 200px;

          position: absolute;
          top: -100px;
        }

        p {
          color: #ffffff;
          font-size: 18px;

          margin: 40px 0;
        }
      }
    }
  }
  .services {
    height: 400px;
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .title {
      margin-bottom: 20px;
    }

    .cards {
      // height: 300px;

      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;

      .card {
        width: calc(50% - 20px);
        height: 100px;
        background: #242424;

        color: #ffffff;
        border-radius: 10px;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        margin: 10px;

        p {
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 10px;
          width: calc(100% - 40px);
        }
        span {
          width: calc(100% - 40px);
          font-size: 14px;
        }
      }
    }
  }
}
</style>
