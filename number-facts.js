let baseURL = 'http://numbersapi.com'


// 1. Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number. (Make sure you get back JSON by including the json query key, specific to this API. Details.

let myFavNumFactURL = `${baseURL}/27`
let myFavNumFactText = axios.get(myFavNumFactURL)

myFavNumFactText
.then(text => console.log(text.data))
.catch(error => console.log(`Error: ${error}`));


// 2. Figure out how to get data on multiple numbers in a single request. Make that request and when you get the data back, put all of the number facts on the page.

let multiNumURL = `${baseURL}/1,2,3,4,5,6,7`
let multiNumText = axios.get(multiNumURL)

multiNumText
.then(text => {
    const ul = document.getElementById('multi-num-list')
    let values = Object.values(text.data)

    for (let i = 0; i < values.length; i++) {
        const li = document.createElement('li')
        let text = document.createTextNode(values[i])
        li.appendChild(text)
        ul.append(li)
    }
})
.catch(error => console.log(`Error: ${error}`));



// 3. Use the API to get 4 facts on your favorite number. Once you have them all, put them on the page. It’s okay if some of the facts are repeats.

const ul = document.getElementById('four-fav-list')

axios
.get(`${baseURL}/27`)
.then(fact1 => {
    const li = document.createElement('li');

    li.append(fact1.data);
    ul.append(li);
    return axios.get(`${baseURL}/27`);
})
.then(fact2 => {
    const li = document.createElement('li');

    li.append(fact2.data);
    ul.append(li);
    return axios.get(`${baseURL}/27`);
})
.then(fact3 => {
    const li = document.createElement('li');

    li.append(fact3.data);
    ul.append(li);
    return axios.get(`${baseURL}/27`);
})
.then(fact4 => {
    const li = document.createElement('li');

    li.append(fact4.data);
    ul.append(li);
})
.catch(error => console.log(`Error: ${error}`));

