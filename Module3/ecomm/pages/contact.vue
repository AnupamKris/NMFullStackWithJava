<template>
  <div class="contact page">
    <h1>Contact</h1>
    <div class="contact-content">
      <p>
        If you have any questions or need help with something specific, please
        don't hesitate to contact us. We are here to help you.
      </p>

      <InputField type="text" label="First name" id="fname" />

      <InputField type="text" label="Last name" id="lname" />
      <InputField type="text" label="Phone Number" id="pnum" />
      <InputField type="email" label="E-mail" id="email" />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.contact {
  padding-top: 70px;
  background: #141414;
  color: #85a6ff;
}
</style>
