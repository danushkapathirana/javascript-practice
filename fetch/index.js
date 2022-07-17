const URL = "https://jsonplaceholder.typicode.com/posts"

function fetchPosts() {
    const successCallback = (response) => {
        console.log(response)
        displayData(response)
    }

    const errorCallback = (error) => {
        console.log(error)
    }

    fetch(URL)
    .then((res) => res.json())
    .then(successCallback)
    .then(errorCallback)
    .finally(() => {
        console.log("result is completed")
    })
}

const createElement = tagName => document.createElement(tagName)

const displayDataReference = document.getElementById("displayData")

function displayData(dataList) {
    dataList.forEach((dataObj) => {
        const userId = dataObj.userId
        const id = dataObj.id
        const title = dataObj.title
        const body = dataObj.body

        const list = [userId, id, title, body]

        const card = createElement("div")
        const ul = createElement("ul")
        card.classList.add("card") //adding a class to every card

        list.forEach((data) => {
            const li = createElement("li")
            li.innerText = data
            ul.appendChild(li)
        })
        card.appendChild(ul)

        displayDataReference.append(card)
    });
}
