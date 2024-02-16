
const list = document.getElementById("listname")

        async function fetchApi() {
            await fetch('https://jsonplaceholder.typicode.com/users')
                .then((response) => {
                    return response.json()
                })
                .then(response => {
                    console.log(response)
                    response.forEach(element => {
                        const li = document.createElement('li')
                        li.innerHTML = element.name
                        list.appendChild(li)
                    });
                })
                .catch((error) => {
                    console.log(error)
                })
        }