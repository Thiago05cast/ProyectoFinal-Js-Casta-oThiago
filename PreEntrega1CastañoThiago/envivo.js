
let liga =[
];




let apikey = "4a0bd46881bd78d625f51dc54fc1ff06f3bb7d113be76e062305534a4ff21799";
fetch(`https://apiv2.allsportsapi.com/football/?met=Leagues&APIkey=${apikey}`)
    .then( response => response.json())
    .then( dato => console.log("datos de la liga Argentina De Futbol" , dato.result[62]))
    


let data = {
    league_key: 44,
    league_name: 'Liga Profesional Argentina',
    country_key: 14,
    country_name: 'Argentina',
    league_logo: 'https://www.ligaprofesional.ar/wp-content/uploads/2020/11/LPF_Ok.jpg',
    
    }
    





    let main = document.getElementById("mainVivo");

    main.innerHTML = "";


    let fila = document.createElement("tr");
    fila.innerHTML = `<td><h5>|Pais:</h5></td>
                    <td><h6>${data.country_name}</h6></td>
                    <td><h5>|competición:</h5></td>
                    <td><h6>${data.league_name}</h6></td>
                    <td><img src="${data.league_logo}" alt=""></td>`
    main.append(fila);