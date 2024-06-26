# Course Service

Spring Boot service designed to manage categories, courses, modules, lectures and reviews.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Build and Run](#build-and-run)
- [Endpoints](#endpoints)

## Prerequisites

Ensure you have the following installed on your machine:

- Java 22
- Maven
- IDE (e.g., IntelliJ, Eclipse)
- Postgres Database (for production)

## Getting Started

Clone the repository:

```bash
git clone https://github.com/SergejKubat/course-master
```

Change into the project directory:

```bash
cd course-master/course-service
```

## Build and Run

Build the project using Maven:

```bash
mvn clean install
```

Run the application:

```bash
mvn spring-boot:run
```

## Endpoints

The application will start on: http://localhost:8082.

OpenAPI documentation: http://localhost:8082/swagger-ui/index.html