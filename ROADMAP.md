# 🗺️ Mark Down Studio - Roadmap

Este documento describe las funcionalidades planificadas para futuras versiones de Mark Down Studio.

---

## 📊 Estado del Proyecto

**Versión Actual**: 0.1.0 (MVP)  
**Última Actualización**: Diciembre 2025

---

## ✅ Fase 0: MVP (Completado)

- [x] Editor con syntax highlighting
- [x] Vista previa en tiempo real
- [x] Layout split-pane sincronizado
- [x] Operaciones de archivos (nuevo, abrir, guardar)
- [x] Exportar a HTML
- [x] Diseño moderno inspirado en macOS
- [x] Modo oscuro
- [x] Atajos de teclado básicos
- [x] Auto-guardado en localStorage

---

## 🎯 Fase 1: Mejoras de Edición (v0.2.0)
### seccion de configuration
- [ ] **Configuración Gemini token**: en la seccion de configuracion el usuario puede agregar un token gemini api key o como quiera que sea para las funciones que requieran inteligencia artificial

### seccion TOOLS
- [ ] **NUEVO BOTON**:  otros elelemtos markdown como citas, tablas, etc

### Editor Avanzado
- [x] **barra de estado** con informacion de la cantidad de caracteres, palabras, etc. archivo guardado/modificado pendiente. 
- [x] **Modo Focus**: Resalta solo el párrafo actual, oculta el resto
- [ ] **Typewriter Mode**: Mantiene la línea actual centrada verticalmente
- [ ] **Estadísticas en Vivo**: Contador de palabras, caracteres, tiempo de lectura
- [ ] **Análisis de Legibilidad**: Nivel de complejidad del texto (Flesch-Kincaid)
- [ ] **Corrector Ortográfico**: Multiidioma con sugerencias contextuales
- [ ] **Autocompletado**: Sugerencias inteligentes mientras escribes
- [ ] **Auto-guardado**: Guarda automáticamente el archivo cada cierto tiempo
- [x] **drag and drop**: recibe archivos de texto y los abre 

### Snippets y Plantillas
- [ ] **Sistema de Snippets**: Atajos expandibles personalizables
- [ ] **Plantillas Predefinidas**: Blog post, documentación técnica, README, etc.
- [ ] **Gestor de Plantillas**: Crear y administrar plantillas personalizadas
- [ ] **Variables en Plantillas**: Fecha, autor, título automáticos

### Tablas Mejoradas
- [ ] **Editor Visual de Tablas**: Interfaz gráfica para crear/editar tablas
- [ ] **Ordenamiento de Columnas**: Click en encabezados para ordenar
- [ ] **Importar desde CSV**: Convertir CSV a tablas markdown
- [ ] **Exportar Tablas**: Guardar tablas como CSV o Excel

---

## 🗂️ Fase 2: Organización y Workspace (v0.3.0)

### Sistema de Workspace
- [ ] **Vault/Workspace**: Carpeta raíz para organizar múltiples documentos
- [ ] **Explorador de Archivos**: Panel lateral con árbol de directorios
- [ ] **Búsqueda Global**: Buscar en todos los archivos del workspace
- [ ] **Búsqueda Full-Text**: Indexación rápida de contenido
- [ ] **Filtros Avanzados**: Por fecha, tags, tipo de contenido

### Tags y Metadata
- [ ] **Sistema de Tags**: Etiquetar documentos con #tags
- [ ] **Panel de Tags**: Vista de todos los tags usados
- [ ] **Filtrado por Tags**: Mostrar documentos con tags específicos
- [ ] **Metadata YAML**: Frontmatter para título, autor, fecha, etc.
- [ ] **Propiedades Personalizadas**: Campos metadata configurables

### Enlaces y Referencias
- [ ] **Wiki-style Links**: Soporte para [[nombre-archivo]]
- [ ] **Backlinks**: Ver qué documentos enlazan al actual
- [ ] **Graph View**: Visualización de conexiones entre documentos
- [ ] **Auto-sugerencias**: Autocompletar nombres de archivos al enlazar
- [ ] **Navegación Rápida**: Cmd+Click para abrir enlaces

### Carpetas Inteligentes
- [ ] **Smart Folders**: Carpetas virtuales con reglas dinámicas
- [ ] **Filtros Guardados**: Guardar búsquedas complejas como carpetas
- [ ] **Vistas Personalizadas**: Lista, cuadrícula, timeline

---

## 🤝 Fase 3: Colaboración y Sincronización (v0.4.0)

### Control de Versiones
- [ ] **Integración Git Nativa**: Commits, push, pull sin terminal
- [ ] **Diff Visual**: Comparación visual de versiones
- [ ] **Historial de Versiones**: Timeline de cambios del documento
- [ ] **Restaurar Versiones**: Volver a versiones anteriores
- [ ] **Blame View**: Ver quién cambió cada línea

### Sincronización
- [ ] **iCloud Drive**: Sincronización automática entre dispositivos Apple
- [ ] **Dropbox/Google Drive**: Soporte para servicios cloud populares
- [ ] **Sincronización Selectiva**: Elegir qué carpetas sincronizar
- [ ] **Resolución de Conflictos**: Interfaz para resolver conflictos de sync

