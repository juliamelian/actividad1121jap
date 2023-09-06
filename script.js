// Primero, esperamos que el documento HTML se haya cargado por completo para ejecutar el script
document.addEventListener("DOMContentLoaded", () => {

    // Creamos una constante llamada form para traer el formulario
    const form = document.getElementById("formulario-registro");

    // Le agregamos un listener al formulario para ejecutar una función cuando se envíen los datos
    form.addEventListener("submit", async event => {

        // Agregamos un preventDefault para evitar que la página se recargue cuando se envíe el formulario 
        event.preventDefault();

        // Usamos FormData para crear un objeto que recopile los datos del formulario de registro
        const formData = new FormData(form);
        // Chequeamos con un console.log que haya funcionado, probamos accediendo al nombre
        console.log(formData.get("nombre"));
        // Chequeamos con un console.log cómo se ve el objeto FormData 
        console.log(formData);

        // Convertimos el objeto FormData en un objeto JavaScript regular
        const data = Object.fromEntries(formData);
        // Chequeamos con un console.log cómo se ve el objeto JavaScript 
        console.log(data);

        // Realizamos la solicitud Fetch a la URL proporcionada, ingresamos como argumento la URL y un objeto de opciones de configuración
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users', {
                // Dentro del objeto de opciones de configuración, ponemos el método que como no es el que viene por defecto (get), hay que especificarlo
                method: "POST",
                // Especificamos también el encabezado de la solicitud (información adicional sobre la misma)
                headers: {
                    // La información adicional que damos en este caso es sobre el tipo de contenido, se indica que se está enviando un json
                    'Content-Type': 'application/json'
                },
                // Especificamos que en el cuerpo de la solicitud, se envíe el objeto data pero convertido a un json a través de stringify
                body: JSON.stringify(data)
                // Aclaramos que cuando se reciba la respuesta, la queremos en json
            });
            const resData = await res.json();
            console.log(resData);
        } catch (error) {
            console.log(error);
        }
    });

    // try {
    //     const res = await fetch(
    //       'https://jsonplaceholder.typicode.com/users',
    //       {
    //         method: 'POST',
    //         body: formDatadata,
    //       },
    //     );

    //     const resData = await res.json();

    //     console.log(resData);
    //   } catch (err) {
    //     console.log(err.message);
    //   }
    // });

    //     // const nombre = document.getElementById("nombre").value;
    //     // const apellido = document.getElementById("apellido").value;
    //     // const nacimiento = document.getElementById("nacimiento").value;

    //     const data = {
    //         nombre,
    //         apellido,
    //         nacimiento,
    //     };

    //     const options = {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(update),
    //     };

    //     fetch("https://jsonplaceholder.typicode.com/users", options)
    //     then(data => {
    //         if (!data.ok) {
    //             throw Error(data.status);
    //         }
    //         return data.json();
    //     }).then(update => {
    //         console.log(update);
    //     })
})