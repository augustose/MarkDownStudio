// ========================================
// Mark Down Studio - Main Application
// ========================================

class MarkDownStudio {
  constructor() {
    this.editor = document.getElementById('editor');
    this.preview = document.getElementById('preview');
    this.currentFile = null;
    this.hasUnsavedChanges = false;
    
    this.init();
  }

  init() {
    this.setupMarked();
    this.setupEventListeners();
    this.loadFromLocalStorage();
    this.updatePreview();
    this.applyTheme();
  }

  // ========================================
  // Markdown Configuration
  // ========================================
  
  setupMarked() {
    marked.setOptions({
      highlight: function(code, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return hljs.highlight(code, { language: lang }).value;
          } catch (err) {
            console.error('Highlight error:', err);
          }
        }
        return hljs.highlightAuto(code).value;
      },
      breaks: true,
      gfm: true
    });
  }

  // ========================================
  // Event Listeners
  // ========================================
  
  setupEventListeners() {
    // Editor input
    this.editor.addEventListener('input', () => {
      this.updatePreview();
      this.hasUnsavedChanges = true;
      this.autoSave();
    });

    // Synchronized scrolling
    this.editor.addEventListener('scroll', () => {
      const scrollPercentage = this.editor.scrollTop / (this.editor.scrollHeight - this.editor.clientHeight);
      this.preview.scrollTop = scrollPercentage * (this.preview.scrollHeight - this.preview.clientHeight);
    });

    // File operations
    document.getElementById('newBtn').addEventListener('click', () => this.newFile());
    document.getElementById('openBtn').addEventListener('click', () => this.openFile());
    document.getElementById('saveBtn').addEventListener('click', () => this.saveFile());
    document.getElementById('exportBtn').addEventListener('click', () => this.exportHTML());

    // Formatting buttons
    document.getElementById('boldBtn').addEventListener('click', () => this.insertFormat('**', '**'));
    document.getElementById('italicBtn').addEventListener('click', () => this.insertFormat('*', '*'));
    document.getElementById('linkBtn').addEventListener('click', () => this.insertLink());
    document.getElementById('codeBtn').addEventListener('click', () => this.insertFormat('`', '`'));
    document.getElementById('h1Btn').addEventListener('click', () => this.insertHeading(1));
    document.getElementById('h2Btn').addEventListener('click', () => this.insertHeading(2));
    document.getElementById('listBtn').addEventListener('click', () => this.insertList());

    // Theme toggle
    document.getElementById('themeToggle').addEventListener('click', () => this.toggleTheme());

    // Keyboard shortcuts
    document.addEventListener('keydown', (e) => this.handleKeyboard(e));

    // File input
    document.getElementById('fileInput').addEventListener('change', (e) => this.handleFileSelect(e));

    // Prevent accidental close
    window.addEventListener('beforeunload', (e) => {
      if (this.hasUnsavedChanges) {
        e.preventDefault();
        e.returnValue = '';
      }
    });
  }

  // ========================================
  // Preview Update
  // ========================================
  
  updatePreview() {
    const markdown = this.editor.value;
    const html = marked.parse(markdown);
    const clean = DOMPurify.sanitize(html);
    this.preview.innerHTML = clean;
    
    // Re-highlight code blocks
    this.preview.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightElement(block);
    });
  }

  // ========================================
  // File Operations
  // ========================================
  
  newFile() {
    if (this.hasUnsavedChanges) {
      if (!confirm('¿Descartar cambios no guardados?')) {
        return;
      }
    }
    
    this.editor.value = '';
    this.currentFile = null;
    this.hasUnsavedChanges = false;
    this.updatePreview();
    localStorage.removeItem('mdstudio_content');
  }

  openFile() {
    document.getElementById('fileInput').click();
  }

  handleFileSelect(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      this.editor.value = e.target.result;
      this.currentFile = file.name;
      this.hasUnsavedChanges = false;
      this.updatePreview();
    };
    reader.readAsText(file);
  }

  saveFile() {
    const content = this.editor.value;
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = this.currentFile || 'documento.md';
    a.click();
    URL.revokeObjectURL(url);
    
    this.hasUnsavedChanges = false;
    this.showNotification('Archivo guardado');
  }

  exportHTML() {
    const markdown = this.editor.value;
    const html = marked.parse(markdown);
    const clean = DOMPurify.sanitize(html);
    
    const fullHTML = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Documento exportado</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css">
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      max-width: 800px;
      margin: 40px auto;
      padding: 20px;
      line-height: 1.6;
      color: #1d1d1f;
    }
    code {
      background: #f5f5f7;
      padding: 2px 6px;
      border-radius: 4px;
      font-family: 'Monaco', 'Consolas', monospace;
    }
    pre {
      background: #1d1d1f;
      padding: 16px;
      border-radius: 8px;
      overflow-x: auto;
    }
    pre code {
      background: none;
      color: #f5f5f7;
    }
    blockquote {
      border-left: 4px solid #007aff;
      padding-left: 16px;
      color: #6e6e73;
    }
    table {
      border-collapse: collapse;
      width: 100%;
    }
    th, td {
      border: 1px solid #d2d2d7;
      padding: 8px 12px;
      text-align: left;
    }
    th {
      background: #f5f5f7;
    }
    img {
      max-width: 100%;
      height: auto;
    }
  </style>
