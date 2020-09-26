<template>
  <div>
    <NavBar />
    <div class="container pt-64">
      <h1 class="text-md sm:text-sm md:text-xl lg:text-xl xl:text-3xl text-center">
        Client sekarang masih belum ada
      </h1>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from "~/components/navBar.vue"
import Footer from "~/components/footer.vue"
export default {
  NavBar,
  Footer,
}
</script>


<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

.container {
  @apply h-screen justify-center min-w-full;
}
</style>
