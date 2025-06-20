
# 🧩 Cooperativas UI - Desafio Front-end

Aplicação desenvolvida como parte de um desafio técnico para a vaga de Desenvolvedor Front-end.  
O objetivo foi listar e manipular dados de cooperativas utilizando tecnologias modernas como **Next.js 13+ (App Router)**, **TypeScript**, **Tailwind CSS** e **shadcn/ui**.

---

## 🚀 Tecnologias Utilizadas

- [Next.js 13+](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Vercel](https://vercel.com/) – para deploy

---

## 📦 Instalação e Execução Local

### Pré-requisitos
- Node.js `v18+`
- npm ou yarn

### Passos

```bash
# Clone o repositório
git clone https://github.com/SanchezDeveloper/teste-consulta-Coop.git

# Acesse a pasta do projeto
cd teste-consulta-Coop

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse `http://localhost:3000` no navegador.

---

## ✨ Funcionalidades Implementadas

- 📋 Exibição em tabela com dados da API
- 🔃 Ordenação por colunas (nome, CNPJ, estado, sistema)
- 🔎 Busca com filtro por campo (nome, CNPJ, estado, sistema)
- 🧭 Paginação com 10 itens por página
- ✅ Formatação de CNPJ (`XX.XXX.XXX/XXXX-XX`)
- 🌓 Interface responsiva e estilizada com shadcn/ui
- ⏳ Indicador de carregamento
- ⚠️ Mensagem de erro da API
- ❌ Mensagem de “nenhum resultado encontrado”

---

## 🧠 Decisões Técnicas

- Uso de **Client Component (`CoopTableWrapper`)** para permitir estados reativos como loading, erro e busca.
- Separação de responsabilidades entre:
  - `CoopTable`: componente visual da tabela
  - `CoopTableWrapper`: lógica de carregamento e exibição
  - `lib/api`: fetcher da API
  - `utils/formatCnpj`: máscara de CNPJ
- Tipagem rigorosa com `TypeScript`, com uso de interfaces claras
- Evitei bibliotecas externas adicionais, focando em manter o ambiente limpo e confiável

---

## 🗂️ Estrutura do Projeto

```
src/
├── app/
│   └── page.tsx              # Página inicial com chamada do wrapper
│   └── error.tsx              # Página para tratamento de erros
├── components/
│   ├── tables/               # CoopTable, CoopTableWrapper, CoopTableSkeleton
│   ├── ui/                   # Componentes do shadcn/ui
│   └── common/               # Loader, mensagens de erro, ThemeToggle.
├── lib/
│   └── api.ts                # Função para consumir a API
├── types/
│   └── coop.ts               # Tipagem da resposta da API
├── utils/
│   └── formatCnpj.ts         # Função de formatação de CNPJ
```

---

## ✅ Commits principais

- `Initial commit from Create Next App`
- `initial commit and setting up developement environment`
- `feat: implement coop table with pagination, sorting, loading and error states`
- `feat: improve UX with dark mode, typography, responsiveness and UI polish`
- `feat: add search by specific field (name, CNPJ, state, system)`
- `feat: added skeleton, error.tsx, update error handling, change req for try/catch and update ui`

---

## 🚧 Melhorias Futuras

- 🔢 Paginação com escolha direta da página (ex: 1, 2, 3)
- ✅ Marcar qual coluna está ordenada com ícone visual
- 💾 Cache com SWR ou React Query
- 📄 Exportar lista (CSV ou PDF)
- 🧪 Testes automatizados com React Testing Library
- 🌐 I18n (internacionalização)
- 🎨 Tema escuro / claro com switch

---

## 🔗 Deploy

A aplicação está publicada na Vercel e disponível em:

**[link do site](https://teste-consulta-coop.vercel.app/)**

---

## 📬 Contato

Desenvolvido por **Vinícius Caio - Web Developer**  
- GitHub: [@sanchezdeveloper](https://github.com/sanchezdeveloper)  
- Email: vinicsanchez@gmail.com  
- LinkedIn: https://www.linkedin.com/in/vin%C3%ADcius-caio-marques-sanchez-a84786190/

---

**🛠️ Feito com foco em qualidade, clareza e responsabilidade.**  
**Obrigado pela oportunidade!**
