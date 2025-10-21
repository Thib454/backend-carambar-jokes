# 🤪 Carambar & Co – API de Blagues

Bienvenue dans l'API officielle des blagues Carambar & Co !  
Ce projet fournit un backend Express.js pour gérer des blagues Carambar via une API RESTful, avec documentation Swagger.

---

## 🚀 Démo en ligne

- 🟢 **API déployée sur Render :**  
  👉 [https://backend-carambar-jokes.onrender.com](https://backend-carambar-jokes.onrender.com)

- 📘 **Documentation Swagger :**  
  👉 [https://backend-carambar-jokes.onrender.com/api-docs](https://backend-carambar-jokes.onrender.com/api-docs)

---

## 📦 Fonctionnalités de l’API

| Méthode | Endpoint                         | Description                           |
|---------|----------------------------------|---------------------------------------|
| POST    | `/api/v1/blagues`                | Ajouter une nouvelle blague           |
| GET     | `/api/v1/blagues`                | Récupérer toutes les blagues          |
| GET     | `/api/v1/blagues/:id`            | Récupérer une blague par ID           |
| GET     | `/api/v1/blagues/random`         | Récupérer une blague aléatoire        |

---

## ⚙️ Stack technique

- **Node.js / Express**
- **Sequelize**
- **SQLite**
- **Swagger (swagger-jsdoc + swagger-ui-express)**
- Déployé sur **Render**
- Suivant l’architecture **MVC**

---

## 🧑‍💻 Lancer le projet en local

### 🔧 Prérequis

- Node.js (v18+)
- NPM

### ▶️ Installation

```bash
git clone https://github.com/<ton-pseudo>/backend-carambar-jokes.git
cd backend-carambar-jokes
npm install
