<template>
  <MainLayout title="Symfony">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="row">
            <h2>Songs</h2>
            <table class="my-2">
              <tr v-for="(song, index) of songs">
                <td>{{ song.idSong }}</td>
                <td>{{ song.name }}</td>
                <td>{{ song.url }}</td>
              </tr>
            </table>
          </div>
          <div class="row">
            <h2>Session</h2>
            <div class="form-group">
              <label for="txtEmail">Email address</label>
              <input type="email" class="form-control" id="txtEmail" placeholder="name@example.com" v-model="info.email" />
            </div>
            <div class="form-group">
              <label for="txtName">Name</label>
              <input type="email" class="form-control" id="txtName" v-model="info.name" />
            </div>
            <button class="btn btn-primary" @click="btnSave_Click">Save</button>
          </div>
          <div class="row">
            <div v-if="infoSession">
              <p>{{ infoSession.email }}</p>
              <p>{{ infoSession.name }}</p>
            </div>
            <button class="btn btn-primary" @click="btnLoad_Click">Load</button>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import { inject, onMounted, ref } from 'vue';
import MainLayout from '../layouts/MainLayout.vue';

const ipcRenderer = window.ipcRenderer;
const axios = inject('axios');
const songs = ref([]);
const info = ref({ email: '', name: '' });
const infoSession = ref();

const BASE_URL = 'https://symfony-api.ycharron.techinfo-cstj.ca';
//const BASE_URL = 'https://127.0.0.1:8000';

onMounted(async () => {
  retrieveSongs();
  btnLoad_Click();
});

async function retrieveSongs() {
  try {
    const res = await axios.get(`${BASE_URL}/api/songs`);
    if (res.status === 200) {
      songs.value = res.data;
    }
  } catch (err) {
    //TODO: On n'a pas le temps
  }
}
async function btnSave_Click() {
  try {
    const res = await axios.post(`${BASE_URL}/api/session`, info.value);
    console.log(res);
    if (res.status === 200) {
      info.value = res.data;
      const result = await ipcRenderer.invoke('get-cookies')
    }
  } catch (err) {}

}
async function btnLoad_Click() {
  try {
    const res = await axios.get(`${BASE_URL}/api/session`);
    if (res.status === 200) {
      infoSession.value = res.data;
    }
  } catch (err) {}
}
</script>

<style lang="scss" scoped></style>
