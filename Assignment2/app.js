var init_count = 0;
colorPicker=document.getElementsByClassName("picker")[0];
colorValue = colorPicker.style.backgroundColor;
console.log(colorValue);
colorPicker.addEventListener('oninput',()=>{
    colorValue = colorPicker.style.backgroundColor;
});
let textBox = document.getElementById("textQuery");
textBox.addEventListener('keypress',function(event){
    if (event.keyCode==13){
        addCard(textBox.value,colorValue);
        console.log(textBox.value);
        textBox.value ="";
    }
});
function addCard(text,color){

    var divCard = document.createElement('div');
    divCard.id=init_count;
    divCard.className="card";
    console.log(color);
    divCard.style.backgroundColor= document.getElementsByClassName("picker")[0].style.backgroundColor;
    var pTag = document.createElement('p');
    pTag.innerHTML = text;
    var icon = document.createElement('i');
    icon.className="material-icons deleteIcon";
    icon.innerHTML="delete";
    icon.onclick= function(){deleteCard(divCard.id)};
    divCard.appendChild(pTag);
    divCard.appendChild(icon);
    document.getElementsByTagName('body')[0].appendChild(divCard);
    init_count+=1;
}

function deleteCard(id){
    document.getElementById(id).parentNode.removeChild(document.getElementById(id));
}