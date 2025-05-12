# Budget Tracker Backend

A RESTful API for tracking expenses and income built with NestJS, MySQL, and Redis.

## Setup

1. Clone the repository
2. Install Docker and Docker Compose
3. Run `docker-compose up`
4. Access API at `http://localhost:3000`

## API Endpoints

### Expenses

- POST /expenses - Create expense
- GET /expenses - List all expenses
- GET /expenses/:id - Get expense by ID
- PATCH /expenses/:id - Update expense
- DELETE /expenses/:id - Delete expense

### Income

- POST /income - Create income
- GET /income - List all income
- GET /income/:id - Get income by ID
- PATCH /income/:id - Update income
- DELETE /income/:id - Delete income
