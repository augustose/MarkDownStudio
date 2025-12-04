# 🚀 Guía para Subir a GitHub

Este documento explica cómo publicar Mark Down Studio en tu perfil de GitHub.

## ✅ Estado Actual

El repositorio está completamente preparado para GitHub:
- ✅ Git inicializado
- ✅ Commit inicial creado
- ✅ `.gitignore` configurado
- ✅ `LICENSE` (MIT) incluida
- ✅ `README.md` con badges y screenshots
- ✅ `CONTRIBUTING.md` con guías de contribución
- ✅ `ROADMAP.md` con plan de desarrollo
- ✅ Assets organizados en carpeta `assets/`

## 📋 Pasos para Publicar

### 1. Crear Repositorio en GitHub

1. Ve a [github.com/new](https://github.com/new)
2. Configura el repositorio:
   - **Repository name**: `MarkDownStudio` o `markdown-studio`
   - **Description**: "Un editor de Markdown moderno y elegante para macOS con vista previa en tiempo real"
   - **Visibility**: Public
   - **NO** inicialices con README, .gitignore, o license (ya los tenemos)
3. Haz click en **Create repository**

### 2. Conectar Repositorio Local con GitHub

Ejecuta estos comandos en el terminal desde `/Users/augustose/Documents/DEV/MarkDownStudio`:

```bash
# Renombrar la rama a 'main' (recomendado)
git branch -M main

# Agregar el repositorio remoto (reemplaza 'tu-usuario' con tu nombre de usuario de GitHub)
git remote add origin https://github.com/tu-usuario/MarkDownStudio.git

# Subir el código
git push -u origin main
```

### 3. Configurar el Repositorio en GitHub

Una vez subido, configura lo siguiente en GitHub:

#### Topics/Tags
Agrega estos topics al repositorio (Settings → Topics):
- `markdown`
- `editor`
- `macos`
- `javascript`
- `html`
- `css`
- `markdown-editor`
- `real-time-preview`
- `web-app`

#### About Section
En la página principal del repositorio, edita la sección "About":
- ✅ Website: Puedes agregar un demo en GitHub Pages (opcional)
- ✅ Topics: Los que agregaste arriba
- ✅ Description: "Un editor de Markdown moderno y elegante para macOS con vista previa en tiempo real"

#### GitHub Pages (Opcional)
Para tener una demo en vivo:
1. Ve a Settings → Pages
2. Source: Deploy from a branch
3. Branch: `main` / `root`
4. Save

Tu app estará disponible en: `https://tu-usuario.github.io/MarkDownStudio`

### 4. Crear Releases (Opcional)

Para la versión 0.1.0:
1. Ve a Releases → Create a new release
2. Tag: `v0.1.0`
3. Title: `v0.1.0 - MVP Release`
4. Description:
```markdown
## 🎉 Primera versión de Mark Down Studio

### ✨ Características
- Editor markdown con vista previa en tiempo real
- Herramientas de formato completas
- Exportación a HTML
- Modo oscuro/claro
- Diseño inspirado en macOS

### 📦 Instalación
```bash
git clone https://github.com/tu-usuario/MarkDownStudio.git
cd MarkDownStudio
npm install
npm run dev
```

### 🐛 Bugs Conocidos
Ninguno reportado aún

### 🗺️ Próximos Pasos
Ver [ROADMAP.md](ROADMAP.md) para funcionalidades planificadas
```

## 🎨 Personalización Adicional

### README Badges Dinámicos
Una vez en GitHub, puedes agregar más badges:

```markdown
![GitHub stars](https://img.shields.io/github/stars/tu-usuario/MarkDownStudio?style=social)
![GitHub forks](https://img.shields.io/github/forks/tu-usuario/MarkDownStudio?style=social)
![GitHub issues](https://img.shields.io/github/issues/tu-usuario/MarkDownStudio)
![GitHub pull requests](https://img.shields.io/github/issues-pr/tu-usuario/MarkDownStudio)
```

### Social Preview Image
GitHub usa `assets/banner.png` automáticamente, pero puedes configurarlo manualmente:
1. Settings → General → Social preview
2. Upload image → Selecciona `assets/banner.png`

## 📱 Compartir el Proyecto

Una vez publicado, comparte tu proyecto:
- Twitter/X con hashtags: `#markdown #opensource #webdev`
- Reddit: r/webdev, r/javascript, r/opensource
- Dev.to: Escribe un artículo sobre el proyecto
- Product Hunt: Lanza el producto cuando tenga más features

## 🔄 Workflow de Desarrollo Futuro

Para futuras actualizaciones:

```bash
# Hacer cambios en el código
git add .
git commit -m "feat: descripción del cambio"
git push

# Para nuevas versiones
git tag v0.2.0
git push --tags
```

## ✅ Checklist Final

Antes de hacer público:
- [ ] Reemplazar "tu-usuario" en los comandos con tu usuario real
- [ ] Verificar que todos los links en README funcionan
- [ ] Probar que la aplicación funciona después de clonar
- [ ] Revisar que no hay información sensible en el código
- [ ] Verificar que las imágenes se ven bien en GitHub

## 🎯 Siguientes Pasos Recomendados

1. **Inmediato**: Subir a GitHub siguiendo los pasos de arriba
2. **Corto plazo**: Configurar GitHub Pages para demo en vivo
3. **Mediano plazo**: Implementar features de Fase 1 del ROADMAP
4. **Largo plazo**: Construir comunidad y aceptar contribuciones

---

¡Tu proyecto está listo para el mundo! 🚀
