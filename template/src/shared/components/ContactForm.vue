<template>
  <div class="contact-form-wrapper backdrop-blur-xl bg-dark-background/20 rounded-3xl border border-white/10 overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
    <div class="absolute -bottom-20 -left-20 w-40 h-40 bg-secondary/20 rounded-full blur-3xl"></div>
    
    <div class="relative p-4 sm:p-6 md:p-8">
      <!-- Header -->
      <div class="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
        <div class="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-primary/10 flex items-center justify-center transform rotate-12">
          <IconRocket class="w-6 h-6 md:w-7 md:h-7 text-primary" />
        </div>
        <div>
          <h3 class="text-xl md:text-2xl font-bold gradient-text-secondary">
            {{ title }}
          </h3>
          <p class="text-gray-400 text-xs md:text-sm">{{ subtitle }}</p>
        </div>
      </div>

      <!-- Form -->
      <form @submit.prevent="handleSubmit" class="space-y-4 md:space-y-6">
        <!-- Input Fields -->
        <div class="space-y-3 md:space-y-4">
          <div 
            v-for="field in fields" 
            :key="field.name"
            class="form-field"
            :class="{ 'focused': focusedField === field.name }"
          >
            <div class="field-icon">
              <component :is="field.icon" class="w-5 h-5 md:w-6 md:h-6" />
            </div>
            <div class="field-content">
              <label :for="field.name" class="field-label">
                {{ field.label }}
              </label>
              <component
                :is="field.type === 'textarea' ? 'textarea' : 'input'"
                :id="field.name"
                :type="field.type"
                :placeholder="field.placeholder"
                v-model="formData[field.name]"
                @focus="focusedField = field.name"
                @blur="focusedField = null"
                :rows="field.type === 'textarea' ? 4 : undefined"
                class="field-input"
              />
            </div>
          </div>
        </div>

        <!-- Submit Button -->
        <button 
          type="submit"
          class="submit-button group"
          :disabled="isSubmitting"
        >
          <span class="relative z-10">{{ isSubmitting ? 'Sending...' : 'Send Message' }}</span>
          <IconSend class="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" />
          <div class="button-background"></div>
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import {
  IconRocket,
  IconUserCircle,
  IconMail,
  IconMessageDots,
  IconSend
} from '@tabler/icons-vue';

const props = defineProps({
  title: {
    type: String,
    default: 'Ready to Innovate?'
  },
  subtitle: {
    type: String,
    default: 'Tell us about your project'
  }
});

const emit = defineEmits(['submit']);

const fields = [
  {
    name: 'name',
    type: 'text',
    label: 'Name',
    placeholder: 'Your full name',
    icon: IconUserCircle
  },
  {
    name: 'email',
    type: 'email',
    label: 'Email',
    placeholder: 'your@email.com',
    icon: IconMail
  },
  {
    name: 'message',
    type: 'textarea',
    label: 'Message',
    placeholder: 'Describe your project or idea...',
    icon: IconMessageDots
  }
];

const formData = reactive({
  name: '',
  email: '',
  message: ''
});

const focusedField = ref(null);
const isSubmitting = ref(false);

const handleSubmit = async () => {
  isSubmitting.value = true;
  try {
    await emit('submit', formData);
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
.contact-form-wrapper {
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}

.contact-form-wrapper:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 20px rgba(63, 136, 197, 0.05);
}

.form-field {
  position: relative;
  display: flex;
  gap: 4px;
  padding: 4px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.03);
  transition: all 0.3s ease;
}

.form-field.focused {
  background: rgba(63, 136, 197, 0.08);
}

.field-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 36px;
  height: 36px;
  @media (min-width: 768px) {
    min-width: 40px;
    height: 40px;
  }
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
  color: var(--primary);
  transition: all 0.3s ease;
}

.form-field.focused .field-icon {
  background: var(--primary);
  color: white;
  transform: rotate(5deg);
}

.field-content {
  flex: 1;
  min-width: 0; /* Previene desbordamiento en flex items */
}

.field-label {
  display: block;
  font-size: 0.75rem;
  @media (min-width: 768px) {
    font-size: 0.875rem;
  }
  font-weight: 500;
  margin-bottom: 2px;
  color: rgba(255, 255, 255, 0.7);
  transition: color 0.3s ease;
}

.form-field.focused .field-label {
  color: var(--primary);
}

.field-input {
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  color: white;
  font-size: 0.875rem;
  @media (min-width: 768px) {
    font-size: 0.95rem;
  }
  padding: 4px 8px;
}

.field-input::placeholder {
  color: rgba(255, 255, 255, 0.3);
}

.submit-button {
  position: relative;
  width: 100%;
  padding: 10px;
  @media (min-width: 768px) {
    padding: 12px;
  }
  border-radius: 12px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  overflow: hidden;
  transition: all 0.3s ease;
  background: var(--primary);
  color: white;
}

.submit-button:hover {
  background: rgba(63, 136, 197, 0.9);
  transform: translateY(-2px);
}

.submit-button:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}
</style> 