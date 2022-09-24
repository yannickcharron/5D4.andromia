<template>
  <MainLayout title="Routeur">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <div class="row" v-if="user"> 
            <p>{{user.firstname}}</p>
            <p>{{user.lastname}}</p>
            <p>{{user.birthday}}</p>
          </div>
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import { inject, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import MainLayout from '../layouts/MainLayout.vue';

const user = ref();

const route = useRoute();
const props = defineProps({
    utilisateur: {
      type: Object,
      required: false, 
      default: () => {}
    }
});

onMounted(() => {
  console.log(route.params);
  user.value = JSON.parse(route.params.utilisateur);
})
</script>

<style lang="scss" scoped>

</style>