<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div v-if="modelValue" class="modal-backdrop" @click="closeOnBackdropClick ? $emit('update:modelValue', false) : null">
        <div class="modal-wrapper" @click.stop>
          <div class="modal-container">
            <!-- Header -->
            <div class="modal-header">
              <h3 class="modal-title">
                <slot name="title">{{ title }}</slot>
              </h3>
              <button class="modal-close" @click="$emit('update:modelValue', false)">
                <IconX class="w-5 h-5" />
              </button>
            </div>
            
            <!-- Content -->
            <div class="modal-content">
              <slot></slot>
            </div>
            
            <!-- Footer -->
            <div v-if="$slots.footer" class="modal-footer">
              <slot name="footer"></slot>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { IconX } from '@tabler/icons-vue';

defineProps({
  modelValue: {
    type: Boolean,
    required: true
  },
  title: {
    type: String,
    default: 'Modal'
  },
  closeOnBackdropClick: {
    type: Boolean,
    default: true
  }
});

defineEmits(['update:modelValue']);
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(15, 15, 15, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 50;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  overflow: hidden;
}

.modal-wrapper {
  position: relative;
  max-width: 90%;
  width: 100%;
  max-height: 90vh;
  margin: 0 auto;
}

@media (min-width: 640px) {
  .modal-wrapper {
    width: 550px;
  }
}

.modal-container {
  background-color: rgba(30, 30, 30, 0.8);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  overflow: hidden;
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

@media (min-width: 640px) {
  .modal-header {
    padding: 1.25rem 1.5rem;
  }
}

.modal-title {
  font-size: 1.125rem;
  font-weight: 600;
  color: white;
  margin: 0;
}

@media (min-width: 640px) {
  .modal-title {
    font-size: 1.25rem;
  }
}

.modal-close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.1);
  color: white;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

@media (min-width: 640px) {
  .modal-close {
    width: 2rem;
    height: 2rem;
  }
}

.modal-close:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: rotate(90deg);
}

.modal-content {
  padding: 1.25rem;
  overflow-y: auto;
  color: rgba(255, 255, 255, 0.9);
  max-height: calc(90vh - 130px);
}

@media (min-width: 640px) {
  .modal-content {
    padding: 1.5rem;
  }
}

.modal-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.5rem;
  padding: 1rem 1.25rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

@media (min-width: 640px) {
  .modal-footer {
    gap: 0.75rem;
    padding: 1.25rem 1.5rem;
  }
}

/* Transition animations */
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: all 0.3s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-from .modal-container,
.modal-fade-leave-to .modal-container {
  transform: scale(0.9);
}
</style> 