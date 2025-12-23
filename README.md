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

La manera més senzilla de fer-ho funcioar:

1. Executa al teu ordinador: `npm run build`
2. Es crearà una carpeta `dist`.
3. Puja el **contingut** d'aquesta carpeta `dist` al teu repositori de GitHub (només els fitxers de dins, no la carpeta sencera).

He configurat el projecte amb rutes relatives (`base: './'`) perquè funcioni a qualsevol lloc sense complicacions. 

Gaudid del joc! 🎾
