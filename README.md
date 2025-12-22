Check out the [Website](https://personal-website-gamma-neon-93.vercel.app/) for preview.


# Personal Website - Portfolio Project

A personal website built using **HTML**, **CSS**, **Java Script**, & **Express** framework. This project demonstrates the implementation of a server-side rendered application using **Handlebars (HBS)** with a modular architecture.

---

## 🚀 Key Features

* **Server-Side Rendering**: Utilizing HBS for dynamic content generation.
* **Modular UI Components**: Implementation of **Handlebars Partials** (like `navbarSection` and `techStackSection`) for code reusability.
* **Static Asset Management**: Efficient serving of CSS and images from a dedicated assets directory.

---

## 📂 Project Structure

```text
├── src/
│   ├── assets/        # CSS, img, and client-side JS
│   └── views/         # HBS templates
│       ├── homePage.hbs
│       └── partials/  # Reusable UI components
│            ├── navbarSection.hbs
│            ├── myProjectSection.hbs
│            ├── techStackSection.hbs
│            ├── aboutSection.hbs
│            ├── workExperienceSection.hbs
│            └── CTASection.hbs
│             
├── index.js           # Server entry point
└── package.json       # Project dependencies & scripts
