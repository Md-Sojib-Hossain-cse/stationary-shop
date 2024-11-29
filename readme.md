# Stationary Shop - Back End

stationary Shop is a basic stationary shop management backend project . Which is an Express application with TypeScript, integrating MongoDB with Mongoose to manage a Stationery Shop.It ensures data integrity using Mongoose schema validation.

## Features

- Perform Crud operation on Stationary Products
- Manage Product Orders
- Generate Total Revenue

## Live Link

https://stationary-shop-delta.vercel.app/

## Local Setup

- Create a `.env` file in the root of your directory.
- Add Environment Variables and you are good to go

```
NODE_ENV=development
PORT=3000
DATABASE_URL=mongodb+srv://<dbUser>:<dbPassword>@cluster0.jnc3ejx.mongodb.net/stationary-shop?retryWrites=true&w=majority&appName=Cluster0
```

## API End Points

### Root

https://stationary-shop-delta.vercel.app

```javascript
Method: GET;
API: 'https://stationary-shop-delta.vercel.app';
EndPoint: '/';
```

### Product POST route

https://stationary-shop-delta.vercel.app/api/products

```javascript
Method: POST;
API: 'https://stationary-shop-delta.vercel.app/api/products/';
EndPoint: '/api/products/';
```

- Demo Data

```javascript
{
  "name": "Notebook",
  "brand": "Moleskine",
  "price": 15,
  "category": "Office Supplies",
  "description": "A high-quality notebook for professionals.",
  "quantity": 200,
  "inStock": true
}
```

- Demo Response

```javascript
{
  "message": "Product created successfully",
  "success": true,
  "data": {
    "_id": "648a45e5f0123c45678d9012",
    "name": "Notebook",
    "brand": "Moleskine",
    "price": 15,
    "category": "Office Supplies",
    "description": "A high-quality notebook for professionals.",
    "quantity": 200,
    "inStock": true,
    "createdAt": "2024-11-19T10:23:45.123Z",
    "updatedAt": "2024-11-19T10:23:45.123Z"
  }
}
```

### All Product GET Route

https://stationary-shop-delta.vercel.app/api/products

```javascript
Method: GET;
API: 'https://stationary-shop-delta.vercel.app/api/products';
EndPoint: '/api/products';
```

Apply query parameters searchTerm can be name, brand, category

```javascript
 /api/products?searchTerm=category
```

- Demo Response

```javascript
 {
  "message": "Products retrieved successfully",
  "status": true,
  "data": [
    {
      "_id": "648a45e5f0123c45678d9012",
      "name": "Notebook",
      "brand": "Moleskine",
      "price": 15,
      "category": "Office Supplies",
      "description": "A high-quality notebook for professionals.",
      "quantity": 200,
      "inStock": true,
      "createdAt": "2024-11-19T10:23:45.123Z",
      "updatedAt": "2024-11-19T10:23:45.123Z"
    },
    // ... rest data
  ]
}
```

### Single Product GET Route

https://stationary-shop-delta.vercel.app/api/products/:productId

```javascript
Method: GET;
API: 'https://stationary-shop-delta.vercel.app/api/products/:productId';
EndPoint: '/api/products/:productId';
```

- Demo Response

```javascript
{
  "message": "Product retrieved successfully",
  "status": true,
  "data": {
    "_id": "648a45e5f0123c45678d9012",
    "name": "Notebook",
    "brand": "Moleskine",
    "price": 15,
    "category": "Office Supplies",
    "description": "A high-quality notebook for professionals.",
    "quantity": 200,
    "inStock": true,
    "createdAt": "2024-11-19T10:23:45.123Z",
    "updatedAt": "2024-11-19T10:23:45.123Z"
  }
}
```

### Single Stationary Product Update (PUT) route

https://stationary-shop-delta.vercel.app/api/products/:productId

```javascript
Method: PUT;
API: 'https://stationary-shop-delta.vercel.app/api/products/:productId';
EndPoint: '/api/products/:productId';
```

- Demo Data

```javascript
{
  "price": 18,
  "quantity": 180
}
```

- Demo Response

```javascript
{
  "message": "Product updated successfully",
  "status": true,
  "data": {
    "_id": "648a45e5f0123c45678d9012",
    "name": "Notebook",
    "brand": "Moleskine",
    "price": 18,  // Price updated
    "category": "Office Supplies",
    "description": "A high-quality notebook for professionals.",
    "quantity": 180,  // Quantity updated
    "inStock": true,
    "createdAt": "2024-11-19T10:23:45.123Z",
    "updatedAt": "2024-11-19T11:00:00.000Z"  // Updated timestamp
  }
}
```

### Stationary Product DELETE route

https://stationary-shop-delta.vercel.app/api/products/:productId

```javascript
Method: DELETE;
API: 'https://stationary-shop-delta.vercel.app/api/products/:productId';
EndPoint: '/api/products/:productId';
```

- Demo Response

```javascript
{
  "message": "Product deleted successfully",
  "status": true,
  "data": {}
}
```

### Order POST route

https://stationary-shop-delta.vercel.app/api/orders

```javascript
Method: POST;
API: 'https://stationary-shop-delta.vercel.app/api/orders';
EndPoint: '/api/orders';
```

- Demo Data

```javascript
{
  "email": "customer@example.com",
  "product": "648a45e5f0123c45678d9012",
  "quantity": 2,
  "totalPrice": 36
}
```

- Demo Response

```javascript
{
  "message": "Order created successfully",
  "status": true,
  "data": {
    "_id": "648b45f5e1234b56789a6789",
    "email": "customer@example.com",
    "product": "648a45e5f0123c45678d9012",
    "quantity": 2,
    "totalPrice": 36,
    "createdAt": "2024-11-19T12:00:00.000Z",
    "updatedAt": "2024-11-19T12:00:00.000Z"
  }
}
```

### Calculate Total Revenue

https://stationary-shop-delta.vercel.app/api/orders/revenue

```javascript
Method: GET;
API: 'https://stationary-shop-delta.vercel.app/api/orders/revenue';
EndPoint: '/api/orders/revenue';
```

- Demo Response

```javascript
{
  "message": "Revenue calculated successfully",
  "status": true,
  "data": {
    "totalRevenue": 720  // Total revenue calculated from all orders
  }
}
```

### 🔗 Links

[![Portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://mdsojibhossain-portfolio.web.app/)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mdsojibhossaincse/)
