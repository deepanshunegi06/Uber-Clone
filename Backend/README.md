# API Documentation

## `/users/register` - User Registration Endpoint

### **Description**
This endpoint allows new users to register by providing their first name, last name, email, and password. The request data is validated before user creation, and upon successful registration, a JSON Web Token (JWT) is returned.

### **Endpoint**
```
POST /users/register
```

### **Request Body**
The request should be sent as JSON with the following required fields:

| Field      | Type   | Required | Description |
|------------|--------|----------|-------------|
| `firstname` | String | ✅ Yes | Must be at least 3 characters long |
| `lastname`  | String | ❌ No  | Must be at least 3 characters long (optional) |
| `email`     | String | ✅ Yes | Must be a valid email format and unique |
| `password`  | String | ✅ Yes | Must be at least 6 characters long |

### **Example Request**
```json
{
  "firstname": "John",
  "lastname": "Doe",
  "email": "johndoe@example.com",
  "password": "securepassword"
}
```

### **Response**
#### **Success (201 Created)**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5c...",
  "user": {
    "_id": "64b5f1234abc5678ef901234",
    "firstname": "John",
    "lastname": "Doe",
    "email": "johndoe@example.com"
  }
}
```

#### **Error Responses**
| Status Code | Message |
|-------------|---------|
| 400 Bad Request | `[{ "msg": "Invalid Email", "param": "email", "location": "body" }]` (Validation Error) |
| 500 Internal Server Error | `{"error": "Something went wrong"}` |

### **Notes**
- The password is hashed before storing it in the database.
- The JWT token should be used for authentication in subsequent requests.
- If an email is already registered, an error will be returned.

---

## `/users/login` - User Login Endpoint

### **Description**
This endpoint allows users to log in by providing their email and password. If the credentials are valid, a JSON Web Token (JWT) is returned for authentication.

### **Endpoint**
```
POST /users/login
```

### **Request Body**
The request should be sent as JSON with the following required fields:

| Field      | Type   | Required | Description |
|------------|--------|----------|-------------|
| `email`     | String | ✅ Yes | Must be a valid email format |
| `password`  | String | ✅ Yes | Must be at least 6 characters long |

### **Example Request**
```json
{
  "email": "johndoe@example.com",
  "password": "securepassword"
}
```

### **Response**
#### **Success (200 OK)**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5c...",
  "user": {
    "_id": "64b5f1234abc5678ef901234",
    "firstname": "John",
    "lastname": "Doe",
    "email": "johndoe@example.com"
  }
}
```

#### **Error Responses**
| Status Code | Message |
|-------------|---------|
| 400 Bad Request | `[{ "msg": "Invalid Email", "param": "email", "location": "body" }]` (Validation Error) |
| 401 Unauthorized | `{"message": "Invalid Email or Password"}` |
| 500 Internal Server Error | `{"error": "Something went wrong"}` |

### **Notes**
- The password is checked against the stored hashed password.
- If authentication is successful, a JWT token is returned for further authentication.
- If the credentials are incorrect, an error message is returned.

---
**Author:** Deepanshu Negi
