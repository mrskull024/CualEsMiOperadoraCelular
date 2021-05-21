function knowOperatorViaAPI() {
    let phoneNumberCaptured = document.getElementById("telNumber").value;
    if (phoneNumberCaptured.length == 0) {
        alert("Erro al Consumir la API - No se pueden validar numeros de telefonos vacios >:|");
    }
    else {
        //Tome el API Mediante Scrapping al sitio de Xolo Nic, en caso de que nos bloqueen, consegui la siguiente
        //uri de repuesto, a diferencia que esta solo retorna Tigo y Claro, mientras que la de Xolo tambien
        //retorna Cootel, http://api.roderickzapata.com/operadora.php?number=81530072
        console.log(phoneNumberCaptured);
        let request = new XMLHttpRequest();
        let uriAPI = "https://www.xolo.com.ni:1000/XoloPortalAPI/api/operators/check/" + phoneNumberCaptured;
        console.log(uriAPI);
        request.open("GET", uriAPI);
        request.send();
        request.onload = () => {
            if (request.status === 200) {
                let myObj, x;
                myObj = JSON.parse(request.response);
                console.log(myObj);
                x = myObj.dato.nombreOperadora;
                if (x == "Claro") {
                    let img = document.getElementById("operatorText");
                    img.innerHTML = "<img src='resources/cl.gif' width=50px height=50px> " + x;
                }
                else if (x == "Tigo") {
                    let img = document.getElementById("operatorText");
                    img.innerHTML = "<img src='resources/tg.png' width=50px height=50px> " + x;
                }
                else {
                    let img = document.getElementById("operatorText");
                    img.innerHTML = "<img src='resources/cot.png' width=50px height=50px> " + x;
                }
            }
            else {
                console.log("Error al Consumir el Servicio")
            }
        }

    }
}