// https://provajson--professorandrea.repl.co/emoji.json

const emojiTableContainer = document.getElementById("emojiTableContainer")
const btnFetchData = document.getElementById("btnFetchData")
const emojiCategory = document.getElementById("emojiCategory")
const emojiName = document.getElementById("emojiName")

let emoticons = []

const createTableRow = (name, category, code, char) => {
    const row = document.createElement("tr")
    const cells = [
        createCellElementWithAttributes("Char", char),
        createCellElementWithAttributes("Name", name),
        createCellElementWithAttributes("Category", category),
        createCellElementWithAttributes("Code", code)
    ]
    cells.forEach(e => row.appendChild(e))
    emojiTableContainer.appendChild(row)
}

const createCellElementWithAttributes = (name, value) => {
    const element = document.createElement("td")
    element.setAttribute("data-label", name)
    element.innerHTML=value
    return element
}

const filterEmoticons = (name, category) => {
    emojiTableContainer.innerHTML = ""
    let toDisplay
    if(name === "" && category === ""){
        toDisplay = emoticons
    } else {
        toDisplay=combineFilters(name, category)
    }
    toDisplay.forEach(e => createRow(e))
}

const createRow = (e) => {
    createTableRow(e.name, e.category, e.codes, e.char)
}

const getEmojis = () => {
    fetch("emoji.json")/*("https://provajson--professorandrea.repl.co/emoji.json")*/
        .then(response => response.json())
        .then(body => {
            body.forEach(e=>emoticons.push(e))
        }).then(() => filterEmoticons("", ""))
}
btnFetchData.onclick = getEmojis

emojiCategory.oninput = (e) => {
    filterEmoticons(e.target.value, emojiName.value)
}

emojiName.oninput = (e) => {
    filterEmoticons(emojiCategory.value, e.target.value)
}

const combineFilters = (category, name) => {
    let data = []
    emoticons.forEach(e => {
        if(e.category.includes(category) && e.name.includes(name)) data.push(e)
    })
    return data
}
