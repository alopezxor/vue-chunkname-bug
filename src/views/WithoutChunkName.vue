<template>
  <div>
    <p>This image loads fine in build</p>
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