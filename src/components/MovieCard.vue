<template>
    <div class="div-card clearfix">
        <span class="card-text">王牌对王牌第四季</span>
        <span class="card-description">跑男团踢馆贾玲徒手掰锅</span>
        <img src="../icon/benpaoba.png" alt="" class="card-pic">
    </div>
</template>

<script>
    export default {
        name: "MovieCard"
    }
</script>

<style scoped>
.div-card {
    position: relative;
    width: 265px;
    height: 365px;
}
.card-pic {
    width: 100%;
    height: 100%;
}
.card-text {
    /* width: 100%; */
    bottom: 25px;
    left: 20px;
    color: white;
    text-align: center;
    position: absolute;
    font-size: 18px;
}
.card-description {
    bottom: 5px;
    left: 20px;
    color: white;
    text-align: center;
    position: absolute;
    font-size: 14px;
}
.clearfix {
    *zoom: 1;
}
.clearfix::after {
    content: '';
    display: block;
    clear: both;

    height: 0;
    visibility: hidden;
}
</style>