</head>
<body>
${clean}
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>
<script>hljs.highlightAll();</script>
</body>
</html>`;

    const blob = new Blob([fullHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = (this.currentFile || 'documento').replace('.md', '') + '.html';
    a.click();
    URL.revokeObjectURL(url);
    
    this.showNotification('HTML exportado');
  }

  // ========================================
  // Formatting Functions
  // ========================================
  
  insertFormat(before, after) {
    const start = this.editor.selectionStart;
    const end = this.editor.selectionEnd;
    const text = this.editor.value;
    const selectedText = text.substring(start, end) || 'texto';
    
    const newText = text.substring(0, start) + before + selectedText + after + text.substring(end);
    this.editor.value = newText;
    
    this.editor.focus();
    this.editor.setSelectionRange(start + before.length, end + before.length);
    this.updatePreview();
    this.hasUnsavedChanges = true;
  }

  insertLink() {
    const start = this.editor.selectionStart;
    const end = this.editor.selectionEnd;
    const text = this.editor.value;
    const selectedText = text.substring(start, end) || 'texto del enlace';
    
    const link = `[${selectedText}](url)`;
    const newText = text.substring(0, start) + link + text.substring(end);
    this.editor.value = newText;
    
    this.editor.focus();
    const urlStart = start + selectedText.length + 3;
    this.editor.setSelectionRange(urlStart, urlStart + 3);
    this.updatePreview();
    this.hasUnsavedChanges = true;
  }

  insertHeading(level) {
    const start = this.editor.selectionStart;
    const text = this.editor.value;
    
    // Find start of current line
    let lineStart = start;
    while (lineStart > 0 && text[lineStart - 1] !== '\n') {
      lineStart--;
    }
    
    const prefix = '#'.repeat(level) + ' ';
    const newText = text.substring(0, lineStart) + prefix + text.substring(lineStart);
    this.editor.value = newText;
    
    this.editor.focus();
    this.editor.setSelectionRange(start + prefix.length, start + prefix.length);
    this.updatePreview();
    this.hasUnsavedChanges = true;
  }

  insertList() {
    const start = this.editor.selectionStart;
    const text = this.editor.value;
    
    // Find start of current line
    let lineStart = start;
    while (lineStart > 0 && text[lineStart - 1] !== '\n') {
      lineStart--;
    }
    
    const prefix = '- ';
    const newText = text.substring(0, lineStart) + prefix + text.substring(lineStart);
    this.editor.value = newText;
    
    this.editor.focus();
    this.editor.setSelectionRange(start + prefix.length, start + prefix.length);
    this.updatePreview();
    this.hasUnsavedChanges = true;
  }

  // ========================================
  // Keyboard Shortcuts
  // ========================================
  
  handleKeyboard(e) {
    const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
    const modifier = isMac ? e.metaKey : e.ctrlKey;

    if (modifier) {
      switch(e.key.toLowerCase()) {
        case 's':
          e.preventDefault();
          this.saveFile();
          break;
        case 'n':
          e.preventDefault();
          this.newFile();
          break;
        case 'o':
          e.preventDefault();
          this.openFile();
          break;
        case 'b':
          e.preventDefault();
          this.insertFormat('**', '**');
          break;
        case 'i':
          e.preventDefault();
          this.insertFormat('*', '*');
          break;
        case 'k':
          e.preventDefault();
          this.insertLink();
          break;
        case 'e':
          e.preventDefault();
          this.insertFormat('`', '`');
          break;
      }
    }
  }

  // ========================================
  // Theme Management
  // ========================================
  
  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('mdstudio_theme', newTheme);
    
    // Update highlight.js theme
    const hlTheme = document.querySelector('link[href*="highlight.js"]');
    if (hlTheme) {
      hlTheme.href = newTheme === 'dark' 
        ? 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css'
        : 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github.min.css';
    }
  }

  applyTheme() {
    const savedTheme = localStorage.getItem('mdstudio_theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  // ========================================
  // Auto-save & Persistence
  // ========================================
  
  autoSave() {
    localStorage.setItem('mdstudio_content', this.editor.value);
  }

  loadFromLocalStorage() {
    const saved = localStorage.getItem('mdstudio_content');
    if (saved) {
      this.editor.value = saved;
    }
  }

  // ========================================
  // Notifications
  // ========================================
  
  showNotification(message) {
    // Simple console notification for MVP
    // Could be enhanced with toast notifications later
    console.log('✓', message);
  }
}

// ========================================
// Initialize App
// ========================================

document.addEventListener('DOMContentLoaded', () => {
  new MarkDownStudio();
});
