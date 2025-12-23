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

## ⚙️ Getting Started

1.  **Install dependencies**:
    ```bash
    npm install
    ```

2.  **Run in development mode**:
    ```bash
    npm run dev
    ```

3.  **Build for production**:
    ```bash
    npm run build
    ```

## 📝 Configuration

Click the **Settings (Configure)** button at the bottom of any level to:
- Add or remove names/questions/words.
- Use the **Up/Down arrows** to change the order.
- Adjust game-specific settings (like the number of participants in Nivell 2).

Gaudid del joc! 🎾