### Colaboración
- [ ] **Comentarios**: Añadir comentarios en líneas específicas
- [ ] **Anotaciones**: Notas que no aparecen en la exportación
- [ ] **Modo Sugerencias**: Cambios que requieren aprobación
- [ ] **Compartir Enlaces**: Generar enlaces para compartir documentos
- [ ] **Colaboración en Tiempo Real**: Edición simultánea (futuro lejano)

### Backup y Seguridad
- [ ] **Backup Automático**: Copias de seguridad programadas
- [ ] **Encriptación**: Cifrado end-to-end opcional
- [ ] **Versionado Local**: Sistema tipo Time Machine
- [ ] **Exportación Masiva**: Backup de todo el workspace

---

## 📤 Fase 4: Exportación y Publicación Avanzada (v0.5.0)

### Formatos de Exportación
- [ ] **PDF Profesional**: Con tabla de contenidos clickeable
- [ ] **DOCX**: Compatible con Microsoft Word
- [ ] **ePub**: Para eBooks
- [ ] **Mobi**: Para Kindle
- [ ] **LaTeX**: Para documentos académicos
- [ ] **Presentaciones**: Estilo reveal.js o Slidev

### Temas de Exportación
- [ ] **Múltiples Temas**: GitHub, Medium, Academic, Minimal, etc.
- [ ] **Editor de Temas**: Personalizar colores, fuentes, espaciado
- [ ] **CSS Personalizado**: Inyectar CSS propio en exportaciones
- [ ] **Previsualización de Temas**: Ver antes de exportar

### Publicación Directa
- [ ] **GitHub Pages**: Publicar directamente a GitHub Pages
- [ ] **Medium**: Exportar a Medium con un click
- [ ] **WordPress**: Publicar en blogs WordPress
- [ ] **Dev.to**: Sincronizar con Dev.to
- [ ] **Sitio Estático**: Generar blog estático completo

### Optimización
- [ ] **Compresión de Imágenes**: Optimizar automáticamente al exportar
- [ ] **Lazy Loading**: Para imágenes en HTML exportado
- [ ] **SEO Metadata**: Añadir meta tags automáticamente
- [ ] **Minificación**: HTML/CSS/JS minificado en exportaciones

---

## 🤖 Fase 5: IA y Automatización (v0.6.0)

### Asistente de Escritura IA
- [ ] **Mejora de Redacción**: Sugerencias para mejorar claridad y estilo
- [ ] **Corrección Gramatical**: Detección avanzada de errores
- [ ] **Reescritura**: Reformular párrafos con diferentes tonos
- [ ] **Expansión de Ideas**: Generar contenido a partir de bullets
- [ ] **Resumen Automático**: TL;DR generado por IA

### Traducción
- [ ] **Traducción Inline**: Traducir selección sin salir del editor
- [ ] **Traducción de Documentos**: Traducir archivo completo
- [ ] **Múltiples Idiomas**: Soporte para 50+ idiomas
- [ ] **Preservar Formato**: Mantener markdown al traducir

### Generación de Contenido
- [ ] **Generación de Títulos**: Sugerencias de títulos basadas en contenido
- [ ] **Generación de Outline**: Estructura automática del documento
- [ ] **Autocompletado IA**: Sugerencias de continuación de texto
- [ ] **Generación de Imágenes**: Crear imágenes con IA para el documento

### Análisis Inteligente
- [ ] **Detección de Tono**: Analizar tono del texto (formal, casual, etc.)
- [ ] **Análisis de Sentimiento**: Detectar emociones en el texto
- [ ] **Sugerencias de SEO**: Optimización para motores de búsqueda
- [ ] **Detección de Plagio**: Verificar originalidad del contenido

---

## 🍎 Fase 6: Integración Nativa macOS (v0.7.0)

### Extensiones del Sistema
- [ ] **Quick Look Plugin**: Previsualizar .md sin abrir la app
- [ ] **Spotlight Integration**: Buscar dentro de archivos markdown
- [ ] **Finder Extension**: Acciones rápidas desde Finder
- [ ] **Share Extension**: Compartir desde otras apps a Mark Down Studio

### Características macOS
- [ ] **Touch Bar Support**: Controles contextuales en Touch Bar
- [ ] **Handoff**: Continuar entre Mac y iPad
- [ ] **Shortcuts Integration**: Automatizaciones con Shortcuts
- [ ] **Siri Integration**: Comandos de voz básicos
- [ ] **Widgets**: Widgets para Dashboard/Notification Center

### Optimizaciones
- [ ] **App Nativa**: Convertir a aplicación Electron o Swift
- [ ] **Menú Bar App**: Acceso rápido desde la barra de menú
- [ ] **Notificaciones**: Alertas del sistema para eventos importantes
- [ ] **Servicios**: Integración con el menú de Servicios de macOS

---

## 🎨 Fase 7: Características Visuales Avanzadas (v0.8.0)

