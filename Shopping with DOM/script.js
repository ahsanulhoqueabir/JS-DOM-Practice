var count =0;

document.querySelector('#lbtn').addEventListener('click',function()
{
    
    let productName= document.querySelector('#laptop h2').innerText;
    let array = Array.from(document.querySelectorAll('#laptop span'));
    let price = array[0].innerText;
    let quantity=array[1].innerText;
    let total = parseInt(price) * parseInt(quantity);


    // parentNodes ID
    // let x = event.target.parentElement.parentElement.parentElement.id;
    // console.log(x);

    displayData(productName,price,quantity,total);
    disablebtn('#lbtn');
});

// using Event object from browser
document.querySelector('#mbtn').addEventListener('click',(event)=>
{
    let Name = productName(event);
    let price = productPrice(event);
    let quantity = productQuantity(event);
    let total = parseInt(price) * parseInt(quantity);
    displayData(Name,price,quantity,total);
    disablebtn('#mbtn');
})

document.querySelector('#tbtn').addEventListener('click',(event)=>
{
    let Name = productName(event);
    let price = productPrice(event);
    let quantity = productQuantity(event);
    let total = parseInt(price) * parseInt(quantity);
    displayData(Name,price,quantity,total);
    disablebtn('#tbtn');
})
document.querySelector('#cbtn').addEventListener('click',(event)=>
{
    let Name = productName(event);
    let price = productPrice(event);
    let quantity = productQuantity(event);
    let total = parseInt(price) * parseInt(quantity);
    displayData(Name,price,quantity,total);
    disablebtn('#cbtn');
})

// last card
document.getElementById('libtn').addEventListener('click',function()
{
    const pName = document.getElementById('product').innerText;
    const pPrice = document.getElementById('first').value;
    const pq = document.getElementById('second').value;
    const total = parseInt(pPrice) * parseInt(pq);
    displayData(pName,pPrice,pq,total);
})




// input function 
function productName(event){
    let parent = event.target.parentNode.parentNode.children[0].innerText;
    return parent;
};

function productPrice(event){
    let parent = event.target.parentNode.parentNode.children[2].children[0].innerText;
    return parent;
};
function productQuantity(event){
    let parent = event.target.parentNode.parentNode.children[3].children[0].innerText;
    return parent;
};


// Display function 
function displayData(productName,price,quantity,total)
{
    count+=1;
    let tableBody= document.querySelector('#table-container');
    const tr = document.createElement('tr');
    tr.innerHTML=`
    <td> ${count} </td>
    <td> ${productName} </td>
    <td> ${price} </td>
    <td> ${quantity}</td>
    <td> ${total}</td>
    `;
    tableBody.appendChild(tr);
    document.querySelector('#total').innerText=count;
};
function disablebtn(id)
{
    document.querySelector(id).setAttribute('disabled',true);
}