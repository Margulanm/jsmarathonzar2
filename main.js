

const $btn=document.getElementById('btn-kick');

const character ={
    name:'Pikachu',
    defaultHP:100,
    damageHP:100,
    elHP:document.getElementById('health-character'), 
    elProgressbar:document.getElementById('progressbar-character'),
};

const enemy={
    name:'Charmander',
    defaultHP:100,
    damageHP:100,
    elHP:document.getElementById('health-enemy'), 
    elProgressbar:document.getElementById('progressbar-enemy'),
};

$btn.addEventListener('click',function(){
    console.log('Kick');
    changeHP(random(20), character);
    changeHP(random(20),enemy);
});

//////////////////////////INIT INIT INIT INIT INIT INIT///////////////////////////


function init(){
    console.log('Start Game!');
    renderHP(character);
    renderHP(enemy);
}

function renderHPLife(person){
    // const $character=document.getElementById('health-character');
    // console.log($character.innerText);
    // $character.innerText=character.damageHP + ' /'+character.defaultHP;

    person.elHP.innerText=person.damageHP+' /'+person.defaultHP;
}

function renderProgressbarHP(person){
    person.elProgressbar.style.width=person.damageHP+'%';
}

function changeHP(count, person) {
    if (person.damageHP < count) {
        person.damageHP = 0;
        alert('Бедный'+person.name+'проиграл');
        $btn.disabled=true;
    } else {
        person.damageHP -= count;
    }
    renderHP(person);
}it

function random (num){
    console.log(Math.random());
    return Math.ceil(Math.random()*num);
}
init();

function renderHP(person){
    renderHPLife(person);
    renderProgressbarHP(person);
}

 