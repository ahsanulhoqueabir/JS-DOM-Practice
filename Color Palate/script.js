document.querySelector('#btn').addEventListener('click',(e)=>
{
    // console.log(e.target.parentNode.parentNode);
    let parent = e.target.parentNode.parentNode.children;
    let allCircle=document.querySelectorAll('.Color');
    let hexaCode= document.querySelectorAll('.hexa');
    let rgbaCode = document.querySelectorAll('.rgb');
    for(let i=0;i<4;i++)
    {
        let x = parent[i];
        let color= randomColor();
        x.style.backgroundColor = color ;
        allCircle[i].style.backgroundColor=color;
        hexaCode[i].innerText=color;
        hexaCode[i].style.color=color;
        rgbaCode[i].innerText=hexaTorgba(color);
        rgbaCode[i].style.color=hexaTorgba(color);

    }
    document.body.style.backgroundColor=randomColor();
});



// Important function 
function randomColor()
{
    // hexaCharacter = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    hexaCharacter = ['A','B',1,'D',6,'E','F'];
    function getC(x)
    {
        return hexaCharacter[x];
    }
    let code = '#';
    for(let i=0;i<6;i++){
        let position= Math.floor(Math.random()*(hexaCharacter.length));
        code+=getC(position);
    } 
    return code;
}

function hexaTorgba(hex,alpha)
{
    const red = parseInt(hex.slice(1,3),16);
    const green = parseInt(hex.slice(3,5),16);
    const blue = parseInt(hex.slice(5,7),16);

    if(alpha)
    {
        return `rgba(${red},${green},${blue},${alpha})`;
    }
    return `rgba(${red},${green},${blue})`;
}

