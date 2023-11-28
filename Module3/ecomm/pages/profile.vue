<template>
  <div class="profile page">
    <div class="reg">
      <h4>START FOR FREE</h4>
      <h1 v-if="mode == 'signup'">
        Create new account
        <p>.</p>
      </h1>
      <h1 v-else>
        Enter your details
        <p>.</p>
      </h1>
      <p v-if="mode == 'signup'">
        Already a Member? <span @click="mode = 'login'">Log In</span>
      </p>
      <p v-else>New user? <span @click="mode = 'signup'">Sign Up.</span></p>

      <div class="form">
        <div class="group">
          <InputField
            v-if="mode == 'signup'"
            id="first"
            v-model="firstname"
            label="First Name"
            type="text"
            icon="fluent:contact-card-16-filled"
          />
          <InputField
            v-if="mode == 'signup'"
            id="last"
            v-model="lastname"
            label="Last Name"
            type="text"
            icon="fluent:contact-card-16-filled"
          />
        </div>
        <InputField
          id="email"
          v-model="email"
          label="Email"
          type="email"
          icon="ic:round-email"
        />
        <InputField
          id="password"
          v-model="password"
          label="Password"
          type="password"
          icon="fluent:password-16-filled"
        />
        <InputField
          v-if="mode == 'signup'"
          id="repassword"
          v-model="passwordConfirm"
          label="Confirm Password"
          type="password"
          icon="fluent:password-16-filled"
        />
        <button @click="signup" v-if="mode == 'signup'">Sign Up</button>
        <button @click="login" v-else>Log In</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { doc, setDoc } from "firebase/firestore";
const firstname = ref("");
const lastname = ref("");

const email = ref("");
const password = ref("");
const passwordConfirm = ref("");

const mode = ref("login");

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const auth = useFirebaseAuth();
const user = useCurrentUser();
const router = useRouter();

onMounted(() => {
  if (user.value) {
    router.push("/account");
  }
});

const signup = () => {
  if (password.value !== passwordConfirm.value) {
    alert("Passwords do not match");
    return;
  }

  console.log(firstname.value, lastname.value, email.value, password.value);

  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      const db = useFirestore();
      const docRef = doc(db, "users", user.email);
      setDoc(docRef, {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        orders: [],
      });
      router.push("/account");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

const login = () => {
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      router.push("/account");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      alert(errorMessage);
    });
};
</script>

<style lang="scss" scoped>
.profile {
  background: #141414;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  .form {
    display: flex;
    justify-content: center;
    // align-items: center;
    flex-direction: column;
    width: 100%;
  }
}

.reg {
  width: 40%;
  margin: 0 60px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h4 {
    color: #bdbdbd;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 10px;
    width: 100%;
  }
  h1 {
    width: 100%;
    color: #ffffff;
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 10px;
    p {
      font-size: 40px;
      font-weight: 600;
      margin-bottom: 10px;
      color: #85a6ff;
      width: auto;
    }

    display: flex;
  }

  p {
    width: 100%;
    color: #bdbdbd;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 10px;

    a {
      color: #85a6ff;
      text-decoration: none;
      transition: 0.3s;
      &:hover {
        color: #ffffff;
      }
    }
  }

  button {
    width: calc(80% + 10px);
    height: 50px;
    border-radius: 10px;
    background: #85a6ff;
    color: #ffffff;
    font-size: 14px;
    font-weight: 400;
    margin-top: 20px;
    border: none;
    outline: none;
    transition: 0.3s;
    &:hover {
      background: #6b8cff;
    }
  }
}

.group {
  display: flex;
  //   justify-content: center;
  align-items: center;
  width: 100%;

  .field {
    width: 40% !important;
    margin-right: 10px;
  }
}
</style>
