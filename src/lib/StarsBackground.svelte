<script>
    import { onMount } from "svelte";
    import starImage from "../assets/star.svg";

    var starBackground;

    var minHeight = 70;
    var maxHeight = 170;

    var minAnimationSpeed = 30;
    var maxAnimationSpeed = 50;

    var minAnimationDelay = 0;
    var maxAnimationDelay = 20;

    onMount(() => {
        starBackground = document.getElementById("starBackground");
        for (let i = 0; i < 100; i++) {
            createStar(i);
        }
    });

    function createStar(index) {
        const id = "flyingStar" + index;
        const animationDelay = random(minAnimationDelay, maxAnimationDelay);
        const animationSpeed = randomInt(minAnimationSpeed, maxAnimationSpeed);

        var element = document.createElement("img");
        starBackground.appendChild(element);

        element.id = id;
        element.src = starImage;

        element.style.position = "fixed";
        element.style.height = randomInt(minHeight, maxHeight) + "px";
        element.style.left = random(1, 99) + "%";
        element.style.top = random(1, 99) + "%";

        const keyFrames = generateKeyframes(id, animationDelay, animationSpeed);
        element.appendChild(keyFrames);
    }

    function generateKeyframes(id, animationDelay, animationSpeed) {
        var keyFrames = document.createElement("style");

        keyFrames.innerHTML = `
        @keyframes pulsate {
            from {
                opacity: 0.3;
            }
            50% {
                opacity: 1;
            }
            to {
                opacity: 0.3;
            }
        }

        @keyframes move {
            from {
                visibility: visible;
                transform: translateY(100vh);
            }
            to {
                transform: translateY(-150vh);
            }
        }

        #${id} {
            animation: pulsate 8s infinite, move ${animationSpeed}s linear infinite;
            animation-delay: ${animationDelay}s;
            visibility: hidden;
        }
        `;

        return keyFrames;
    }

    function random(min, max) {
        if (max == null) {
            max = min;
            min = 0;
        }
        if (min > max) {
            var tmp = min;
            min = max;
            max = tmp;
        }
        return min + (max - min) * Math.random();
    }

    function randomInt(min, max) {
        if (max == null) {
            max = min;
            min = 0;
        }
        if (min > max) {
            var tmp = min;
            min = max;
            max = tmp;
        }
        return Math.floor(min + (max - min + 1) * Math.random());
    }
</script>

<main>
    <div id="starBackground" />
</main>

<style>
    #starBackground {
        height: 100%;
        width: 100%;
        position: absolute;
        z-index: 2;
    }

</style>
