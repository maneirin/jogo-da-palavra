const botaoComecar = document.querySelector(".comecar")
const botoesModo = document.querySelectorAll("#modo .opcao") 
const botoesDificuldade = document.querySelectorAll("#dificuldade .opcao") 
const areaDificuldade = document.getElementById("dificuldade")
const areaPersonalizada = document.getElementById("palavraSelecionada")
const inputpalavra = document.getElementById("palavraInput")
const textDificul = document.getElementById("textodificul")
const menu = document.getElementById("menu")
const jogo = document.getElementById("jogo")
const voltarmenu = document.getElementById("voltarMenu")
const palavrasDoDia = [
    "computador",
    "internet",
    "programacao",
    "teclado",
    "monitor",
    "javascript",
    "algoritmo",
    "variavel",
    "desenvolvedor",
    "codigo"
]
function pegarPalavraDoDia(){
    const dataHoje = new Date()
    const inicio = new Date(2025,0,1)
    const diferenca = Math.floor( // math floor tira as casa decimal 
         (dataHoje - inicio) / (1000 * 60 * 60 * 24)
    ) 
    return palavrasDoDia[diferenca % palavrasDoDia.length]

}

botoesModo.forEach(botao =>{
    botao.addEventListener("click", () =>{
        botoesModo.forEach(b => b.classList.remove("ativo"))
        botao.classList.add("ativo")

        if(botao.innerText.trim() === "Personalizada"){
            areaDificuldade.style.display = "none"
            areaPersonalizada.style.display = ""
            textDificul.style.display = "none"
        }else{
            areaDificuldade.style.display = ""
            areaPersonalizada.style.display = "none"
            textDificul.style.display = ""
        }
    })
})

botoesDificuldade.forEach(botao =>{
    botao.addEventListener("click", () =>{
        botoesDificuldade.forEach(b => b.classList.remove("ativo"))
        botao.classList.add("ativo")
    })
})
voltarmenu.addEventListener('click', () =>{
    menu.style.display = "block"
    jogo.style.display = "none"
})

const palavraInput = document.getElementById("palavraInput")
const palavraDiv = document.getElementById("palavraExibida")
const botaoEnviar = document.getElementById("enviarLetra")
const tentativaIN = document.getElementById("letraInput")
const letraUsada = document.getElementById("letrasUsadas")
const mensagemFinal = document.getElementById("mensagemFinal")
let tentativas = 0
let letrasUsadas = []
let palavra = ""
let palavraMostrada = []



botaoComecar.addEventListener('click', ()=>{
    const modoSelecionado = document.querySelector("#modo .ativo").innerText
    const dificuldadeSelecionada = document.querySelector("#dificuldade .ativo").innerText
    console.log(modoSelecionado)

    if(modoSelecionado == "Palavra do dia"){
        palavra = pegarPalavraDoDia()
    }else{
        palavra = palavraInput.value.toLowerCase()
    }

    palavraMostrada = []
    letrasUsadas = []

    if(palavra.trim() === ""){
        return
    }
    
    if(modoSelecionado === "Personalizada"){
    tentativas = palavra.length
    }else{
    
        if(dificuldadeSelecionada === "Fácil"){
            tentativas = 12
        }
        
        if(dificuldadeSelecionada === "Médio"){
            tentativas = 7
        }
        
        if(dificuldadeSelecionada === "Difícil"){
            tentativas = 4
        }
    }
    document.getElementById("tentativasRestantes").innerText = tentativas

    menu.style.display = "none"
    jogo.style.display = "block"
    
    for(let c = 0; c < palavra.length ; c++){
        palavraMostrada.push("_")
    }

    palavraDiv.innerText = palavraMostrada.join(" ")
    palavraInput.value = ""
    letraUsada.innerText = ""
})

botaoEnviar.addEventListener('click', () =>{
    let acertou = false
    const tentativa = tentativaIN.value.toLowerCase()

    if(tentativa === ""){ 
        return
    }

    for(let i = 0; i < palavra.length ; i++){
        if(palavra[i] === tentativa){
            palavraMostrada[i] = tentativa
            acertou = true
        }
    }
    
    
    if(!acertou){
        if(!letrasUsadas.includes(tentativa)){
        letrasUsadas.push(tentativa)
        letraUsada.innerText = letrasUsadas.join(", ")
        }

        tentativas--
    }

    document.getElementById("tentativasRestantes").innerText = tentativas
    palavraDiv.innerText = palavraMostrada.join(" ")
    tentativaIN.value = ""

    if(tentativas === 0){
        mensagemFinal.style.display = "flex"
        mensagemFinal.innerText = "VOCÊ PERDEU\nA palavra era: " + palavra

        setTimeout(() => {
            menu.style.display = "block"
            jogo.style.display = "none"
            mensagemFinal.style.display = "none"
        }, 3000)
    }


    if(!palavraMostrada.includes("_")){
        mensagemFinal.style.display = "flex"
        mensagemFinal.innerText = "VOCÊ VENCEU"
        setTimeout(() => {
            menu.style.display = "block"
            jogo.style.display = "none"
            mensagemFinal.style.display = "none"
            
        }, 2000);
    }
    
    
})
