# 🏆 Sistema de Controle de Clientes - Backend

Este é o backend do sistema de gerenciamento de clientes e endereços, desenvolvido com **React**, **Tailwind**, consumindo a API do backend. 
Ele fornece uma API RESTful para cadastro, listagem, atualização e exclusão de clientes, incluindo seus endereços.

## 🚀 Tecnologias Utilizadas
- **React**
- **React Router**
- **Axios**
- **TailwindCSS**
- **Headless UI**
- **Heroicons**
- **React Hook Form**

## 📦 Como Rodar o Projeto
1 - git clone https://github.com/javazord/register-customer-web.git

2 - Instalar Dependências (já com node instalado v18)
 - npm install

3 - Configurar URL da API
 - VITE_API_URL=http://localhost:8080 (ou a porta que seu backend estiver rodando)


 - Estrutura do Projeto
src/
 ├── app/               # Serviços e configurações globais
 ├── components/        # Componentes reutilizáveis
 ├── data/				# Dados dos estados brasileiros
 ├── hooks/				# Hooks personalizados para lógica reutilizável
 ├── libs/				# Bibliotecas e integrações externas
 ├── routes/            # Rotas da aplicação
 ├── utils/				# Formatadores e Validadores
 ├── views/             # Páginas principais
 └── main.jsx           # Ponto de entrada

