var inputTemp = document.getElementById('input-temp');
var output = document.getElementById('now-temp');
inputTemp.addEventListener('change',function(){
    output.innerHTML = inputTemp.value;
})

var before = document.getElementById('before-content');
var buttons = document.getElementById('buttons');
var under = document.getElementById('under');
before.addEventListener('click',function(){
    buttons.style.display = 'none';
    under.style.height = '38vh'
    before.style.height = '8vh'
})
var back = document.getElementById('menu-back');
back.addEventListener('click',function(){
    buttons.style.display = 'block';
    under.style.height = '13vh';
    before.style.height = '13vh'
    buttons.style.display = 'flex';
    buttons.style.justifyContent = 'space-around';
})
