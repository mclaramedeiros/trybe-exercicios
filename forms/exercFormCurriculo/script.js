function createStates(){
    let stateOptions = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
    let state = document.getElementById('state');

    for(let i = 0; i < stateOptions.length; i+=1){
        let option = document.createElement('option');
        option.innerText = stateOptions[i];
        option.setAttribute('value', stateOptions[i])
        state.appendChild(option);
    }
}

createStates();

// function dateStart(){
//     let date = document.getElementsByClassName('input-data');
//     let valorData = date.value;
//     if( valor > 0 && valor <= 31 ){

//     }
// }

