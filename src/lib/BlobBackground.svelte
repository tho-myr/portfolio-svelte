<script>
    import {blob} from "../main.js";

    document.body.onpointermove = event => {
        const {clientX, clientY} = event;

        blob.animate({
            left: `${clientX}px`,
            top: `${clientY}px`,
        }, {duration: 3000, fill: "forwards"});
    }
</script>

<main>
    <div id="blur-blob"></div>
    <div id="blob"></div>
</main>

<style>
    #blob {
        height: 400px;
        width: 400px;
        aspect-ratio: 1;
        position: absolute;
        left: 50%;
        top: 50%;
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
        50% {
            scale: 1 1.5;
        }
        to {
            rotate: 360deg;
        }
    }

    #blur-blob {
        height: 100%;
        width: 100%;
        position: absolute;
        z-index: 2;
        backdrop-filter: blur(140px);
    }

</style>
