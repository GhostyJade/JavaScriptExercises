console.log("YEY")

const ElementList = document.getElementById("ElementList")

//remove everything:
//ElementList.innerHTML = ""

const createNewElement = (tagName, content) => {
    const newElement = document.createElement(tagName)
    newElement.innerText = content
    return newElement
}

ElementList.appendChild(createNewElement("li", "Maow :3"))

const createTagGen= (tag) => {
    return (content) => {
        return createNewElement(tag,content)
    }
}

console.log(createTagGen("li"))
const createLi = createTagGen("li")

const ElementsToAdd = ["1st", "2nd", "3rd", "4th"]
ElementsToAdd.forEach(e => {
    ElementList.appendChild(createLi(e))
})

console.log([1,2,3].map(x => x*x))
console.log([1,2,1,0,,234,3.14,3].filter(x => x<2))

const test = "test value"

const a = {
    'test': 2,
    test2:3,
    test
}
console.log(a)

//const test2 = a.test2
//const test = a.test
const {test,test2} = a //destructuring
