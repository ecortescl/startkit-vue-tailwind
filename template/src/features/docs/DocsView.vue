<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
          <div class="flex items-center space-x-4">
            <div class="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h1 class="text-xl font-bold text-gray-900">Documentación</h1>
          </div>
          <nav class="flex space-x-6">
            <router-link to="/" class="text-gray-600 hover:text-gray-900 font-medium transition-colors">Inicio</router-link>
            <router-link to="/docs" class="text-blue-600 hover:text-blue-700 font-medium transition-colors">Documentación</router-link>
          </nav>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="lg:grid lg:grid-cols-4 lg:gap-8">
        <!-- Sidebar -->
        <aside class="hidden lg:block lg:col-span-1">
          <nav class="sticky top-24 space-y-1">
            <div class="pb-4">
              <h3 class="text-lg font-semibold text-gray-900 mb-3">Documentación</h3>
              
              <!-- Navegación -->
              <div class="space-y-1">
                <a 
                  v-for="section in navigationSections" 
                  :key="section.id"
                  @click="scrollToSection(section.id)"
                  :class="[
                    'block px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors',
                    activeSection === section.id 
                      ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700' 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  ]"
                >
                  {{ section.title }}
                </a>
              </div>
            </div>
          </nav>
        </aside>

        <!-- Content -->
        <main class="lg:col-span-3">
          <!-- Introducción -->
          <section id="introduccion" class="mb-16">
            <div class="prose prose-lg max-w-none">
              <h1 class="text-4xl font-bold text-gray-900 mb-6">Sistema de Componentes</h1>
              <p class="text-xl text-gray-600 mb-8">
                Una biblioteca moderna de componentes Vue 3 con diseño glassmorphism, 
                validaciones inteligentes y arquitectura modular.
              </p>
              
              <div class="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                <h3 class="text-lg font-semibold text-blue-900 mb-2">¿Qué incluye?</h3>
                <ul class="text-blue-800 space-y-1">
                  <li>• Sistema completo de inputs con validaciones</li>
                  <li>• Sistema de alertas con animaciones</li>
                  <li>• Componentes reutilizables y modulares</li>
                  <li>• Efectos glassmorphism y diseño moderno</li>
                  <li>• Arquitectura SOLID y escalable</li>
                </ul>
              </div>
            </div>
          </section>

          <!-- Arquitectura -->
          <section id="arquitectura" class="mb-16">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Arquitectura del Proyecto</h2>
            
            <div class="bg-white rounded-lg border border-gray-200 p-6 mb-8">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">Estructura de Directorios</h3>
              <div class="bg-gray-50 rounded-lg p-4 font-mono text-sm">
<pre class="text-gray-800">src/
├── core/                    # Configuración central
│   ├── config/             # Configuraciones
│   ├── constants/          # Constantes globales
│   ├── router/             # Enrutador Vue Router
│   └── types/              # Tipos TypeScript
├── features/               # Características por módulo
│   ├── home/              # Página principal
│   ├── about/             # Página acerca de
│   ├── docs/              # Documentación
│   └── services/          # Página de servicios
├── shared/                 # Componentes compartidos
│   ├── components/        # Componentes reutilizables
│   │   ├── inputs/        # Sistema de inputs
│   │   ├── AlertSystem.vue
│   │   └── IconShowcase.vue
│   ├── composables/       # Lógica reutilizable
│   ├── services/          # Servicios globales
│   └── utils/             # Utilidades
└── layout/                 # Layout principal
    └── App.vue</pre>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-white rounded-lg border border-gray-200 p-6">
                <h4 class="text-lg font-semibold text-gray-900 mb-3">Principios SOLID</h4>
                <ul class="space-y-2 text-gray-700">
                  <li><strong>S</strong> - Responsabilidad única por componente</li>
                  <li><strong>O</strong> - Abierto a extensión, cerrado a modificación</li>
                  <li><strong>L</strong> - Sustituibilidad de componentes</li>
                  <li><strong>I</strong> - Interfaces segregadas</li>
                  <li><strong>D</strong> - Inversión de dependencias</li>
                </ul>
              </div>
              
              <div class="bg-white rounded-lg border border-gray-200 p-6">
                <h4 class="text-lg font-semibold text-gray-900 mb-3">Patrones Utilizados</h4>
                <ul class="space-y-2 text-gray-700">
                  <li>• <strong>Composables:</strong> Lógica reutilizable</li>
                  <li>• <strong>Services:</strong> Gestión de estado</li>
                  <li>• <strong>Props/Events:</strong> Comunicación componentes</li>
                  <li>• <strong>Slots:</strong> Contenido flexible</li>
                </ul>
              </div>
            </div>
          </section>

          <!-- Sistema de Inputs -->
          <section id="inputs" class="mb-16">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Sistema de Inputs</h2>
            <p class="text-gray-600 mb-8">
              Componentes de entrada modernos con validaciones, efectos glassmorphism y experiencia de usuario optimizada.
            </p>

            <!-- BaseInput -->
            <div class="bg-white rounded-lg border border-gray-200 p-6 mb-8">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">BaseInput</h3>
              <p class="text-gray-600 mb-4">Componente base que proporciona la funcionalidad común a todos los inputs.</p>
              
              <div class="bg-gray-50 rounded-lg p-4 mb-4">
                <h4 class="font-semibold text-gray-900 mb-2">Props Principales:</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <code class="bg-gray-200 px-2 py-1 rounded">modelValue</code> - Valor del input
                  </div>
                  <div>
                    <code class="bg-gray-200 px-2 py-1 rounded">label</code> - Etiqueta del campo
                  </div>
                  <div>
                    <code class="bg-gray-200 px-2 py-1 rounded">placeholder</code> - Texto de placeholder
                  </div>
                  <div>
                    <code class="bg-gray-200 px-2 py-1 rounded">error</code> - Mensaje de error
                  </div>
                  <div>
                    <code class="bg-gray-200 px-2 py-1 rounded">helpText</code> - Texto de ayuda
                  </div>
                  <div>
                    <code class="bg-gray-200 px-2 py-1 rounded">required</code> - Campo requerido
                  </div>
                </div>
              </div>

              <div class="bg-gray-900 rounded-lg p-4">
                <pre class="text-green-400 text-sm overflow-x-auto"><code>&lt;BaseInput
  v-model="valor"
  label="Campo Base"
  placeholder="Ingresa un valor..."
  :error="errorMessage"
  help-text="Texto de ayuda"
  required
