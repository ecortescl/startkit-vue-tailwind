#!/usr/bin/env node

import { fileURLToPath, URL } from 'node:url'
import path from 'node:path'
import fs from 'node:fs'
import { promisify } from 'node:util'
import { exec } from 'node:child_process'

const execAsync = promisify(exec)

// Colores y estilos para la consola - Tema Vue (Verde) + Tailwind (Azul)
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  // Paleta principal: Verde Vue + Azul Tailwind
  vueGreen: '\x1b[38;2;65;184;131m', // Verde Vue oficial
  tailwindBlue: '\x1b[38;2;59;130;246m', // Azul Tailwind oficial
  darkGreen: '\x1b[38;2;34;197;94m', // Verde más intenso
  lightBlue: '\x1b[38;2;147;197;253m', // Azul claro
  // Colores de apoyo
  white: '\x1b[37m',
  gray: '\x1b[90m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  // Fondos
  bgVueGreen: '\x1b[48;2;65;184;131m',
  bgTailwindBlue: '\x1b[48;2;59;130;246m',
  bgDarkGreen: '\x1b[48;2;34;197;94m',
  bgRed: '\x1b[41m',
  bgYellow: '\x1b[43m',
  // Gradiente Vue-Tailwind para efectos especiales
  gradient: [
    '\x1b[38;2;65;184;131m',
    '\x1b[38;2;59;130;246m',
    '\x1b[38;2;34;197;94m',
    '\x1b[38;2;147;197;253m',
  ],
}

const log = (message, color = colors.reset) => {
  console.log(`${color}${message}${colors.reset}`)
}

// Función para crear texto con gradiente Vue-Tailwind
const gradient = (text) => {
  return (
    text
      .split('')
      .map((char, i) => `${colors.gradient[i % colors.gradient.length]}${char}`)
      .join('') + colors.reset
  )
}

// Spinner animado con colores Vue/Tailwind
const spinner = {
  frames: ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'],
  interval: null,
  start(message) {
    let i = 0
    this.interval = setInterval(() => {
      const color = i % 2 === 0 ? colors.vueGreen : colors.tailwindBlue
      process.stdout.write(`\r${color}${this.frames[i]} ${message}${colors.reset}`)
      i = (i + 1) % this.frames.length
    }, 100)
  },
  stop() {
    if (this.interval) {
      clearInterval(this.interval)
      process.stdout.write('\r')
    }
  },
}

// Barra de progreso con gradiente Vue-Tailwind
const progressBar = (current, total, width = 30) => {
  const percentage = Math.round((current / total) * 100)
  const filled = Math.round((width * current) / total)
  const bar = '█'.repeat(filled) + '░'.repeat(width - filled)
  const color = percentage < 50 ? colors.vueGreen : colors.tailwindBlue
  return `${color}[${bar}] ${percentage}%${colors.reset}`
}

// Delay para efectos dramáticos
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const templateDir = path.resolve(fileURLToPath(import.meta.url), '../../template')
const cwd = process.cwd()

async function showWelcome() {
  const welcomeArt = `
${colors.tailwindBlue}
    ╭─────────────────────────────────────────────────────────╮
    │                                                         │
    │  ${gradient('🌟 ¡Bienvenido a la Magia del Desarrollo! 🌟')}     │
    │                                                         │
    │     ${colors.vueGreen}✨ Estás a punto de crear algo increíble ✨${colors.reset}${colors.tailwindBlue}        │
    │                                                         │
    ╰─────────────────────────────────────────────────────────╯
${colors.reset}
  `
  console.log(welcomeArt)
  await delay(1200)
}

async function showBanner() {
  console.clear()
  await showWelcome()

  const banner = `
${colors.vueGreen}╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║   ${gradient('🚀 StartKit Vue + Tailwind 🚀')}                    ║
║                                                           ║
║     ${colors.tailwindBlue}✨ Clean Architecture Starter Template ✨${colors.reset}${colors.vueGreen}        ║
║                                                           ║
║   ${colors.gray}Creado con  ❤️  por ${colors.bright}${colors.darkGreen}eCortes.cl${colors.reset}${colors.gray} para la comunidad${colors.reset}${colors.vueGreen}        ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝${colors.reset}
`

  console.log(banner)
  await delay(1000)
}

