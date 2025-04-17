# 🧩 Custom Form Builder – Next.js + TypeScript

A drag-and-drop form builder built with **Next.js App Router**, **TypeScript**, and **Tailwind CSS** — using **native HTML5 drag-and-drop APIs** (no external libraries for core logic). Users can visually compose a form and export the structure as JSON.

---

## 🚀 Live Demo

🔗 [View the App](https://mbzuai-custom-form-builder.vercel.app/)

---

## 🛠 Tech Stack

| Tool / Framework                 | Purpose                        |
|----------------------------------|--------------------------------|
| [Next.js (App Router)](https://nextjs.org/docs/app) | Full-stack React Framework       |
| **TypeScript**                  | Static typing for scalability |
| **Tailwind CSS**               | Utility-first CSS styling     |
| **Native Drag-and-Drop API**   | HTML5-based drag interaction  |
| **Blob API**                   | JSON export/download support  |
| **Jest + Testing Library**     | Component testing (optional)  |
| **GitHub Actions**             | CI/CD for automated testing   |

---

## 📦 Getting Started

### 1. Clone and Install

```bash
git clone https://github.com/bayuaslamaa/mbzuai-custom-form-builder.git
cd mbzuai-custom-form-builder

pnpm install
pnpm dev
```

> Or use `npm` if you're not using `pnpm`.

---

## ✨ Features

- ✅ **Drag-and-drop** to build forms with text input, dropdowns, and checkboxes
- ✅ Real-time **JSON structure** viewer
- ✅ **Download** your form as a `.json` file
- ✅ No libraries used for drag-and-drop — built using **native HTML5 APIs**
- ✅ **Field Editor** to customize labels and dropdown options
- ✅ Clean, modular architecture built for extensibility

---

## 🧱 Extensibility Roadmap

This codebase is modular and easy to build on top of. Ideas for extension:

- ➕ Add new field types (e.g., Date Picker, Radio Buttons)
- ♻️ Enable drag-to-reorder fields
- 🗑 Add delete/remove field interactions
- ✍️ Improve in-place editing experience
- ☁️ Save/load form schema to Supabase or any backend
- 👀 Add live preview / render mode
- 🧪 Improve test coverage

---

## 🧪 Testing

This project uses **Jest + React Testing Library**.

To run tests:

```bash
pnpm test
```

Tests are automatically run on push using **GitHub Actions**.

---

## ✅ CI / CD

GitHub Actions is set up to run tests on each push or pull request to `main`.

You’ll find the workflow file here:

```
.github/workflows/run-tests.yml
```

---

## 📘 Author Notes

This project was developed as part of a frontend technical assignment for MBZUAI.

It showcases:
- Proficiency with modern React (App Router)
- Practical use of native web APIs (Drag & Drop, Blob)
- A scalable, maintainable architecture
- Optional test coverage and CI integration

Thanks for reviewing!

> — [Bayu Ahmad](https://github.com/bayuaslamaa)
