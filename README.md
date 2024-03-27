
# Rawabit

## Description

This is a website designed to provide users with a comprehensive platform where they can discover various websites and apps tailored to their interests and needs. The website categorizes content based on countries, making it easy for users to find relevant resources specific to their location.

## Features

- Browse and explore websites and apps curated for different countries.
- Easily navigate through categories to find specific content.
- Admin functionality to add new countries, categories, and content links.

## Technologies Used

- Next.js
- TypeScript
- MongoDB (with Mongoose)
- Tailwind CSS

## How to Run

To run this application locally, follow these steps:

1. Clone the repository to your local machine:

```
git clone https://github.com/AymanHammadi/Rawabbit.git
```

2. Navigate to the project directory:

```
cd Rawabbit
```

3. Install dependencies:

```
npm install
```

4. Set up environment variables:

   - Create a `.env` file in the root directory.
   - Add the necessary environment variables.

5. Run the development server:

```
npm run dev
```

6. Open your browser and navigate to `http://localhost:3000` to view the website.

## Environment Variables

This project requires the following environment variables to be set:

- **NEXT_PUBLIC_TINY_EDITOR_API_KEY**: Get from [TinyMCE](https://www.tiny.cloud/) for rich text editing.
- **GOOGLE_ID & GOOGLE_SECRET**: Create a Google Cloud project for Google OAuth at [Google Cloud Console](https://console.cloud.google.com/).
- **NEXTAUTH_SECRET**: Generate a random secret string. You can generate a suitable secret using a password generator or a command like `openssl rand -base64 32`.
- **NEXTAUTH_URL**: Set to your Next.js application's URL (e.g., `https://yourapplication.com`).
- **MONGODB_URI**: Get from your MongoDB hosting provider (e.g., MongoDB Atlas at [MongoDB Atlas](https://www.mongodb.com/atlas)).

## Contributors

- [Ayman](https://github.com/AymanHammadi)
- [Mohammed](https://github.com/TFmohamedyahia)
- [Imad](https://github.com/imadbenmadi/)

