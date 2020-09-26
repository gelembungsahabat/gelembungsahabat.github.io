<template>
  <div>
    <NavBar />
    <div class="container pt-64">
      <h1 class="text-md sm:text-sm md:text-xl lg:text-xl xl:text-3xl text-center">
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


<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  @apply h-screen justify-center min-w-full;
}

/* responsive */

@screen sm {
  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system,
      BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      sans-serif;
    display: block;
    padding-top: 17%;
    text-align: center;
    font-weight: bold;
    font-size: 20px;
    color: #ffffff;
    letter-spacing: 1px;
  }
  .subtitle {
    font-weight: 300;
    font-size: 13px;
    color: #ffffff;
    word-spacing: 5px;
    padding-bottom: 15px;
    text-align: center;
  }
  .header {
    position: relative;
    width: 100%;
    height: 50vh;
    overflow: hidden;
    background: #000;
  }
  .header #bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("../assets/images/Confetti-Doodles.svg");
  }
}

@screen md {
  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system,
      BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      sans-serif;
    display: block;
    padding-top: 35%;
    text-align: center;
    font-weight: bold;
    font-size: 30px;
    color: #ffffff;
    letter-spacing: 1px;
  }
  .subtitle {
    font-weight: 300;
    font-size: 20px;
    color: #ffffff;
    word-spacing: 5px;
    padding-bottom: 15px;
    text-align: center;
  }

  .header {
    position: relative;
    width: 100%;
    height: 50vh;
    overflow: hidden;
    background: #000;
  }
  .header #bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("../assets/images/Confetti-Doodles.svg");
  }
}

@screen lg {
  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system,
      BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      sans-serif;
    display: block;
    padding-top: 17%;
    text-align: center;
    font-weight: bold;
    font-size: 5px;
    color: #ffffff;
    letter-spacing: 1px;
  }
  .subtitle {
    font-weight: 300;
    font-size: 20px;
    color: #ffffff;
    word-spacing: 5px;
    padding-bottom: 15px;
    text-align: center;
  }

  .header {
    position: relative;
    width: 100%;
    height: 90vh;
    overflow: hidden;
    background: #000;
  }
  .header #bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("../assets/images/Confetti-Doodles.svg");
  }
}

@screen xl {
  .title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system,
      BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial,
      sans-serif;
    display: block;
    padding-top: 17%;
    text-align: center;
    font-weight: bold;
    font-size: 70px;
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

  .header {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: #000;
  }
  .header #bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("../assets/images/Confetti-Doodles.svg");
  }
}
</style>
