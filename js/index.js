document.addEventListener("DOMContentLoaded", function () {
    fetch("https://api.escuelajs.co/api/v1/users") 
        .then(response => response.json())
        .then(data => {
           // data.sort((a, b) => a.id - b.id);
 
            // Ordenamos los usuarios por ID
            //uniqueUsers.sort((a, b) => a.id - b.id);


            console.log(`Registros obtenidos de la API: ${data.length}`, data); // Mostrar cuántos usuarios devuelve

            // Filtrar usuarios únicos basados en el ID
            const uniqueUsers = [];
            const userIds = new Set();

            data.forEach(user => {
                if (!userIds.has(user.id)) {
                    userIds.add(user.id);
                    uniqueUsers.push(user);
                }
            });

            console.log(`Usuarios únicos después del filtrado: ${uniqueUsers.length}`, uniqueUsers);

            const userTable = document.getElementById("userTable");
            data.forEach(user => {
                const row = `<tr>
                    <td>${user.email}</td>
                    <td>${user.password}</td>
                    <td>${user.name}</td>
                    <td><img src="${user.avatar}" alt="Foto de ${user.name}" class="rounded-circle" width="80"></td>
                </tr>`;
                userTable.innerHTML += row;
            });
          
        })
        .catch(error => console.error("Error al obtener los usuarios:", error));
});
