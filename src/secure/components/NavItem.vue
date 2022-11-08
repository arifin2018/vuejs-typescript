<template>
  <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
    <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Company name</a>

    <nav class="navbar-nav px-3">
      <router-link to="/profile" class="p-2 text-white">{{user?.first_name + ' ' + user?.last_name}}</router-link>
      <a class="p-2 text-white" href="javascript:void(0)" @click="logout">Sign out</a>
    </nav>
  </nav>
</template>

<script>
  import {
    useRouter
  } from 'vue-router';
  export default {
    name: "NavItem",
    props: ['user'],
    setup() {
      const router = useRouter();
      const logout = () => {
        localStorage.clear();
        router.push('/login');
      }

      return {
        logout
      }
    }

  }
</script>

<style scoped>
  .navbar{
    max-height: 5rem;
  }
  .navbar-brand {
    padding-top: .75rem;
    padding-bottom: .75rem;
    font-size: 1rem;
    background-color: rgba(0, 0, 0, .25);
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, .25);
  }

  .navbar .form-control {
    padding: .75rem 1rem;
    border-width: 0;
    border-radius: 0;
  }

  .form-control-dark {
    color: #fff;
    background-color: rgba(255, 255, 255, .1);
    border-color: rgba(255, 255, 255, .1);
  }

  .form-control-dark:focus {
    border-color: transparent;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, .25);
  }

  /*
 * Utilities
 */

  .border-top {
    border-top: 1px solid #e5e5e5;
  }

  .border-bottom {
    border-bottom: 1px solid #e5e5e5;
  }
</style>