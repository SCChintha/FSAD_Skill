# Student Management Full-Stack Application

This project is a simple full-stack application with a Spring Boot backend and a React (Vite) frontend.

## Structure

- `backend/` – Spring Boot application (Java 17, Spring Boot 3.2.x)
- `frontend/` – React + Vite application

## Backend (Spring Boot)

### Development Run

From the project root in VS Code, you can use the VS Code task:

- Task: **Run Spring Boot backend (dev)** – runs `mvn spring-boot:run` in the `backend` folder.

Or run manually from a terminal:

```bash
cd backend
"C:\\Users\\saich\\OneDrive\\Desktop\\DEVTrails\\maven\\apache-maven\\apache-maven-3.9.9\\bin\\mvn.cmd" spring-boot:run
```

The backend listens on `http://localhost:8080`.

### Production JAR

To build the executable JAR (from the `backend` folder):

```bash
"C:\\Users\\saich\\OneDrive\\Desktop\\DEVTrails\\maven\\apache-maven\\apache-maven-3.9.9\\bin\\mvn.cmd" clean package -DskipTests
```

The JAR will be created at:

- `backend/target/backend-0.0.1-SNAPSHOT.jar`

Run it with:

```bash
java -jar backend/target/backend-0.0.1-SNAPSHOT.jar
```

## Frontend (React + Vite)

### Development

```bash
cd frontend
npm install
npm run dev
```

By default, Vite serves the frontend at `http://localhost:5173`.

### Production Build

```bash
cd frontend
npm run build
```

The optimized static files are generated into `frontend/dist/`.

The frontend calls the backend using the Vite environment variable `VITE_API_BASE_URL`, configured in `.env.production`.

- In this project, `.env.production` sets:

  ```env
  VITE_API_BASE_URL=http://localhost:8080
  ```

## Deploying Frontend via Spring Boot Static Resources

To have Spring Boot serve the built React app:

1. Build the frontend:

   ```bash
   cd frontend
   npm run build
   ```

2. Copy the build output into the backend static folder:

   ```bash
   cd backend
   # from the backend folder, adjust paths if needed
   Remove-Item "src/main/resources/static" -Recurse -Force -ErrorAction SilentlyContinue
   New-Item -ItemType Directory -Path "src/main/resources/static" | Out-Null
   Copy-Item "..\frontend\dist\*" "src/main/resources/static" -Recurse
   ```

3. Rebuild the backend JAR so it includes the static files:

   ```bash
   "C:\\Users\\saich\\OneDrive\\Desktop\\DEVTrails\\maven\\apache-maven\\apache-maven-3.9.9\\bin\\mvn.cmd" clean package -DskipTests
   ```

4. Run the JAR:

   ```bash
   java -jar backend/target/backend-0.0.1-SNAPSHOT.jar
   ```

5. Open `http://localhost:8080/` in a browser to use the full application.

## API Overview

The backend exposes basic student APIs at `http://localhost:8080/students`.

- `GET /students` – list students
- `POST /students` – create a student
- `PUT /students/{id}` – update a student
- `DELETE /students/{id}` – delete a student

The React frontend (components in `frontend/src/components/`) consumes these endpoints using the Axios client in `frontend/src/api.js`.
