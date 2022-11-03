<template>
    <form class="form-signin" @submit.prevent="submit">
        <h1 class="h3 mb-3 font-weight-normal">Please register</h1>

        <label for="firstName" class="sr-only">First Name</label>
        <input type="text" id="firstName" class="form-control" placeholder="First Name" required autofocus  v-model="firstName">

        <label for="lastName" class="sr-only">Last Name</label>
        <input type="text" id="lastName" class="form-control" placeholder="Last Name" required v-model="lastName">
        
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required v-model="inputEmail">

        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required v-model="inputPassword">

        <label for="passwordConfirm" class="sr-only">Password Confirm</label>
        <input type="password" id="passwordConfirm" class="form-control" placeholder="Password" required v-model="passwordConfirm">

        <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
        
    </form>
</template>

<script>
import { ref } from "vue";
import axios from 'axios';
import {useRouter} from 'vue-router';
import router from '@/router';


    export default {
        name:'PublicRegister',
        setup() {
            const firstName = ref('');
            const lastName = ref('');
            const inputEmail = ref('');
            const inputPassword = ref('');
            const passwordConfirm = ref('');
            
            let submit = async () => {
              try {
                axios.post('http://backend.test:8080/api/auth-register',{
                  "first_name":firstName.value,
                  "last_name":lastName.value,
                  "email":inputEmail.value,
                  "password":inputPassword.value,
                  "password_confirm":passwordConfirm.value,
                  "role_id":1
                });
              } catch (error) {
                console.log(error);
              }
              await router.push('/Login');


                
            }

            return {
                firstName,
                lastName,
                inputEmail,
                inputPassword,
                passwordConfirm,
                submit
            }
        }

        
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
