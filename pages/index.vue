<template>
  <div>
    <NavBar/>
    <div class="container-main">

        <h1 class="title">
          Welcome to My Personal Blog!
        </h1>
        <h4 class="subtitle">
          Sorry, this blog is under construction :(
        </h4>
    </div>
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
  background: url("../assets/images/Confetti-Doodles.svg"), rgba(0, 0, 0, 1);
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
  padding-top: 17%;
  text-align: center;
  font-weight: bold;
  font-size: 60px;
  color: #ffffff;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 30px;
  color: #ffffff;
  word-spacing: 5px;
  padding-bottom: 15px;
  text-align: center;
}

.links {
  padding-top: 15px;
}
</style>
