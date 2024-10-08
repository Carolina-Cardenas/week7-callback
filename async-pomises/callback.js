function flipCoin (){
    return new Promise((resolve, reject) => {
        let result = math.random();
        if(result >0.5) {
           resolve("You Won!");
         } else{
            reject("You Lost!")
         }
    });
}


flipCoin()
.then(message => console.log(message))
.catch(error => console.log(error));


function fetchAdvice(){
fetch('https://api.adviceslip.com/advice')
.then(response => response.json())
.then(data =>{
    console.log("advice",data.slipe.advice)
})
.catch( error =>{
    console.log("There was an error fetching the advice: ", error);
})
}

fetchAdvice();

function flipCoinAndFetchAdvice (){
    flipCoin()
    .then(message =>{
        console.log(message);
        return fetch('https://api.adviceslip.com/advice');
    })
    .then(response => response.json())
    .data( =>{
        console.log("Advice: ", data.slip.advice);
    })
    .cath(error =>{
        console.log(error);
    });
}

flipCoinAndFetchAdvice();