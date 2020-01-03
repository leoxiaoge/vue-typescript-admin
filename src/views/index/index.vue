<template>
  <div class="container">
    <p>应用</p>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
// import { AdsListGet } from '@/api/api'
@Component
export default class extends Vue {
  private Loading = true
  created () {
    this.getList()
  }

  private async getList() {
    this.Loading = true
    // const { data } = await AdsListGet()
    // console.log(data)
  }
}
</script>
<style lang="scss" scoped>
</style>
