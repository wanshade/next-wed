# Proyek Next.js dengan Prisma

Ini adalah proyek Next.js yang terintegrasi dengan Prisma, ORM (Object-Relational Mapping) yang memungkinkan manajemen database dengan efisien.

## Memulai

### 1. Instalasi Dependencies

Pertama-tama, install dependencies yang diperlukan:

```bash
npm install
# atau
yarn install
# atau
pnpm install
# atau
bun install
2. Konfigurasi Variabel Lingkungan
Buat file .env di root proyek Anda dan tambahkan konfigurasi berikut:

env
Copy code
DATABASE_URL="postgresql://user:password@localhost:5432/mydatabase"
Gantilah user, password, localhost, 5432, dan mydatabase sesuai dengan pengaturan database PostgreSQL Anda.

3. Setup Prisma
Install Prisma Client:

bash
Copy code
npm install @prisma/client
# atau
yarn add @prisma/client
# atau
pnpm add @prisma/client
# atau
bun add @prisma/client
Install Prisma CLI:

bash
Copy code
npm install prisma --save-dev
# atau
yarn add prisma --dev
# atau
pnpm add prisma --dev
# atau
bun add prisma --dev
4. Inisialisasi Prisma
Jalankan perintah berikut untuk menginisialisasi Prisma:

bash
Copy code
npx prisma init
Perintah ini akan membuat folder prisma dan file schema.prisma di proyek Anda.

5. Konfigurasi Schema Prisma
Edit file prisma/schema.prisma untuk mendefinisikan model-model database Anda. Contoh:

prisma
Copy code
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

model User {
  id    Int    @id @default(autoincrement())
  name  String
  email String @unique
}
6. Migrasi Database
Setelah mengedit schema, jalankan perintah berikut untuk membuat dan menerapkan migrasi:

bash
Copy code
npx prisma migrate dev --name init
7. Generate Prisma Client
Generate Prisma Client dengan perintah berikut:

bash
Copy code
npx prisma generate
Menjalankan Server Development
Jalankan server development dengan perintah berikut:

bash
Copy code
npm run dev
# atau
yarn dev
# atau
pnpm dev
# atau
bun dev
Buka http://localhost:3000 di browser untuk melihat hasilnya.

Pelajari Lebih Lanjut
Untuk mempelajari lebih lanjut tentang Next.js, kunjungi:

Dokumentasi Next.js - Pelajari fitur dan API Next.js.
Pelajari Next.js - Tutorial interaktif Next.js.
Untuk Prisma, kunjungi:

Dokumentasi Prisma - Pelajari tentang Prisma ORM.
Deploy di Vercel
Cara yang paling mudah untuk melakukan deploy aplikasi Next.js Anda adalah dengan menggunakan Vercel dari pencipta Next.js.

Lihat dokumentasi deployment Next.js untuk informasi lebih lanjut.
