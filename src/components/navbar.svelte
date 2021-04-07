<script lang="ts">
    import Home from "../App.svelte";
    import About from "../pages/about.svelte";
    import Client from "../pages/about.svelte";
    import Contact from "../pages/contact.svelte";

    export let id: string;
    export let type: string;
    export let url = ""; //This property is necessary declare to avoid ignore the Router

    let showNav: boolean = false;
</script>

<nav
    class="navbar is-{type} is-transparent is-fixed-top"
    role="navigation"
    aria-label="main navigation"
>
    <div class="navbar-brand ">
        <a class="navbar-item" href="/">
            <!-- navbar brand -->
            <img src="wd.svg" />
        </a>
        <a
            role="button"
            class="navbar-burger"
            class:is-active={showNav}
            aria-label="menu"
            aria-expanded="false"
            on:click={() => (showNav = !showNav)}
        >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
        </a>
    </div>

    <div {id} class="navbar-menu has-background-dark" class:is-active={showNav}>
        <div class="navbar-start">
            <slot name="navbar-start" />
        </div>

        <div class="navbar-end ">
            <!-- navbar end -->
            <div class="navbar-item ">
                <a href="/about" class="navbar-item">
                    <p class="link">About</p>
                </a>
                <a href="/client" class="navbar-item">
                    <p class="link">Clients</p>
                </a>
                <a href="/contact" class="navbar-item">
                    <p class="link">Contacts</p>
                </a>
            </div>
        </div>
    </div>
</nav>

<style>
    .navbar {
        height: 3.75rem;
        opacity: 0.83;
    }
    .navbar-brand .navbar-burger {
        height: 3.75rem;
    }
    .link {
        color: white;
    }
    a:hover {
        color: #42aceb;
    }
</style>
