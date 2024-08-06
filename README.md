# apiRestTested
Api rest experimental creada para la implementacion de testing con jest y supertest

## Para inicializar el proyecto:
Es indispensable para el buen funcionamiento de la api declarar las variables de entorno `.env`, `.env.development`, y `.env.test` en la raíz del proyecto (al mismo nivel del `package.json`). Debe seguirse el modelo indicado en la variable `.env.example` dado que la api cuenta con inicializacion por medio de `NODE_ENV` para separar las bases de datos de produccion, desarrollo y testing, por lo cual tambien es necesario declarar por lo menos dos de las tres bases de datos: desarrollo y test. 
Se implementó de esta manera para evitar la perdida accidental de datos durante el proceso de test o de desarrollo. 

Esta es una api REST en la cual se implementaron las siguientes tecnologias:
- express.js
- node-cache
- morgan (logger)
- bcrypt
- jsonwebtoken
- sequelize
- postgres

Para el test se implementó:
- jest
- supertest
- babel (solo para test)

