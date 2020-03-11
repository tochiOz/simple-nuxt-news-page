<template>
  <div>
    <div class=" bg-danger footer">
      Made With Love ♡ by
      <a href="https://github.com/Tueloper">Tochukwu Ozurumba </a> &copy;
      {{ this.year }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    }
  }
}
</script>
<style scoped>
.footer {
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
}

a {
  color: white;
  text-decoration: none;
}
</style>
