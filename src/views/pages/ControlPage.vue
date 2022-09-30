<template>
  <MainLayout title="Nested">
    <div class="container-fluid">
      <div class="row">
        <div class="col-4">
          <label for="firstname">FirstName</label>
          <input id="firstname" class="form-control" type="text" v-model="user.firstname" />
          <label for="lastname">LastName</label>
          <input id="lastname" class="form-control" type="text" v-model="user.lastname" />
          <label for="birthday">Birthday</label>
          <input id="birthday" class="form-control" type="date" v-model="user.birthday" />

          <button @click="btnAction">Action</button>
          <button @click="btnMove">Move</button>

          <RouterLink :to="{ name: 'router', params: { userData: { age: 37, name: 'Patrick' } } }">Page suivante</RouterLink>
        </div>
        <div class="row">
         {{ fromSession }}
        </div>

        <div class="row">
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#monModal">Launch demo modal</button>
        </div>
      </div>
    </div>
    <ModalComponent id="monModal" title="Test Modal">
      <template v-slot:body>
        <input type="text" v-model="search.text" @keyup="onSearchKeyUp" />
        <p>{{ fromSession }}</p>
      </template>
      <template v-slot:footer>
        <button type="button" class="btn btn-primary" @click="btnSaveSession">Save Session</button>
      </template>
    </ModalComponent>
  </MainLayout>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { inject, onMounted, ref } from 'vue';

import MainLayout from '../layouts/MainLayout.vue';
import ModalComponent from '../../components/ModalComponent.vue';

const axios = inject('axios');

const user = ref({});
const search = ref({ text: '' });
const router = useRouter();
const fromSession = ref();

const BASE_URL = 'https://127.0.0.1:8000';

onMounted(() => {
  retrieveDataFromSession();
})

//https://stackoverflow.com/questions/50506470/how-to-pass-an-object-as-props-with-vue-router
function btnAction() {
  router.push({ path: '/router' });
}

function btnMove() {
  console.log(user);
  router.push({ name: 'router', params: { utilisateur: JSON.stringify(user.value) } });
}

function btnSave() {
  console.log('Test');
}

function onSearchKeyUp() {
  console.log(search.value);
}

async function btnSaveSession() {
  console.log('Test');
  try {
    const res = await axios.post(`${BASE_URL}/api/sessionV2`, search.value);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}

async function retrieveDataFromSession() {
  try {
    const res = await axios.get(`${BASE_URL}/api/sessionV2`);
    console.log(res);
    if (res.status === 200) {
      fromSession.value = res.data;
    }
  } catch (err) {
    console.log(err);
  }
}
</script>

<style lang="scss" scoped></style>
