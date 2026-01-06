# 🏝️ Blog Tamaris

**Blog Tamaris** est une application de blog moderne basée sur une architecture **frontend / backend**, entièrement conteneurisée avec **Docker**.  
Ce projet a été développé par **Laetitia Piat** dans un objectif d’apprentissage et de mise en pratique de compétences full-stack.

---

## 🚀 Présentation

Le projet permet de :
- gérer et afficher des articles de blog,
- séparer clairement la logique backend et l’interface frontend,
- faciliter le déploiement grâce à Docker,
- proposer des environnements **staging** et **production**.

Le tout est pensé pour être **maintenable, scalable et déployable facilement**.

---

## 📁 Structure du projet

Blog_Tamaris/

├── backend/ # API et logique serveur

├── frontend/ # Application frontend

├── img/ # Images et ressources

├── .github/ # GitHub Actions / workflows

├── docker-compose.yml # Configuration Docker principale

├── docker-compose.prod.yml # Configuration production

├── docker-compose.staging.yml # Configuration staging

├── nginx.conf # Configuration Nginx

├── .env # Variables d’environnement (non versionnées)

└── README.md # Documentation du projet

---

## 🛠️ Technologies utilisées

### Backend
- Node.js
- GraphQL
- API REST

### Frontend
- React
- HTML / CSS / JavaScript

### DevOps
- Docker
- Docker Compose
- Nginx

---
