<template>
  <div class="contact page">
    <h1 class="text-center">Contact</h1>
    <div class="contact-content">
      <p class="text-center">
        If you have any questions or need help with something specific, please
        don't hesitate to contact us. We are here to help you.
      </p>
      <div class="textarea">
        <InputField type="text" label="First name" id="fname" />
        <InputField type="text" label="Phone Number" id="pnum" />
        <InputField type="email" label="E-mail" id="email" />
        <InputField type="text" label="Message" id="message" />
      </div>
      <div class="btn">
        <button class="btn-center">Submit</button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
h1 {
  text-align: center
}

p {
  text-align: center;
}

.textarea {
  max-width: 100vw;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin: 18px;
  align-items: center;
}

.contact {
  padding-top: 70px;
  background: #141414;
  color: #85a6ff;
  height: 69vh;
  width: 100vw;
}

.btn button {
  border: none;
  cursor: pointer;
  background-color: #252525;
  border-radius: 15px;
  color: white;
  opacity: 0.8;
  border: 3px solid #303030;
  padding: 15px 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all .3s ease-in-out;
  margin: 0 auto;
}

.btn button:hover {
  border: 3px solid #85a6ff;
}

.btn button:active {
  background-color: #85a6ff;
}
</style>
