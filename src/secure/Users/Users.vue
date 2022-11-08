<template>
    <div>
        <h2>Section title</h2>
        <div class="table-responsive">
            <table class="table table-striped table-sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in users" :key="user.id">
                        <td>{{ user.id }}</td>
                        <td>{{ user.first_name }} {{user.last_name }}</td>
                        <td>{{ user.email }}</td>
                        <td>{{ user.role.name }}</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <nav>
            <ul class="pagination">
                <li class="page-item">
                    <a href="javascript:void(0)" class="page-link" @click="prev">Previous</a>
                </li>
                <li class="page-item">
                    <a href="javascript:void(0)" class="page-link" @click="next">Next</a>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
    

    name: 'Users',
    setup() {
        const users = ref([]);
        const page = ref(1);
        const lastPage = ref(0);
        const load = async ()   => {
            const response = await axios.get(`user?page=${page.value}`);
            // const data = await axios.get(`user`);
            users.value = response.data.data;
            lastPage.value = response.data.meta.last_page;
        }
        onMounted(load)

        const next = async () => {
            if(page.value == lastPage.value) return false;
            page.value++,
            await load();
        }
        const prev = async () => {
            if(page.value == 1) return false;
            page.value--,
            await load();
        }
        return {
            users,
            next,
            prev
        }
    },
    
}
</script>

<style scoped>
    
</style>