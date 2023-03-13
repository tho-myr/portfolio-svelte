<script>
    import BlobBackground from "./lib/BlobBackground.svelte";
    import Home from "./lib/Home.svelte";
    import StarsBackground from "./lib/StarsBackground.svelte";

    document.documentElement.style.cssText = "--background-color:#0c0c0c;"
</script>

<main>
    <Home/>
    <StarsBackground/>
    <BlobBackground/>
</main>