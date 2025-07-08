# React + TypeScript + Vite
# Assistente de Conversação

Este é um projeto de interface semelhante ao ChatGPT que permite aos usuários enviar perguntas e receber respostas do assistente virtual.

## Características

- Interface de chat intuitiva e responsiva
- Histórico de mensagens entre usuário e assistente
- Indicador de carregamento durante a geração de respostas
- Área de texto ajustável para entrada de mensagens
- Design moderno inspirado em interfaces de IA conversacional

## Tecnologias Utilizadas

- React 19.1.0
- TypeScript 5.8.3
- Vite para build e desenvolvimento

## Estrutura do Projeto

```
├── src/
│   ├── components/
│   │   ├── ChatHistory.tsx   # Componente para exibir mensagens
│   │   ├── ChatInput.tsx     # Componente para entrada de mensagens
│   │   ├── ChatMessage.tsx   # Componente para exibir mensagem individual
│   ├── services/
│   │   ├── messageService.ts # Serviço para gerenciar mensagens
│   ├── types/
│   │   ├── index.ts          # Definições de tipos para a aplicação
│   ├── App.css               # Estilos específicos do aplicativo
│   ├── App.tsx               # Componente principal
│   ├── index.css             # Estilos globais
│   └── main.tsx              # Ponto de entrada
```

## Como Executar

1. Clone o repositório
2. Instale as dependências: `npm install`
3. Execute o projeto em modo de desenvolvimento: `npm run dev`
4. Acesse no navegador: `http://localhost:5173/`

## Personalização

O projeto pode ser facilmente personalizado:

- Ajuste os estilos em `App.css` e `index.css`
- Modifique o comportamento de geração de respostas em `services/messageService.ts`
- Adicione novas funcionalidades aos componentes existentes

## Próximos Passos

- Integração com APIs de IA para respostas reais
- Persistência do histórico de conversas
- Temas claros/escuros
- Exportação de conversas
- Suporte para formatação de mensagens (Markdown)
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
