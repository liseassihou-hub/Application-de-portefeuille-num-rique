# AfriPay

AfriPay est un prototype d'interface pour une application de portefeuille numérique destinée en priorité aux utilisateurs d'Afrique de l'Ouest. Le projet illustre une expérience permettant de consulter un portefeuille, d'envoyer de l'argent, de suivre des transactions et de gérer un profil.

L'interface est en français et utilise notamment le franc CFA (XOF) dans ses exemples. Le projet est conçu comme une base de démonstration et de développement : les écrans sont navigables, mais les soldes, transactions et profils affichés sont des données fictives. Les paiements, l'authentification et les opérations financières ne sont pas connectés à un prestataire réel.

## Fonctionnalités présentées

- **Page d'accueil** : présentation d'AfriPay, de ses avantages et de son positionnement, avec des liens vers l'authentification.
- **Connexion et inscription** : formulaires de démonstration. La soumission simule une connexion puis redirige vers le tableau de bord ; aucun compte n'est réellement créé ou vérifié.
- **Tableau de bord** : vue synthétique avec solde, indicateurs et transactions récentes utilisant des données d'exemple.
- **Transferts** : parcours d'envoi d'argent en plusieurs étapes et onglets pour les transferts AfriPay ou Mobile Money. La recherche du bénéficiaire et l'envoi sont simulés dans le navigateur.
- **Portefeuille** : présentation de portefeuilles XOF et NGN, avec des exemples de soldes et un historique illustratif. Les commandes de dépôt, de retrait ou de conversion ne sont pas reliées à un service financier.
- **Scanner QR** : écran de démonstration avec viseur graphique. Il n'accède pas à la caméra et ne décode pas de vrais codes QR.
- **Historique** : liste de transactions fictives avec des contrôles visuels de recherche, filtre et export. Ces contrôles ne produisent pas encore de résultats ou de fichier réels.
- **Détails d'une transaction** : page d'exemple affichant les informations statiques d'une transaction.
- **Profil et paramètres** : écrans de démonstration pour le profil, la sécurité, les notifications et les comptes Mobile Money liés. Les réglages ne sont pas persistés.
- **Interface responsive** : navigation latérale et composants d'interface adaptés à une application de portefeuille, avec des éléments provenant de shadcn/ui et Radix UI.

## Technologies

### Interface

- React 19 et TypeScript
- Vite 7
- Wouter pour le routage
- TanStack Query pour la gestion du client de requêtes
- Tailwind CSS 4
- Radix UI et composants inspirés de shadcn/ui
- Lucide React pour les icônes
- Recharts pour les graphiques

### Serveur et données

- Node.js et Express 5
- Drizzle ORM et PostgreSQL prévus dans la configuration du projet
- Zod et drizzle-zod pour la validation et les types du schéma

Le serveur Express sert l'application en développement et, après compilation, peut servir les fichiers statiques de production. Le schéma partagé définit actuellement un modèle utilisateur avec un nom d'utilisateur et un mot de passe. Le stockage fourni dans `server/storage.ts` est en mémoire et les routes API de `server/routes.ts` ne sont pas encore implémentées. Ainsi, la configuration PostgreSQL ne signifie pas que les écrans actuels sauvegardent leurs données dans une base.

## Prérequis

- Node.js compatible avec Vite 7 : **20.19+** ou **22.12+**
- npm
- PostgreSQL et une variable `DATABASE_URL` uniquement si vous souhaitez utiliser la commande Drizzle `db:push`

## Installation et lancement

Depuis la racine du projet :

```bash
npm install
npm run dev
```

Le serveur de développement démarre sur le port `5000` par défaut. Si nécessaire, il est possible de définir les variables d'environnement `PORT` et `HOST`.

Pour lancer uniquement Vite côté client :

```bash
npm run dev:client
```

Cette commande lance le client sur le port `5000` et ne remplace pas le serveur Express utilisé par `npm run dev`.

## Vérification et compilation

Vérifier les types TypeScript :

```bash
npm run check
```

Construire le client et le serveur :

```bash
npm run build
```

Après une compilation réussie, démarrer la version de production avec :

```bash
npm start
```

La commande `npm start` suppose que `npm run build` a déjà généré le dossier `dist`.

## Base de données

La configuration Drizzle utilise PostgreSQL et le schéma partagé situé dans `shared/schema.ts`. Pour pousser ce schéma vers une base, définissez `DATABASE_URL` dans votre environnement, puis exécutez :

```bash
npm run db:push
```

Par exemple, dans PowerShell, vous pouvez définir cette variable pour la session courante (en remplaçant l'URL par celle de votre base) :

```powershell
$env:DATABASE_URL = "postgresql://utilisateur:mot_de_passe@localhost:5432/afripay"
npm run db:push
```

N'incluez jamais de vrais identifiants de base de données dans le dépôt. La connexion effective de l'interface et des routes à PostgreSQL reste à développer.

## Organisation du projet

```text
client/
  src/
    components/     Composants réutilisables et mise en page du tableau de bord
    hooks/          Hooks React, notamment pour les notifications
    lib/            Client de requêtes et fonctions utilitaires
    pages/          Pages de l'application
    App.tsx         Routes et fournisseurs globaux
    index.css       Styles globaux, thème et variables CSS
server/
  index.ts          Démarrage d'Express et configuration du serveur
  routes.ts         Point d'enregistrement des routes API
  storage.ts        Interface et stockage utilisateur en mémoire
  static.ts         Service des fichiers compilés en production
  vite.ts           Intégration du serveur Vite en développement
shared/
  schema.ts         Schéma Drizzle et types partagés
script/
  build.ts          Compilation du client et du serveur
```

## Routes de l'application

| URL | Écran |
| --- | --- |
| `/` | Page d'accueil |
| `/auth` | Connexion et inscription de démonstration |
| `/dashboard` | Tableau de bord |
| `/transfer` | Parcours de transfert |
| `/wallet` | Portefeuilles et aperçu de l'historique |
| `/scan` | Écran de scan QR simulé |
| `/history` | Historique des transactions |
| `/transaction-details` | Détails statiques d'une transaction |
| `/profile` | Profil de démonstration |
| `/settings` | Paramètres du compte |

## État du projet et prochaines étapes possibles

Le projet fournit principalement une base d'interface et de navigation. Avant tout usage réel, il faudrait notamment :

1. Implémenter les API de comptes, d'authentification, de portefeuilles et de transactions.
2. Connecter le stockage à PostgreSQL et définir les règles de validation des données.
3. Intégrer un prestataire de paiement ou Mobile Money, avec un traitement sécurisé des confirmations.
4. Remplacer les données fictives et les interactions simulées par des données persistées.
5. Ajouter des tests, la gestion des erreurs, les contrôles d'accès et les exigences de conformité applicables.
6. Implémenter réellement le scan QR, l'export des transactions et la sauvegarde des paramètres si ces fonctionnalités sont retenues.

**Avertissement :** AfriPay, dans son état actuel, est une maquette logicielle. Elle ne doit pas être utilisée pour conserver, transférer ou traiter de l'argent réel, ni pour collecter de véritables identifiants ou données financières.
