<script lang="ts">
    export let image: string;
    export let altImage: string;
    export let href: string;
</script>

<div class="card">
    <a {href}>
        <!-- image -->
        <div class="card-image is-size-1">
            <figure class="image is-3by3">
                <img src={image} alt={altImage} />
            </figure>
        </div>

        <!-- card content -->
        <div class="card-content">
            <!-- isi content -->
            <div class="content">
                <slot />
            </div>
        </div>
    </a>
</div>

<style>
    a {
        color: #4a4a4a;
    }
</style>
