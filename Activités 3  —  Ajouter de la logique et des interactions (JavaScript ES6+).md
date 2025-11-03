## **Ajouter de la logique et des interactions (JavaScript ES6+)**

###  **Objectif pédagogique**

Découvrir la manipulation du DOM, les événements, et la logique JavaScript appliquée à l’interactivité utilisateur (likes, filtrage, thème sombre).

---

###  **Contexte de l’exercice**

Vous allez dynamiser votre portfolio en rendant les projets interactifs : recherche en direct, compteur de likes, et bascule de thème clair/sombre.

---

### **Tâches à accomplir**

1. **Créer et lier le fichier JavaScript**

   ```html
   <script src="script.js"></script>
   ```

2. **Créer le tableau des projets**

   ```js
   const projects = [
     { id: 1, title: "Site E-commerce", tech: "HTML, CSS, JS", likes: 10 },
     { id: 2, title: "App Météo", tech: "JavaScript, API", likes: 5 },
     { id: 3, title: "Portfolio React", tech: "React, Tailwind", likes: 12 },
   ];
   ```

3. **Afficher dynamiquement les projets**

   * Utilisez `document.createElement()` et `appendChild()`
   * Affichez les cartes dans `#projects-list`

4. **Ajouter un bouton “Like”**

   * Incrémentez le compteur au clic
   * Sauvegardez les likes dans `localStorage`

5. **Ajouter une barre de recherche**

   * Filtrez les projets en fonction du texte saisi avec `.filter()`

6. **Ajouter un bouton “Changer de thème”**

   * Alternez une classe `.dark-mode` sur `body`
   * Sauvegardez le choix dans `localStorage`

7. **Commit Git**
      * Versioner votre travail sur une branche `feature/javascript`

---

### ✅ **Critères de réussite**

✅ Manipulation DOM correcte (création dynamique, événements)
✅ Filtrage fonctionnel en temps réel
✅ Bouton Like opérationnel et persistant
✅ Thème sombre/clair fonctionnel
✅ Code ES6 propre et structuré

---