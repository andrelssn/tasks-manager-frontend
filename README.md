# 📝 Tasks Manager Frontend

Single Page Application (SPA) para gerenciamento de tarefas, consumindo a Tasks API hospedada no Google Cloud Run.

Permite criar, listar, atualizar e deletar tarefas com um design moderno baseado em Material-UI.

---

## 💻 Tecnologias

- React 18
- Material-UI (MUI)
- Axios para requisições HTTP
- Vite como bundler
- ESLint / Prettier (opcional)

---

## 📁 Estrutura do Projeto

```bash
tasks-manager-frontend/
├── public/                  
├── src/
│   ├── api/
│   │   └── tasks.js         # Requisições à API via Axios
│   ├── components/
│   │   ├── TaskForm.jsx     
│   │   └── TaskList.jsx     
│   ├── App.jsx              
│   ├── main.jsx             
│   └── index.css            
├── package.json             
├── vite.config.js           
└── README.md                
```

## ⚙️ Instalação

Clone o projeto e instale dependências:
```bash
git clone <URL_DO_REPO>
cd tasks-manager-frontend
npm install
```

## 🚀 Execução

Desenvolvimento
```bash
npm run dev
```
- A aplicação será servida em: http://localhost:5173
- Hot reload automático.
