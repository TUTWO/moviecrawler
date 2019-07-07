<template>
  <div id="content">
    <div id="content-top">
      <div class="content-content">
        <MovieCard></MovieCard>
      </div>
    </div>
  </div>
</template>

<script>
import MovieCard from "./MovieCard";
export default {
    name: "ContentTop",
    components: { MovieCard },
    data() {
        return {
            movies: [],
        };
    },
    created() {
        this.$http.get('https://movie-map.cn/api/recommendation?size=30')
        .then((data) => {
            this.movies = data.data.data;
        });
    }
};
</script>

<style>
#content-top {
  width: 100%;
  height: 480px;
  background-color: #24272e;
}
.content-content {
  width: 80%;
  height: 100%;
  margin: 0 auto;
}
</style>