# **HealthyCare RESTful API - Skilvul Final Project**

By: BE-16 (Alvian Nugroho & Arisandi Satria Jeujanan)

---

## Documentation

### 1. **Register User**

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
      "error": <error message>
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
      "error": <error message>
    }
    ```

### 3. **Get All Foods**

- Endpoint: `/foods`
- Method: `GET`
- Auth: NO
- Body: -

- Response:

  - Success: `200 OK`

    Example:

    ```json
    {
      "status": 200,
      "message": "success",
      "data": [
        {
          "id": 1,
          "category_name": "Buah-buahan",
          "name": "Apel",
          "img": "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          "calory": 52,
          "nutrition": "Serat, vitamin C, kalium"
        },
        {
          "id": 2,
          "category_name": "Buah-buahan",
          "name": "Jeruk",
          "img": "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=435&q=80",
          "calory": 43,
          "nutrition": "Serat, vitamin C, folat"
        },
        {
          "id": 3,
          "category_name": "Buah-buahan",
          "name": "Banana",
          "img": "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
          "calory": 96,
          "nutrition": "Karbohidrat, vitamin B6, potassium"
        }
      ]
    }
    ```

  - Error: `404 NOT FOUND` || `500 INTERNAL SERVER ERROR`

    Example:

    If there is an input is empty `404 NOT FOUND`:

    ```json
    {
      "message": "Data not found!"
    }
    ```

    If the server get an error `500 INTERNAL SERVER ERROR`:

    ```json
    {
      "message": "Server error!",
      "error": <error message>
    }
    ```

### 4. **Get Detail Food**

- Endpoint: `/foods/:id`
- Method: `GET`
- Auth: NO
- Body: -

- Response:

  - Success: `200 OK`

    Example:

    ```json
    {
      "status": 200,
      "message": "success",
      "data": {
        "id": 1,
        "category_name": "Buah-buahan",
        "name": "Apel",
        "img": "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        "calory": 52,
        "nutrition": "Serat, vitamin C, kalium"
      }
    }
    ```

  - Error: `404 NOT FOUND` || `500 INTERNAL SERVER ERROR`

    Example:

    If there is an input is empty `404 NOT FOUND`:

    ```json
    {
      "message": "Data not found!"
    }
    ```

    If the server get an error `500 INTERNAL SERVER ERROR`:

    ```json
    {
      "message": "Server error!",
      "error": <error message>
    }
    ```

### 5. **Insert BMI**

- Endpoint: `/bmi/:id`
- Method: `POST`
- Auth: NO
- Body:

  ```json
  {}
  ```

- Response:

  - Success: `201 CREATED`

    Example:

    ```json
    {
      "status": 201,
      "message": "Data berhasil ditambahkan!",
      "data": {}
    }
    ```

  - Error: `500 INTERNAL SERVER ERROR`

    If the server get an error `500 INTERNAL SERVER ERROR`:

    ```json
    {
      "message": "Terjadi kesalahan server!",
      "error": <error message>
    }
    ```

### 6. **Get BMI**

- Endpoint: `/bmi/:id`
- Method: `GET`
- Auth: NO
- Body: -

- Response:

  - Success: `200 OK`

    Example:

    ```json
    {
      "status": 200,
      "message": "Data berhasil ditampilkan!",
      "data": {}
    }
    ```

  - Error: `500 INTERNAL SERVER ERROR`

    If the server get an error `500 INTERNAL SERVER ERROR`:

    ```json
    {
      "message": "Terjadi kesalahan server!",
      "error": <error message>
    }
    ```

### 7. **Delete BMI**

- Endpoint: `/bmi/:id`
- Method: `DELETE`
- Auth: NO
- Body: -

- Response:

  - Success: `200 OK`

    Example:

    ```json
    {
      "status": 200,
      "message": "Data dihapus!"
    }
    ```

  - Error: `500 INTERNAL SERVER ERROR`

    If the server get an error `500 INTERNAL SERVER ERROR`:

    ```json
    {
      "message": "Terjadi kesalahan server!",
      "error": <error message>
    }
    ```

### 8. **Insert Daily Calory**

- Endpoint: `/daily/:id`
- Method: `POST`
- Auth: NO
- Body:

  ```json
  {}
  ```

- Response:

  - Success: `201 CREATED`

    Example:

    ```json
    {
      "status": 201,
      "message": "Data berhasil ditambahkan!",
      "data": {}
    }
    ```

  - Error: `500 INTERNAL SERVER ERROR`

    If the server get an error `500 INTERNAL SERVER ERROR`:

    ```json
    {
      "message": "Terjadi kesalahan server!",
      "error": <error message>
    }
    ```

### 9. **Get Daily Calory**

- Endpoint: `/daily/:id`
- Method: `GET`
- Auth: NO
- Body: -

- Response:

  - Success: `200 OK`

    Example:

    ```json
    {
      "status": 200,
      "message": "Data berhasil ditampilkan!"
    }
    ```

  - Error: `500 INTERNAL SERVER ERROR`

    If the server get an error `500 INTERNAL SERVER ERROR`:

    ```json
    {
      "message": "Terjadi kesalahan server!",
      "error": <error message>
    }
    ```

### 10. **Get All Article**

- Endpoint: `/articles`
- Method: `GET`
- Auth: NO
- Body: -

- Response:

  - Success: `200 OK`

    Example:

    ```json
    {
      "status": 200,
      "message": "success",
      "data": {}
    }
    ```

  - Error: `404 NOT FOUND` || `500 INTERNAL SERVER ERROR`

    If data not found `404 NOT FOUND`:

    ```json
    {
      "message": "Data not found!",
      "error": <error message>
    }
    ```

    If the server get an error `500 INTERNAL SERVER ERROR`:

    ```json
    {
      "message": "Server error!",
      "error": <error message>
    }
    ```

### 11. **Get Detail Article**

- Endpoint: `/articles/:id`
- Method: `GET`
- Auth: NO
- Body: -

- Response:

  - Success: `200 OK`

    Example:

    ```json
    {
      "status": 200,
      "message": "success",
      "data": {}
    }
    ```

  - Error: `404 NOT FOUND` || `500 INTERNAL SERVER ERROR`

    If data not found `404 NOT FOUND`:

    ```json
    {
      "message": "Data not found!",
      "error": <error message>
    }
    ```

    If the server get an error `500 INTERNAL SERVER ERROR`:

    ```json
    {
      "message": "Server error!",
      "error": <error message>
    }
    ```
