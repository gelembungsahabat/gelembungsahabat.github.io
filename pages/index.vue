<template>
  <div>
    <NavBar/>
    <div class="container-main">
      <div class="header">
        <div id="bg">
          <h1 class="title">
          Welcome to My Personal Blog!
        </h1>
        <h4 class="subtitle">
          Sorry, this blog is under construction :(
        </h4>
        </div>
      </div>

    </div>
    <div class="container">
      <h1 class="text-4xl text-center">
        Masih bingung cuy mau ngisi konten apaan <br>
        kasih ide dungs :( <br>
      </h1>
    </div>
    <Footer/>
  </div>
</template>

<script>
import NavBar from "~/components/navBar.vue"
import Footer from "~/components/footer.vue"
export default {
  NavBar,
  Footer
}
window.addEventListener('scroll',function(){
  var headerbg = document.getElementById('bg')
  headerbg.style.opacity = 1 - +window.pageYOffset/500+''
  headerbg.style.top = +window.pageYOffset/2+'px'
  headerbg.style.backgroundPositionY = - +window.pageYOffset/2+'px'
})
</script>


<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/


.header {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #000;

}
.header #bg {
  position: absolute;
  top:0;
  left:0;
  width:100%;
  height: 100%;
  background: url("../assets/images/Confetti-Doodles.svg");
}


/* main */
.container-main {
  /* background: url("../assets/images/Confetti-Doodles.svg"), rgba(0, 0, 0, 1); */
  @apply h-screen justify-center w-full bg-cover bg-fixed;

}

.container {
  @apply h-screen w-full
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

</style>
