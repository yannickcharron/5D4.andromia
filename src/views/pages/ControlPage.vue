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
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#monModal">
            Launch demo modal
          </button>
        </div>
      </div>
    </div>
    <ModalComponent id="monModal" title="Test Modal">
      <template v-slot:body>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi optio porro quod adipisci maxime ipsa at dolorum eius doloremque soluta, necessitatibus sunt officiis? Quisquam quaerat inventore reiciendis adipisci sit asperiores?</p>
      </template>
      <template v-slot:footer>
        <button type="button" class="btn btn-primary" @click="btnSave">Save</button>
      </template>
    </ModalComponent>
  </MainLayout>
</template>

<script setup>
import { useRouter } from 'vue-router';
import { ref } from 'vue';

import MainLayout from '../layouts/MainLayout.vue';
import ModalComponent from '../../components/ModalComponent.vue';

const user = ref({});
const router = useRouter();

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
</script>

<style lang="scss" scoped></style>