/&gt;</code></pre>
              </div>
            </div>

            <!-- TextInput -->
            <div class="bg-white rounded-lg border border-gray-200 p-6 mb-8">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">TextInput</h3>
              <p class="text-gray-600 mb-4">Input de texto simple con validaciones básicas.</p>
              
              <div class="bg-gray-900 rounded-lg p-4">
                <pre class="text-green-400 text-sm overflow-x-auto"><code>&lt;TextInput
  v-model="nombre"
  label="Nombre Completo"
  placeholder="Tu nombre..."
  type="text"
  required
  :error="nombreError"
/&gt;</code></pre>
              </div>
            </div>

            <!-- NumberInput -->
            <div class="bg-white rounded-lg border border-gray-200 p-6 mb-8">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">NumberInput</h3>
              <p class="text-gray-600 mb-4">Input numérico con formateo automático y validaciones de rango.</p>
              
              <div class="bg-gray-50 rounded-lg p-4 mb-4">
                <h4 class="font-semibold text-gray-900 mb-2">Props Específicas:</h4>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <code class="bg-gray-200 px-2 py-1 rounded">min</code> - Valor mínimo
                  </div>
                  <div>
                    <code class="bg-gray-200 px-2 py-1 rounded">max</code> - Valor máximo
                  </div>
                  <div>
                    <code class="bg-gray-200 px-2 py-1 rounded">allowDecimals</code> - Permitir decimales
                  </div>
                  <div>
                    <code class="bg-gray-200 px-2 py-1 rounded">step</code> - Incremento por paso
                  </div>
                </div>
              </div>

              <div class="bg-gray-900 rounded-lg p-4">
                <pre class="text-green-400 text-sm overflow-x-auto"><code>&lt;NumberInput
  v-model="edad"
  label="Edad"
  :min="18"
  :max="120"
  :allow-decimals="false"
  placeholder="Tu edad..."
/&gt;</code></pre>
              </div>
            </div>

            <!-- PasswordInput -->
            <div class="bg-white rounded-lg border border-gray-200 p-6 mb-8">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">PasswordInput</h3>
              <p class="text-gray-600 mb-4">Input de contraseña con toggle de visibilidad y validación de fortaleza.</p>
              
              <div class="bg-gray-50 rounded-lg p-4 mb-4">
                <h4 class="font-semibold text-gray-900 mb-2">Características:</h4>
                <ul class="text-sm text-gray-700 space-y-1">
                  <li>• Toggle para mostrar/ocultar contraseña</li>
                  <li>• Validación de fortaleza en tiempo real</li>
                  <li>• Indicador visual de seguridad</li>
                  <li>• Validación de longitud mínima</li>
                </ul>
              </div>

              <div class="bg-gray-900 rounded-lg p-4">
                <pre class="text-green-400 text-sm overflow-x-auto"><code>&lt;PasswordInput
  v-model="password"
  label="Contraseña"
  :validate-strength="true"
  :min-length="8"
  placeholder="Crea una contraseña segura..."
