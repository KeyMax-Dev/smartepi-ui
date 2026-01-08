# SmartEPI UI

[![React](https://img.shields.io/badge/React-19.2.3-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.24.12-FF0055)](https://www.framer.com/motion/)
[![Styled Components](https://img.shields.io/badge/Styled_Components-6.2.0-DB7093)](https://styled-components.com/)

Biblioteca moderna de componentes React com animações fluidas, validação de formulários integrada e design responsivo.

## ✨ Características

- 🎨 **Componentes Estilizados**: Todos os componentes são criados com Styled Components
- 🎭 **Animações Suaves**: Powered by Framer Motion para animações performáticas
- 📝 **Validação de Formulários**: Sistema integrado de validação com feedback visual
- 🎯 **TypeScript First**: Totalmente tipado para melhor DX
- 🌈 **Sistema de Temas**: Suporte a cores e temas customizáveis
- 📱 **Responsivo**: Design mobile-first
- ♿ **Acessível**: Componentes acessíveis por padrão

## 📦 Instalação

```bash
npm install @keymax-dev/smartepi-ui framer-motion react react-dom styled-components
```

### Peer Dependencies

```json
{
  "framer-motion": "^12.24.12",
  "react": "^19.2.3",
  "react-dom": "^19.2.3",
  "styled-components": "^6.2.0"
}
```

## 🚀 Uso Rápido

```tsx
import { Button, Input, useForm, useToast } from '@keymax-dev/smartepi-ui';

function App() {
  const toast = useToast();
  const form = useForm({
    name: { 
      value: '', 
      validators: [(v) => v ? null : 'Nome é obrigatório'] 
    },
    email: { 
      value: '',
      validators: [(v) => v.includes('@') ? null : 'Email inválido']
    }
  });

  const handleSubmit = () => {
    if (form.validate()) {
      const values = form.getValues();
      toast.success(`Bem-vindo, ${values.name}!`);
    }
  };

  return (
    <div>
      <Input 
        {...form.getFieldProps('name')}
        placeholder="Nome completo"
        iconLeft="person"
        containerType="outline"
      />
      
      <Input
        {...form.getFieldProps('email')}
        type="email"
        placeholder="Email"
        iconLeft="email"
        containerType="outline"
      />
      
      <Button onClick={handleSubmit} color="success">
        Enviar
      </Button>
    </div>
  );
}
```

## 📚 Componentes

### Formulários

- **Input** - Campo de entrada com ícones, validação e datepicker opcional
- **TextArea** - Área de texto multi-linha
- **Select** - Dropdown customizável
- **Checkbox** - Checkbox animado
- **Datepicker** - Seletor de data integrado
- **Form** - Container de formulário com espaçamento consistente

### Botões e Navegação

- **Button** - Botão customizável (default, outline, icon)
- **Tabs/Tab** - Sistema de navegação por abas
- **Icon** - Biblioteca de ícones SVG

### Layout e Display

- **CardBase** - Container card com sombra
- **Badge** - Etiquetas coloridas
- **Table/TableColumn** - Tabela de dados animada
- **ImageAvatar** - Avatar circular com fallback
- **ScrollableContainer** - Container com scroll customizado

### Hooks e Serviços

- **useForm** - Gerenciamento de formulários com validação
- **useModal** - Sistema de modais
- **useToast** - Notificações toast
- **useOverflow** - Gerenciamento de overlays

## 🎨 Exemplo Completo

Veja [EXAMPLE.md](./EXAMPLE.md) para exemplos detalhados de cada componente.

Ou execute o exemplo incluído:

```bash
# Clone o repositório
git clone https://github.com/KeyMax-Dev/smartepi-ui.git
cd smartepi-ui

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm start
# Abre automaticamente em http://localhost:3000
```

## 🛠️ Scripts Disponíveis

### `npm start` ou `npm run dev`

Inicia o servidor de desenvolvimento com hot-reload na porta 3000.

### `npm run build`

Compila a biblioteca usando Rollup e copia os assets.

### `npm run preview`

Pré-visualiza o build de produção localmente.

### `npm run build:clean`

Reinstala dependências e faz um build limpo.

### `npm run check`

Executa o Biome para verificar qualidade de código (lint + format).

### `npm run check:fix`

Corrige automaticamente problemas de lint e formatação.

### `npm run lint`

Apenas verifica regras de linting.

### `npm run format`

Apenas formata o código.

## 📖 Documentação dos Componentes

### Button

```tsx
<Button
  color="primary" | "secondary" | "success" | "danger" | "warning"
  buttonType="default" | "outline" | "icon"
  icon="settings" // quando buttonType="icon"
  iconSize="30px"
  onClick={() => {}}
>
  Texto do botão
</Button>
```

### Input

```tsx
<Input
  placeholder="Placeholder"
  containerType="outline" | "downline"
  iconLeft="person"
  iconRight="close"
  enableClear={true}
  enableDatepicker={true}
  color="primary"
  type="text" | "email" | "password" | ...
  {...form.getFieldProps('fieldName')}
/>
```

### useForm Hook

```tsx
const form = useForm<MyFormData>({
  fieldName: {
    value: 'valor inicial',
    validators: [
      (value) => value ? null : 'Campo obrigatório',
      (value) => value.length >= 3 ? null : 'Mínimo 3 caracteres'
    ]
  }
});

// Validar todos os campos
const isValid = form.validate();

// Obter valores
const values = form.getValues();

// Resetar formulário
form.reset();

// Props para Input/Select/Checkbox
<Input {...form.getFieldProps('fieldName')} />
```

### Toast

```tsx
const toast = useToast();

toast.success('Operação bem-sucedida!');
toast.error('Ocorreu um erro!');
toast.warning('Atenção necessária!');
toast.info('Informação útil!');
```

### Modal

```tsx
const modal = useModal();

modal.open(
  <CardBase>
    <h2>Título do Modal</h2>
    <p>Conteúdo do modal...</p>
    <Button onClick={() => modal.close()}>Fechar</Button>
  </CardBase>
);
```

### Table

```tsx
<Table
  data={arrayOfObjects}
  onClickRow={(row) => console.log(row)}
>
  <TableColumn header="ID" binding="id" />
  <TableColumn 
    header="Nome" 
    binding="name"
    render={(row) => <strong>{row.name}</strong>}
  />
  <TableColumn 
    header="Status"
    binding="status"
    render={(row) => (
      <Badge color={row.active ? 'success' : 'danger'}>
        {row.status}
      </Badge>
    )}
  />
</Table>
```

## 🎨 Sistema de Cores

Todos os componentes suportam as seguintes cores:

- `primary` (roxo/azul - padrão)
- `secondary` (cinza)
- `success` (verde)
- `danger` (vermelho)
- `warning` (amarelo)

Use a prop `invert` para inverter cores de fundo e texto.

## 🔧 Desenvolvimento

```bash
# Instalar dependências
npm install

# Rodar verificações de código
npm run check

# Compilar biblioteca
npm run build

# Verificar tipagem TypeScript
npx tsc --noEmit
```

## 📋 Tecnologias

- **React** 19.2.3 - Framework UI
- **TypeScript** 5.9.3 - Type safety
- **Framer Motion** 12.24.12 - Animações
- **Styled Components** 6.2.0 - Styling
- **React Router DOM** 7.12.0 - Roteamento (dev)
- **Biome** 2.3.11 - Linting e formatação
- **Rollup** 4.55.1 - Bundler

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Autores

**KeyMax Dev** - [@KeyMax-Dev](https://github.com/KeyMax-Dev)

---

⭐ Se este projeto foi útil, considere dar uma estrela no GitHub!