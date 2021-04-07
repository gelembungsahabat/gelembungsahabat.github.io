<script lang="ts">
    import Navbar from "../components/navbar.svelte";
    import Footer from "../components/footer.svelte";
    import Content from "../components/content.svelte";
</script>

<Navbar type="dark" id="navExample1" />
<section class="hero is-primary is-fullheight">
    <div class="hero-body">
        <div class="container has-text-centered">
            <h1 class="title is-size-2-touch heroTitle">
                Welcome to My Personal Blog!
            </h1>
            <h2 class="subtitle mt-4 is-size-4-touch heroSubtitle">
                Disini kita akan belajar tentang programming
            </h2>
        </div>
    </div>
</section>
<Content />
<Footer />

<style>
    .hero {
        background: url("../images/Confetti-Doodles.svg");
        background-repeat: no-repeat;
        background-size: cover;
    }
    .heroTitle {
        font-size: 5rem;
    }
    .heroSubtitle {
        font-size: 1.875rem;
    }
</style>