### Diagramas y Visualizaciones
- [ ] **Mermaid Diagrams**: Renderizado de diagramas Mermaid
- [ ] **PlantUML**: Soporte para diagramas UML
- [ ] **Graphviz**: Gráficos DOT
- [ ] **Chart.js**: Gráficos y charts interactivos
- [ ] **Excalidraw**: Dibujos y sketches integrados

### Gestión de Imágenes
- [ ] **Galería de Imágenes**: Vista de todas las imágenes del documento
- [ ] **Compresión Automática**: Optimizar imágenes al insertar
- [ ] **Conversión WebP**: Convertir automáticamente a WebP
- [ ] **Hosting Integrado**: Subir imágenes a servicio cloud
- [ ] **Editor de Imágenes**: Recortar, redimensionar, filtros básicos

### Matemáticas
- [ ] **LaTeX/MathJax**: Ecuaciones matemáticas renderizadas
- [ ] **Editor Visual de Ecuaciones**: Interfaz gráfica para crear fórmulas
- [ ] **Biblioteca de Símbolos**: Insertar símbolos matemáticos fácilmente

---

## 🔌 Fase 8: Extensibilidad (v0.9.0)

### Sistema de Plugins
- [ ] **API de Plugins**: Permitir extensiones de terceros
- [ ] **Marketplace**: Tienda de plugins y temas
- [ ] **Temas Personalizados**: Sistema de temas completo
- [ ] **Comandos Personalizados**: Crear comandos propios
- [ ] **Hooks y Events**: Sistema de eventos para plugins

### Integraciones
- [ ] **Zotero**: Gestión de referencias bibliográficas
- [ ] **Notion**: Importar/exportar desde Notion
- [ ] **Obsidian**: Compatibilidad con vaults de Obsidian
- [ ] **Evernote**: Migración desde Evernote
- [ ] **Bear**: Importar notas de Bear

---

## 🚀 Fase 9: Características Premium (v1.0.0)

### Funcionalidades Profesionales
- [ ] **Modo Presentación**: Presentar documentos en pantalla completa
- [ ] **Notas del Orador**: Notas privadas para presentaciones
- [ ] **Control Remoto**: Controlar presentaciones desde móvil
- [ ] **Grabación de Pantalla**: Grabar presentaciones
- [ ] **Exportación de Video**: Convertir presentaciones a video

### Productividad Avanzada
- [ ] **Pomodoro Timer**: Temporizador integrado
- [ ] **Objetivos de Escritura**: Metas diarias/semanales
- [ ] **Estadísticas Detalladas**: Análisis de productividad
- [ ] **Heatmap de Actividad**: Visualizar patrones de escritura
- [ ] **Racha de Escritura**: Gamificación de la escritura

### Equipos y Empresas
- [ ] **Workspaces Compartidos**: Espacios de trabajo en equipo
- [ ] **Permisos y Roles**: Control de acceso granular
- [ ] **Auditoría**: Registro de cambios y accesos
- [ ] **SSO**: Single Sign-On para empresas
- [ ] **Administración Centralizada**: Panel de admin para equipos

---

## 📱 Fase 10: Multiplataforma (v2.0.0)

### Aplicaciones Nativas
- [ ] **iOS App**: Aplicación nativa para iPhone/iPad
- [ ] **iPadOS**: Optimizada para iPad con Apple Pencil
- [ ] **Windows**: Aplicación nativa para Windows
- [ ] **Linux**: Soporte para distribuciones principales
- [ ] **Android**: Aplicación para Android (consideración futura)

### Sincronización Universal
- [ ] **Sync Cross-Platform**: Sincronización entre todas las plataformas
- [ ] **Continuidad**: Continuar trabajo en cualquier dispositivo
- [ ] **Clipboard Universal**: Portapapeles compartido

---

## 💡 Ideas en Consideración

Funcionalidades que están siendo evaluadas para futuras versiones:

- **Modo Zen**: Pantalla completa sin distracciones
- **Dictado por Voz**: Escribir mediante voz
- **OCR**: Extraer texto de imágenes
- **Kanban Board**: Vista de tareas estilo Kanban
- **Calendario**: Integración con calendario para notas diarias
- **Journaling**: Modo diario/journal con plantillas
- **Mapas Mentales**: Visualización de ideas en mapa mental
- **Modo Outline**: Vista de estructura del documento
- **Comparación de Documentos**: Diff entre dos archivos
- **Merge de Documentos**: Combinar múltiples archivos
- **Importación Masiva**: Convertir múltiples archivos a markdown
- **API REST**: Acceso programático a documentos
- **CLI**: Herramienta de línea de comandos
- **Web Clipper**: Extensión de navegador para guardar contenido web

---

## 🎯 Priorización

Las fases pueden ajustarse según:
- Feedback de usuarios
- Demanda de características específicas
- Recursos disponibles
- Tendencias del mercado

---

## 🤝 Contribuciones

¿Tienes ideas para nuevas funcionalidades? ¡Nos encantaría escucharlas!

- Abre un **Issue** para sugerir nuevas características
- Vota en **Discussions** por las funcionalidades que más te interesan
- Contribuye con **Pull Requests** para implementar funcionalidades

---

**Última actualización**: Diciembre 2025  
**Versión del Roadmap**: 1.0
