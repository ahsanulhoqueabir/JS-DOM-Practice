// A simple Plus-Minus Counter

let value= document.querySelector("#counter").innerText;
// console.log(value);
document.getElementById('plus').addEventListener('click',()=>
{
    value+=1;
    document.querySelector("#counter").innerText=value;
    document.querySelector("#counter").style.color='green';
});
document.getElementById('minus').addEventListener('click',()=>
{
    value-=1;
    if(value==-1)
    {
        value++;
        stop();
        alert("Be positive!");
    }
    else
    {
        document.querySelector("#counter").innerText=value;
        document.querySelector("#counter").style.color='red';
    }    
});

// A simple Multiply and Division Counter 
let md= document.querySelector("#md").innerText;
// console.log(value);
document.getElementById('multiply').addEventListener('click',()=>
{
    md*=2;
    document.querySelector("#md").innerText=md;
    document.querySelector("#md").style.color='green';
});
document.getElementById('division').addEventListener('click',()=>
{
    md/=2;
    // if(value==-1)
    // {
    //     value++;
    //     stop();
    //     alert("Be positive!");
    // }
    // else
    // {
        document.querySelector("#md").innerText=md;
        document.querySelector("#md").style.color='red';
    // }    
});