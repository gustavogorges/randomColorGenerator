document.querySelector('.btnColor').addEventListener('click', function() {
    let corAleatoria = Math.floor(Math.random()*16777215).toString(16);
    console.log(corAleatoria);
    corAleatoria = "#" + corAleatoria;
    
    document.getElementById('backgroundChange').style.backgroundColor = corAleatoria;

    document.querySelector('.color').innerHTML = 'Background Color : '+corAleatoria;
})