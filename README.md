
📘 Full Stack Engineer – Prueba Técnica

Documentación del proyecto y respuestas teóricas solicitadas.

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

🛠 Instrucciones de uso del proyecto

(Aquí puedes poner cómo correr tu frontend y backend si quieres — dímelo y te lo preparo.)

🚀 Despliegue en AWS

(Si quieres, también te preparo esta sección con EC2, RDS y MongoDB Atlas.)

👨‍💻 Autor

Marcos Vargas