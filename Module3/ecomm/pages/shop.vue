<template>
  <div class="shop">
    <div class="products">
      <div class="product" v-for="product in products">
        <img :src="'/' + product.image" alt="" />
        <h3>{{ product.name }}</h3>
        <span>{{ product.subname }}</span>
        <div class="price">
          <p>₹{{ product.price }}</p>
          <button @click="redirectTo(product.id)">Buy Now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { collection } from "firebase/firestore";

const db = useFirestore();
const products = useCollection(collection(db, "products"));

const router = useRouter();

const redirectTo = (prodid) => {
  router.push("/product/" + prodid);
};

onMounted(() => {
  console.log(products.value);
});
</script>

<style lang="scss" scoped>
.shop {
  min-height: 100%;
  width: 100%;

  padding-top: 70px;

  background: #141414;

  .products {
    width: 100%;
    // display: flex;
    // flex-wrap: wrap;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 15px;
    padding: 15px;
  }

  .product {
    height: 250px;
    margin-right: 15px;
    width: 300px;

    background: #222222;
    border-radius: 15px;

    position: relative;
    margin-top: 80px;
    padding-bottom: 15px;
    padding-top: 80px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    color: #ffffff;

    h3 {
      width: 90%;
      text-align: center;
    }

    img {
      height: auto;
      width: 70%;
      max-height: 150px;
      position: absolute;
      top: -70px;
      left: 50%;
      transform: translateX(-50%);
    }
    span {
      color: #ececec;
      width: calc(100% - 40px);
      max-height: 50px;
      overflow: hidden;

      text-align: center;
    }
    .price {
      width: calc(100% - 40px);
      display: flex;
      justify-content: space-between;
      align-items: center;

      button {
        height: 35px;
        outline: none;
        border: none;
        background: #85a6ff;
        color: #141414;
        padding: 0 10px;
        border-radius: 10px;
        font-weight: 600;
      }
    }
  }
}
</style>
