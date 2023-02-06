<template>
    <footer class="footer">
      <div class="footer-container">
        <p class="footer-name">	&#169; Copyright</p>
        <div class="footer-links">
          <a href="https://www.linkedin.com/in/geissonchagas/" class="footer-link">
            <i class="fa fa-linkedin-square fa-2x"></i>
          </a>
          <a href="https://github.com/GeissonChagas/make-your-coffee" class="footer-link">
            <i class="fa fa-github-square fa-2x"></i>
          </a>
        </div>
      </div>
    </footer>
  </template>
  <script>
    export default {
      name: 'footer-component'
    }
  </script>

<style lang="scss">
  
// Variables
$background-color: #444;
$text-color: white;
$padding: 20px 0;
$margin-top: 2rem;
$font-size: 24px;
$font-weight: bold;
$side-margin: 20px;
$link-color: white;

// Footer styles
.footer {
  background-color: $background-color;
  color: $text-color;
  padding: $padding;
  text-align: center;
  margin-top: $margin-top;
}

.footer-container {
  max-width: 800px;
  margin: 0 auto;
}

.footer-name {
  font-size: $font-size;
  font-weight: $font-weight;
  margin-bottom: $padding;
}

.footer-links {
  display: flex;
  justify-content: center;
}

.footer-link {
  color: $link-color;
  margin: 0 $side-margin;
  text-decoration: none;
}

.fa-linkedin-square, .fa-github-square {
  color: $link-color;
}

</style>
