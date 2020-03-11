<template>
  <b-card
    :title="data.title"
    :img-src="data.urlToImage"
    :img-alt="data.title"
    img-top
    class="cardd"
  >
    <b-card-text>{{ data.description }}</b-card-text>
    <template v-slot:footer class="footer">
      <small class="text-muted">Publised {{ data.publishedAt }}</small>
      <b-button variant="outline-danger">
        <a :href="data.url" target="_blank"> <em> More details</em></a>
      </b-button>
    </template>
  </b-card>
</template>

<script>
export default {
  props: ['data']
}
</script>

<style scoped>
.cardd {
  margin-top: 20px;
}

.footer {
  display: flex !Important;
  justify-content: space-between !Important;
}

a {
  color: rgb(65, 65, 65);
  text-decoration: none;
}

a:hover {
  color: white;
}
</style>
