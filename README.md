# **HealthyCare RESTful API - Skilvul Final Project**

By: BE-16 (Alvian Nugroho & Arisandi Satria Jeujanan)

---

## Documentation

### 1. **Create User**

- Endpoint: `/users/register`
- Method: `POST`
- Auth: NO
- Body:

  ```json
  {
    "email": "string",
    "password": "string",
    "name": "string"
  }
  ```

  Example:

  ```json
  {
    "email": "arisandi@gmail.com",
    "password": "123456",
    "name": "Aris"
  }
  ```

- Response:

  - Success: `200 OK`

    Example:

    ```json
    {
      "status": 200,
      "message": "Account registered!",
      "data": {
        "name": "Aris",
        "email": "arisandi@gmail.com",
        "password": "123456"
      }
    }
    ```

  - Error: `400 BAD REQUEST` || `409 CONFLICT` || `500 INTERNAL SERVER ERROR`

    Example:

    If there is an input is empty `400 BAD REQUEST`:

    ```json
    {
      "message": "Please, fill all input!"
    }
    ```

    If email is invalid `400 BAD REQUEST`:

    ```json
    {
      "message": "Invalid email!"
    }
    ```

    If email has already registered `409 CONFLICT`:

    ```json
    {
      "message": "Email has already registered!"
    }
    ```

    If the server get an error `500 INTERNAL SERVER ERROR`:

    ```json
    {
      "message": "Server error!",
      "error": <error message>,
    }
    ```

### 2. **Login User**

- Endpoint: `/users/login`
- Method: `POST`
- Auth: NO
- Body:

  ```json
  {
    "email": "string",
    "password": "string"
  }
  ```

  Example:

  ```json
  {
    "email": "arisandi@gmail.com",
    "password": "123456"
  }
  ```

- Response:

  - Success: `200 OK`

    Example:

    ```json
    {
      "message": "Berhasil Login!",
      "result": {
        "id": 7,
        "name": "Aris",
        "email": "arisandi@gmail.com",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiaWF0IjoxNjg2NzI5ODg0fQ.tg0SouaJKExEx5uIMANFSwD71NNVcdkm_Cvi314xgDs"
      }
    }
    ```

  - Error: `400 BAD REQUEST` || `401 UNAUTHORIZED` || `409 CONFLICT` || `500 INTERNAL SERVER ERROR`

    Example:

    If there is an input is empty `400 BAD REQUEST`:

    ```json
    {
      "message": "Please, fill all input!"
    }
    ```

    If email is invalid `400 BAD REQUEST`:

    ```json
    {
      "message": "Invalid email!"
    }
    ```

    If password is is wrong `401 UNAUTHORIZED`:

    ```json
    {
      "message": "Wrong password!"
    }
    ```

    If account is unregistered `409 CONFLICT`:

    ```json
    {
      "message": "Cannot find account!"
    }
    ```

    If the server get an error `500 INTERNAL SERVER ERROR`:

    ```json
    {
      "message": "Server error!",
      "error": <error message>,
    }
    ```

### 3.
