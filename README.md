# API de Productos - Endpoints

Aquí se describen los endpoints disponibles para la gestión de productos en la aplicación.

| Método HTTP | Endpoint                 | Descripción                            | Parámetros       | Ejemplo de cuerpo (JSON)                     |
|-------------|--------------------------|----------------------------------------|------------------|----------------------------------------------|
| **GET**     | `/products`              | Obtener todos los productos            | Ninguno          | N/A                                          |
| **GET**     | `/products/:id`          | Obtener un producto por su ID          | `id` (string)    | N/A                                          |
| **POST**    | `/products`              | Crear un nuevo producto                | Ninguno          | ```json { "name": "Product A", "price": 10.99, "description": "Sample product" } ``` |
| **PUT**     | `/products/:id`          | Actualizar un producto existente       | `id` (string)    | ```json { "name": "Updated Product", "price": 15.99 } ``` |
| **DELETE**  | `/products/:id`          | Eliminar un producto por su ID         | `id` (string)    | N/A                                          |

## Descripción de los Endpoints

### 1. **GET /products**
Este endpoint devuelve una lista de todos los productos registrados en la base de datos.

### 2. **GET /products/:id**
Devuelve un producto específico por su `id`. Si el producto no existe, responde con un código 404.

### 3. **POST /products**
Permite crear un nuevo producto. El cuerpo de la solicitud debe incluir al menos el `name` y `price`, y opcionalmente la `description`.

#### Ejemplo de solicitud:
```json
{
  "name": "Laptop",
  "price": 999.99,
  "description": "computadora portatil"
}
