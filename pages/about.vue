<template>
  <div class="container-main">
    <NavBar/>
    <div>
      <h1 class="title">
        About
      </h1>
      <h4 class="subtitle">
        blog ini dibuat menggunakan framework NuxtJS,<br>
         kenapa pake NuxtJS, ko ngga VueJS langsung ? ya karna simple aja wakaka
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
.container-main {
  background-image: url("../assets/images/Confetti-Doodles.svg");
  @apply h-screen justify-center w-full bg-cover;
}


.links {
  padding-top: 15px;
}
</style>
