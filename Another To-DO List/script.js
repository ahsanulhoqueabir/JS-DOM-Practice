let count =0;

document.querySelector('#submit').addEventListener('click',()=>
{
    count+=1;
    const input = document.querySelector('#input').value;

    const parent = document.querySelector('#content');

    const tr= document.createElement("tr");
    tr.innerHTML=`
    <td> ${count} </td>
    <td> ${input} </td>
    <td>  
    <button class='done'> Done </button> 
    <button class='delete'> Delete </button> 
    </td>

    `;
    parent.appendChild(tr);
    document.querySelector('#input').value='';
    
    // Delete button
    const elements= document.querySelectorAll('.delete');
    
    for(const value of elements)
    {
        value.addEventListener('click',function(event)
        {
        //    event.target.parentNode.parentNode.style.display="none";
            let x = event.target.parentNode.parentNode;
            x.innerText="";
        });
    }

    // Done button 
    const done= document.querySelectorAll('.done');
    
    for(const value of done)
    {
        value.addEventListener('click',function(event)
        {
           let x= event.target.parentNode.parentNode;
           x.style.textDecoration="line-through";
           x.style.backgroundColor="green";
        });
    }
});

 document.querySelector('#clear').addEventListener('click',()=>
 {
    const info=  document.querySelector('#content');
    info.innerText="";
    count=0;
 })

