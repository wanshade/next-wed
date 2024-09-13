# Next.js Project with Prisma Integration

This project demonstrates the integration of Next.js with Prisma, an efficient Object-Relational Mapping (ORM) tool for database management.

## Getting Started

### 1. Install Dependencies

First, install the necessary dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 2. Configure Environment Variables

Create a `.env` file in the project root and add the following configuration:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/mydatabase"
```

Replace `user`, `password`, `localhost`, `5432`, and `mydatabase` with your PostgreSQL database settings.

### 3. Set Up Prisma

Install Prisma Client:

```bash
npm install @prisma/client
# or
yarn add @prisma/client
# or
pnpm add @prisma/client
# or
bun add @prisma/client
```

Install Prisma CLI as a development dependency:

```bash
npm install prisma --save-dev
# or
yarn add prisma --dev
# or
pnpm add prisma --dev
# or
bun add prisma --dev
```

### 4. Initialize Prisma

Run the following command to initialize Prisma:

```bash
npx prisma init
```

This will create a `prisma` folder and a `schema.prisma` file in your project.

### 5. Configure Prisma Schema

Edit the `prisma/schema.prisma` file to define your database models. For example:

```
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Comment {
  id        Int      @id @default(autoincrement())
  text      String
  author    String
  createdAt DateTime @default(now())
}

```

### 6. Migrate Database

After editing the schema, run the following command to create and apply migrations:

```bash
npx prisma migrate dev --name init
```

### 7. Generate Prisma Client

Generate the Prisma Client with this command:

```bash
npx prisma generate
```

## Running the Development Server

Start the development server with:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Learn More

To learn more about Next.js and Prisma, check out the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - An interactive Next.js tutorial.
- [Prisma Documentation](https://www.prisma.io/docs) - Learn about Prisma ORM.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
