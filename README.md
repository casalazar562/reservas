# 📌 Plataforma de Gestión de Reservas de Hoteles

## 📖 Descripción
Este proyecto es una plataforma de reservas de hoteles desarrollada con **Angular** en el frontend y basada en **mocks** para la gestión de datos.

## 🏗️ Arquitectura
El proyecto sigue una arquitectura modular con dos roles principales:
- **Agencia**: Gestiona hoteles y reservas.
- **Viajero**: Realiza búsquedas de hoteles y reservas.

### 📂 Estructura del Proyecto
```
📦 src/app
 ├── core/                     # Servicios y lógica central
 │   ├── services/             # Servicios mockeados
 │   ├── guards/               # Guards de autenticación y roles
 │
 ├── features/
 │   ├── travel-agency/        # Módulo para agencias
 │   │   ├── travel-agency-routing.module.ts
 │   │   └── travel-agency.module.ts
 │   │
 │   ├── traveler/             # Módulo para viajeros
 │   │   ├── traveler-routing.module.ts
 │   │   └── traveler.module.ts
 │
 │
 ├── app.routes.ts              # Rutas principales
 ├── app.component.ts           # Componente raíz
 └── app.module.ts              # Módulo principal
```

## 🔗 Rutas Principales


## 🚀 Instalación y Ejecución

### 1️⃣ Clonar el Repositorio
```bash
git chttps://github.com/casalazar562/reservas.git
cd  reservas
```

### 2️⃣ Instalar Dependencias
```bash
npm install
```

### 3️⃣ Iniciar el Servidor de Desarrollo
```bash
ng serve
```
Acceder a: [http://localhost:4200](http://localhost:4200)

## 🔑 Credenciales Mockeadas

### Agencia
- **Usuario:** agencia@test.com
- **Contraseña:** 123456

### Viajero
- **Usuario:** viajero@test.com
- **Contraseña:** 123456

## 📌 Notas Importantes
- La autenticación está basada en un servicio mockeado.
- Los datos de hoteles y reservas se manejan con mocks dentro de los servicios.
- Se usa **Angular Material** para la interfaz gráfica.
