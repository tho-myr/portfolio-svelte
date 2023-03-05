<script>
    import {blob} from "./main.js";

    document.body.onpointermove = event => {
        const {clientX, clientY} = event;

        blob.animate({
            left: `${clientX}px`,
            top: `${clientY}px`,
        }, {duration: 3000, fill: "forwards"});
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
</style>
