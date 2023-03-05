<script>
    import {blob} from "./main.js";

    document.body.onpointermove = event => {
        const {clientX, clientY} = event;

        blob.style.left = `${clientX}px`;
        blob.style.top = `${clientY}px`;
    }

</script>

<main>
    <div id="blob"></div>
</main>

<style>
    #blob {
        height: 500px;
        width: 500px;
        aspect-ratio: 1;
        position: absolute;
        left: 50%;
        right: 50%;
        translate: -50% -50%;
        border-radius: 50%;

        background: white linear-gradient(
                to right,
                aquamarine,
                rebeccapurple
        );

        animation: rotate 20s infinite;
    }

    @keyframes rotate {
        from {
            rotate: 0deg;
        }
        to {
            rotate: 360deg;
        }
    }
</style>
