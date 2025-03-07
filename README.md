# 🌇 Urbidea 

> Innovating Urban Life through Community Engagement

Urbidea is an Angular application developed as a final project for the Angular course on the Start2Impact platform. This web application aims to help people contribute ideas and suggestions for improving urban areas, fostering cultural preservation, environmental protection, and positive social connections.

## 🎯 Goals and Features

- **User Authentication** using tokens generated by the [GoRest](https://gorest.co.in/) API.
- **Manage Users**: View, create, update, and delete users.
- **Manage Posts**: Create posts, search through posts, comment on posts, and view user-specific posts.
- **Responsive Design** suitable for smartphones and desktops.
- **Modern UI/UX**, inspired by urban innovation and sustainability.

## 🚀 Technologies

- **Framework**: [Angular](https://angular.io/)
- **Styling**: SCSS, Material Design, custom styles.
- **API Integration**: [GoRest API](https://gorest.co.in/)
- **Authentication**: Token-based (Bearer token).

## 📚 Project Structure
urban-ideas-app │
├── src │
├── app │ 
│ ├── components │
│ │ ├── navbar │
│ │ ├── footer │
│ ├── pages │
│ │ ├── login │
│ │ ├── users │
│ │ ├── posts │
│ │ ├── user-detail │
│ │ ├── register │
│ │ ├── home │
│ ├── services │
│ │ ├── auth.service.ts │
│ │ ├── api.service.ts │
│ ├── guards │
│ │ ├── auth.guard.ts │
│ ├── app.routes.ts │
│ ├── styles.scss │
│ │ ├── assets │
│ ├── images │
│ ├── future_wall.jpg │
│ │ ├── index.html │
└── main.ts │
└── README.md


## 💻 Installation & Setup

Clone this repository:

```bash
git clone https://github.com/iosonoclaudii/urbidea.git
cd urbidea

npm install

ng serve -o

Visit http://localhost:4200.

Note: Generate your authentication token at GoRest Platform and insert it into the login page to access protected routes.

🧪 Running Tests
To run unit tests and check coverage:

bash
Copia
Modifica
ng test --no-watch --code-coverage

🌟 Project Highlights
Clean Code following Angular best practices.
Secure implementation of authentication.
Unit Tested to ensure reliability.

🔗 Author & Contributor
Claudio Maldera
GitHub: @iosonoclaudii
© 2025 Claudio Maldera.
Developed with ❤️ and Angular.


