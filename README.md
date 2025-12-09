
📘 Full Stack Engineer – Prueba Técnica

📚 Documentación del Proyecto

Este proyecto combina un backend robusto con un frontend dinámico y prácticas de DevOps modernas, ofreciendo un flujo completo de desarrollo y despliegue. A continuación se detallan los componentes y su funcionamiento:

🔹 Backend

Spring Boot CRUD: API RESTful para manejar operaciones de Create, Read, Update y Delete.

Bases de datos:

PostgreSQL (RDS): Base de datos relacional para almacenamiento estructurado.

MongoDB Atlas: Base de datos NoSQL para datos más flexibles.

JWT Authentication: Gestión de usuarios y permisos con tokens seguros.

Docker: Contenedores para desarrollo local rápido y consistente.

Notas de uso:

Configurar variables de entorno para conexión a las bases de datos y claves JWT.

Para levantar el backend localmente: docker-compose up o ejecutar la aplicación directamente desde Spring Boot.

🔹 Frontend

React con 6 páginas y navegación completa mediante React Router.

JWT integrado: Autenticación y autorización de usuarios.

CRUD completo: Interacción directa con la API backend.

Responsive Design: Adaptable a dispositivos móviles y escritorio.

Animaciones CSS: Transiciones suaves para mejorar la experiencia del usuario.

Notas de uso:

Asegurarse de que el backend esté corriendo antes de iniciar el frontend.

Ejecutar con npm install y npm start.

Personalizar rutas o estilos según necesidad del proyecto.

🔹 DevOps

Terraform (IaC): Infraestructura reproducible en AWS.

AWS VPC: Red segura para la infraestructura.

AWS EC2: Servidores para desplegar la aplicación.

AWS RDS PostgreSQL: Base de datos relacional gestionada en la nube.

MongoDB Atlas: Base de datos NoSQL gestionada.

Notas de uso:

Revisar los archivos de Terraform antes de aplicar cambios en producción.

Configurar credenciales AWS y MongoDB Atlas en variables de entorno.

⚠️ Consideraciones

El proyecto está funcional, pero puede requerir ajustes dependiendo del entorno y la infraestructura.

Documentación adicional sobre endpoints, estructuras de datos y scripts de Terraform está en desarrollo.

Se recomienda revisar las variables de configuración y permisos antes del despliegue en producción.

🧠 Preguntas Teóricas
1. Dependency Injection (DI) en Spring

La inyección de dependencias permite que los objetos reciban lo que necesitan desde afuera, en lugar de crearlo ellos mismos, reduciendo el acoplamiento. Esto hace que el código sea más fácil de probar, extender y mantener, especialmente en aplicaciones grandes.

2. Diferencia entre Spring MVC y Spring Boot

Spring MVC es un framework web tradicional que requiere configuración manual y estructura explícita. Spring Boot simplifica todo con autoconfiguración, servidor embebido y plantillas listas para microservicios, acelerando el desarrollo enormemente.

3. MongoDB vs PostgreSQL (cuándo usar cada uno)

MongoDB: base de datos NoSQL orientada a documentos, flexible para esquemas cambiantes y excelente para escalar horizontalmente. Ideal cuando los datos no siguen una estructura rígida.
PostgreSQL: base relacional con transacciones ACID, muy consistente y robusta para integridad referencial y consultas complejas. Ideal cuando necesitas relaciones fuertes y exactitud transaccional.

Cuándo elegir:

MongoDB → velocidad y flexibilidad en estructuras variables.

PostgreSQL → integridad, consistencia fuerte y modelos relacionales complejos.

4. EC2 vs ECS en AWS

EC2 te da un servidor virtual donde administras el sistema operativo, actualizaciones y despliegues manualmente. ECS es una plataforma de orquestación de contenedores que automatiza escalado, despliegue y administración, siendo más moderno y eficiente para microservicios.

5. Alta disponibilidad en AWS

La alta disponibilidad se logra distribuyendo la aplicación entre múltiples zonas (Multi-AZ), usando balanceadores de carga, Auto Scaling y RDS Multi-AZ para bases de datos. Esto asegura que si una zona falla, la aplicación continúa funcionando sin interrupciones.

6. ¿Qué son los microservicios y cómo los potencia Kubernetes?

Los microservicios son servicios pequeños e independientes, desplegables por separado, que permiten mayor escalabilidad y velocidad de desarrollo. Kubernetes los potencia gestionando el escalado automático, auto-reparación, networking, distribución de carga y aislamiento por contenedores.

👨‍💻 Autor

Marcos Vargas
