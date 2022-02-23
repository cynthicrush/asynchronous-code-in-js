
let baseURL = 'http://numbersapi.com'

// 1. Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number. (Make sure you get back JSON by including the json query key, specific to this API. Details.

async function part1() {
    let response = await axios.get(`${baseURL}/27`)
    console.log(response.data)
}
part1()


// 2. Figure out how to get data on multiple numbers in a single request. Make that request and when you get the data back, put all of the number facts on the page.

let multiNumURL = `${baseURL}/1,2,3,4,5,6,7`
async function part2() {
    let response = await axios.get(multiNumURL)
    const ul = document.getElementById('multi-num-list')
    let values = Object.values(response.data)
    for (let i = 0; i < values.length; i++) {
        const li = document.createElement('li')
        let text = document.createTextNode(values[i])
        li.appendChild(text)
        ul.append(li)
    }
}
part2()


// 3. Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page. It’s okay if some of the facts are repeats.

const ul = document.getElementById('four-fav-list')

async function part3() {
    let facts = await Promise.all(Array.from({ length: 4 }, () => axios.get(`${baseURL}/27`)));
    console.log(facts)
    facts.forEach(data => {
        const li = document.createElement('li');
        li.append(data.data)
        ul.append(li)
    });
}
part3()
