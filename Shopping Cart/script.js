document.querySelector('#lbtn').addEventListener('click',()=>
{
    // const quantity = document.querySelector('#linput').value;
    
    const cost= getInput('#linput') * 79000;
    // console.log(cost);
    // document.querySelector('#laptop').innerText=cost;
    setinner('#laptop',cost);
    total();
});
document.querySelector('#kbtn').addEventListener('click',()=>
{
    const cost= getInput('#kinput') * 1600;
    setinner('#keyboard',cost);
    total();
});
document.querySelector('#sbtn').addEventListener('click',()=>
{
    const cost= getInput('#sinput') * 3600;
    setinner('#speaker',cost);
    total();
});

document.querySelector('#apply').addEventListener('click',()=>
{
    let input = document.querySelector('#discount').value;
    if(input == 'ahsan')
    {
        const total = document.querySelector('#total').innerText;
        const cost = total - (total * 0.1);
        const save = total*0.1;
        document.querySelector('#totalCost').innerText=cost;
        document.querySelector('#promo').innerText=`
        You have saved ${save} Taka.
        `;
        let balance = getValue('#Available');
        balance -= cost;
        setinner('#Available',balance);
    }
    else
    {
        alert('Wrong Promo Code! Try with Valid One');
    }
});



// Useful function 
function setinner(id,value)
{
    document.querySelector(id).innerText=value;   
}

function getInput(id)
{
    const value=document.querySelector(id).value;
    // console.log(typeof (value));
    return parseInt(value);
}

function getValue(id)
{
    const x= document.querySelector(id).innerText;
    return parseInt(x);
};

function total()
{
    const sum=getValue('#laptop')+getValue('#keyboard')+getValue('#speaker');
    document.querySelector('#total').innerText=sum;
};