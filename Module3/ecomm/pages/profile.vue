<template>
  <div class="profile page">
    <div class="reg">
      <h4>START FOR FREE</h4>
      <h1>
        Create new account
        <p>.</p>
      </h1>
      <p>Already a Member? <NuxtLink to="login">Log In</NuxtLink></p>

      <div class="form">
        <div class="group">
          <InputField
            id="first"
            v-model="firstname"
            label="First Name"
            type="text"
            icon="fluent:contact-card-16-filled"
          />
          <InputField
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
          id="repassword"
          v-model="passwordConfirm"
          label="Confirm Password"
          type="password"
          icon="fluent:password-16-filled"
        />
        <button>Sign Up</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const firstname = ref("");
const lastname = ref("");

const email = ref("");
const password = ref("");
const passwordConfirm = ref("");
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
