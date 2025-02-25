# Uber Clone Backend

## Routes

### User Routes

- **POST /register**
  - Description: Register a new user.
  - Request Body:
    ```json
    {
      "name": "string",
      "email": "string",
      "password": "string"
    }
    ```
  - Response:
    ```json
    {
      "message": "User registered successfully",
      "user": {
        "id": "string",
        "name": "string",
        "email": "string"
      }
    }
    ```

- **POST /login**
  - Description: Login a user.
  - Request Body:
    ```json
    {
      "email": "string",
      "password": "string"
    }
    ```
  - Response:
    ```json
    {
      "message": "Login successful",
      "token": "string"
    }
    ```

- **GET /getUserProfile**
  - Description: Get the profile of the logged-in user (requires authentication).
  - Headers:
    ```json
    {
      "Authorization": "Bearer <token>"
    }
    ```
  - Response:
    ```json
    {
      "id": "string",
      "name": "string",
      "email": "string"
    }
    ```

- **GET /logout**
  - Description: Logout the logged-in user (requires authentication).
  - Headers:
    ```json
    {
      "Authorization": "Bearer <token>"
    }
    ```
  - Response:
    ```json
    {
      "message": "Logout successful"
    }
    ```

### Captain Routes

- **POST /register**
  - Description: Register a new captain.
  - Request Body:
    ```json
    {
      "name": "string",
      "email": "string",
      "password": "string",
      "vehicleDetails": {
        "model": "string",
        "licensePlate": "string"
      }
    }
    ```
  - Response:
    ```json
    {
      "message": "Captain registered successfully",
      "captain": {
        "id": "string",
        "name": "string",
        "email": "string",
        "vehicleDetails": {
          "model": "string",
          "licensePlate": "string"
        }
      }
    }
    ```
