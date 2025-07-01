# Notepad Backend (Express.js + PostgreSQL)

A simple notepad backend API using Express.js, Sequelize, and PostgreSQL, structured like Laravel (with models, controllers, migrations, and .env).

## Folders Structure

- `models/` : Sequelize models (ORM)
- `controllers/` : Business logic (CRUD)
- `migrations/` : Database schema migrations
- `config/` : Database config for Sequelize CLI
- `.env` : Environment variables (DB credentials, etc)
- `app.js` : Main Express app

## Best Practices

- **Environment Variables**: Store sensitive data (DB credentials, etc) in `.env` and never commit it to version control.
- **MVC Structure**: Separate business logic (controllers), data models, and routes for maintainability.
- **Migration**: Use Sequelize migrations to version and manage DB schema changes.
- **Error Handling**: Always handle errors in controllers and return proper HTTP status codes.
- **Validation**: (Optional) Add request validation for better data integrity.
- **Use async/await**: For all DB operations to avoid callback hell.
- **Consistent Naming**: Use PascalCase for models, camelCase for variables/functions.
- **Logging**: Use logging for debugging and monitoring (can add winston/morgan for production).

## Getting Started

### 1. Clone & Install Dependencies

```bash
npm install
```

### 2. Setup Environment Variables

Edit `.env` with your PostgreSQL credentials:

```
DB_HOST=localhost
DB_PORT=5432
DB_NAME=db_notepad
DB_USER=dev
DB_PASS=Testing1
```

### 3. Run Database Migration

```bash
npx sequelize-cli db:migrate
```

### 4. Start the Server

```bash
npm start
```

Server will run on `http://localhost:3000` (default).

## API Endpoints

- `GET    /notes` : List all notes
- `GET    /notes/:id` : Get note by ID
- `POST   /notes` : Create new note
- `PUT    /notes/:id` : Update note by ID
- `DELETE /notes/:id` : Delete note by ID

### Example Note JSON

```json
{
  "title": "Belanja",
  "content": "Beli telur, susu, roti",
  "color": "yellow",
  "date": "2025-06-30T00:00:00.000Z"
}
```

## Contoh CURL API

### 1. List semua note

```bash
curl -X GET http://localhost:3000/notes
```

### 2. Ambil note by ID

```bash
curl -X GET http://localhost:3000/notes/1
```

### 3. Tambah note baru

```bash
curl -X POST http://localhost:3000/notes \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Belanja",
    "content": "Beli telur, susu, roti",
    "color": "yellow",
    "date": "2025-06-30T00:00:00.000Z"
  }'
```

### 4. Update note by ID

```bash
curl -X PUT http://localhost:3000/notes/1 \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Belanja Mingguan",
    "content": "Beli telur, susu, roti, keju",
    "color": "yellow",
    "date": "2025-06-30T00:00:00.000Z"
  }'
```

### 5. Hapus note by ID

```bash
curl -X DELETE http://localhost:3000/notes/1
```

---

> **Tips:**
>
> - Untuk development, gunakan tools seperti Postman/Insomnia untuk testing endpoint.
> - Untuk production, gunakan process manager seperti PM2 dan tambahkan validasi input.
# notepad-backend-server
