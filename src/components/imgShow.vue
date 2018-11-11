<template>
  <div class="container">
    <div class="img-show">
      <img src="../assets/imgs/car.jpg" class="img-show__img" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'imgShow'
}
</script>

<style lang="scss" type="text/css">
.container {
  width: 100%;
  height: 500px;
}

.img-show {
  width: 100%;
  height: 500px;
  position: relative;

  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-image: url("../assets/imgs/car.jpg");
    background-color: rgba(255, 255, 255, .1);
    filter: blur(8px);
    z-index: 9;
  }

  &__img {
    width: 256px;
    height: 192px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: -96px;
    z-index: 10;
    border-radius: 5px;
    box-shadow: 0 0 20px rgba(0,0,0, .1), 2px 2px 5px #333333;
  }
}
</style>
