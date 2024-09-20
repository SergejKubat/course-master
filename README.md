# Course Master

This project consists of several microservices that together provide a robust framework for online learning. The architecture includes microservices for authentication, course management, payment processing, and file management, as well as an API Gateway and a frontend built with React.

## Architecture

The system is composed of the following components:

-   **Microservices:**

    -   [**Auth Service**](./auth-service/README.md): Handles user authentication and authorization.
    -   [**Course Service**](./course-service/README.md): Manages courses, including creation, updates, and retrieval.
    -   [**Payment Service**](./payment-service/README.md): Processes payments and manages transactions.
    -   [**File Service**](./file-storage/README.md): Manages file uploads and storage.

-   [**API Gateway**](./api-gateway/README.md): Acts as a single entry point for all client requests and routes them to the appropriate microservice.

-   [**Frontend**](./frontend/README.md): Built with React, this is the user interface for the educational platform.

-   **Feature Toggle**: Implemented using Unleash in the Auth, Course, and Payment microservices, as well as the frontend for flexible feature management.

## Technologies

-   **Backend**:

    -   Java
    -   Spring Boot
    -   Unleash

-   **Frontend**:

    -   JavaScript
    -   React

## Getting Started

### Prerequisites

Make sure you have the following installed on your local machine:

-   Java 22 or higher
-   Maven
-   Node.js and npm
