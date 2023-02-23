<template>
  <div class="cart">
    카트 페이지
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Cart",
  setup() {
    axios.get("/api/cart/items",
        { withCredentials: true })
        .then(({data}) => {
          console.log(data);
        })
  }
}
</script>

<style scoped>

</style>