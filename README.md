# 🔐 Password Generator

> **Generate strong, secure passwords instantly — with full customization.**

![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

---

## ✨ What is this?

**Password Generator** is a React-powered web app that generates strong, random passwords in real-time. Customize the length, include numbers, special characters — and get a new password instantly every time you change a setting!

---

## 🚀 Live Demo

> Coming soon...

---

## ⚡ Features

- ✅ **Live Password Generation** — password updates instantly on every setting change
- ✅ **Custom Length** — slider from 5 to 30 characters
- ✅ **Number Toggle** — include/exclude numbers (0-9)
- ✅ **Special Character Toggle** — include/exclude symbols (!@#$%^&*)
- ✅ **Real-time Preview** — see your password as you customize
- ✅ **useEffect Hook** — auto-regenerates on every option change

---

## 🛠️ Tech Stack

| Technology | Usage |
|-----------|-------|
| **React 18** | UI components and state management |
| **React Hooks** | `useState`, `useEffect` for live updates |
| **JavaScript (ES6+)** | Password generation logic |
| **HTML5 & CSS3** | Structure and styling |
| **Parcel** | Module bundling |

---

## 🧠 How It Works

```
User adjusts length slider OR toggles numbers/characters
→ useEffect fires automatically
→ generatepassword() runs
→ Builds character set based on options
→ Loops through length and picks random characters
→ Sets new password in state
→ UI updates instantly ⚡
```

---

## 📁 Project Structure

```
password-generator-react/
│
├── password.html      # Main HTML entry point
├── password.js        # React component + logic
├── password.css       # Styling
└── README.md
```

---

## 🏃 How to Run Locally

```bash
# 1. Clone the repository
git clone https://github.com/Vansh140507/password-generator-react.git

# 2. Navigate into the folder
cd password-generator-react

# 3. Install dependencies
npm install

# 4. Run with Parcel
npx parcel password.html
```

Open **http://localhost:1234** in your browser 🎉

---

## 🧠 What I Learned

- Using **`useEffect`** to trigger side effects on state change
- Managing **multiple state variables** together
- Building **real-time reactive UI** without any button click
- Implementing **checkbox and range input** in React
- Writing **pure JavaScript logic** inside React components

---

## 🔮 Future Improvements

- [ ] Copy to clipboard button
- [ ] Password strength indicator
- [ ] Dark/Light mode toggle
- [ ] Save generated passwords history

---

## 👨‍💻 Author

**Vansh**
- 🎓 B.Tech IoT & Cybersecurity with Blockchain Technology — CGC Jhanjeri
- 📧 vanshbhatnagar2808@gmail.com
- 🐙 GitHub: [@Vansh140507](https://github.com/Vansh140507)
- 💼 LinkedIn: [Vansh Bhatnagar](https://www.linkedin.com/in/vansh-bhatnagar-4ba792370/)

---

<div align="center">

⭐ <b>If you found this useful, drop a star!</b> ⭐

*Built with ❤️ using React*

</div>
