# Project Name: HobbyHatch

- [Client Live URL](https://assignment-10-hobby-hatch.web.app/)
- [Server Live URL](https://assignment-10-server-xi-fawn.vercel.app/)

## Project Purpose: HobbyHatch

HobbyHatch is a web platform designed to help individuals connect through shared interests by discovering, joining, or creating local hobby-based groups. Whether it’s book clubs, hiking crews, painting circles, or any other passion-driven activity, HobbyHatch aims to build vibrant, interest-focused communities that foster real-life social engagement and meaningful connections.

This platform addresses the growing need for offline community and social interaction in an increasingly digital world. By offering an intuitive and accessible space for users to explore hobbies and meet like-minded people nearby, HobbyHatch empowers users to turn their personal interests into shared experiences.

## 🔑 Key Features of HobbyHub

1. Hobby Discovery
- Browse a wide range of hobbies (e.g., photography, hiking, chess, painting).
- Filter hobbies by category, popularity, or trending status.

2. Local Group Finder
- Search for nearby groups based on location and hobby.
- View group details including member count, activity frequency, and upcoming events.

3. Group Creation & Management
- Users can start new hobby groups with customizable settings.

4. Community Interaction
- Reaction and comment features on posts and event pages.

5. Mobile-Optimized & Responsive Design
- Seamless experience across devices.

## Dependencies

- express js - [5.1.0](https://expressjs.com/)
- mongo db - [6.16.0](https://www.mongodb.com/)
- dotenv - [16.5.0](https://www.npmjs.com/package/dotenv)
- cors - [2.8.5](https://www.npmjs.com/package/cors)

## 🚀 Getting Started

To get the backend server up and running on your local machine, follow these simple steps.

### Prerequisites

Make sure you have **Node.js** and **npm** installed. **MongoDB** should also be installed and running.

* **Node.js & npm:**
    ```bash
    npm install npm@latest -g
    ```
* **MongoDB:** [Install MongoDB](https://docs.mongodb.com/manual/installation/)

### Running the Server

1.  Create a **`.env`** file in the root of your project and add your environment variables:
    ```env
    PORT=3000
    DB_USER=your_mongodb_username
    DB_PASS=your_mongodb_password
    ```
    * `PORT`: The port your backend server will run on (defaulting to 3000 if not specified).
    * `DB_USER` & `DB_PASS`: Your MongoDB Atlas cluster username and password.
    * `NODE_ENV`: Set to `production` in production environments for secure cookie handling (`secure` and `sameSite` settings).
2.  Start the backend server:
    ```bash
    npm start
    ```
    The server will typically run on the port specified in your `.env` file (e.g., `http://localhost:3000`).

---

## 🗺️ API Endpoints

Here's a detailed overview of the API endpoints provided by this backend:

| Method | Endpoint | Description | Authentication |
| :------- | :----------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------- |
| `GET` | `/user` | Retrieves a list of all users | Public |
| `GET` | `/user/:id` | Retrieves user details, including a list of enrolled course IDs from the enrollments collection | Privet |
| `POST` | `/user` | Creates a new user in the database | Public |
| `PATCH` | `/user` | Update user data | Privet |
| `GET` | `/hobbies` | Retrieves a list of all hobbies | Public |
| `GET` | `/hobbies/:id` | Retrieves hobbies details, including a list of enrolled course IDs from the enrollments | Public |
| `POST` | `/hobbies` | Creates new hobbies | Public |
| `PUT` | `/hobbies/:id` | Updates the hobbies | Privet |
| `DELETE` | `/hobbies/:id` | Delete a particuler hobbie | Privet |

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

## 📞 Contact

Syed Mohiuddin Meshal - syedmohiuddinmeshal24@gmail.com