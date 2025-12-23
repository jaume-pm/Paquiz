# Paquiz 🎾

Paquiz is a modern, mobile-first web application designed for Padel enthusiasts. It features three interactive levels for group play, with a focus on ease of use, local persistence, and customizability.

## 🚀 Features

### Nivell 1: Trivia
- Sequential Padel questions in Catalan.
- **Moderator View**: The answer is displayed for the person holding the phone to verify.
- **Full Customization**: Add, edit, or delete questions and answers via the Admin Mode.

### Nivell 2: L'Impostor
- A social game where **Rubén** is the permanent impostor.
- **Random Draws**: Selects a configurable number of participants for each round.
- **Sequential Secret Words**: Secret words are shown in the order defined in Admin Mode.
- **Reveal System**: Hide and reveal the secret word to the drawn participants.

### Nivell 3: Mímica
- **Rubén** holds the phone and sees the secret word.
- The objective is to explain the word using only sounds and gestures (no "real" words).
- **Sequential Words**: Follows the order set in Admin Mode.

### 🛠 Global Capabilities
- **Admin Mode**: Available in every level.
- **Reordering**: Move items (questions, words, participants) up and down to set the perfect play order.
- **Local Persistence**: All your customizations (added words, reordered lists) are saved in your browser's local storage.
- **Mobile First**: Designed specifically to be used on smartphones during games.

## 💻 Tech Stack

- **Framework**: [React](https://reactjs.org/) (via [Vite](https://vitejs.dev/))
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Vanilla CSS with a modern Padel-inspired palette.
- **Storage**: Browser LocalStorage.

## 🚀 Desplegament a GitHub Pages

El projecte està configurat per funcionar a `https://jaume-pm.github.io/Paquiz/`.

### 1. Configuració Automàtica (Recomanat)
He afegit un fitxer de **GitHub Action** a `.github/workflows/deploy.yml`. 

Només has de fer això:
1. Puja tots els fitxers al teu repositori de GitHub (`git push`).
2. Ves a la pestanya **Settings** del teu repositori a GitHub.
3. Ves a **Pages** (al menú de l'esquerra).
4. A la secció **Build and deployment**, canvia "Source" a **GitHub Actions**.
5. Ara, cada vegada que facis un `push` a la branca `main`, el web s'actualitzarà sol!

### 2. Configuració Manual (Si no vols fer el pas 1)
Si prefereixes pujar els fitxers a mà, recorda que:
1. Has d'executar `npm run build` localment.
2. Has de pujar **només** el contingut de la carpeta `dist`.
3. El fitxer `index.html` ara utilitza rutes relatives per evitar l'error 404 que tenies.

Gaudid del joc! 🎾
