const usersList = document.getElementById("usersList")

const btnFetchUsers = document.getElementById("btnFetchUsers")

let users = []

const addToUsersList = (user) => {
    const li = document.createElement("li")
    li.innerHTML = user
    usersList.appendChild(li)
}

const UpdateList = (filter) => {
    usersList.innerHTML = ""
    let toDisplay
    if (filter === "")
        toDisplay = users
    else
        toDisplay = users.filter(user => user.includes(filter))
    toDisplay.forEach(user => addToUsersList(user))
}

// addToUsersList("Maow")
const getData = () => 
    {
        fetch("https://provajson--professorandrea.repl.co/api/users")
            .then(response => response.json())
            .then(body => {
                const {people} = body
                //people.forEach(person => {
                    //    addToUsersList(person)
                    //});
                    
                    people.forEach(user => users.push(user));
                    //people.map(addToUsersList)
                })
                .then(()=>UpdateList(""))
    }
btnFetchUsers.onclick = getData;

const filterText = document.getElementById("filterText")
filterText.oninput = (e) => {
    const toMatch = e.target.value
    UpdateList(toMatch)
}