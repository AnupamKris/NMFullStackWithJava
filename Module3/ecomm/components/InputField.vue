<template>
  <div class="field">
    <input
      :type="type"
      :id="id"
      :value="modelValue"
      @input="updateValue"
      placeholder=" "
    />
    <label :for="id">{{ label }}</label>
    <Icon :name="icon" />
  </div>
</template>

<script setup>
const props = defineProps({
  label: String,
  type: String,
  id: String,
  value: String,
  icon: String,
});

const emit = defineEmits(["update:modelValue"]);

const modelValue = ref(props.value);

const updateValue = (e) => {
  modelValue.value = e.target.value;
  emit("update:modelValue", e.target.value);
};
</script>

<style lang="scss" scoped>
.field {
  height: 50px;
  width: calc(80% + 10px);
  position: relative;

  margin-top: 15px;

  label {
    color: #bdbdbd;
    font-size: 14px;
    font-weight: 400;

    position: absolute;
    top: 25px;
    left: 20px;
    transform: translateY(-50%);
    transition: 0.3s;
  }

  input {
    transition: 0.3s;
    height: 50px;
    width: 100%;
    padding: 0 20px;
    border-radius: 10px;
    border: 2px solid #303030;
    outline: none;
    background: #252525;
    color: #ffffff;
    padding-top: 10px;
  }

  input:focus + label,
  input:not(:placeholder-shown) + label {
    top: 13px;
    font-size: 10px;
  }

  input:focus {
    border: 2px solid #85a6ff;
  }
  input:focus + label {
    color: #85a6ff;
  }

  .icon {
    position: absolute;
    right: 10px;
    height: 100%;

    color: #bdbdbd;
    font-size: 20px;
    margin-right: 7px;
  }
}
</style>
