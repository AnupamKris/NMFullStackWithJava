<template>
  <div class="buy">
    <InputField type="text" v-model="name" label="Name" id="name" />
    <InputField type="text" v-model="add1" label="Address Line 1" id="add1" />
    <InputField type="text" v-model="add2" label="Address Line 2" id="add2" />
    <InputField type="text" v-model="add3" label="Address Line 3" id="add3" />
    <InputField type="text" v-model="pin" label="Pincode" id="pin" />
    <InputField type="text" v-model="phone" label="Phone Number" id="phone" />
    <InputField type="text" v-model="landmark" label="Landmark" id="lmrk" />

    <div class="item" v-if="product">
      <div class="image">
        <img :src="'/' + product.image" alt="" />
      </div>
      <div class="content">
        <h1>{{ product.name }}</h1>
        <h3>₹{{ product.price }}</h3>

        <button @click="checkout">Checkout</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { collection, getDoc, doc, setDoc } from "firebase/firestore";
import { v4 } from "uuid";

const name = ref("");
const add1 = ref("");
const add2 = ref("");
const add3 = ref("");
const landmark = ref("");
const pin = ref("");
const phone = ref("");

const route = useRoute();
const router = useRouter();
const db = useFirestore();
const user = useCurrentUser();
const products = useCollection(collection(db, "products"));
const product = ref(undefined);

const checkout = () => {
  if (name.value && add1.value && add2.value && add3.value && pin.value) {
    const order = {
      date: new Date(),
      price: product.value.price,
      items: [{ id: route.params.id, qty: 1 }],
    };
    console.log(order);
    let userdoc = doc(db, "users", user.value.email);
    getDoc(userdoc).then((doc) => {
      if (doc.exists()) {
        console.log("Document data:", doc.data());
        let orders = doc.data().orders;
        orders[v4().split("-")[0]] = order;
        console.log(orders, "-");
        setDoc(userdoc, { orders: orders }, { merge: true });
        alert("Order Placed");
        router.push("/account");
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    });
  } else {
    alert("Please fill all the fields");
  }
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
.buy {
  padding-top: 70px;
  background: #141414;
  color: #85a6ff;
  min-height: 100%;
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;

  .item {
    width: 80%;

    height: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // flex-direction: column;
    border: 2px solid #222222;
    border-radius: 15px;

    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 15px;

    .image {
      width: 50%;
      height: 100%;
      img {
        width: 100%;
        height: auto;
        max-width: 100%;
      }
    }

    .content {
      width: 50%;
      height: 90%;

      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      padding: 30px 0;

      border-left: 2px solid #222222;
      padding-left: 25px;

      h1 {
        color: #ffffff;
      }

      h3 {
        width: 100%;
        text-align: left;
      }

      button {
        height: 50px;
        width: 80%;
        border-radius: 25px;
        outline: none;
        border: none;
        background: #85a6ff;
        font-size: 18px;
        font-weight: 400;
        align-self: flex-start;

        margin-top: 15px;
      }
    }
  }
}
</style>
