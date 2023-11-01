
document.querySelector('#submit').addEventListener('click',()=>
{
    const userReview=document.querySelector('#userReview').value;
    // console.log(userReview);
    const licreate = document.createElement('li');
    licreate.innerText=userReview;
    // licreate.className='delete';

    // console.log(licreate.innerText);
    const addReview= document.querySelector('#reviewlist');
    addReview.appendChild(licreate);

})