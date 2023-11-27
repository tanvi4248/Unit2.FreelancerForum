const names = ["Alice","Bob","Carol"];
const occupations = ["Writer","Teacher","Programmer"];
const prices = [30,50,70];
const maxFreelancer = 6;
const freelancers = [
    {
        name: "Alice",
        occupation: "Writer",
        price: 30,
    },
    {
        name: "Bob",
        occupation: "Teacher",
        price: 50,
    },
];
const addFreeIntervalId = setInterval(addFreelancer, 1000);
console.log(addFreeIntervalId);
render();

//Render names, occupation and price.
function render(){
    const f_name = document.querySelector(".names");
    const f_occ = document.querySelector(".occupation");
    const f_price = document.querySelector(".price");

    const nameElements = freelancers.map((freelancer) => {
        const element = document.createElement("div");
        element.innerHTML = freelancer.name;
        return element;
    })
    const occElements = freelancers.map((freelancer) => {
        const element = document.createElement("div");
        element.innerHTML = freelancer.occupation;
        return element;
    })
    const priceElements = freelancers.map((freelancer) => {
        const element = document.createElement("div");
        element.innerHTML = freelancer.price;
        return element;
    })
    f_name.replaceChildren(...nameElements);
    f_occ.replaceChildren(...occElements);
    f_price.replaceChildren(...priceElements);
}


function addFreelancer(){
    const name = names[Math.floor(Math.random() * names.length)];
    const occupation = occupations[Math.floor(Math.random() * occupations.length)];
    const price = prices[Math.floor(Math.random() * prices.length)];
    freelancers.push({ name, occupation,price });
    render();
    if (freelancers.length >= maxFreelancer) {
        clearInterval(addFreeIntervalId);
    }
    //count avg of price
    var arr = Object.values(freelancers);
    console.log(arr);
    let total = freelancers.reduce((acc,element) => {
        return acc = acc + element.price;
    },0)
    let avg = total / arr.length;
    const logElem = document.querySelector(".avg-price");
    logElem.innerHTML += `The average starting price is ${avg}.`;
    return avg;

}
