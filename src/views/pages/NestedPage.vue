<template>
  <MainLayout title="Nested">
    <div class="container-fluid">
      <div class="row">
        <div class="col-4">
            <ul>
                <li><RouterLink to="/nested">Section 1</RouterLink></li>
                <li><RouterLink to="/nested/nested2">Section 2</RouterLink></li>
                <li><RouterLink to="/nested/nested3">Section 3</RouterLink></li>

            </ul>
        </div>
        <div class="col-8">
            <RouterView />
        </div>
      </div>
    </div>
  </MainLayout>
</template>

<script setup>
import MainLayout from '../layouts/MainLayout.vue';
</script>

<style lang="scss" scoped></style>
