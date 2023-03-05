<main>
    <div class="container">
        <h1>Do what you love! Love what you do!</h1>
        <h2>The coolest fullstack developer in the world</h2>
    </div>
</main>

<style>
    .container {
        width: 80%;
        left: 50%;
        top: 50%;
        translate: -50% -50%;
        position: fixed;
        z-index: 3;
        text-align: center;
        text-wrap: avoid;
        animation: fadeIn 3s, flyIn 3s;
    }
    @keyframes fadeIn {
        0% {opacity: 0;}
        100% {opacity: 1;}
    }
    @keyframes flyIn {
        0% {transform: translateY(25%);}
        100% {transform: translateY(0%);}
    }

</style>