# SAGARMATHA_FRUITS_API

Simple CRUD API for a local fruit business.

<!--- If we have only one group/collection, then no need for the "ungrouped" heading -->

# RESTFUL APIs

1. [GET FRUITS](#1-get-fruits)
1. [GET FRUIT BY ID](#2-get-fruit-by-id)
1. [POST FRUITS](#3-post-fruits)
1. [UPDATE FRUIT](#4-update-fruit)
1. [DELETE FRUIT](#5-delete-fruit)

## Endpoints

Every endpoint will respond with required HTTP status codes along side with the provided body.

### 1. GET FRUITS

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{API_URI}}/fruits
```

**_Response:_**

```
{
    "message": "All fruits fetched successfully",
    "data": [
        {
            "_id": "659e98b898b863b63882b323",
            "name": "apple",
            "price": 69,
            "imageUrl": "https://res.cloudinary.com/dra4rqms4/image/upload/v1704892600/Fruits/dcmkuatx5uudwbcwayhu.jpg",
            "__v": 0
        }
    ]
}
```

### 2. GET FRUIT BY ID

**_Endpoint:_**

```bash
Method: GET
Type:
URL: {{API_URI}}/fruits/659e98b898b863b63882b323
```

**_Response:_**

```
{
    "message": "Fruit fetched successfully",
    "data": {
        "_id": "659e98b898b863b63882b323",
        "name": "mango",
        "price": 69,
        "imageUrl": "https://res.cloudinary.com/dra4rqms4/image/upload/v1704896380/Fruits/kmnamq0uwziuvbetkwde.jpg",
        "__v": 0
    }
}
```

### 3. POST FRUITS

**_Endpoint:_**

```bash
Method: POST
Type: FORMDATA
URL: {{API_URI}}/fruits/
```

**_Body:_**

| Key   | Value | Description |
| ----- | ----- | ----------- |
| name  | apple |             |
| price | 349.9 |             |
| image |       |             |

**_Response:_**

```
{
    "message": "Fruit created successfully",
    "data": {
        "name": "apple",
        "price": 349.9,
        "imageUrl": "https://res.cloudinary.com/dra4rqms4/image/upload/v1704892600/Fruits/dcmkuatx5uudwbcwayhu.jpg",
        "_id": "659e98b898b863b63882b323",
        "__v": 0
    }
}

```

### 4. UPDATE FRUIT

**_Endpoint:_**

```bash
Method: PUT
Type: FORMDATA
URL: {{API_URI}}/fruits/659e98b898b863b63882b323
```

**_Body:_**

| Key   | Value | Description |
| ----- | ----- | ----------- |
| name  | mango |             |
| price | 69    |             |

**_Response:_**

```
{
    "message": "Fruit updated successfully",
    "data": {
        "_id": "659e98b898b863b63882b323",
        "name": "mango",
        "price": 69,
        "imageUrl": "https://res.cloudinary.com/dra4rqms4/image/upload/v1704896380/Fruits/kmnamq0uwziuvbetkwde.jpg",
        "__v": 0
    }
}
```

### 5. DELETE FRUIT

**_Endpoint:_**

```bash
Method: DELETE
Type:
URL: {{API_URI}}/fruits/659e97b91b90ca699de107ef
```

**_Response:_**

```
{
    "message": "Fruit deleted successfully",
    "data": {
        "_id": "659e98b898b863b63882b323",
        "name": "mango",
        "price": 69,
        "imageUrl": "https://res.cloudinary.com/dra4rqms4/image/upload/v1704896380/Fruits/kmnamq0uwziuvbetkwde.jpg",
        "__v": 0
    }
}
```

---

[Back to top](#sagarmatha_fruits_api)

> Generated at 2024-01-10 20:42:21 by [docgen](https://github.com/thedevsaddam/docgen)
