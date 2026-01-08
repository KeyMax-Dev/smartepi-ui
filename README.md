# SmartEPI UI

[![React](https://img.shields.io/badge/React-19.2.3-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.24.12-FF0055)](https://www.framer.com/motion/)
[![Styled Components](https://img.shields.io/badge/Styled_Components-6.2.0-DB7093)](https://styled-components.com/)

Biblioteca moderna de componentes React com animações fluidas, validação de formulários integrada e design responsivo. SmartEPI UI fornece uma coleção completa de componentes prontos para uso em aplicações corporativas e produtos web.

## ✨ Características

- 🎨 **Componentes Estilizados**: Todos os componentes criados com Styled Components para fácil customização
- 🎭 **Animações Suaves**: Powered by Framer Motion para transições performáticas
- 📝 **Validação de Formulários**: Sistema integrado de validação com feedback visual em tempo real
- 🎯 **TypeScript First**: Totalmente tipado para melhor experiência de desenvolvimento
- 🌈 **Sistema de Temas**: Suporte a temas dark/light e cores customizáveis
- 📱 **Design Responsivo**: Mobile-first approach com breakpoints inteligentes
- ♿ **Acessibilidade**: Componentes seguem padrões WCAG 2.1
- 🔧 **Modular**: Importe apenas o que você precisa
- 🎪 **22 Componentes**: Biblioteca completa para aplicações empresariais

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
import { 
  Button, 
  Input, 
  useForm, 
  useToast,
  ThemeProvider,
  LightTheme 
} from '@keymax-dev/smartepi-ui';

function App() {
  const toast = useToast(<div />);
  
  // Helper para toast
  const showToast = {
    success: (msg: string) => {
      toast.setContent(<span>{msg}</span>);
      (toast as any).config.color = 'success';
      toast.open();
    },
    error: (msg: string) => {
      toast.setContent(<span>{msg}</span>);
      (toast as any).config.color = 'danger';
      toast.open();
    }
  };
  
  const form = useForm({
    name: { 
      value: '', 
      validators: [(v: string) => v ? null : 'Nome é obrigatório'] 
    },
    email: { 
      value: '',
      validators: [(v: string) => v.includes('@') ? null : 'Email inválido']
    }
  });

  const handleSubmit = () => {
    if (form.validate()) {
      const values = form.getValues();
      showToast.success(`Bem-vindo, ${values.name}!`);
    } else {
      showToast.error('Corrija os erros no formulário');
    }
  };

  return (
    <ThemeProvider theme={LightTheme}>
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
    </ThemeProvider>
  );
}
```

## 📚 Componentes Disponíveis

### 🎛️ Componentes de Formulário

#### **Input**
Campo de entrada versátil com suporte a ícones, validação e datepicker.

```tsx
<Input
  placeholder="Digite seu nome"
  containerType="outline" // ou "downline"
  iconLeft="person"
  iconRight="close"
  enableClear={true}
  enableDatepicker={false}
  color="primary"
  type="text" // email, password, number, etc.
  {...form.getFieldProps('fieldName')}
/>
```

**Props principais:**
- `containerType`: "outline" (com borda) ou "downline" (só linha inferior)
- `iconLeft/iconRight`: Nome do ícone da biblioteca
- `enableClear`: Mostra botão "X" para limpar
- `enableDatepicker`: Ativa seletor de data
- `color`: primary, secondary, success, danger, warning

#### **TextArea**
Área de texto multi-linha com auto-resize opcional.

```tsx
<TextArea
  placeholder="Digite suas observações"
  rows={4}
  {...form.getFieldProps('observacoes')}
/>
```

#### **Select**
Dropdown customizável com busca integrada.

```tsx
<Select
  placeholder="Selecione uma opção"
  data={[
    { label: 'Opção 1', value: '1' },
    { label: 'Opção 2', value: '2' }
  ]}
  dataKey="label"
  value={selectedValue}
  onChange={(item) => setSelectedValue(item)}
  onSearch={(term) => console.log(term)}
  {...form.getFieldProps('country')}
/>
```

**Props:**
- `data`: Array de objetos
- `dataKey`: Chave a ser exibida
- `onSearch`: Callback quando usuário digita para filtrar
- `onOpen/onClose`: Callbacks de abertura/fechamento

#### **Checkbox**
Checkbox animado com label customizável.

```tsx
<Checkbox
  value={isChecked}
  onToggle={(e) => setIsChecked((e.target as HTMLInputElement).checked)}
  size="30px"
  color="success"
>
  <span>Eu concordo com os termos</span>
</Checkbox>
```

#### **Datepicker**
Seletor de data integrado (usado dentro do Input).

```tsx
<Input
  enableDatepicker={true}
  placeholder="Selecione uma data"
  {...form.getFieldProps('birthDate')}
/>
```

#### **Form**
Container de formulário com espaçamento consistente.

```tsx
<Form>
  <Input placeholder="Nome" />
  <Input placeholder="Email" />
  <Button>Enviar</Button>
</Form>
```

### 🎨 Componentes de UI

#### **Button**
Botão com múltiplos estilos e cores.

```tsx
<Button
  color="primary" // primary, secondary, success, danger, warning
  buttonType="default" // default, outline, icon
  icon="settings" // quando buttonType="icon"
  iconSize="30px"
  onClick={() => handleClick()}
>
  Clique Aqui
</Button>

{/* Botão outline */}
<Button buttonType="outline" color="danger">
  Cancelar
</Button>

{/* Botão apenas ícone */}
<Button buttonType="icon" icon="add" iconSize="24px" />
```

#### **Badge**
Etiquetas coloridas para status e categorias.

```tsx
<Badge color="success">Ativo</Badge>
<Badge color="danger">Inativo</Badge>
<Badge color="warning">Pendente</Badge>
<Badge invert>Invertido</Badge>
```

#### **CardBase**
Container card com sombra e padding.

```tsx
<CardBase>
  <h2>Título do Card</h2>
  <p>Conteúdo do card...</p>
</CardBase>
```

#### **Icon**
Biblioteca de ícones SVG.

```tsx
<Icon name="settings" size="24px" color="#000" />
<Icon name="person" size="32px" />
<Icon name="email" />
```

**Ícones disponíveis:** person, email, lock, settings, add, close, search, calendar, arrow-down, arrow-up, check, e mais...

#### **ImageAvatar**
Avatar circular com fallback para iniciais.

```tsx
<ImageAvatar
  src="https://example.com/avatar.jpg"
  alt="Nome do Usuário"
  size="80px"
  fallbackText="NU"
/>
```

#### **ScrollableContainer**
Container com scroll estilizado.

```tsx
<ScrollableContainer maxHeight="400px">
  {/* Conteúdo scrollável */}
</ScrollableContainer>
```

### 📊 Componentes de Dados

#### **Table & TableColumn**
Tabela de dados com animações.

```tsx
const data = [
  { id: 1, name: 'João', role: 'Developer', status: 'Ativo' },
  { id: 2, name: 'Maria', role: 'Designer', status: 'Ativo' }
];

<Table data={data}>
  <TableColumn key="id" name="ID">
    {(row: typeof data[0]) => row.id}
  </TableColumn>
  
  <TableColumn key="name" name="Nome">
    {(row: typeof data[0]) => <strong>{row.name}</strong>}
  </TableColumn>
  
  <TableColumn key="role" name="Cargo">
    {(row: typeof data[0]) => row.role}
  </TableColumn>
  
  <TableColumn key="status" name="Status">
    {(row: typeof data[0]) => (
      <Badge color={row.status === 'Ativo' ? 'success' : 'danger'}>
        {row.status}
      </Badge>
    )}
  </TableColumn>
</Table>
```

### 🗂️ Componentes de Navegação

#### **Tabs & Tab**
Sistema de navegação por abas.

```tsx
const [selectedTab, setSelectedTab] = useState(0);

<Tabs selectedIndex={selectedTab} onSelect={setSelectedTab}>
  <Tab title="Perfil">
    <div>Conteúdo do perfil...</div>
  </Tab>
  
  <Tab title="Configurações">
    <div>Conteúdo das configurações...</div>
  </Tab>
  
  <Tab title="Sobre">
    <div>Informações sobre...</div>
  </Tab>
</Tabs>
```

## 🪝 Hooks e Serviços

### **useForm**
Gerenciamento completo de formulários com validação.

```tsx
interface MyFormData {
  [key: string]: any;
  name: string;
  email: string;
  age: number;
  acceptTerms: boolean;
}

const form = useForm<MyFormData>({
  name: {
    value: '',
    validators: [
      (v: string) => v ? null : 'Nome é obrigatório',
      (v: string) => v.length >= 3 ? null : 'Mínimo 3 caracteres'
    ]
  },
  email: {
    value: '',
    validators: [
      (v: string) => v.includes('@') ? null : 'Email inválido'
    ]
  },
  age: {
    value: 0,
    validators: [
      (v: number) => v >= 18 ? null : 'Deve ser maior de idade'
    ]
  },
  acceptTerms: {
    value: false,
    validators: [
      (v: boolean) => v ? null : 'Aceite os termos'
    ]
  }
});

// Métodos disponíveis:
form.validate();  // Retorna true/false
form.getValues(); // Retorna todos os valores
form.reset();     // Reseta para valores iniciais
form.getFieldProps('name'); // Props para o input

// Uso com componentes:
<Input {...form.getFieldProps('name')} placeholder="Nome" />
<Input {...form.getFieldProps('email')} placeholder="Email" />
<Checkbox {...form.getFieldProps('acceptTerms')}>
  Aceito os termos
</Checkbox>
```

**Validadores personalizados:**
```tsx
const cpfValidator = (v: string) => {
  // Lógica de validação de CPF
  return isValidCPF(v) ? null : 'CPF inválido';
};

const form = useForm({
  cpf: {
    value: '',
    validators: [cpfValidator]
  }
});
```

### **useToast**
Sistema de notificações toast.

```tsx
const toastController = useToast(<div />);

// Helper recomendado:
const toast = {
  success: (msg: string) => {
    toastController.setContent(<span>{msg}</span>);
    (toastController as any).config.color = 'success';
    toastController.open();
  },
  error: (msg: string) => {
    toastController.setContent(<span>{msg}</span>);
    (toastController as any).config.color = 'danger';
    toastController.open();
  },
  warning: (msg: string) => {
    toastController.setContent(<span>{msg}</span>);
    (toastController as any).config.color = 'secondary';
    toastController.open();
  },
  info: (msg: string) => {
    toastController.setContent(<span>{msg}</span>);
    (toastController as any).config.color = 'primary';
    toastController.open();
  }
};

// Uso:
toast.success('Operação bem-sucedida!');
toast.error('Erro ao processar!');
toast.warning('Atenção necessária!');
toast.info('Informação útil!');
```

**Toast customizado:**
```tsx
toastController.setContent(
  <div>
    <strong>Título</strong>
    <p>Mensagem detalhada...</p>
  </div>
);
toastController.open();

// Fechar programaticamente
toastController.close();
```

### **useModal**
Sistema de modais/dialogs.

```tsx
const modal = useModal(<div />);

// Abrir modal:
const handleOpenModal = () => {
  modal.setContent(
    <CardBase style={{ padding: '30px', maxWidth: '500px' }}>
      <h2>Confirmar Ação</h2>
      <p>Tem certeza que deseja continuar?</p>
      
      <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        <Button color="success" onClick={() => {
          handleConfirm();
          modal.close();
        }}>
          Confirmar
        </Button>
        
        <Button color="danger" buttonType="outline" onClick={() => modal.close()}>
          Cancelar
        </Button>
      </div>
    </CardBase>
  );
  modal.open();
};

// Uso:
<Button onClick={handleOpenModal}>
  Abrir Modal
</Button>
```

**Modal com formulário:**
```tsx
const openFormModal = () => {
  modal.setContent(
    <CardBase style={{ padding: '30px', minWidth: '400px' }}>
      <h2>Novo Cadastro</h2>
      <Form>
        <Input placeholder="Nome" />
        <Input placeholder="Email" />
        <Button onClick={() => {
          // Processar formulário
          modal.close();
        }}>
          Salvar
        </Button>
      </Form>
    </CardBase>
  );
  modal.open();
};
```

### **useOverflow**
Gerenciamento de overlays e elementos flutuantes.

```tsx
const overflow = useOverflow(<div />);

overflow.setContent(<CustomOverlay />);
overflow.open();
overflow.close();
```

## 🎨 Sistema de Temas

### Cores Disponíveis

Todos os componentes suportam o sistema de cores:

- **primary**: Roxo/Azul (#667eea) - Cor principal
- **secondary**: Cinza (#6c757d) - Ações secundárias
- **success**: Verde (#28a745) - Sucesso/Confirmação
- **danger**: Vermelho (#dc3545) - Erro/Exclusão
- **warning**: Amarelo (#ffc107) - Alerta/Atenção

### ThemeProvider

```tsx
import { ThemeProvider, LightTheme, DarkTheme, setGlobalTheme } from '@keymax-dev/smartepi-ui';

// Definir tema global
setGlobalTheme(LightTheme);

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      {/* Sua aplicação */}
    </ThemeProvider>
  );
}
```

### Tema Customizado

```tsx
import { DefaultTheme } from 'styled-components';

const CustomTheme: DefaultTheme = {
  colors: {
    primary: '#667eea',
    secondary: '#6c757d',
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    // ... outras cores
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px'
  }
};

<ThemeProvider theme={CustomTheme}>
  <App />
</ThemeProvider>
```

## 📝 Exemplo Completo de Aplicação

```tsx
import React, { useState } from 'react';
import {
  ThemeProvider,
  LightTheme,
  setGlobalTheme,
  Button,
  Input,
  Select,
  Checkbox,
  TextArea,
  Form,
  CardBase,
  Badge,
  Table,
  TableColumn,
  Tabs,
  Tab,
  useForm,
  useToast,
  useModal
} from '@keymax-dev/smartepi-ui';

setGlobalTheme(LightTheme);

interface UserFormData {
  [key: string]: any;
  name: string;
  email: string;
  country: string;
  terms: boolean;
}

function App() {
  const [selectedTab, setSelectedTab] = useState(0);
  const modal = useModal(<div />);
  const toastController = useToast(<div />);

  const toast = {
    success: (msg: string) => {
      toastController.setContent(<span>{msg}</span>);
      (toastController as any).config.color = 'success';
      toastController.open();
    },
    error: (msg: string) => {
      toastController.setContent(<span>{msg}</span>);
      (toastController as any).config.color = 'danger';
      toastController.open();
    }
  };

  const form = useForm<UserFormData>({
    name: {
      value: '',
      validators: [(v: string) => v ? null : 'Nome é obrigatório']
    },
    email: {
      value: '',
      validators: [(v: string) => v.includes('@') ? null : 'Email inválido']
    },
    country: { value: '' },
    terms: {
      value: false,
      validators: [(v: boolean) => v ? null : 'Aceite os termos']
    }
  });

  const handleSubmit = () => {
    if (form.validate()) {
      const values = form.getValues();
      toast.success(`Bem-vindo, ${values.name}!`);
    } else {
      toast.error('Corrija os erros no formulário');
    }
  };

  const tableData = [
    { id: 1, name: 'João Silva', status: 'Ativo' },
    { id: 2, name: 'Maria Santos', status: 'Inativo' }
  ];

  return (
    <ThemeProvider theme={LightTheme}>
      <div style={{ padding: '40px' }}>
        <h1>SmartEPI UI Demo</h1>

        <CardBase style={{ marginBottom: '20px' }}>
          <h2>Formulário de Cadastro</h2>
          <Form>
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

            <Select
              {...form.getFieldProps('country')}
              placeholder="Selecione um país"
              data={[
                { label: 'Brasil', value: 'BR' },
                { label: 'Portugal', value: 'PT' }
              ]}
              dataKey="label"
            />

            <Checkbox {...form.getFieldProps('terms')}>
              Aceito os termos e condições
            </Checkbox>

            <div style={{ display: 'flex', gap: '10px' }}>
              <Button onClick={handleSubmit} color="success">
                Enviar
              </Button>
              <Button onClick={() => form.reset()} buttonType="outline">
                Limpar
              </Button>
            </div>
          </Form>
        </CardBase>

        <CardBase style={{ marginBottom: '20px' }}>
          <h2>Tabela de Dados</h2>
          <Table data={tableData}>
            <TableColumn key="id" name="ID">
              {(row: typeof tableData[0]) => row.id}
            </TableColumn>
            <TableColumn key="name" name="Nome">
              {(row: typeof tableData[0]) => row.name}
            </TableColumn>
            <TableColumn key="status" name="Status">
              {(row: typeof tableData[0]) => (
                <Badge color={row.status === 'Ativo' ? 'success' : 'danger'}>
                  {row.status}
                </Badge>
              )}
            </TableColumn>
          </Table>
        </CardBase>

        <CardBase>
          <Tabs selectedIndex={selectedTab} onSelect={setSelectedTab}>
            <Tab title="Perfil">
              <p>Conteúdo do perfil...</p>
            </Tab>
            <Tab title="Configurações">
              <p>Conteúdo das configurações...</p>
            </Tab>
          </Tabs>
        </CardBase>
      </div>
    </ThemeProvider>
  );
}

export default App;
```

## 🛠️ Scripts Disponíveis

### Desenvolvimento

```bash
# Inicia servidor de desenvolvimento com hot-reload
npm start
# ou
npm run dev

# Abre automaticamente em http://localhost:3000
```

### Build e Produção

```bash
# Compila a biblioteca usando Rollup
npm run build

# Pré-visualiza o build de produção
npm run preview

# Build limpo (reinstala dependências)
npm run build:clean
```

### Qualidade de Código

```bash
# Executa Biome (lint + format)
npm run check

# Corrige automaticamente problemas
npm run check:fix

# Apenas linting
npm run lint

# Apenas formatação
npm run format
```

### TypeScript

```bash
# Verifica tipagem sem emitir arquivos
npx tsc --noEmit
```

## 🏗️ Estrutura do Projeto

```
smartepi-ui/
├── src/
│   ├── lib/                    # Código-fonte da biblioteca
│   │   ├── components/         # Componentes React
│   │   │   ├── Badge/
│   │   │   ├── Button/
│   │   │   ├── CardBase/
│   │   │   ├── Checkbox/
│   │   │   ├── Datepicker/
│   │   │   ├── Form/
│   │   │   ├── Icon/
│   │   │   ├── ImageAvatar/
│   │   │   ├── Input/
│   │   │   ├── ScrollableContainer/
│   │   │   ├── Select/
│   │   │   ├── Table/
│   │   │   ├── Tabs/
│   │   │   └── TextArea/
│   │   ├── services/           # Hooks e serviços
│   │   │   ├── aside-components/  # Modal, Toast, Overflow
│   │   │   └── input-validator/   # Sistema de validação
│   │   ├── assets/            # Temas, ícones, animações
│   │   └── types/             # Tipos TypeScript
│   ├── app/                   # Aplicação demo
│   └── index.tsx              # Entry point
├── build/                     # Arquivos compilados
├── public/                    # Assets estáticos
├── biome.json                # Configuração Biome
├── tsconfig.json             # Configuração TypeScript
├── rollup.config.js          # Configuração Rollup
└── package.json
```

## 📋 Tecnologias

- **React** 19.2.3 - Framework UI
- **TypeScript** 5.9.3 - Type safety
- **Framer Motion** 12.24.12 - Animações fluidas
- **Styled Components** 6.2.0 - CSS-in-JS
- **React Router DOM** 7.12.0 - Roteamento (dev)
- **Biome** 2.3.11 - Linting e formatação
- **Rollup** 4.55.1 - Module bundler
- **Vite** 6.4.1 - Build tool e dev server

## 🔍 Browser Support

- Chrome/Edge (últimas 2 versões)
- Firefox (últimas 2 versões)
- Safari (últimas 2 versões)
- iOS Safari (últimas 2 versões)
- Android Chrome (últimas 2 versões)

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor, siga estas etapas:

1. **Fork** o projeto
2. Crie uma **branch** para sua feature (`git checkout -b feature/MinhaFeature`)
3. **Commit** suas mudanças (`git commit -m 'feat: Adiciona MinhaFeature'`)
4. **Push** para a branch (`git push origin feature/MinhaFeature`)
5. Abra um **Pull Request**

### Padrões de Commit

Seguimos [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` Nova funcionalidade
- `fix:` Correção de bug
- `docs:` Mudanças na documentação
- `style:` Formatação, ponto e vírgula, etc.
- `refactor:` Refatoração de código
- `test:` Adição de testes
- `chore:` Tarefas de manutenção

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Autores

**KeyMax Dev** - [@KeyMax-Dev](https://github.com/KeyMax-Dev)

## 🆘 Suporte

- 📧 Email: suporte@keymax.dev
- 🐛 Issues: [GitHub Issues](https://github.com/KeyMax-Dev/smartepi-ui/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/KeyMax-Dev/smartepi-ui/discussions)

## 🗺️ Roadmap

- [ ] Componente de Dropdown Menu
- [ ] Componente de Tooltip
- [ ] Componente de Pagination
- [ ] Tema Dark completo
- [ ] Suporte a internacionalização (i18n)
- [ ] Storybook para documentação interativa
- [ ] Testes unitários com Vitest
- [ ] Mais animações e transições

---

⭐ **Se este projeto foi útil, considere dar uma estrela no GitHub!**

**Made with ❤️ by KeyMax Dev**
---

⭐ **Se este projeto foi útil, considere dar uma estrela no GitHub!**

**Made with ❤️ by KeyMax Dev**