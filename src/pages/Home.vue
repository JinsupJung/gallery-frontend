<template>
  <div class="home">
    <div class="album py-5 bg-light">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

          <div class="col" v-for="(item, idx) in state.items" :key="idx">
            <Card :item="item"></Card>
<!--            <Card></Card>-->

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import axios from "axios";
import {reactive} from "vue";

export default {
  name: "Home",
  components: {Card},
  setup() {
    const state = reactive(
        {
          items: []
        }
    )
    // axios.get("http://localhost:8080/api/items")
    //     .then(res => {
    //       state.items = res.data;
    //       console.log(res);
    //     })
    // 최신문법
    axios.get("http://localhost:8080/api/items")
        .then(({data}) => {
          state.items = data;
          console.log(data);
        })
    console.log(state);
    return {state} // setup()에서 리턴하면 template에서 쓸 수 있다 => 반응성 데이터
  }
}
</script>

<style scoped>

</style>