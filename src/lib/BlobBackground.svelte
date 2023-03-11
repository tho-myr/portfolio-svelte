<script>
	import { blob } from './../main.js';

    document.body.onpointermove = (event) => {
        const { clientX, clientY } = event;

        blob.animate(
            {
                left: `${clientX}px`,
                top: `${clientY}px`,
            },
            { duration: 3000, fill: "forwards" }
        );
    };
</script>

<main>
    <div id="blur-blob" />
    <div id="blob" />
</main>

<style>
    @media only screen and (max-width: 700px) {
        #blob {
            max-height: 200px;
            max-width: 200px;
        }
    }
    @media only screen and (min-width: 700px) {
        #blob {
            max-height: 300px;
            max-width: 300px;
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
        background: white linear-gradient(to right, aquamarine, rebeccapurple);
        animation: rotate 20s infinite;
        z-index: 1;
    }

    @keyframes rotate {
        from {
            rotate: 0deg;
        }
        50% {
            scale: 1 1.25;
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
    }

    /* using chrome etc */
    @supports (-webkit-font-smoothing: antialiased) {
        #blob {
            filter: blur(70px);
            -webkit-filter: blur(70px);
            -moz-filter: blur(70px);
            -o-filter: blur(70px);
            -ms-filter: blur(70px);
        }
        #blur-blob {
            display: none;
        }
    }

    /* using firefox */
    @supports (-moz-appearance: none) {
        @media only screen and (max-width: 700px) {
            #blob {
                max-width: 150px;
                max-height: 150px;
            }
            #blur-blob {
                backdrop-filter: blur(70px);
                -webkit-backdrop-filter: blur(70px);
            }
        }
        @media only screen and (min-width: 700px) {
            #blur-blob {
                backdrop-filter: blur(140px);
                -webkit-backdrop-filter: blur(140px);
            }
        }
    }
</style>
