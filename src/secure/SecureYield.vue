<template>
    <NavItem :user="user" />

    <div class="container-fluid">
        <div class="row">
            <MenuItem />

            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                <router-view />
            </main>
        </div>
    </div>
</template>

<script>
    import MenuItem from "@/secure/components/MenuItem.vue";
    import NavItem from "@/secure/components/NavItem.vue";
    import axios from 'axios';
    import {
        onMounted,
        ref
    } from 'vue';
    import {
        useRouter
    } from 'vue-router';

    export default {
        name: "SecureYield",
        components: {
            MenuItem: MenuItem,
            NavItem
        },
        setup() {
            const router = useRouter();
            let user = ref('');
            onMounted(async () => {
                try {
                    const response = await axios.get('profile');
                    user.value = response.data.data;
                } catch (error) {
                    await router.push('/login');
                }
            });

            return {
                user
            };
        }
    }
</script>

<style scoped>
    body {
        font-size: .875rem;
    }
</style>