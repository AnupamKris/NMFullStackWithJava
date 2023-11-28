<template>
  <div class="account" v-if="userdata">
    <h3>{{ fullname }}</h3>
    <div class="orders">
      <h2>My Orders</h2>
      <div class="order" v-for="order in userdata.orders" :key="order.id">
        <div class="order-items">
          <div
            class="order-info"
            v-for="item in order.items"
            :key="item.id"
            :set="(prodData = getProductInfo(item.id))"
          >
            <img :src="prodData.image" alt="" />

            <h4>{{ prodData.name }}</h4>
            <h5>Qty: {{ item.qty }}</h5>
          </div>
        </div>
        <div class="order-summary">
          <div class="order-date">
            {{ new Date(order.date.seconds).toDateString() }}
          </div>
          <div class="order-price">₹{{ order.price }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { collection, doc } from "firebase/firestore";

const router = useRouter();
const db = useFirestore();
const user = useCurrentUser();
const products = useCollection(collection(db, "products"));

let userdata;
let fullname;

const getProductInfo = (id) => {
  const product = products.value.find((prod) => prod.id === id);
  return product;
};

onMounted(() => {
  if (!user.value) {
    router.push("/profile");
    console.log(user.value);
  } else {
    userdata = useDocument(doc(db, "users", user.value.email));
    fullname = computed(() => {
      if (userdata.value) {
        return userdata.value.firstname + " " + userdata.value.lastname;
      }
    });
  }
});
</script>

<style lang="scss" scoped>
.account {
  height: 100%;
  width: 100%;

  padding-top: 70px;

  background: #141414;

  display: flex;
  //   justify-content: center;
  align-items: center;
  flex-direction: column;

  h3 {
    color: #ffffff;
    width: 90%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 800;
    font-size: 36px;

    border-radius: 20px;
    border: 2px solid #222222;

    margin-top: 10px;
  }

  .orders {
    width: 90%;
    height: 100%;
    display: flex;
    // justify-content: center;
    align-items: center;
    flex-direction: column;

    h2 {
      font-size: 32px;
      margin-top: 15px;
      color: #ffffff;
    }
    .order {
      width: 100%;
      height: auto;
      background: #222222;
      border-radius: 20px;
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      flex-direction: column;
      max-width: 600px;
      border: 2px solid #3f3f3f;

      padding: 20px;

      .order-items {
        display: flex;
        flex-direction: column;
        width: 100%;
      }

      .order-info {
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 100%;

        img {
          width: 50px;
          height: 50px;
          border-radius: 10px;
        }

        h4 {
          color: #ffffff;
          font-weight: 600;
          font-size: 16px;
        }
        h5 {
          color: #bdbdbd;
          font-weight: 400;
          font-size: 14px;
        }
      }

      .order-summary {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;

        color: #ffffff;
      }
      .order-price {
        color: #ffffff;
        font-weight: 600;
        font-size: 16px;
      }
    }
  }
}
</style>
