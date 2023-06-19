# Simple CMS Admin

Welcome to the Simple CMS Admin Service, this project using React.js for frontend, Golang echo Framework for API, and PosgreSQL for database. We can use the features provided by this service in the form of management of articles and categories. By using this service we can insert, update, delete and get details of each item (article and category). This service has implemented clean architecture principles, a practical software architecture solution from Robert C. Martin (known as Uncle Bob).

## Getting Started

### Prerequisites

- [Go 1.20.5](https://go.dev/dl/)
- [Node.js 18.16.0](https://nodejs.org/en)
- [PostgreSQL](https://www.postgresql.org/download/)

### Installation

- Clone the git repository:

```
$ git clone https://github.com/rsf-project/cms-repository-fullstack
$ cd cms-repository-fullstack
```

### Setting up DB

We can import sql file using DataGrip, pgAdmin, or etc.
Alternatively, we can use psql shell and exec command below:
```
$ cd Database
$ C:\Program Files\PostgreSQL\15\bin\pg_restore.exe" -U postgres -d "YOUR_DB_NAME" < "cms-repository.sql"
or
$ pg_restore -U postgres -d "YOUR_DB_NAME" < "cms-repository.sql"
```

### Setting up API

```
$ cd Backend-API
$ go mod tidy
```

- Create `config` folder in root path, then create a file `connection.go` in that folder containing this following code:

```
package config

const (
  POSTGRE_USER     = "YOUR_USERNAME_HERE"
  POSTGRE_PASSWORD = "YOUR_PASSWORD_HERE"
  POSTGRE_HOST     = "localhost"
  POSTGRE_PORT     = "5432"
  POSTGRE_DATABASE = "YOUR_DATABASE_HERE"
  POSTGRE_SCHEMA   = "YOUR_SCHEMA_HERE"
  POSTGRE_SSLMODE  = "disable"
  JWT_SECRET_KEY   = "YOUR_SECRET_KEY"
)
```

alternatively, we can just run this following command using makefile:

```
$ make all
```

### Running

```
$ go run cmd/main.go
```

### Features

This service has the following API endpoints:

- `admin/v1/articles`: get list of articles
- `admin/v1/article`: insert, update, delete and get details of article (method: POST, PATCH, DELETE, and GET)
- `admin/v1/categories`: get list of categories
- `admin/v1/category`: insert, update, delete and get details of category (method: POST, PATCH, DELETE, and GET)

We can test the endpoint using the postman collection in `Backend-API/tools`.

### Testing

```
$ go test -v -coverprofile coverage.out ./...
```

### Setting up Frontend

```
$ cd Frontend
$ npm install
```

### Running

```
$ npm start
```

