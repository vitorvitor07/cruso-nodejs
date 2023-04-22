
const tokens = [
    {
        id: 0,
        token: '63207c644a4a54c8e0b1bd5f',
        empresa: 'Krolik'
    },
    {
        id: 1,
        token: '636e8e9d746eeaa3aa34d639',
        empresa: 'Vazoli Sapopemba'
    }
]

let requestHeaders = []
let options = []
let myToken = []

for (let i = 0; i < tokens.length; i++) {

    requestHeaders[i] = new Headers()
    requestHeaders[i].append('access-token', tokens[i].token) 
    requestHeaders[i].append('Content-Type', 'application/json')
    
    options[i] = {
        method: 'GET',
        headers: requestHeaders[i],
        redirect: 'follow'
    }
    
    fetch('https://api.camkrolik.com.br/core/v2/api/channel/status', options[i])
    .then(res => {
        return res.json()
    })
    .then(json => {
        criaBox(i, json, tokens[i].empresa)
    })
    .catch(e => console.log)
    

}

function criaBox(id, json, empresa) {
    const main = document.querySelector('#main')    
    
    // Criar conteiner
    
    let conteiner = document.createElement('div')
    conteiner.setAttribute('class', 'conteiner')
    conteiner.setAttribute('id', `#conteiner${id}`)
    main.appendChild(conteiner)
    
    // Criar título do status
    
    let tituloStatus = document.createElement('h3')
    tituloStatus.innerText = empresa
    conteiner.appendChild(tituloStatus)    
    
    // Criar caixa de status
    
    let caixaStatus = document.createElement('div')
    caixaStatus.setAttribute('class', 'status')
    caixaStatus.setAttribute('id', `#status${id}`)
    
    if (json.status === "CONNECTED") {        
        conteiner.style.backgroundColor = 'green'        
    } else if (json.status === "UNPAIRED") {
        conteiner.style.backgroundColor = 'yellow'
        conteiner.style.color = 'black'
    } else if (json.status === "OFFLINE") {
        conteiner.style.backgroundColor = 'red'
    }
    
    caixaStatus.innerText = json.status
    conteiner.appendChild(caixaStatus)
    
}

resetaPágina()

function resetaPágina() {
    setTimeout((() => {
        window.location.reload(true);
        resetaPágina()
    }), 30000)

}


/*
function mostraStatus(json) {    
    
    if (json.status === "CONNECTED") {        
        resultBox.style.backgroundColor = 'green'        
    } else if (json.status === "UNPAIRED") {
        resultBox.style.backgroundColor = 'yellow'
        resultBox.style.color = 'black'
    } else if (json.status === "OFFLINE") {
        resultBox.style.backgroundColor = 'red'
    }
    
    resultKrolikBot.innerText += json.status

    setTimeout((() => {
        window.location.reload(true);
    }), 5000)
}
*/