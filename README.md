# Spotify Clone 🎶

![License](https://img.shields.io/github/license/username/spotify-clone)
![Issues](https://img.shields.io/github/issues/username/spotify-clone)
![Forks](https://img.shields.io/github/forks/username/spotify-clone)
![Stars](https://img.shields.io/github/stars/username/spotify-clone)

A Spotify clone built with the MERN stack (MongoDB, Express, React + Vite, and Node.js), allowing users to search, stream music, and manage playlists.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Demo](#demo)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- 🎧 Music search and streaming
- 🎼 Playlist management
- ❤️ Like and save favorite tracks
- 🔍 Search by song, artist, and album
- 👤 User authentication and profile management

## Tech Stack

- **Frontend**: React (Vite), Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB, Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **API**: Spotify API

## Demo

1: You can check out the live  here: https://spotify-clone-demo.com](https://spotify-clone-frontend-duci.onrender.com/
<br />
2: You can check out the live  here: https://spotify-clone-demo.com](https://spotify-clone-frontend-duci.onrender.com/](https://spotyfy-clone-admin.onrender.com

## Installation

To set up the project locally, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/en/) (version >= 14.x)
- [MongoDB](https://www.mongodb.com/) (Local or cloud-based like MongoDB Atlas)
- [Spotify Developer API Key](https://developer.spotify.com/)

### Backend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/username/spotify-clone.git
    ```

2. Navigate to the `backend` directory:
    ```bash
    cd spotify-clone/backend
    ```

3. Install the backend dependencies:
    ```bash
    npm install
    ```

4. Set up your MongoDB and Spotify API credentials (see the [Environment Variables](#environment-variables) section).

5. Start the backend server:
    ```bash
    npm run dev
    ```

By default, the backend will be running on [http://localhost:5000](http://localhost:5000).

### Frontend Setup

1. Navigate to the `frontend` directory:
    ```bash
    cd ../frontend
    ```

2. Install the frontend dependencies:
    ```bash
    npm install
    ```

3. Start the frontend development server:
    ```bash
    npm run dev
    ```

The frontend will be running on [http://localhost:5273](http://localhost:5274).

## Environment Variables

To run this project, you need to add the following environment variables:

### Backend (`/backend/.env`)

```bash
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/spotify-clone
JWT_SECRET=your_jwt_secret
SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
