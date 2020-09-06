<template>
  <div class="navbar">

    <!-- logo JDD -->
    <div class="logo">
      <a href="/">

        <img
          class="textlogo"
          src="../static/WELLDONE.svg"
          alt="text logo JDD"
        ></a>
    <ul>
      <li>
        <nuxt-link to="/about">
          ABOUT
        </nuxt-link>
      </li>
    </ul>
    </div>

  </div>
</template>

<script>
export default {};
</script>

<style>
.navbar {
  position: fixed;
  opacity: 0.8;
  background-color: #333;
  top: 0;
  left: 0;
  z-index: 9899;
  width: 100%;
  height: 60px;
}

.logo img {
  @apply pt-3 pl-24;
  @apply float-left;
}
img.textlogo {
  @apply pt-5 pr-10 pl-4;
}

ul {
  list-style-type: none;
  margin-top: 0px;
  margin-left: 0px;
  padding: 0;
  overflow: hidden;
}
/* ul {
  @apply pt-3 overflow-hidden list-none;
} */

li {
  @apply float-right;
}


li a {
  display: block;
  color: white;
  text-align: center;
  padding: 18px 20px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #111;
}

/* @screen sm {
  .navbar {
    @apply bg-red-400 h-10;
  }
}

@screen md {
  .navbar {
    @apply bg-blue-100 h-16;
  }
}

@screen lg {
  .navbar {
    @apply bg-green-500 h-12;
  }
} */

</style>
