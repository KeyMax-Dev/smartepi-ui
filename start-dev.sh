#!/bin/bash

# Script para iniciar o servidor de desenvolvimento
# Uso: ./start-dev.sh

echo "🚀 Iniciando SmartEPI UI Development Server..."
echo ""

# Limpar processos anteriores
echo "🧹 Limpando processos anteriores na porta 3000..."
lsof -ti:3000 | xargs kill -9 2>/dev/null || true

# Limpar cache do Vite
if [ -d "node_modules/.vite" ]; then
  echo "🗑️  Limpando cache do Vite..."
  rm -rf node_modules/.vite
fi

echo ""
echo "✅ Iniciando Vite..."
echo "📱 Servidor abrirá em: http://localhost:3000"
echo ""
echo "⌨️  Comandos:"
echo "   - Pressione Ctrl+C para parar o servidor"
echo "   - Pressione 'r' + Enter para reiniciar"
echo "   - Pressione 'o' + Enter para abrir no navegador"
echo ""

# Iniciar servidor
npm start
