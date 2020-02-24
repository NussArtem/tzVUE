<template>
    <div class="d-flex justify-content-center">
<span >
  <p class="Logo"> Coctail DB <img src="../../public/cocktail.png" alt=""></p>
</span>

    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    @font-face {
        font-family: Seaweed-Script; /* Гарнитура шрифта */
        src: url(./SeaweedScript-Regular.ttf); /* Путь к файлу со шрифтом */
    }

    div {
        height: 70px;
        width: 100vw;
        background: #FFFFFF;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    }

    .Logo {
        margin-top: 14px;
        font-family: Seaweed-Script;
        font-style: normal;
        font-weight: normal;
        font-size: 30px;
        line-height: 41px;

        letter-spacing: 0.51em;

        color: #FF8A00;
    }

</style>