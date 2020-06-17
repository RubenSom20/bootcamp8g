/*
//https://ajaxclass-1ca34.firebaseio.com/mentorsTeam/.json
var kodersToAdd = []
/*[
    {
        koderKey:"asdf",
        name:"asdaaaa",
        age:30
    }
]*/
var kodersToDelete = []
/*[
    "asdf",
    "bacadada"
]
*/
const getFormData = () => {
    let koderObject = {}
    $('input').each(function (index) {
        let objectKey = $(this).data("points-to");
        let value = $(this).val();
        koderObject[objectKey] = value;
    })
    kodersToAdd.push(koderObject)
    console.log(koderObject)
    console.log(kodersToAdd)
    printTableRows(kodersToAdd)
}
const printTableRows = (dataToPrint) => {
    $("#koders-table").find("tbody").empty();
    dataToPrint.forEach( koder => {
        let { name, lastName, age, email } = koder
        $("#koders-table").find("tbody").append(`
            <tr>
                <td class="firstName" data-name="${name}" >${name}</td>
                <td class="lastName" data-last="${lastName}">${lastName}</td>
                <td class="age">${age}</td>
                <td class="email">${email}</td>
                <td class="delete">
                    <svg class="bi bi-x text-danger" width="3em" height="3em" viewBox="0 0 16 16"
                        fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z" />
                        <path fill-rule="evenodd"
                            d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z" />
                    </svg>
                </td>
            </tr>
        `)
    })
    $(".delete").click(deleteTableRow)
}
const saveKoder = ( koderObject ) => {
    let url = "";
    let method = "";
    koderObject.key 
    ? (
        url = `https://ajaxclass-1ca34.firebaseio.com/mentorsTeam/koders/${koderObject.key}.json`,
        method = "PATCH"
    )       
    : (
        url = `https://ajaxclass-1ca34.firebaseio.com/mentorsTeam/koders/.json`,
        method = "POST"
    )
    $.ajax({
        url: url,
        method:method,
        data: JSON.stringify(koderObject),
        success: (response)=> {
            console.log(response);
        }
    });
}
const getKodersFromDb = () => {
    $.get("https://ajaxclass-1ca34.firebaseio.com/mentorsTeam/koders/.json", 
    function( response ) {
        $.each( response, (key, value) => {
            console.log('key ', key)
            console.log('value ', value)
            kodersToAdd.push({...value, key});
            let { name, lastName, age, email } = value
            $("#koders-table").find("tbody").append(`
                <tr data-koder-key='${key}'>
                    <td class="firstName" data-name="${name}" >${name}</td>
                    <td class="lastName" data-last="${lastName}">${lastName}</td>
                    <td class="age">${age}</td>
                    <td class="email">${email}</td>
                    <td class="delete">
                        <svg class="bi bi-x text-danger" width="3em" height="3em" viewBox="0 0 16 16"
                            fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z" />
                            <path fill-rule="evenodd"
                                d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z" />
                        </svg>
                    </td>
                </tr>
            `)
        })
        $(".delete").click(deleteTableRow)
    });
}
const deleteTableRow = (event) => {
    let selectedRow = $(event.target);
    let koderKey = $(event.target).closest("tr").data('koder-key');
    koderKey ? kodersToDelete.push(koderKey) : null;
    console.log(kodersToDelete)
    let koderIndex = kodersToAdd.findIndex( (koder) => koder.key === koderKey) ;
    console.log(koderIndex)
    kodersToAdd.splice(koderIndex, 1)
    console.log(kodersToAdd)
    $(event.target).closest("tr").remove();
}
const deleteKoder = ( koderKey ) => {
    $.ajax({
        url: `https://ajaxclass-1ca34.firebaseio.com/mentorsTeam/koders/${koderKey}.json`,
        method:'DELETE',
        success: (response)=> {
            console.log(response);
        }
    });
}
$("#saveData").click( () => {
    kodersToAdd.forEach( koder => {
        saveKoder( koder )
    })
    kodersToDelete.forEach( koder => {
        deleteKoder( koder )
    })
})
$("#submit").click(getFormData)
getKodersFromDb()
*/

const getData = (event) =>{
    event.preventDefault()
    let koderName = $("#iName").val()
    let koderAddress = $("#iAddress").val()
    let koderPhone = $("#iPhone").val()
    let koderObject = {koderName, koderAddress, koderPhone}
    console.log(koderObject)

    addDataToBD(koderObject)
}



//POST
const addDataToBD = (newKoder) => {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        console.log(this.readyState)
        console.log(this.status)
        if (this.readyState == 4 && this.status == 200){
            console.log(this.responseText)
        }
    }
    xhttp.open("POST", "https://ajaxclass-1ca34.firebaseio.com/2/koders.json", true)
    xhttp.send(JSON.stringify(newKoder))
}



const printUserData = (arrayData) => {
    const [name,address,phone] = arrayData
    console.log(name)
    console.log(address)
    console.log(phone)
    $("#users-table").append(`
    <tr>
    <th scope="col">${name}</th>
    <th scope="col">${address}</th>
    <th scope="col">${phone}</th>
    <th scope="col">
    <div class="btn btn-danger btn-sm delete-btn"> Eliminar</div>
    </th>
    </tr>
    `)
}
$("#buttonlist").click(getData)





//GET
const getKoders = () => {
    console.log("trayendo Koders de BD")
    let xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function (){
        console.log(this.readyState)
        console.log(this.status)
        if (this.readyState == 4 && this.status == 200){
            let response = JSON.parse(this.responseText)
            console.log(response)
            document.getElementById("users-table").innerHTML = ""
            for (let koder in response){
                let actualData = document.getElementById("users-table").innerHTML;
                let newKoders = `
                    <tr>
                    <th scope="col">${koder.koderName}</th>
                    <th scope="col">${koder.koderAddress}</th>
                    <th scope="col">${koder.koderObject}</th>
                    <th scope="col">
                    <div class="btn btn-danger btn-sm delete-btn"> Eliminar</div>
                    </th>
                    </tr>
                    `
                document.getElementById("users-table").innerHTML = newKoders + actualData
            }
        }
    }
    xhttp.open("GET", "https://ajaxclass-1ca34.firebaseio.com/2/koders.json", true)
    xhttp.send()
}

var submitButton = document.getElementById('buttonlist')
submitButton.addEventListener('click', getData)


//DELETE
const deleteKoder = (koderId) => {
    console.log("delete koder")
    let xhttp = new XMLHttpRequest()
    xhttp.onreadystatechange = function (){
        if (this.readyState == 4 && this.status == 200){
            let response = JSON.parse(this.responseText)
            console.log(response)
        }
    }
    xhttp.open("DELETE", `https://ajaxclass-1ca34.firebaseio.com/2/koders/${koderId}.json`, true)
    xhttp.send()
}



