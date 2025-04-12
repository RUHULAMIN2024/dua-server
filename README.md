# Dua Server




## Technologies Used

- **TypeScript**
- **Node.js**
- **Express.js**
- **MongoDB with Mongoose**

---

## Installation and Setup

### Prerequisites

- Node.js (v14 or higher)
- MongoDB

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/RUHULAMIN2024/dua-server
   cd dua-server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add the following variables:

   ```env

   NODE_ENV=development
   PORT=5000
   DATABASE_URL= <mongodb_url>
   BCRYPT_SALT_ROUNDS=8
   jwt_access_secret=
   ```

4. Start the server:
   ```bash
   npm run dev
   ```

---

