<template>
  <div class="modal" tabindex="-1" :id="id">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalTitle">{{ title }}</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <slot name="body"> This is the default body! </slot>
        </div>
        <div class="modal-footer">
          <slot name="footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Modal } from 'bootstrap';

const props = defineProps({
  id: { type: String, required: true },
  title: { type: String, required: true },
});

</script>

<style lang="scss" scoped>
.modal-body {
  color: var(--bs-body-color);
}

.modal-title,
.modal-footer {
  color: #344767;
}
.modal-header .btn-close {
  background: transparent
    url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' fill='%23000' viewBox='0 0 16 16'><path d='M.293.293a1 1 0 011.414 0L8 6.586 14.293.293a1 1 0 111.414 1.414L9.414 8l6.293 6.293a1 1 0 01-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 01-1.414-1.414L6.586 8 .293 1.707a1 1 0 010-1.414z'/></svg>")
    center/1em auto no-repeat;
}
</style>
