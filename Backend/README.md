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

| Field       | Type   | Required | Description                                   |
| ----------- | ------ | -------- | --------------------------------------------- |
| `firstname` | String | ✅ Yes   | Must be at least 3 characters long            |
| `lastname`  | String | ❌ No    | Must be at least 3 characters long (optional) |
| `email`     | String | ✅ Yes   | Must be a valid email format and unique       |
| `password`  | String | ✅ Yes   | Must be at least 6 characters long            |

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

| Status Code               | Message                                                                                 |
| ------------------------- | --------------------------------------------------------------------------------------- |
| 400 Bad Request           | `[{ "msg": "Invalid Email", "param": "email", "location": "body" }]` (Validation Error) |
| 500 Internal Server Error | `{"error": "Something went wrong"}`                                                     |

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

| Field      | Type   | Required | Description                        |
| ---------- | ------ | -------- | ---------------------------------- |
| `email`    | String | ✅ Yes   | Must be a valid email format       |
| `password` | String | ✅ Yes   | Must be at least 6 characters long |

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

| Status Code               | Message                                                                                 |
| ------------------------- | --------------------------------------------------------------------------------------- |
| 400 Bad Request           | `[{ "msg": "Invalid Email", "param": "email", "location": "body" }]` (Validation Error) |
| 401 Unauthorized          | `{"message": "Invalid Email or Password"}`                                              |
| 500 Internal Server Error | `{"error": "Something went wrong"}`                                                     |

### **Notes**

- The password is checked against the stored hashed password.
- If authentication is successful, a JWT token is returned for further authentication.
- If the credentials are incorrect, an error message is returned.

---

## `/users/profile` - Get User Profile

### **Description**

This endpoint retrieves the profile details of the authenticated user.

### **Endpoint**

```
GET /users/profile
```

### **Headers**

| Header          | Type   | Required | Description                     |
| --------------- | ------ | -------- | ------------------------------- |
| `Authorization` | String | ✅ Yes   | Bearer token for authentication |

### **Response**

#### **Success (200 OK)**

```json
{
  "_id": "64b5f1234abc5678ef901234",
  "firstname": "John",
  "lastname": "Doe",
  "email": "johndoe@example.com"
}
```

#### **Error Responses**

| Status Code      | Message                       |
| ---------------- | ----------------------------- |
| 401 Unauthorized | `{"message": "Unauthorized"}` |

### **Notes**

- This endpoint requires authentication.
- The user must be logged in to access their profile.

---

## `/users/logout` - Logout User

### **Description**

This endpoint logs out the user by clearing the authentication token and blacklisting it.

### **Endpoint**

```
GET /users/logout
```

### **Headers**

| Header          | Type   | Required | Description                     |
| --------------- | ------ | -------- | ------------------------------- |
| `Authorization` | String | ✅ Yes   | Bearer token for authentication |

### **Response**

#### **Success (200 OK)**

```json
{
  "message": "Logged out successfully"
}
```

#### **Error Responses**

| Status Code      | Message                       |
| ---------------- | ----------------------------- |
| 401 Unauthorized | `{"message": "Unauthorized"}` |

### **Notes**

- This endpoint requires authentication.
- The token is blacklisted to prevent reuse.

---

## `/captains/register` - Captain Registration Endpoint

### **Description**

This endpoint allows new captains to register by providing personal and vehicle details. Upon successful registration, a JSON Web Token (JWT) is returned.

### **Endpoint**

```
POST /captains/register
```

### **Request Body**

| Field                 | Type    | Required | Description                                     |
| --------------------- | ------- | -------- | ----------------------------------------------- |
| `firstname`           | String  | ✅ Yes   | Must be at least 3 characters long              |
| `lastname`            | String  | ❌ No    | Last name is optional                           |
| `email`               | String  | ✅ Yes   | Must be a valid email format and unique         |
| `password`            | String  | ✅ Yes   | Must be at least 6 characters long              |
| `phone`               | String  | ✅ Yes   | Must be a valid phone number                    |
| `vehicle.color`       | String  | ✅ Yes   | Must be at least 3 characters long              |
| `vehicle.plateNumber` | String  | ✅ Yes   | Must be at least 3 characters long              |
| `vehicle.capacity`    | Integer | ✅ Yes   | Must be at least 1 person                       |
| `vehicle.vehicleType` | String  | ✅ Yes   | Must be `car`, `motorcycle`, or `auto-rickshaw` |

### **Example Request**

```json
{
  "firstname": "Alex",
  "lastname": "Smith",
  "email": "alexsmith@example.com",
  "password": "strongpassword",
  "phone": "+1234567890",
  "vehicle": {
    "color": "Red",
    "plateNumber": "AB123CD",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### **Response**

#### **Success (201 Created)**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5c...",
  "captain": {
    "_id": "64b5f1234abc5678ef901234",
    "firstname": "Alex",
    "lastname": "Smith",
    "email": "alexsmith@example.com",
    "phone": "+1234567890",
    "vehicle": {
      "color": "Red",
      "plateNumber": "AB123CD",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

#### **Error Responses**

| Status Code               | Message                                                                                 |
| ------------------------- | --------------------------------------------------------------------------------------- |
| 400 Bad Request           | `[{ "msg": "Invalid Email", "param": "email", "location": "body" }]` (Validation Error) |
| 500 Internal Server Error | `{"error": "Something went wrong"}`                                                     |

### **Notes**

- The password is hashed before storing it in the database.
- The JWT token should be used for authentication in subsequent requests.
- If an email is already registered, an error will be returned.

---

**Author:** Deepanshu Negi
