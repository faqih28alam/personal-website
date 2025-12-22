Check out the [Website](https://personal-website-gamma-neon-93.vercel.app/) for preview.


# Personal Website - Portfolio Project

A dynamic personal website built using **Node.js** and the **Express** framework. This project demonstrates the implementation of a server-side rendered application using **Handlebars (HBS)** with a modular architecture.

---

## 🚀 Key Features

* **Server-Side Rendering**: Utilizing HBS for dynamic content generation.
* **Modular UI Components**: Implementation of **Handlebars Partials** (like `navbarSection` and `techStackSection`) for code reusability.
* **Static Asset Management**: Efficient serving of CSS and images from a dedicated assets directory.
* **Relational Database**: Integration with **PostgreSQL** for data persistence.
* **Security**: Password hashing implemented via **bcrypt** and session management for user authentication.

---

## 📂 Project Structure

```text
├── src/
│   ├── assets/        # CSS, Images, and client-side JS
│   └── views/         # HBS templates
│       └── partials/  # Reusable UI components
│            ├── navbarSection.hbs
│            ├── footerSection.hbs
│            ├── techStackSection.hbs
│            ├── aboutSection.hbs
│            └── projectCard.hbs
├── index.js           # Server entry point
└── package.json       # Project dependencies & scripts
