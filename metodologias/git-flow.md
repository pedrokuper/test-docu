## **GIT FLOW**

### Lineamiento para commits
[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/#summary)

### Para reforzar gráficamente
[gitmoji](https://gitmoji.dev/)

### Extensión recomendada para VSCode
[Conventional Commits](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits)


El flujo de trabajo con git consta de tres ambientes: **main** (o producción), **development** (test o qa) y el **ambiente local**.

Se describe a continuación el flujo de trabajo:

1. **Creación de la rama:** Se crea una rama local a partir de la rama development utilizando un nombre descriptivo que indique la naturaleza de la tarea que se realizará (por ejemplo, `feature/nueva-funcionalidad` o `fix/arreglo-bug`). 
2. **Desarrollo y Pruebas Locales:** En esta rama local, se desarrolla la nueva feature o se corrige el error. Se hacen commits incrementales mientras se avanza en el desarrollo. Es importante realizar pruebas exhaustivas localmente para asegurarse de que la nueva funcionalidad o arreglo funciona como se espera y no compromete a la funcionalidad principal del producto y brinda retrocompatibilidad de ser necesaria.
3. **Commit y Actualización:** Una vez que la tarea está completa y todas las pruebas locales son exitosas, se realiza un commit final en la rama local.
4. **Sincronización con Development:** Antes de llevar los cambios al entorno de desarrollo (development), es importante asegurarse de que la rama local esté sincronizada con los últimos cambios en la rama development. Esto se logra realizando un  `git pull origin development` en la rama local.
5. **Resolución de Conflictos (si es necesario):** Si hay conflictos entre los cambios locales y los cambios en **`development`**, se deben resolver los conflictos antes de proceder. Se editan los archivos en conflicto, se hacen los cambios necesarios, se agregan al área de staging y se realiza un nuevo commit.
6. **Code Review:** Una vez que no hay conflictos o después de resolverlos, los cambios se crea un Pull Request y se asignan reviewers. Una vez que la revisión haya sido satisfactoria, se procede a mergear la feature/fix branch hacia development.
7. **Pruebas en Development:** En el entorno de desarrollo, se realizan pruebas adicionales para asegurarse de que los cambios integrados no causen problemas en conjunto con otras características.
8. **Merge a main (Producción):** Una vez que la feature o fix ha sido probada en **`development`** y ha pasado la revisión de código, se lleva a cabo un merge de **`development`** a la rama **`main.`**Este proceso puede incluir la aprobación de un responsable técnico o una revisión adicional.