async function showProjectInfo(projectName) {
  log(
    `\n${colors.bright}${colors.bgTailwindBlue} 📋 INFORMACIÓN DEL PROYECTO ${colors.reset}`,
    colors.white,
  )

  const info = [
    `${colors.tailwindBlue}📁 Nombre:${colors.reset} ${colors.bright}${projectName}${colors.reset}`,
    `${colors.vueGreen}🏗️  Arquitectura:${colors.reset} Clean Code + SOLID`,
    `${colors.tailwindBlue}🎨 Styling:${colors.reset} Tailwind CSS 4.x`,
    `${colors.vueGreen}⚡ Build Tool:${colors.reset} Vite 7.x`,
    `${colors.tailwindBlue}🧩 Framework:${colors.reset} Vue.js 3 + Options API`,
    `${colors.vueGreen}👨‍💻 Creado por:${colors.reset} ${colors.bright}${colors.darkGreen}eCortes.cl${colors.reset}`,
    `${colors.tailwindBlue}🎯 Status:${colors.reset} ${gradient('¡Listo para la acción!')} 🚀`,
  ]

  for (const item of info) {
    await delay(200)
    log(item)
  }
  await delay(600)
}

async function animatedProgress(message, duration = 2000) {
  console.log(`\n${colors.yellow}${message}${colors.reset}`)

  const steps = 20
  for (let i = 0; i <= steps; i++) {
    process.stdout.write(`\r${progressBar(i, steps)} `)
    await delay(duration / steps)
  }
  process.stdout.write('\n')
}

async function showSuccess(projectName) {
  console.log('\n' + '🎉'.repeat(25))
  log(
    `${colors.bgVueGreen}${colors.white}${colors.bright} 🎊 ¡PROYECTO CREADO EXITOSAMENTE! 🎊 ${colors.reset}`,
    colors.vueGreen,
  )
  console.log('🎉'.repeat(25))

  const successArt = `
    ${colors.vueGreen}
           ⭐ ¡FELICIDADES! ⭐
        ${colors.tailwindBlue}¡Tu proyecto ${colors.bright}${projectName}${colors.reset}${colors.tailwindBlue} está listo!${colors.reset}
           ${colors.darkGreen}🎯 Todo configurado perfectamente${colors.reset}
    ${colors.vueGreen}
  `
  console.log(successArt)
  await delay(800)
}

async function showNextSteps(projectName) {
  log(`\n${colors.bright}${colors.bgDarkGreen}${colors.white} 🚀 PRÓXIMOS PASOS ${colors.reset}`)

  const steps = [
    `${colors.vueGreen}1.${colors.reset} cd ${colors.bright}${projectName}${colors.reset} ${colors.gray}← Entra al directorio${colors.reset}`,
    `${colors.tailwindBlue}2.${colors.reset} npm run dev ${colors.gray}← Inicia el servidor de desarrollo${colors.reset}`,
    `${colors.vueGreen}3.${colors.reset} Abre ${colors.tailwindBlue}http://localhost:5173${colors.reset} ${colors.gray}← ¡Ve la magia!${colors.reset}`,
    `${colors.tailwindBlue}4.${colors.reset} ${gradient('¡Comienza a crear cosas increíbles!')} 🌟`,
  ]

  for (const step of steps) {
    await delay(400)
    log(`  ${step}`)
  }
  await delay(500)
}

async function showDocumentation() {
  log(
    `\n${colors.bright}${colors.bgTailwindBlue}${colors.white} 📚 DOCUMENTACIÓN DISPONIBLE ${colors.reset}`,
  )

  const docs = [
    `${colors.vueGreen}📖${colors.reset} ${colors.bright}README.md${colors.reset} - Guía completa en inglés 🇺🇸`,
    `${colors.tailwindBlue}📖${colors.reset} ${colors.bright}README.es.md${colors.reset} - Guía completa en español 🇪🇸`,
    `${colors.vueGreen}🏗️${colors.reset}  ${colors.bright}ARCHITECTURE.md${colors.reset} - Arquitectura del proyecto 🎯`,
    `${colors.tailwindBlue}🎨${colors.reset} ${colors.bright}TABLER_ICONS_GUIDE.md${colors.reset} - Guía de iconos ✨`,
  ]

  for (const doc of docs) {
    await delay(250)
    log(`  ${doc}`)
  }
  await delay(400)
}

async function showFeatures() {
  log(
    `\n${colors.bright}${colors.bgVueGreen}${colors.white} ⚡ CARACTERÍSTICAS INCLUIDAS ${colors.reset}`,
  )

  const features = [
    `${colors.vueGreen}✅${colors.reset} Composables reutilizables (useProgress)`,
    `${colors.tailwindBlue}✅${colors.reset} Servicios organizados (notificationService)`,
    `${colors.vueGreen}✅${colors.reset} Constantes centralizadas`,
    `${colors.tailwindBlue}✅${colors.reset} Utilidades helpers`,
    `${colors.vueGreen}✅${colors.reset} Estructura escalable por features`,
    `${colors.tailwindBlue}✅${colors.reset} ${gradient('¡Y mucho más!')} 🎁`,
  ]

  for (const feature of features) {
    await delay(200)
    log(`  ${feature}`)
  }
  await delay(400)
}

