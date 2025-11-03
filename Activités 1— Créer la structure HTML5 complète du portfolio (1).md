## ** Créer la structure HTML5 complète du portfolio**

###  **Objectif pédagogique**

Construire la structure sémantique complète d’un portfolio personnel en appliquant les bonnes pratiques HTML5 : hiérarchie logique, métadonnées, accessibilité, et organisation du contenu.

---

###  **Contexte de l’exercice**

Dans cet exercice, vous allez créer la première version de votre *Mini Portfolio Dynamique*.
Vous définirez la structure du document HTML5, les sections principales du site et les fondations qui seront stylisées et dynamisées les jours suivants.

---

### **Tâches à accomplir**

1. **Créer le fichier HTML de base**

   * Nommez votre fichier `index.html`
   * Commencez par `<!DOCTYPE html>`
   * Ajoutez `<html lang="fr">`, `<head>` et `<body>`

2. **Structurer la section `<head>`**

   * Ajoutez :

     * `<meta charset="UTF-8">`
     * `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
     * `<title>Mon Portfolio - [Votre Nom]</title>`
     * `<meta name="description" content="Portfolio professionnel de [Votre nom], développeur fullstack.">`
     * Une balise Open Graph (`<meta property="og:title" content="Portfolio de [Nom]">`)

3. **Construire la structure `<body>`**

   * **HEADER (role="banner")**

     * `<h1>` : votre nom complet
     * `<nav aria-label="Navigation principale">` avec 3 liens : À propos | Projets | Contact

   * **MAIN (role="main")**

     * Section `id="about"` : titre `<h2>` + paragraphe de présentation (50 mots minimum)
     * Section `id="projects"` : titre `<h2>` + 3 projets (titres `<h3>` + description)
     * Section `id="contact"` : titre `<h2>` + formulaire de contact avec :

       * Nom (input text)
       * Email (input email)
       * Message (textarea)
       * Bouton "Envoyer"

   * **FOOTER**

     * Texte de copyright : “© [année actuelle] Mon Portfolio”

4. **Accessibilité**

   * Utilisez des labels pour chaque champ du formulaire
   * Ajoutez `aria-label` sur la navigation
   * Ajoutez `aria-describedby` sur un champ de formulaire

5. **Versionner votre travail**
   * Versioner votre travail sur une branche `feature/html-structure`
---
---

### ✅ **Critères de réussite**

✅ Structure HTML5 complète et valide
✅ Bonne hiérarchie des titres
✅ Utilisation correcte des balises sémantiques
✅ Formulaire accessible et fonctionnel
✅ Métadonnées complètes (charset, viewport, description, og:title)

---
