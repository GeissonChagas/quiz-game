<template>
  <div class="banner-container">
    <div class="banner">
      <img src="../../public/img/banner.jpg" alt="Banner Image">
      <h2 class="banner-title">Welcome to our website</h2>
      <p class="banner-description">Have fun with our Quiz Game!</p>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'banner-component'
  }
</script>
<style>
  .banner-container {
    background-image: linear-gradient(to bottom, #ddd, #eee);
    padding: 50px 0;
    text-align: center;
  }
  
  .banner {
    display: inline-block;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 0px 10px #ccc;
    padding: 20px;
    max-width: 800px;
  }
  
  .banner img {
    max-width: 100%;
    width: 100%;
  }
  
  .banner-title {
    margin-top: 20px;
    font-size: 36px;
    font-weight: bold;
  }
  
  .banner-description {
    margin-top: 20px;
    font-size: 24px;
  }
</style>