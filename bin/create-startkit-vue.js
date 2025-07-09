#!/usr/bin/env node

import { fileURLToPath, URL } from 'node:url'
import path from 'node:path'
import fs from 'node:fs'
import { promisify } from 'node:util'
import { exec } from 'node:child_process'

const execAsync = promisify(exec)

// Console colors and styles - Vue Corporate Theme
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  dim: '\x1b[2m',
  // Vue Corporate Green
  vueGreen: '\x1b[38;2;66;184;131m', // #42B883
  white: '\x1b[37m',
  gray: '\x1b[90m',
  red: '\x1b[31m',
  // Backgrounds
  bgVueGreen: '\x1b[48;2;66;184;131m',
  bgRed: '\x1b[41m',
}

const log = (message, color = colors.reset) => {
  console.log(`${color}${message}${colors.reset}`)
}

// Spinner animation
const spinner = {
  frames: ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏'],
  interval: null,
  start(message) {
    let i = 0
    this.interval = setInterval(() => {
      process.stdout.write(`\r${colors.vueGreen}${this.frames[i]} ${message}${colors.reset}`)
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

// Progress bar with Vue green
const progressBar = (current, total, width = 30) => {
  const percentage = Math.round((current / total) * 100)
  const filled = Math.round((width * current) / total)
  const bar = '█'.repeat(filled) + '░'.repeat(width - filled)
  return `${colors.vueGreen}[${bar}] ${percentage}%${colors.reset}`
}

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const templateDir = path.resolve(fileURLToPath(import.meta.url), '../../template')
const cwd = process.cwd()

async function showWelcome() {
  const welcomeArt = `
${colors.vueGreen}
    ╭─────────────────────────────────────────────────────────╮
    │                                                         │
    │           Vue.js + Tailwind Starter Template           │
    │                                                         │
    │              Professional Development Kit              │
    │                                                         │
    ╰─────────────────────────────────────────────────────────╯
${colors.reset}
  `
  console.log(welcomeArt)
  await delay(800)
}

async function showBanner() {
  console.clear()
  await showWelcome()

  const banner = `
${colors.vueGreen}╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║              Vue.js + Tailwind Starter Kit               ║
║                                                           ║
║            Clean Architecture Template System            ║
║                                                           ║
║           Created by eCortes.cl for Vue Community        ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝${colors.reset}
`

  console.log(banner)
  await delay(800)
}

async function showProjectInfo(projectName) {
  log(
    `\n${colors.bright}${colors.bgVueGreen} PROJECT INFORMATION ${colors.reset}`,
    colors.white,
  )

  const info = [
    `${colors.vueGreen}Project Name:${colors.reset} ${colors.bright}${projectName}${colors.reset}`,
    `${colors.vueGreen}Architecture:${colors.reset} Clean Code + SOLID`,
    `${colors.vueGreen}Styling:${colors.reset} Tailwind CSS 4.x`,
    `${colors.vueGreen}Build Tool:${colors.reset} Vite 7.x`,
    `${colors.vueGreen}Framework:${colors.reset} Vue.js 3`,
    `${colors.vueGreen}Created by:${colors.reset} eCortes.cl`,
    `${colors.vueGreen}Status:${colors.reset} Ready for development`,
  ]

  for (const item of info) {
    await delay(200)
    log(item)
  }
  await delay(600)
}

async function animatedProgress(message, duration = 2000) {
  console.log(`\n${colors.vueGreen}${message}${colors.reset}`)

  const steps = 20
  for (let i = 0; i <= steps; i++) {
    process.stdout.write(`\r${progressBar(i, steps)} `)
    await delay(duration / steps)
  }
  process.stdout.write('\n')
}

async function showSuccess(projectName) {
  log(
    `\n${colors.bgVueGreen}${colors.white}${colors.bright} PROJECT CREATED SUCCESSFULLY ${colors.reset}`,
    colors.vueGreen,
  )

  const successArt = `
    ${colors.vueGreen}
           Project ${colors.bright}${projectName}${colors.reset}${colors.vueGreen} is ready
           Configuration completed successfully
    ${colors.vueGreen}
  `
  console.log(successArt)
  await delay(800)
}

async function showNextSteps(projectName) {
  log(`\n${colors.bright}${colors.bgVueGreen}${colors.white} NEXT STEPS ${colors.reset}`)

  const steps = [
    `${colors.vueGreen}1.${colors.reset} cd ${colors.bright}${projectName}${colors.reset}`,
    `${colors.vueGreen}2.${colors.reset} npm run dev ${colors.gray}← Start development server${colors.reset}`,
    `${colors.vueGreen}3.${colors.reset} Open ${colors.vueGreen}http://localhost:5173${colors.reset}`,
    `${colors.vueGreen}4.${colors.reset} Start building your application`,
  ]

  for (const step of steps) {
    await delay(400)
    log(`  ${step}`)
  }
  await delay(500)
}

async function showDocumentation() {
  log(
    `\n${colors.bright}${colors.bgVueGreen}${colors.white} DOCUMENTATION ${colors.reset}`,
  )

  const docs = [
    `${colors.vueGreen}•${colors.reset} ${colors.bright}README.md${colors.reset} - Complete guide`,
    `${colors.vueGreen}•${colors.reset} ${colors.bright}ARCHITECTURE.md${colors.reset} - Project architecture`,
    `${colors.vueGreen}•${colors.reset} ${colors.bright}COMPONENTS.md${colors.reset} - Components documentation`,
  ]

  for (const doc of docs) {
    await delay(250)
    log(`  ${doc}`)
  }
  await delay(400)
}

async function showFeatures() {
  log(
    `\n${colors.bright}${colors.bgVueGreen}${colors.white} INCLUDED FEATURES ${colors.reset}`,
  )

  const features = [
    `${colors.vueGreen}•${colors.reset} Reusable composables`,
    `${colors.vueGreen}•${colors.reset} Organized services`,
    `${colors.vueGreen}•${colors.reset} Centralized constants`,
    `${colors.vueGreen}•${colors.reset} Helper utilities`,
    `${colors.vueGreen}•${colors.reset} Scalable feature-based structure`,
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
    `Thank you for using Vue.js + Tailwind Starter Kit`,
    `${colors.gray}Created by ${colors.bright}${colors.vueGreen}eCortes.cl${colors.reset}${colors.gray} for Vue.js community${colors.reset}`,
    `${colors.vueGreen}Website: ${colors.bright}https://ecortes.cl${colors.reset}`,
    `${colors.vueGreen}GitHub: ${colors.bright}https://github.com/ecortescl/startkit-vue-tailwind${colors.reset}`,
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
    log(`\n${colors.bgRed}${colors.white}${colors.bright} ERROR ${colors.reset}`, colors.red)
    log(`The directory "${colors.bright}${projectName}${colors.reset}" already exists. 😞`)
    log(`${colors.gray}💡 Try with another name or delete the existing directory.${colors.reset}`)
    console.log(`\n${colors.vueGreen}Suggestions:${colors.reset}`)
    log(`  • ${colors.vueGreen}${projectName}-new${colors.reset}`)
    log(`  • ${colors.vueGreen}${projectName}-v2${colors.reset}`)
    log(`  • ${colors.vueGreen}my-awesome-app${colors.reset}`)
    process.exit(1)
  }

  try {
    // Crear directorio del proyecto
    spinner.start('🏗️  Preparing the magic...')
    await delay(1000)
    fs.mkdirSync(targetDir, { recursive: true })
    spinner.stop()
    log(`✅ Directory created successfully`)

    // Copiar archivos del template con progreso animado
    await animatedProgress('📋 Copying magical files from the template...', 1800)
    await copyTemplate(templateDir, targetDir)

    // Actualizar package.json
    spinner.start('⚙️  Configuring package.json with love...')
    await delay(800)
    await updatePackageJson(targetDir, projectName)
    spinner.stop()
    log(`✅ Configuration completed`)

    // Instalar dependencias
    await animatedProgress('📦 Installing dependencies (preparing tools)...', 3500)
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
      `\n${colors.bgRed}${colors.white}${colors.bright} UNEXPECTED ERROR ${colors.reset}`,
      colors.red,
    )
    log(`${colors.red}${error.message}${colors.reset}`)
    log(
      `${colors.gray}�� Please report this error on our GitHub if it persists.${colors.reset}`,
    )
    log(
      `${colors.vueGreen}🔗 https://github.com/ecortescl/startkit-vue-tailwind/issues${colors.reset}`,
    )
    process.exit(1)
  }
}

async function copyTemplate(src, dest) {
  const stat = fs.statSync(src)

  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true })
    const files = fs.readdirSync(src)

    for (const file of files) {
      const srcPath = path.join(src, file)
      const destPath = path.join(dest, file)
      await copyTemplate(srcPath, destPath)
    }
  } else {
    fs.copyFileSync(src, dest)
  }
}

async function updatePackageJson(projectDir, projectName) {
  const packageJsonPath = path.join(projectDir, 'package.json')
  const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8'))

  packageJson.name = projectName
  packageJson.version = '0.0.0'
  packageJson.private = true

  delete packageJson.bin
  delete packageJson.files
  delete packageJson.keywords
  delete packageJson.publishConfig

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2))
}

main().catch(console.error)
