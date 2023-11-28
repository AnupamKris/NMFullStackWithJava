<template>
  <div></div>
</template>

<script setup>
const auth = useFirebaseAuth();
const router = useRouter();
onMounted(() => {
  auth.signOut();
  router.push("/");
});
</script>

<style lang="scss" scoped></style>
