<template>
  <div class="navbar">
    <ul>
      <li>
        <nuxt-link to="/">HOME</nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">ABOUT</nuxt-link>
      </li>
    </ul>
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

ul {
  list-style-type: none;
  margin-top: 0px;
  margin-left: 0px;
  padding: 0;
  overflow: hidden;
}

li {
  float: left;
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
