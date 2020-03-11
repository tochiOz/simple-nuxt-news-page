<template>
  <div class="container">
    <b-card-group columns>
      <Card v-for=" data of newsDatas" :key="data.content" :data="data" />
    </b-card-group>
  </div>
</template>

<script>
import Card from './card'
export default {
  components: { Card },
  computed: {
    newsDatas() {
      return this.$store.getters.newsData
    }
  }
}
</script>