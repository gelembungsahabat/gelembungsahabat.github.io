<template>
  <div class="container-main">
    <NavBar/>
      <h1 class="title">
        Welcome to My Personal Blog!  <br/>

      </h1>
  </div>
</template>

<script>
import NavBar from "~/components/navBar.vue"
export default {
  NavBar
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
/* main */
.container-main {
  background-image: url("../assets/images/Confetti-Doodles.svg");
  @apply h-screen justify-center w-full bg-cover;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  padding-top: 18%;
  text-align: center;
  font-weight: bold;
  font-size: 60px;
  color: #ffffff;
  letter-spacing: 1px;
}
/*
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
} */

.links {
  padding-top: 15px;
}
</style>
