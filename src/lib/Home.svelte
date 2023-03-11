<main>
    <div class="container">
        <div id="textOne" class="headline">DO WHAT YOU LOVE!</div>
        <div id="textTwo" class="headline">LOVE WHAT YOU DO!</div>
    </div>
</main>

<style>
    .container {
        width: 80%;
        left: 50%;
        top: 50%;
        translate: -50% -50%;
        position: fixed;
        text-align: center;
        display: block;
    }

    .headline {
        font-size: min(5.5vw, 70px);
        font-weight: 800;
    }
    #textOne {
        animation: flyInRight 3s;
        padding-right: 20%;
    }
    #textTwo {
        animation: flyInLeft 3s;
        padding-left: 20%;
        -webkit-text-fill-color: transparent;
        -webkit-text-stroke: 0.5px;
    }
    @keyframes flyInRight {
        0% {
            transform: translateX(150%);
        }
        100% {
            transform: translateX(0%);
        }
    }
    @keyframes flyInLeft {
        0% {
            transform: translateX(-150%);
        }
        100% {
            transform: translateX(0%);
        }
    }
</style>
