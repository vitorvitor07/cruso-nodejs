const btn = document.querySelector('#btn')

btn.addEventListener('click', () => {
    const formCep = document.querySelector('#cep')
    const cep = formCep.value.replace('-', '')

    if (cep.length !== 8 && typeof cep !== 'number') {

        alert('CEP inválido!')

    } else {        

        let url = `https://viacep.com.br/ws/${cep}/json/`
    
        fetch(url)
            .then(response => response.json()
                .then(json => mostraCep(json)))
            .catch(e => console.log(e))        
    }
})

function mostraCep(json) {
    for (let campo in json) {
        if(document.querySelector('#' + campo)){
            document.querySelector('#' + campo).value = `${json[campo]}`      
         }
    }
}


