<template>
  <div class="product">
    <div class="loading" v-if="!product"></div>
    <div class="product-desc" v-else>
      <div class="image">
        <img :src="'/' + product.image" alt="image" />
      </div>
      <div class="content">
        <h1>{{ product.name }}</h1>
        <h3>{{ product.subname }}</h3>
        <p>{{ product.description }}</p>
        <div class="price">
          <p>₹{{ product.price }}</p>
          <button @click="buy">Buy Now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { doc, getDoc } from "firebase/firestore";

const db = useFirestore();
const route = useRoute();
const product = ref(undefined);
const router = useRouter();

const buy = () => {
  router.push("/buy/" + route.params.id);
};

onMounted(() => {
  console.log(route.params.id);
  getDoc(doc(db, "products", route.params.id)).then((doc) => {
    if (doc.exists()) {
      product.value = doc.data();
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  });
});
</script>

<style lang="scss" scoped>
.product {
  height: 100%;
  width: 100%;

  background: #141414;

  display: flex;
  justify-content: center;
  align-items: center;

  .product-desc {
    height: 100%;
    width: 100%;
    max-width: 1200px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    // flex-direction: column;

    .image {
      width: calc(50% - 20px);
      img {
        width: 100%;
      }
    }

    .content {
      width: calc(50% - 20px);

      color: #ffffff;

      text-align: justify;

      h3 {
        margin: 15px 0;
        color: #ececec;
      }

      .price {
        width: 100%;
        margin-top: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        p {
          font-size: 18px;
        }

        button {
          height: 40px;
          padding: 0 20px;
          border-radius: 20px;
          outline: none;
          border: none;
          font-weight: 500;
          background: #85a6ff;
        }
      }
    }
  }
}
</style>
