# JWT Authentication & Role Authorization Project

## Backend Details
The backend is a Spring Boot application featuring:
- **JPA & H2 In-Memory DB** for user storage.
- **Spring Security & JWT** for robust authentication.
- **Role-Based Access Control (RBAC)** implemented using method-level and URL security.
- Endpoints configured:
  - `POST /auth/register` (Public) - Helper endpoint to create test users.
  - `POST /auth/login` (Public) - Generates JWT token standard for active users.
  - `POST /admin/add` (Secured: ADMIN)
  - `DELETE /admin/delete` (Secured: ADMIN)
  - `GET /employee/profile` (Secured: EMPLOYEE)

## Running the Application
### Backend
1. Open terminal inside the `/backend` directory.
2. Build and run using Maven:
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```
3. The server will start on `http://localhost:8080`.

### Frontend
Since this is a vanilla HTML/JS frontend using `fetch`, simply open `/frontend/index.html` in your web browser. Or, use any simple static host (like `npx serve` or VS Code Live Server).
*Note: Depending on your browser CORS policy, you might want to add `@CrossOrigin` on your Spring controllers if accessing directly from `file://` scheme.*

## GitHub Commands
Once you verify the behavior locally via the Frontend UI or Postman, push everything to GitHub:
```bash
git init
git add .
git commit -m "feat: complete JWT authentication and role-based authorization"
git branch -M main
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```