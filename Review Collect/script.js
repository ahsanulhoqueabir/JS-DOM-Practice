
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
    document.querySelector('#userReview').value="";
})

// By clicking enter button
var input = document.querySelector('#userReview');

input.addEventListener('keyup',function(event)
{
    if(event.keyCode===13)
    {
        event.preventDefault();
        const userReview=document.querySelector('#userReview').value;
        // console.log(userReview);
        const licreate = document.createElement('li');
        licreate.innerText=userReview;
        // licreate.className='delete';
        
        // console.log(licreate.innerText);
        const addReview= document.querySelector('#reviewlist');
        addReview.appendChild(licreate);
        document.querySelector('#userReview').value="";
    }
})