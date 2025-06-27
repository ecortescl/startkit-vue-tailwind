# 📦 Guía de Publicación - create-startkit-vue

Esta guía te ayudará a publicar tu CLI template en npm para que otros desarrolladores puedan usarlo con `npm create startkit-vue@latest`.

## 🚀 Pasos para Publicar

### 1. Preparar el proyecto

```bash
# Verificar que todo funciona
npm test

# Limpiar archivos temporales
rm -rf test-app/
```

### 2. Configurar npm (si es la primera vez)

```bash
# Crear cuenta en npmjs.com si no tienes una
# Luego hacer login
npm login
```

### 3. Actualizar información en package.json

Edita `package.json` y actualiza:

```json
{
  "name": "create-startkit-vue",
  "author": "Tu Nombre <tu@email.com>",
  "repository": {
    "type": "git",
    "url": "https://github.com/tu-usuario/create-startkit-vue.git"
  },
  "bugs": {
    "url": "https://github.com/tu-usuario/create-startkit-vue/issues"
  },
  "homepage": "https://github.com/tu-usuario/create-startkit-vue#readme"
}
```

### 4. Verificar archivos incluidos

```bash
# Ver qué archivos se incluirán en el paquete
npm pack --dry-run
```

Deberías ver:
- `bin/`
- `template/`
- `package.json`
- `CLI_README.md`

### 5. Publicar

```bash
# Publicar por primera vez
npm publish

# Para actualizaciones posteriores
npm version patch  # o minor, major
npm publish
```

## 🎯 Uso por parte de usuarios

Una vez publicado, los usuarios podrán usar:

```bash
# npm
npm create startkit-vue@latest mi-app

# yarn
yarn create startkit-vue mi-app

# pnpm
pnpm create startkit-vue mi-app
```

## 🔄 Actualizaciones

Para actualizaciones del template:

1. Modifica los archivos en `template/`
2. Actualiza la versión: `npm version patch`
3. Publica: `npm publish`

## 📋 Checklist de Publicación

- [ ] Todos los archivos del template funcionan
- [ ] CLI genera proyectos correctamente
- [ ] package.json tiene información correcta
- [ ] README.md está actualizado
- [ ] Tienes cuenta en npm y estás logueado
- [ ] Has probado el CLI localmente

## 🌐 URLs Importantes

- **npm package**: https://www.npmjs.com/package/create-startkit-vue
- **Repository**: https://github.com/tu-usuario/create-startkit-vue
- **Issues**: https://github.com/tu-usuario/create-startkit-vue/issues

## 📊 Monitoreo

Después de publicar, puedes monitorear:

- **Descargas**: En tu dashboard de npm
- **Issues**: En GitHub
- **Versiones**: `npm view create-startkit-vue versions --json`

---

¡Listo para ayudar a la comunidad Vue.js! 🎉 