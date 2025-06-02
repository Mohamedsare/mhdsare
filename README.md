# Portfolio de Mohamed SARE

Un portfolio moderne et interactif développé avec HTML, CSS et JavaScript.

## 🌟 Fonctionnalités

- **Design Responsive** : S'adapte à tous les appareils (desktop, tablette, mobile)
- **Mode Sombre/Clair** : Basculement entre les thèmes sombre et clair
- **Animations Interactives** : 
  - Curseur personnalisé
  - Animations au scroll
  - Effets de particules en arrière-plan
  - Texte typé dynamique
- **Sections** :
  - Accueil avec animation de chargement
  - À propos avec carte interactive
  - Projets avec filtrage et lightbox
  - Compétences avec barres de progression animées
  - Citations rotatives
  - Formulaire de contact fonctionnel
- **Intégration Firebase** : Compteur de visiteurs en temps réel
- **Formulaire de Contact** : Intégration avec FormSubmit.co

## 🛠️ Technologies Utilisées

- HTML5
- CSS3 (Animations, Flexbox, Grid, Variables CSS)
- JavaScript (ES6+)
- Firebase (Realtime Database)
- FormSubmit.co (Gestion des emails)
- Font Awesome (Icônes)
- Google Fonts

## 📦 Installation

1. Clonez le repository :
```bash
git clone https://github.com/votre-username/portfolio.git
```

2. Ouvrez le projet dans votre éditeur de code préféré

3. Pour le développement local, vous pouvez utiliser un serveur local comme Live Server dans VS Code

## 🔧 Configuration

### Firebase
Pour configurer le compteur de visiteurs :

1. Créez un projet Firebase
2. Activez la Realtime Database
3. Remplacez la configuration dans `index.html` :
```javascript
const firebaseConfig = {
    // Votre configuration Firebase
};
```

### Formulaire de Contact
Le formulaire utilise FormSubmit.co. La première soumission activera automatiquement le service.

## 🎨 Personnalisation

### Couleurs
Les couleurs principales sont définies dans `styles.css` :
```css
:root {
    --primary-color: #6c63ff;
    --secondary-color: #4d44db;
    --dark-color: #1a1a2e;
    --light-color: #f1f1f1;
    /* ... autres variables ... */
}
```

### Contenu
- Modifiez les textes dans `index.html`
- Ajoutez/modifiez les projets dans le tableau `projects` dans `script.js`
- Personnalisez les compétences dans la section skills

## 📱 Responsive Design

Le site est entièrement responsive avec des breakpoints pour :
- Mobile (< 480px)
- Tablette (< 768px)
- Desktop (> 768px)

## 🚀 Performance

- Images optimisées
- Animations optimisées pour les performances
- Chargement différé des ressources non critiques

## 🔒 Sécurité

- Validation des formulaires côté client et serveur
- Protection contre le spam dans le formulaire de contact
- Sécurisation des données Firebase

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👤 Contact

- Email : mohamedsare078@gmail.com
- Site Web : [mhdsare.com](https://mhdsare.com)
- LinkedIn : [Mohamed SARE](https://linkedin.com/in/votre-profil)

## 🙏 Remerciements

- Font Awesome pour les icônes
- Google Fonts pour les polices
- FormSubmit.co pour le service d'email
- Firebase pour la base de données en temps réel

---

Fait avec ❤️ par Mohamed SARE