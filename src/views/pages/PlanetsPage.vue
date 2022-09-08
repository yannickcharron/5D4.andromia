<template>
  <MainLayout title="Planets">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="row">
            <div class="col-md-2 my-2" v-for="(planet, index) of planets">
                <div class="card">
                    <h4>{{ planet.name }}</h4>
                    <img :src="planet.icon" class="img-fluid" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import { inject, onMounted, ref } from 'vue';
import MainLayout from '../layouts/MainLayout.vue';

const axios = inject('axios');
const planets = ref([]);

onMounted(() => {
  retrievePlanets();
});

async function retrievePlanets() {
  try {
    const res = await axios.get('https://api.andromia.science/planets');
    if(res.status === 200) {
        planets.value = res.data
    }
  } catch (err) {
    //TODO: On n'a pas le temps
  }
}
</script>

<style lang="scss" scoped></style>