async function showFinalMessage() {
  console.log(`\n${colors.dim}${'═'.repeat(65)}${colors.reset}`)

  const finalMessages = [
    `${gradient('¡Gracias por usar StartKit Vue + Tailwind!')} 💖`,
    `${colors.gray}Hecho con ❤️  por ${colors.bright}${colors.darkGreen}eCortes.cl${colors.reset}${colors.gray} para la comunidad Vue.js${colors.reset}`,
    `${colors.vueGreen}🌐 Visita: ${colors.bright}https://ecortes.cl${colors.reset}`,
    `${colors.tailwindBlue}⭐ GitHub: ${colors.bright}https://github.com/ecortescl/startkit-vue-tailwind${colors.reset}`,
    `${colors.darkGreen}🌟 ¡Crea algo extraordinario! 🌟${colors.reset}`,
  ]

  for (const message of finalMessages) {
    await delay(300)
    log(`${' '.repeat(8)}${message}`)
  }

  console.log(`${colors.dim}${'═'.repeat(65)}${colors.reset}\n`)
}

async function main() {
  const args = process.argv.slice(2)
  const projectName = args[0] || 'my-vue-app'
  const targetDir = path.resolve(cwd, projectName)

  // Banner animado
  await showBanner()

  // Mostrar información del proyecto
  await showProjectInfo(projectName)

  // Verificar si el directorio ya existe
  if (fs.existsSync(targetDir)) {
    log(`\n${colors.bgRed}${colors.white}${colors.bright} ❌ ERROR ${colors.reset}`, colors.red)
    log(`El directorio "${colors.bright}${projectName}${colors.reset}" ya existe. 😞`)
    log(`${colors.gray}💡 Prueba con otro nombre o elimina el directorio existente.${colors.reset}`)
    console.log(`\n${colors.darkGreen}Sugerencias:${colors.reset}`)
    log(`  • ${colors.vueGreen}${projectName}-new${colors.reset}`)
    log(`  • ${colors.tailwindBlue}${projectName}-v2${colors.reset}`)
    log(`  • ${colors.vueGreen}my-awesome-app${colors.reset}`)
    process.exit(1)
  }

  try {
    // Crear directorio del proyecto
    spinner.start('🏗️  Preparando la magia...')
    await delay(1000)
    fs.mkdirSync(targetDir, { recursive: true })
    spinner.stop()
    log(`✅ Directorio creado exitosamente`)

    // Copiar archivos del template con progreso animado
    await animatedProgress('📋 Copiando archivos mágicos del template...', 1800)
    await copyTemplate(templateDir, targetDir)

    // Actualizar package.json
    spinner.start('⚙️  Configurando package.json con amor...')
    await delay(800)
    await updatePackageJson(targetDir, projectName)
    spinner.stop()
    log(`✅ Configuración completada`)

    // Instalar dependencias
    await animatedProgress('📦 Instalando dependencias (preparando las herramientas)...', 3500)
    process.chdir(targetDir)
    await execAsync('npm install', { stdio: 'pipe' })

    // Mostrar éxito
    await showSuccess(projectName)

    // Características incluidas
    await showFeatures()

    // Próximos pasos
    await showNextSteps(projectName)

    // Documentación
    await showDocumentation()

    // Mensaje final
    await showFinalMessage()
  } catch (error) {
    spinner.stop()
    log(
      `\n${colors.bgRed}${colors.white}${colors.bright} 💥 ERROR INESPERADO ${colors.reset}`,
      colors.red,
    )
    log(`${colors.red}${error.message}${colors.reset}`)
    log(
      `${colors.gray}📧 Por favor, reporta este error en nuestro GitHub si persiste.${colors.reset}`,
    )
    log(
      `${colors.tailwindBlue}🔗 https://github.com/ecortescl/startkit-vue-tailwind/issues${colors.reset}`,
    )
    process.exit(1)
  }
}

async function copyTemplate(src, dest) {
  const stat = fs.statSync(src)

  if (stat.isDirectory()) {
    // Crear directorio de destino
    fs.mkdirSync(dest, { recursive: true })

    // Copiar todos los archivos del directorio
    const files = fs.readdirSync(src)

    for (const file of files) {
      const srcPath = path.join(src, file)
      const destPath = path.join(dest, file)
      await copyTemplate(srcPath, destPath)
    }
  } else {
    // Copiar archivo
    fs.copyFileSync(src, dest)
  }
}

async function updatePackageJson(projectDir, projectName) {
  const packageJsonPath = path.join(projectDir, 'package.json')
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'))

  // Actualizar información del proyecto
  packageJson.name = projectName
  packageJson.version = '0.0.0'
  packageJson.private = true

  // Remover campos específicos del template
  delete packageJson.bin
  delete packageJson.files
  delete packageJson.keywords
  delete packageJson.publishConfig

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2))
}

main().catch(console.error)
