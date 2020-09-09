<template>
  <div>
    <NavBar />
    <div class="container-main">
      <div class="header">
        <div id="bg">
          <h1 class="title">
            About
          </h1>
          <h4 class="subtitle">
            Sorry, this blog is under construction :(
          </h4>
        </div>
      </div>

    </div>
    <div class="container">
      <h1 class="text-md sm:text-sm md:text-2xl lg:text-3xl xl:text-6xl text-center">
        Blog ini dibangun menggunakan framework NuxtJS, <br>
        knapa ga pake VueJS langsung aja? <br>
        ya karna uda nyaman pake NuxtJS wkaka
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
  Footer
}
</script>
