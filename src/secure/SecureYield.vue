<template>
    <NavItem />

    <div class="container-fluid">
        <div class="row">
            <MenuItem />

            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                <router-view/>
            </main>
        </div>
    </div>
</template>

<script>
    import MenuItem from "@/components/MenuItem.vue";
    import NavItem from "@/components/NavItem.vue";
    import axios from 'axios';
    import {onMounted} from 'vue';

    export default {
        name: "SecureYield",
        components: {
            MenuItem: MenuItem,
            NavItem
        },
        setup(){
          onMounted(async () =>{
            const response = await axios.get('user');
            console.log(response);
          });
        }
        
    }
</script>

<style scoped>

body {
  font-size: .875rem;
}


</style>