document.querySelector('.btnColor').addEventListener('click', function() {
    let x = (Math.random() * 6) + 1;
    let y = Math.trunc(x);
    console.log(y);

    if(y == 1) {
        document.querySelector('.backgroundChange').classList.add('verde');
        document.querySelector('.backgroundChange').classList.remove('azul');
        document.querySelector('.backgroundChange').classList.remove('vermelho');
        document.querySelector('.backgroundChange').classList.remove('roxo');
        document.querySelector('.backgroundChange').classList.remove('rosa');
        document.querySelector('.backgroundChange').classList.remove('amarelo');
        document.querySelector('.color').innerHTML = 'Background Color : Verde';
    }

    else if(y == 2) {
        document.querySelector('.backgroundChange').classList.add('azul');
        document.querySelector('.backgroundChange').classList.remove('verde');
        document.querySelector('.backgroundChange').classList.remove('vermelho');
        document.querySelector('.backgroundChange').classList.remove('roxo');
        document.querySelector('.backgroundChange').classList.remove('rosa');
        document.querySelector('.backgroundChange').classList.remove('amarelo');
        document.querySelector('.color').innerHTML = 'Background Color : Azul';
    }

    else if(y == 3) {
        document.querySelector('.backgroundChange').classList.add('vermelho');
        document.querySelector('.backgroundChange').classList.remove('azul');
        document.querySelector('.backgroundChange').classList.remove('verde');
        document.querySelector('.backgroundChange').classList.remove('roxo');
        document.querySelector('.backgroundChange').classList.remove('rosa');
        document.querySelector('.backgroundChange').classList.remove('amarelo');
        document.querySelector('.color').innerHTML = 'Background Color : Vermelho';
    }

    else if(y == 4) {
        document.querySelector('.backgroundChange').classList.add('roxo');
        document.querySelector('.backgroundChange').classList.remove('azul');
        document.querySelector('.backgroundChange').classList.remove('vermelho');
        document.querySelector('.backgroundChange').classList.remove('verde');
        document.querySelector('.backgroundChange').classList.remove('rosa');
        document.querySelector('.backgroundChange').classList.remove('amarelo');
        document.querySelector('.color').innerHTML = 'Background Color : Roxo';
    }

    else if(y == 5) {
        document.querySelector('.backgroundChange').classList.add('rosa');
        document.querySelector('.backgroundChange').classList.remove('azul');
        document.querySelector('.backgroundChange').classList.remove('vermelho');
        document.querySelector('.backgroundChange').classList.remove('roxo');
        document.querySelector('.backgroundChange').classList.remove('verde');
        document.querySelector('.backgroundChange').classList.remove('amarelo');
        document.querySelector('.color').innerHTML = 'Background Color : Rosa';
    }

    else if(y == 6) {
        document.querySelector('.backgroundChange').classList.add('amarelo');
        document.querySelector('.backgroundChange').classList.remove('azul');
        document.querySelector('.backgroundChange').classList.remove('vermelho');
        document.querySelector('.backgroundChange').classList.remove('roxo');
        document.querySelector('.backgroundChange').classList.remove('rosa');
        document.querySelector('.backgroundChange').classList.remove('verde');
        document.querySelector('.color').innerHTML = 'Background Color : Amarelo';
    }
})