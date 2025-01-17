const userApi = 'http://localhost:3000/users'


function submitData(name, email) {
    return fetch(userApi, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            name,
            email
        })
    }).then(function(response){
        return response.json()
    }).then(function(data){
        document.body.innerHTML = data["id"]
    }).catch(function(error){
        document.body.innerHTML = error.message
    })
}
submitData();