/&gt;</code></pre>
              </div>
            </div>

            <!-- PhoneInput -->
            <div class="bg-white rounded-lg border border-gray-200 p-6 mb-8">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">PhoneInput</h3>
              <p class="text-gray-600 mb-4">Input de teléfono con selector de país y formateo automático.</p>
              
              <div class="bg-gray-50 rounded-lg p-4 mb-4">
                <h4 class="font-semibold text-gray-900 mb-2">Características:</h4>
                <ul class="text-sm text-gray-700 space-y-1">
                  <li>• Selector de país con banderas</li>
                  <li>• Formateo automático por país</li>
                  <li>• Validación de número válido</li>
                  <li>• Búsqueda de países</li>
                </ul>
              </div>

              <div class="bg-gray-900 rounded-lg p-4">
                <pre class="text-green-400 text-sm overflow-x-auto"><code>&lt;PhoneInput
  v-model="telefono"
  label="Teléfono"
  default-country="CL"
  placeholder="987654321"
  @country-change="onCountryChange"
/&gt;</code></pre>
              </div>
            </div>

            <!-- DateInput y TimeInput -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-white rounded-lg border border-gray-200 p-6">
                <h3 class="text-xl font-semibold text-gray-900 mb-4">DateInput</h3>
                <p class="text-gray-600 mb-4">Input de fecha con validaciones de rango.</p>
                
                <div class="bg-gray-900 rounded-lg p-4">
                  <pre class="text-green-400 text-sm overflow-x-auto"><code>&lt;DateInput
  v-model="fecha"
  label="Fecha"
  :min="minDate"
  :max="maxDate"
/&gt;</code></pre>
                </div>
              </div>

              <div class="bg-white rounded-lg border border-gray-200 p-6">
                <h3 class="text-xl font-semibold text-gray-900 mb-4">TimeInput</h3>
                <p class="text-gray-600 mb-4">Input de hora con formato 24h.</p>
                
                <div class="bg-gray-900 rounded-lg p-4">
                  <pre class="text-green-400 text-sm overflow-x-auto"><code>&lt;TimeInput
  v-model="hora"
  label="Hora"
  placeholder="HH:MM"
/&gt;</code></pre>
                </div>
              </div>
            </div>
          </section>

          <!-- Sistema de Alertas -->
          <section id="alertas" class="mb-16">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Sistema de Alertas</h2>
            <p class="text-gray-600 mb-8">
              Sistema moderno de notificaciones con animaciones suaves y posicionamiento flexible.
            </p>

            <div class="bg-white rounded-lg border border-gray-200 p-6 mb-8">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">AlertSystem</h3>
              <p class="text-gray-600 mb-4">Componente principal que gestiona todas las alertas de la aplicación.</p>
              
              <div class="bg-gray-50 rounded-lg p-4 mb-4">
                <h4 class="font-semibold text-gray-900 mb-2">Tipos de Alerta:</h4>
                <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div class="text-center">
                    <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg class="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <span class="text-sm font-medium">Success</span>
                  </div>
                  <div class="text-center">
                    <div class="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg class="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <span class="text-sm font-medium">Error</span>
                  </div>
                  <div class="text-center">
                    <div class="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg class="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <span class="text-sm font-medium">Warning</span>
                  </div>
                  <div class="text-center">
                    <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg class="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <span class="text-sm font-medium">Info</span>
                  </div>
                </div>
              </div>

              <div class="bg-gray-900 rounded-lg p-4">
                <pre class="text-green-400 text-sm overflow-x-auto"><code>// Importar el servicio
import { alertService } from '@/shared/services/alertService.js'

// Usar en componente
alertService.showSuccess('Operación exitosa', 'Éxito')
alertService.showError('Algo salió mal', 'Error')
alertService.showWarning('Atención requerida', 'Advertencia')
alertService.showInfo('Información útil', 'Información')

// Configurar posición
alertService.setDefaultPosition('top-right')</code></pre>
              </div>
            </div>
          </section>

          <!-- Composables -->
          <section id="composables" class="mb-16">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Composables</h2>
            <p class="text-gray-600 mb-8">
              Funciones reutilizables que encapsulan lógica reactiva común.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="bg-white rounded-lg border border-gray-200 p-6">
                <h3 class="text-xl font-semibold text-gray-900 mb-4">useForm</h3>
                <p class="text-gray-600 mb-4">Gestión de formularios con validación.</p>
                
                <div class="bg-gray-900 rounded-lg p-4">
                  <pre class="text-green-400 text-sm overflow-x-auto"><code>import { useForm } from '@/shared/composables'

