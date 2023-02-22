<template>
  <div class="form-signin w-100 m-auto">
      <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
      <div class="form-floating">
        <input type="email" v-model="state.form.email" class="form-control" id="floatingInput" placeholder="name@example.com">
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input type="password" v-model="state.form.password" class="form-control" id="floatingPassword" placeholder="Password">
        <label for="floatingPassword">Password</label>
      </div>

      <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div>
<!--      <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>-->
      <button class="w-100 btn btn-lg btn-primary" @click="submit()">Sign in</button>
      <p class="mt-5 mb-3 text-muted">&copy; 2023</p>
  </div>
</template>

<script>
import {reactive} from "vue";
import axios from "axios";

export default {
  name: "Login",
  setup() {
    const state=reactive({
      form:{ email:"", password:"" }
      })

    const submit=()=>{
      axios.post("http://localhost:8080/api/account/login", state.form)
          .then(res=>{
            console.log(res);
            window.alert("로그인했습니다.")
          })
    }

    return {state, submit};
  }
}
</script>

<style scoped>
.form-signin {
  max-width: 330px;
  padding: 15px;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>