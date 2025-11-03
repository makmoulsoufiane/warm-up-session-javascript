##  **Appliquer le style et le responsive design (CSS3)**

###  **Objectif pédagogique**

Appliquer un design professionnel et responsive au portfolio à l’aide de CSS3.
Découvrir Flexbox, Grid, les pseudo-classes et les animations simples.

---

###  **Contexte de l’exercice**

Vous allez transformer la page HTML statique en une page stylisée et lisible sur tous les écrans.
Vous utiliserez les propriétés modernes de mise en page et apprendrez à structurer le code CSS proprement.

---

###  **Tâches à accomplir**

1. **Créer le fichier de style**

   * Créez `style.css`
   * Reliez-le dans le `<head>` avec `<link rel="stylesheet" href="style.css">`

2. **Styliser la structure globale**

   * Définissez une police moderne (`Poppins`, sans-serif)
   * Couleur de fond sombre (#222831) et texte clair (#EEEEEE)
   * Supprimez les marges par défaut :

     ```css
     * { margin: 0; padding: 0; box-sizing: border-box; }
     ```

3. **Mettre en page le header et le menu**

   * Centrer le titre
   * Créer un menu horizontal avec Flexbox
   * Modifier la couleur du lien au survol (`:hover`)

4. **Créer une grille de projets**

   * Créez une classe `.card`
   * Disposez-les avec `display: grid`
   * Ajoutez une animation de zoom au survol :

     ```css
     .card:hover { transform: scale(1.05); transition: 0.3s; }
     ```

5. **Styliser le formulaire**

   * Champ clair sur fond sombre
   * Bouton coloré (`background: #00ADB5`)
   * Coins arrondis (`border-radius: 6px`)

6. **Rendre la page responsive**

   * Ajoutez une media query :

     ```css
     @media (max-width: 768px) {
     }
     ```

7. **Commit Git**
   * Versioner votre travail sur une branche `feature/css-styling`

---

### ✅ **Critères de réussite**

✅ Design moderne et lisible
✅ Layout responsive (mobile / desktop)
✅ Animation fluide sur les cartes
✅ Couleurs cohérentes et contrastées
✅ Code CSS bien organisé

---