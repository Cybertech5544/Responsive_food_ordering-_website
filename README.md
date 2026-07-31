<div align="center">

# 📝 Simple Blog Manager

### *See the world differently — one story at a time.*

A full-stack blog publishing platform with a cinematic, aurora-lit UI on the front end
and a clean, RESTful Express API on the back end.

[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](#-license)

[Features](#-features) •
[Tech Stack](#%EF%B8%8F-tech-stack) •
[Getting Started](#-getting-started) •
[API Reference](#-api-reference) •
[Project Structure](#-project-structure) •
[Roadmap](#-roadmap)

</div>

---

## 📖 About The Project

**Simple Blog Manager** is a lightweight, dependency-free content platform built to demonstrate
a complete CRUD lifecycle — from a polished public-facing reading experience to a fully
functional content management flow — without the overhead of a frontend framework or a database.

It was built as part of a **Full Stack Web Development Internship**, and doubles as a clean
reference implementation for:

- Building REST APIs with **Express.js**
- Wiring up dynamic, vanilla-JS driven UIs (no React/Vue required)
- Designing polished, animated, "premium" interfaces with pure CSS
- Implementing real-world UX patterns: toasts, snackbars, confirm modals, command-palette search

> 💡 **Note:** Blog data is currently stored **in-memory** on the server (a JS array). This keeps
> the project dependency-free and easy to run, but data resets on every server restart. See the
> [Roadmap](#-roadmap) for planned persistence support.

---

## ✨ Features

### 🖥️ Reader Experience
- 🎨 **Aurora-themed, glassmorphic UI** with animated background blobs
- 🏠 Cinematic hero section with animated headline & live stat counters
- 📰 Auto-refreshing blog feed (polls every 3s — new posts appear without a page reload)
- 🔍 **Command-palette style search modal** — instant fuzzy search by title or category
- 📄 Dedicated **blog detail pages** with hero images, author meta, and editorial drop-cap styling
- 📱 Fully responsive — custom hamburger/slide-out mobile navigation
- ✉️ Newsletter "Join Us" section

### ⚙️ Content Management
- ✍️ **Add Blog** page with real-time client-side validation (title length, category, URL format, content length) and animated shake/error states
- ✏️ **Inline Edit Modal** — update any blog directly from the card grid
- 🗑️ **Delete with confirmation** — custom-built confirm dialog (no ugly native `confirm()`)
- 🔔 Toast & Snackbar notification system for create/update/delete feedback
- 🏷️ Auto-tagged, color-coded category badges (Tech, AI, Design, Philosophy, Literature, etc.)

### 🔌 Backend API
- RESTful **Express** routes for full CRUD (`GET`, `POST`, `PUT`, `DELETE`)
- Change-tracking on updates — logs a before/after diff to the console via `console.table`
- Health check endpoint for uptime monitoring

---

## 📸 Screenshots

<div align="center">

### Landing Hero
*Cinematic aurora background with animated headline and live stat counters*

![Hero Section](./screenshots/01-hero-section.png)

### Recent Posts Feed
*Auto-refreshing blog grid with color-coded category badges and inline Edit / Delete actions*

![Blog Feed](./screenshots/02-blog-feed.png)

### Newsletter / Join Section
*Glassmorphic "Join Us" panel paired with the site footer*

![Newsletter Section](./screenshots/03-newsletter-join.png)

<table>
<tr>
<td width="50%">

**Add Blog — Form Top**

![Add Blog Form](./screenshots/04-add-blog-form.png)

</td>
<td width="50%">

**Add Blog — Form Bottom**

![Add Blog Form Scrolled](./screenshots/05-add-blog-form-scrolled.png)

</td>
</tr>
</table>

### Command-Palette Search
*Instant, debounced search across all blog titles and categories — triggered from the navbar search icon*

![Search Modal](./screenshots/06-search-modal.png)

### Blog Details Page
*Editorial layout with drop-cap styling, author meta, and hero cover image*

![Blog Details](./screenshots/07-blog-details.png)

</div>

> 🗂️ All screenshots live in [`/screenshots`](./screenshots) — update this folder whenever the UI changes so the README stays in sync with the live app.

---

## 🎥 Demo Video

A full walkthrough of the app — browsing the feed, live search, publishing a post, editing, and deleting — converted to GIF so it **autoplays natively right here in the README** (GitHub doesn't play `.mp4` inline, but it does render GIFs).

<div align="center">

![App demo — full walkthrough](./assets/demo.gif)

*Full 2-minute walkthrough — auto-plays and loops*

</div>

> 🪶 **Prefer a lighter, faster-loading preview?** A trimmed 20-second, smaller-file-size version is also included at [`./assets/demo-preview-short.gif`](./assets/demo-preview-short.gif) — swap it in above if the full GIF feels too heavy for your repo.

> ⚠️ **Why a GIF instead of the raw `.mp4`?** Screen recordings straight off your machine are typically 100MB+, and GitHub blocks a plain `git push` for any file over 100MB. The GIF above has already been compressed and trimmed down for you. If you'd still like the original, uncompressed screen recording available too, host it externally (YouTube unlisted / Google Drive / Loom) and link it here, or track it with **Git LFS**:
> ```bash
> git lfs install
> git lfs track "*.mp4"
> git add .gitattributes your-recording.mp4
> git commit -m "Add full-resolution demo recording via Git LFS"
> ```

---

## 🛠️ Tech Stack

| Layer          | Technology                                                                 |
|----------------|-----------------------------------------------------------------------------|
| **Backend**    | Node.js, Express.js                                                        |
| **Frontend**   | HTML5, CSS3 (custom properties, glassmorphism, animations), Vanilla JS (ES6+) |
| **Data Store** | In-memory JS array *(no database required to run)*                        |
| **Icons/Fonts**| [Bootstrap Icons](https://icons.getbootstrap.com/), Google Fonts (Playfair Display, DM Sans, DM Mono) |

---

## 📁 Project Structure

```
simple-blog-manager/
├── index.js                      # Express app entry point
├── routes/
│   └── blogRoutes.js             # All /api blog CRUD routes
├── package.json
│
└── public/                       # Static frontend (served by Express)
    ├── index.html                # Home / reading feed
    ├── add-blog.html             # Create a new post
    ├── blog-details.html         # Single blog reading view
    │
    ├── css/
    │   ├── style.css             # Base theme & design tokens
    │   ├── add-blog.css
    │   ├── blog-details.css
    │   ├── deleteBlogs.css       # Confirm modal styling
    │   ├── editBlogs.css         # Edit modal styling
    │   ├── snacbar.css
    │   └── responsive/
    │       ├── priminum.css      # "Premium" polish layer (shadows, badges, motion)
    │       ├── priminum.js       # Badge auto-tagging + scroll-reveal animations
    │       ├── mobile-menu.css
    │       ├── mobile-menu.js
    │       └── responsive.css    # Breakpoints (1024 / 860 / 480px)
    │
    ├── js/
    │   ├── showBlogs.js          # Fetches & renders the blog grid (polling)
    │   ├── add-blog.js           # Form validation + submission + toast system
    │   ├── editBlogsModule.js    # Dynamic edit-modal builder + save handler
    │   └── deleteBlogs.js        # Delete handler (with confirm + snackbar)
    │
    ├── model/
    │   ├── confirm/confirm.js    # Reusable Promise-based confirm dialog
    │   ├── snacbar/snackbar.js   # Reusable snackbar notifications
    │   └── search/
    │       ├── search.js         # Command-palette search modal logic
    │       └── search.css
    │
    └── images/                   # Fallback/default blog cover images
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) `v16+`
- `npm` (comes bundled with Node.js)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/<your-username>/simple-blog-manager.git
cd simple-blog-manager

# 2. Install dependencies
npm install

# 3. Start the server
npm start
# or, for auto-reload during development:
npx nodemon index.js
```

### Running the app

Once the server is running, open your browser at:

```
http://localhost:3000
```

| Page              | URL                          |
|-------------------|-------------------------------|
| Home / Feed       | `/index.html`                |
| Add a Blog        | `/add-blog.html`              |
| Blog Details      | `/blog-details.html?id=<blogId>` |
| API Health Check  | `/api/status`                 |

> Adjust the port above to match whatever your `index.js` listens on.

---

## 📡 API Reference

Base URL: `/api`

| Method   | Endpoint          | Description                              |
|----------|-------------------|--------------------------------------------|
| `GET`    | `/status`         | Health check — confirms the API is running |
| `GET`    | `/blogs`          | Fetch all blogs                            |
| `GET`    | `/blogs/:id`       | Fetch a single blog by ID                  |
| `POST`   | `/blogs`          | Create a new blog                          |
| `PUT`    | `/blogs/:id`       | Update an existing blog                    |
| `DELETE` | `/blogs/:id`       | Delete a blog                              |

<details>
<summary><strong>📥 POST /api/blogs — Request Body</strong></summary>

```json
{
  "title": "My First Tech Internship",
  "category": "Tech",
  "imageUrl": "https://images.unsplash.com/photo-xxxx",
  "content": "Today I learned how to set up my first backend server..."
}
```
</details>

<details>
<summary><strong>📤 Example Response</strong></summary>

```json
{
  "success": true,
  "message": "Blog added successfully!",
  "data": [
    {
      "Id": 1753861234567,
      "Title": "My First Tech Internship",
      "Category": "Tech",
      "ImageUrl": "https://images.unsplash.com/photo-xxxx",
      "Content": "Today I learned how to set up my first backend server...",
      "CreatedAt": "Jul 30, 2026, 10:22:14 AM"
    }
  ],
  "totalBlogs": "No of Blogs Present : 1"
}
```
</details>

---

## 🎨 Design System Highlights

- **Aurora backdrop** — layered, blurred gradient blobs for a soft, ambient hero atmosphere
- **Glassmorphism** — frosted, translucent panels (`backdrop-filter: blur()`) on meta cards & modals
- **Category color tokens** — each blog category (Tech, AI, Design, Literature, Philosophy...) maps to its own accent color via CSS custom properties
- **Micro-interactions** — shake animations on invalid form fields, scroll-triggered card reveals, animated toast progress bars
- **Editorial typography** — Playfair Display serif headlines + drop-cap first letters on blog detail pages, paired with DM Sans body copy

---

## 🗺️ Roadmap

- [ ] Persist blogs to a real database (MongoDB / PostgreSQL) instead of an in-memory array
- [ ] Add authentication so only logged-in authors can create/edit/delete posts
- [ ] Replace 3-second polling with WebSockets / Server-Sent Events for live updates
- [ ] Image upload support (instead of URL-only cover images)
- [ ] Pagination & infinite scroll for the blog feed
- [ ] Rich text editor for blog content
- [ ] Unit & integration tests for API routes

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — feel free to use, modify, and distribute it.

---

<div align="center">

Made with ☕ and 💜 by **Ritesh**, as part of a Full Stack Web Development Internship.

</div>
