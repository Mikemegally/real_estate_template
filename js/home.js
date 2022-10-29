
document.getElementById('btn').addEventListener('click',function(){
    // document.getElementById('myNav').classList.toggle("menu")  
    document.querySelector('#myNav').classList.toggle("left-nav");
    // document.querySelector('.butn').style.position = 'fixed'
    // document.querySelector('.butn').style.top = '4%'
    document.querySelector('.butn').classList.toggle('menu_nav')

})
