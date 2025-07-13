# 🎸 Lesson API — Node.js + TypeScript

A lightweight REST API to serve structured lesson data for a music education platform — built with **Node.js**, **Express**, and **TypeScript**.

Clean, modular architecture (routes → controllers → services) makes it perfect for MVPs, front-end prototyping, or integration into full-stack apps like JAM (Jazz-A-Minute).

---

## ✅ Features

- ⚡️ Fast and minimal Express server
- 🧠 Fully typed with TypeScript
- 📦 Static data served from memory (no database needed)
- 🪶 Simple, clean folder structure
- 🧱 Ready to scale with user auth, databases, or file storage later

---

## 🗂 Project Structure

src/
├── data/ # Static lesson data
├── lessons/ # Routes, controller, service for lessons
├── types/ # TypeScript interfaces
├── app.ts # Express app configuration
└── server.ts # Server bootstrap


---

## 🔌 API Endpoints

| Method | Endpoint                | Description              |
|--------|-------------------------|--------------------------|
| GET    | `/api/lessons/all`      | Returns all lessons      |
| GET    | `/api/lessons/:id`      | Returns a lesson by ID   |

---

## 📚 Example Response

```json
{
  "Id": 21,
  "IsPro": true,
  "IsMasterClass": false,
  "Title": "Minor II–V–I Lines with Tritone Subs",
  "LanguageId": "en",
  "LessonDescription": "Lesson 21 description.",
  "PosterUrl": "lessonPoster22.jpg",
  "TitleVideoUrl": "lesson21_title_video.mp4"
}
```

🚀 Getting Started
1. Clone the repository
```bash
git clone https://github.com/yavuzakyazici/lesson-api-node-ts.git
cd lesson-api-node-ts
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```
API will be live at: http://localhost:3000

🧠 Tech Stack
Node.js

Express.js

TypeScript

👨‍🎓 Author
Yavuz Akyazıcı
🎷 Jazz musician, educator, and full-stack developer
Creator of the [J.A.M. – Jazz-A-Minute](https://jazzaminute.com/) App and [YouTube Channel](https://www.youtube.com/@jazz-a-minute)
[GitHub](https://github.com/yavuzakyazici)
