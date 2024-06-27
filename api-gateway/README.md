# API Gateway

This project serves as an API Gateway for managing three distinct services: Auth, Course, and Payment. 
Each service is designed to handle specific functionalities, and the API Gateway aggregates their endpoints under a 
unified entry point.

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

## Getting Started

Clone the repository:

```bash
git clone https://github.com/SergejKubat/course-master
```

Change into the project directory:

```bash
cd course-master/api-gateway
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

The application will start on: http://localhost:8080.

OpenAPI documentation: http://localhost:8080/swagger-ui/index.html