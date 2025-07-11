# JWT Authentication Example

Una aplicación NestJS que implementa autenticación JWT con credenciales maestras desde variables de entorno.

## Descripción

Esta aplicación proporciona un endpoint de autenticación que valida credenciales contra un usuario y contraseña maestros configurados en el archivo `.env`. Si las credenciales son correctas, devuelve un token JWT.

## Configuración

1. Instalar dependencias:
```bash
npm install
```

2. Configurar variables de entorno:
Crear un archivo `.env` en la raíz del proyecto con:
```env
ADMIN_USERNAME=admin
ADMIN_PASSWORD=master123
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRES_IN=1h
```

## Uso

### Iniciar la aplicación

```bash
# Modo desarrollo
npm run start:dev

# Modo producción
npm run start:prod
```

### Endpoint de autenticación

**POST** `/auth/login`

**Request Body:**
```json
{
  "username": "admin",
  "password": "master123"
}
```

**Response exitosa (200):**
```json
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "username": "admin"
  }
}
```

**Response con credenciales inválidas (401):**
```json
{
  "message": "Invalid credentials",
  "error": "Unauthorized",
  "statusCode": 401
}
```

### Ejemplo con cURL

```bash
# Credenciales correctas
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "admin",
    "password": "master123"
  }'

# Credenciales incorrectas
curl -X POST http://localhost:3000/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "username": "wrong",
    "password": "wrong"
  }'
```

## Estructura del Proyecto

```
src/
├── auth/
│   ├── auth.controller.ts    # Controlador de autenticación
│   ├── auth.service.ts       # Lógica de autenticación y JWT
│   ├── auth.module.ts        # Módulo de autenticación
│   └── dto/
│       └── create-auth.dto.ts # DTO para validación de login
├── app.module.ts             # Módulo principal
└── main.ts                   # Punto de entrada
```

## Características

- ✅ Validación de credenciales desde variables de entorno
- ✅ Generación de tokens JWT
- ✅ Validación de entrada con class-validator
- ✅ Manejo de errores con códigos HTTP apropiados
- ✅ Configuración de expiración de tokens
- ✅ Estructura modular de NestJS

## Tecnologías Utilizadas

- [NestJS](https://nestjs.com/) - Framework de Node.js
- [JWT](https://jwt.io/) - Tokens de autenticación
- [class-validator](https://github.com/typestack/class-validator) - Validación de DTOs
- [TypeScript](https://www.typescriptlang.org/) - Lenguaje tipado
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Run tests

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Deployment

When you're ready to deploy your NestJS application to production, there are some key steps you can take to ensure it runs as efficiently as possible. Check out the [deployment documentation](https://docs.nestjs.com/deployment) for more information.

If you are looking for a cloud-based platform to deploy your NestJS application, check out [Mau](https://mau.nestjs.com), our official platform for deploying NestJS applications on AWS. Mau makes deployment straightforward and fast, requiring just a few simple steps:

```bash
$ npm install -g @nestjs/mau
$ mau deploy
```

With Mau, you can deploy your application in just a few clicks, allowing you to focus on building features rather than managing infrastructure.

## Resources

Check out a few resources that may come in handy when working with NestJS:

- Visit the [NestJS Documentation](https://docs.nestjs.com) to learn more about the framework.
- For questions and support, please visit our [Discord channel](https://discord.gg/G7Qnnhy).
- To dive deeper and get more hands-on experience, check out our official video [courses](https://courses.nestjs.com/).
- Deploy your application to AWS with the help of [NestJS Mau](https://mau.nestjs.com) in just a few clicks.
- Visualize your application graph and interact with the NestJS application in real-time using [NestJS Devtools](https://devtools.nestjs.com).
- Need help with your project (part-time to full-time)? Check out our official [enterprise support](https://enterprise.nestjs.com).
- To stay in the loop and get updates, follow us on [X](https://x.com/nestframework) and [LinkedIn](https://linkedin.com/company/nestjs).
- Looking for a job, or have a job to offer? Check out our official [Jobs board](https://jobs.nestjs.com).

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://twitter.com/kammysliwiec)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](https://github.com/nestjs/nest/blob/master/LICENSE).
