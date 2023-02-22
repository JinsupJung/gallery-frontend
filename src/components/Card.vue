<template>
  <div class="card shadow-sm">
    <img class="img" :src="item.imagePath"/>
    <div class="card-body">
      <p class="card-text">{{item}}</p>
      <div class="d-flex justify-content-between align-items-center">
        <div class="btn-group">
          <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
          <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
        </div>
        <small class="text-muted">9 mins</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    item: Object
  }

}
</script>

<style scoped>

</style>