const { 
  formData, 
  errors, 
  validate, 
  reset 
} = useForm(schema)</code></pre>
                </div>
              </div>

              <div class="bg-white rounded-lg border border-gray-200 p-6">
                <h3 class="text-xl font-semibold text-gray-900 mb-4">useLocalStorage</h3>
                <p class="text-gray-600 mb-4">Persistencia reactiva en localStorage.</p>
                
                <div class="bg-gray-900 rounded-lg p-4">
                  <pre class="text-green-400 text-sm overflow-x-auto"><code>import { useLocalStorage } from '@/shared/composables'

const storedValue = useLocalStorage('key', defaultValue)</code></pre>
                </div>
              </div>
            </div>
          </section>

          <!-- Servicios -->
          <section id="servicios" class="mb-16">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Servicios</h2>
            <p class="text-gray-600 mb-8">
              Servicios globales para funcionalidades transversales.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div class="bg-white rounded-lg border border-gray-200 p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-3">alertService</h3>
                <p class="text-gray-600 text-sm mb-3">Gestión de alertas y notificaciones</p>
                <code class="text-xs bg-gray-100 px-2 py-1 rounded">@/shared/services/alertService.js</code>
              </div>

              <div class="bg-white rounded-lg border border-gray-200 p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-3">progressService</h3>
                <p class="text-gray-600 text-sm mb-3">Animaciones de progreso</p>
                <code class="text-xs bg-gray-100 px-2 py-1 rounded">@/shared/services/progressService.js</code>
              </div>

              <div class="bg-white rounded-lg border border-gray-200 p-6">
                <h3 class="text-lg font-semibold text-gray-900 mb-3">countryService</h3>
                <p class="text-gray-600 text-sm mb-3">Gestión de países y códigos telefónicos</p>
                <code class="text-xs bg-gray-100 px-2 py-1 rounded">@/shared/services/countryService.js</code>
              </div>
            </div>
          </section>

          <!-- Instalación -->
          <section id="instalacion" class="mb-16">
            <h2 class="text-3xl font-bold text-gray-900 mb-6">Instalación y Uso</h2>
            
            <div class="bg-white rounded-lg border border-gray-200 p-6 mb-8">
              <h3 class="text-xl font-semibold text-gray-900 mb-4">Importación de Componentes</h3>
              
              <div class="bg-gray-900 rounded-lg p-4 mb-4">
                <pre class="text-green-400 text-sm overflow-x-auto"><code>// Importar componentes específicos
import { 
  TextInput, 
  NumberInput, 
  PasswordInput 
} from '@/shared/components/inputs'

// Importar servicios
import { alertService } from '@/shared/services/alertService.js'
import { progressService } from '@/shared/services/progressService.js'</code></pre>
              </div>

              <h4 class="font-semibold text-gray-900 mb-2">Registro en componente:</h4>
              <div class="bg-gray-900 rounded-lg p-4">
                <pre class="text-green-400 text-sm overflow-x-auto"><code>export default {
  components: {
    TextInput,
    NumberInput,
    PasswordInput
  },
  // ...resto del componente
}</code></pre>
              </div>
            </div>

            <div class="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 class="text-lg font-semibold text-blue-900 mb-2">💡 Consejos de Uso</h3>
              <ul class="text-blue-800 space-y-2">
                <li>• Usa BaseInput como base para crear componentes personalizados</li>
                <li>• Configura el AlertSystem una sola vez en tu layout principal</li>
                <li>• Los composables siguen las convenciones de Vue 3 Composition API</li>
                <li>• Todos los componentes soportan v-model para binding bidireccional</li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DocsView',
  data() {
    return {
      activeSection: 'introduccion',
      navigationSections: [
        { id: 'introduccion', title: 'Introducción' },
        { id: 'arquitectura', title: 'Arquitectura' },
        { id: 'inputs', title: 'Sistema de Inputs' },
        { id: 'alertas', title: 'Sistema de Alertas' },
        { id: 'composables', title: 'Composables' },
        { id: 'servicios', title: 'Servicios' },
        { id: 'instalacion', title: 'Instalación y Uso' }
      ]
    }
  },
  methods: {
    scrollToSection(sectionId) {
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        this.activeSection = sectionId
      }
    },
    
    handleScroll() {
      const sections = this.navigationSections.map(section => ({
        ...section,
        element: document.getElementById(section.id)
      }))

      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.element && section.element.offsetTop <= scrollPosition) {
          this.activeSection = section.id
          break
        }
      }
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
.prose {
  max-width: none;
}

.prose h1 {
  font-weight: 700;
  line-height: 1.1;
}

.prose h2 {
  font-weight: 600;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

.prose h3 {
  font-weight: 600;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.prose p {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.prose ul {
  list-style-type: disc;
  padding-left: 1.5rem;
}

.prose li {
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}

pre {
  white-space: pre-wrap;
  word-wrap: break-word;
}

code {
  font-family: 'SF Mono', Monaco, 'Inconsolata', 'Roboto Mono', 'Source Code Pro', monospace;
}
</style> 