<script>
    import {blob} from "./main.js";

    document.body.onpointermove = event => {
        const { clientX, clientY } = event;

        blob.style.left = `${clientX}px`;
        blob.style.top = `${clientY}px`;
    }

</script>

<main>
    <div id="blob"></div>
</main>

<style>
    #blob {
        background-color: white;
        height: 500px;
        width: 500px;
        aspect-ratio: 1;
        position: absolute;
    }
</style>
