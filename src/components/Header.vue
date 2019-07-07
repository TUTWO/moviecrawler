<template>
  <div id="head">
    <div id="head-content">
      <div id="logo" class="v-center">
        <a href="#" class="head-links">双马尾放映室</a>
      </div>
      <div id="search" class="v-center">
        <a-input-search placeholder="关键字搜索" style="width: 400px;" />
      </div>
    </div>
  </div>
</template>

<script>
    export  default {
      name: "Header"
    }
</script>

<style>
#head {
  background-color: #3f4146;
  height: 60px;
  width: 100%;
  position: fixed;
  opacity: 0.6;
}

#head-content {
  width: 1200px;
  margin: 0 auto;
  height: 100%;
}

#logo {
  float: left;
}

#logo:hover > a {
  color: white;
}

#search {
  left: -8%;
  opacity: 0.6;
}

.head-links {
  text-decoration-line: none;
  font-size: 30px;
  color: white;
  /* color: #24272E; */
}

.ant-input {
  border-radius: 20px;
}

.v-center {
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}

.h-center {
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}
</style>

