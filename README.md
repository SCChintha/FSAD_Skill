# Full-Stack Java & React Development Repository 🚀

Welcome to my comprehensive full-stack development repository! This repository documents my learning, hands-on modules, and practical implementations covering modern enterprise Java, Spring ecosystem frameworks, persistence layers, RESTful services, and modern frontend development with React.

## 🛠️ Tech Stack & Tools

* **Languages & Core:** Java, JavaScript / ES6+

* **Backend Frameworks:** Spring, Spring Boot, Spring MVC, Spring Data JPA, Spring Security, Spring AOP

* **Persistence & DB:** Hibernate (ORM), JDBC, MySQL, PostgreSQL, HQL / JPQL

* **Build & Version Control:** Maven, Git, GitHub

* **Frontend:** React, React Router, Context API, Redux, Tailwind CSS / UI Libraries

* **Tools & IDEs:** Eclipse, Spring Tool Suite (STS), VS Code, Postman, Swagger / OpenAPI, SLF4J & Logback

## 📚 Curriculum Modules Covered

### 1. Foundations & Environment Setup

* Installation and configuration of **Git**, **Java SDK**, **Node.js**, and databases (**MySQL** / **PostgreSQL**).

* IDE setups across **Eclipse**, **Spring Boot STS**, and **VS Code**.

* Version control workflows: `commit`, `push`, `pull`, and `merge` strategies.

* **Maven Build Tool:** POM structure, build phases, goals, repository types, and archetypes.

### 2. Backend Persistence: Hibernate & JPA

* Overview of ORM and JPA versus traditional JDBC.

* Hibernate architecture, persistent objects, and generator classes (`AUTO`, `IDENTITY`, `SEQUENCE`).

* **HQL (Hibernate Query Language):** Named & positional parameters, aggregate functions, sorting, paging, and differences between HQL and HCQL.

* Advanced mappings: One-To-Many, Many-To-One, Many-To-Many relationships, cascade types, and fetch strategies.

* Data Transfer Objects (DTOs), **ModelMapper**, and boiler-plate reduction using **Lombok**.

### 3. Spring Framework & Spring Boot Core

* Inversion of Control (IoC) and Dependency Injection (DI) (Constructor and Setter injection with primitive/non-primitive types).

* Autowiring components using `@Autowired`.

* Spring vs. Spring Boot architecture, project creation, and configuration via `application.properties` vs. YAML.

* Aspect-Oriented Programming (**Spring AOP**): Concepts and key cross-cutting annotations.

### 4. Enterprise Web Applications & REST APIs

* **Spring MVC:** Request handling architecture, flow of web applications, and annotations (`@Controller` vs `@RestController`, HTTP method mappings, `@RequestBody`, `@ResponseBody`).

* **Spring Data JPA:** Repository layers, DAO/service architecture, derived query methods (`findBy`, `updateBy`, `deleteBy`, `countBy`), and custom JPQL.

* Building secure REST APIs with CRUD operations and response management using `ResponseEntity`.

* Global exception handling using `@ControllerAdvice`.

* Enterprise utilities: Sending emails with Spring Boot, multipart file uploads, application logging with **SLF4J & Logback**, and API documentation using **Swagger / OpenAPI**.

### 5. Frontend Development with React

* Core concepts: Components, JSX, props, state, and hooks (`useState`, `useEffect`, etc.).

* Routing with **React Router DOM** and UI component libraries integration.

* State management using **Context API** and **Redux**.

* Client-side persistent storage with `LocalStorage` and `SessionStorage`.

* API integration via Fetch API and Axios, along with CORS configuration in Spring Boot.

### 6. Full-Stack Integration, Security & Deployment

* End-to-end full-stack integration (Spring Boot + React).

* **Spring Security:** Core concepts, configuration, role-based authorization, and **JWT-based authentication**.

* Single Sign-On (SSO) concepts and JWT vs. OAuth comparisons.

* Deployment workflows and production readiness for full-stack web applications.

* Modern architecture overview: Service-Oriented Architecture (SOA), Microservices, API-driven design, and Cloud-Native paradigms.

## 🎯 Hands-On Skills & Labs Index

| Skill # | Module Title | Description |
| :--- | :--- | :--- |
| **#1** | Git Version Control | Repository initialization, branching, merging, and remote syncing. |
| **#2** | Hibernate CRUD Operations | Entity mapping, session management, and basic database persistence. |
| **#3** | Working with HQL - Sorting, Pagination & Aggregates | Advanced queries, sorting results, and managing result sets. |
| **#4** | Spring Dependency Injection | Implementing Constructor and Setter injection in Spring beans. |
| **#5** | Spring Autowiring Demo | Using `@Autowired` for seamless bean wiring and dependency management. |
| **#6** | Spring MVC Web Request Handling | Handling web requests, view resolvers, and controller mappings. |
| **#7** | REST API - CRUD Operations | Building RESTful endpoints using `ResponseEntity` for status handling. |
| **#8** | Spring Boot – JPQL & Query Methods | Writing custom JPQL queries and leveraging derived query interfaces. |
| **#9** | Global Exception Handling | Centralized error management using `@ControllerAdvice`. |
| **#10** | React State Management | Managing component states efficiently using React hooks (`useState`). |
| **#11** | React API Integration | Consuming REST endpoints with Fetch API, Axios, and local datasets. |
| **#12** | Full-Stack CRUD Application | End-to-end integration of a React frontend with a Spring Boot backend. |
| **#13** | Deployment of Full-Stack App | Packaging and deploying Spring Boot and React applications. |
| **#14** | User Authentication & Session Management | Managing frontend sessions and user states securely in React. |
| **#15** | JWT-Based Authentication & Authorization | Securing APIs using JSON Web Tokens and role-based permissions. |
| **#16** | API Documentation with Swagger | Documenting full-stack REST endpoints automatically via Swagger UI. |

## 🚀 Getting Started

To run any module locally:

1. **Clone the repository:**

   ```
   git clone https://github.com/SCChintha/FSAD_Skill.git
   
   ```

2. **Backend Setup (Spring Boot):**

   * Navigate to the backend directory.

   * Configure your database credentials in `application.properties` or `application.yml`.

   * Run the application via Maven:

     ```
     mvn spring-boot:run
     
     ```

3. **Frontend Setup (React):**

   * Navigate to the frontend directory.

   * Install dependencies and run the development server:

     ```
     npm install
     npm start (or) npm run dev
     
     ```

*Feel free to star ⭐ this repository if you find it helpful for your full-stack journey!*
