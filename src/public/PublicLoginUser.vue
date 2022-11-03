<template>
    <form class="form-signin" @submit.prevent="submit">
        <h1 class="h3 mb-3 font-weight-normal">Please Sign in</h1>

        <label for="Email" class="sr-only">Email Name</label>
        <input type="text" id="Email" class="form-control" placeholder="Email Name" required autofocus  v-model="Email">

        <label for="Password" class="sr-only">Password</label>
        <input type="Password" id="Password" class="form-control" placeholder="Password" required v-model="Password">

        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign In</button>
        
    </form>
</template>

<script>
import { ref } from "vue";
import axios from 'axios';

export default {
    name: 'PublicLoginUser',
    setup() {
        const email = ref('');
        const password = ref('');

        const submit = async () => {
            const response = await axios.post('http://backend.test:8080/api/auth',{
                email: email.value,
                password:password.value
            })

            console.log(response);
        }

        return {
            email,
            password,
            submit
        }
    },

}
</script>

<style scoped>
html,
body {
  height: 100%;
}

body {
  display: -ms-flexbox;
  display: -webkit-box;
  display: flex;
  -ms-flex-align: center;
  -ms-flex-pack: center;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
}
.form-signin .checkbox {
  font-weight: 400;
}
.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
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