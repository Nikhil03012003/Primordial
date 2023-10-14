

const myNum = document.querySelectorAll(selectors : '.count')

let speed = 200;

myNum.forEach( callbackfn : (myCount : Element) =>{
    // console.log(mycount.innerText)

    let target_count = myCount.innerText;
    console.log("target_count")

    const updateNumber = () =>{
        myCount.innerText = 100; 
    }
});


