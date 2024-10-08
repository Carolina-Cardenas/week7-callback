// function flipCoin (){
//     return new Promise((resolve, reject) => {
//         let result = Math.random();
//         if(result >0.5) {
//            resolve("You Won!");
//          } else{
//             reject("You Lost!")
//          }
//     });
// }


// flipCoin()
// .then(message => console.log(message))
// .catch(error => console.log(error));




// function fetchAdvice(){
// fetch('https://api.adviceslip.com/advice')
// .then(response => response.json())
// .then(data =>{
//     console.log("advice",data.slip.advice)
// })
// .catch( error =>{
//     console.log("There was an error fetching the advice: ", error);
// })
// }

// fetchAdvice();

// function flipCoinAndFetchAdvice (){
//     flipCoin()
//     .then(message =>{
//         console.log(message);
//         return fetch('https://api.adviceslip.com/advice');
//     })
//     .then(response => response.json())
//     .then(data  =>{
//         console.log("Advice: ", data.slip.advice);
//     })
//     .catch(error =>{
//         console.log(error);
//     });
// }

// flipCoinAndFetchAdvice();


async function flipCoin() {
    try {
        let result = Math.random();
        if (result > 0.5) {
            return "You Won!";
        } else {
            throw "You Lost!";
        }
    } catch (error) {
        throw error;
    }
}

const fetchAdvice = async () => {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        console.log("Advice: ", data.slip.advice);
    } catch (error) {
        console.log("There was an error fetching the advice: ", error);
    }
};

fetchAdvice();

const flipCoinAndFetchAdvice = async () => {
    try {
        const result = await flipCoin();
        console.log(result);
        
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
   
        
    } catch (error) {
       
        console.log(error);
    }
};

flipCoinAndFetchAdvice();
