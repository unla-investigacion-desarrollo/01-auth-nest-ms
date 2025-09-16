# 01-auth-nest-ms
Este microservicio provee un punto central de autenticación y autorización basada en JWT, garantizando seguridad, mantenibilidad y escalabilidad dentro de una arquitectura basada en microservicios.

## Endpoints

### Crear usuario

**POST** `/user`

Crea un nuevo usuario en la base de datos.

#### Body (JSON)
```json
{
	"name": "Nombre del usuario",
	"email": "correo@ejemplo.com",
	"password": "contraseña123"
}
```

- `name` (string, requerido): Nombre del usuario.
- `email` (string, requerido, formato email): Correo electrónico único.
- `password` (string, requerido, mínimo 6 caracteres): Contraseña del usuario.

#### Respuesta exitosa (201)
```json
{
	"_id": "id_generado",
	"name": "Nombre del usuario",
	"email": "correo@ejemplo.com",
	"password": "hash_bcrypt",
	"__v": 0
}
```

#### Validaciones
- El email debe ser único y válido.
- El password debe tener al menos 6 caracteres.
- Todos los campos son obligatorios.

#### Notas
- El password se almacena hasheado con bcrypt.
- Si algún campo no cumple las validaciones, se retorna un error 400 con detalles.