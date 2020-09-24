<template>
  <div>
    <div
      id="mySidebar"
      class="sidebar"
    >
      <a
        href="javascript:void(0)"
        class="closebtn"
        @click="closeNav()"
      >&times;</a>
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/about">About</nuxt-link>
      <nuxt-link to="/client">Clients</nuxt-link>
      <nuxt-link to="/contact">Contacts</nuxt-link>
    </div>

    <div class="navbar">

      <!-- logo JDD -->
      <div class="logo">
        <a href="/">

          <img
            class="textlogo md:w-10h-4"
            src="../static/WELLDONE.svg"
            alt="text logo JDD"
          ></a>
        <ul>
          <li>
            <button
              class="openbtn pt-4 pb-3 px-5"
              @click="openNav()"
            >&#9776; </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {

    openNav () {
      document.getElementById("mySidebar").style.width = "250px";
    },

    /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
    closeNav () {
      document.getElementById("mySidebar").style.width = "0";
    }
  }
}

</script>

<style>
.navbar {
  position: fixed;
  opacity: 0.7;
  background-color: #333;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 60px;
}

.logo img {
  @apply pt-3 pl-24;
  @apply float-left;
}

img.textlogo {
  @apply pt-5 pr-10 pl-4 pb-4;
}

ul {
  list-style-type: none;
  margin-top: 0px;
  margin-left: 0px;
  padding: 0;
  overflow: hidden;
}

li {
  @apply float-right;
}

/* ini untuk sidebar */
.sidebar {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 3; /* Stay on top */
  top: 0;
  right: 0;
  background-color: rgb(226, 226, 226); /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidebar */
}

/* The sidebar links */
.sidebar a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #424242;
  display: block;
  transition: 0.3s;
}

/* When you mouse over the navigation links, change their color */
.sidebar a:hover {
  color: #ffffff;
}

/* Position and style the close button (top right corner) */
.sidebar .closebtn {
  position: absolute;
  top: 0;
  right: 0;
  padding-right: 20px;
  font-size: 36px;
  margin-left: 50px;
}

/* The button used to open the sidebar */
.openbtn {
  font-size: 20px;
  cursor: pointer;
  /* background-color: rgb(211, 204, 204); */
  color: white;
  border: none;
  text-decoration: none;
  outline: none !important;
}

.openbtn:hover {
  background-color: #444;
}

/* Style page content - use this if you want to push the page content to the right when you open the side navigation */
#main {
  transition: margin-left 0.5s; /* If you want a transition effect */
  padding: 20px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidebar {
    padding-top: 15px;
  }
  .sidebar a {
    font-size: 18px;
  }
}

@screen sm {
}

@screen md {
}

@screen lg {
}
</style>
