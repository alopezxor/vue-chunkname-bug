<template>
  <div>
    <p>This image has a wrong relative path in build</p>
    <div class="bg-image"></div>
  </div>
</template>

<style lang="scss" scoped>
.bg-image {
  background-image: url('../assets/logo.png');
  background-size: contain;
  width: 120px;
  height: 120px;
}
</style>