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
    <div id="blob"></div>
</main>

<style>
    @media only screen and (max-width: 700px) {
        #blob {
            max-height: 200px;
            max-width: 200px;
            -webkit-filter: blur(70px);
            -moz-filter: blur(70px);
            -o-filter: blur(70px);
            -ms-filter: blur(70px);
            filter: blur(70px);
        }
    }
    @media only screen and (min-width: 700px) {
        #blob {
            max-height: 300px;
            max-width: 300px;
            -webkit-filter: blur(110px);
            -moz-filter: blur(110px);
            -o-filter: blur(110px);
            -ms-filter: blur(110px);
            filter: blur(110px);
        }
    }

    #blob {
        height: 400px;
        width: 400px;
        aspect-ratio: 1;
        position: fixed;
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
        z-index: -1;
    }

    @keyframes rotate {
        from {
            rotate: 0deg;
        }
        50% {
            scale: 1 1.3;
        }
        to {
            rotate: 360deg;
        }
    }

</style>
