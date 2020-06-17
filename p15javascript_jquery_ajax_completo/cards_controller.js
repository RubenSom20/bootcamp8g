let log = console.log

const printKodersCardsFromDb = () => {
    $.get("https://ajaxclass-1ca34.firebaseio.com/mentorsTeam/koders/.json",
        function (response) {
            log("prueba de función")
            $.each(response, (key, value) => {
                log('key ', key)
                log('value ', value)
                let { name, lastName, age, email, createdAt, bio } = value
                let card = `
            <div class="col-12 col-md-6 col-lg-3 mt-4">
            <div class="card rounded shadow">
                <img src="https://picsum.photos/200" class="card-img-top" alt="...">
                <div class="card-body">
                    <p class="card-text">Name: ${name} </p>
                    <p class="card-text">Last name ${lastName}</p>
                    <p class="card-text">Age: ${age}</p>
                    <p class="card-text">Email: ${email}</p>
                    <p class="card-text">Created at: ${createdAt}</p>
                    <p class="card-text">Bio: ${bio}</p>
                </div>
            </div>
        </div>
        `
                $(".cards-container").append(card)
            })
        });

}

printKodersCardsFromDb()