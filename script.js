var cartaGiovanni = {
    nome: "Cristiano Ronaldo",
    imagem: "https://e0.365dm.com/21/03/1600x900/skysports-cristiano-ronaldo_5323616.jpg",
    atributos: {
        passe: 80,
        drible: 90,
        chute: 99
    }
}

var cartaLuan = {
    nome: "Messi",
    imagem: "https://p2.trrsf.com/image/fget/cf/460/0/images.terra.com/2021/03/29/2021-03-15t215539z_1943093055_up1eh3f1owrvo_rtrmadp_3_soccer-spain-fcb-hue-report.jpg",
    atributos: {
        passe: 99,
        drible: 85,
        chute: 90
    }
}

var cartaLucas = {
    nome: "Neymar",
    imagem: "https://static1.purepeople.com.br/articles/3/28/67/23/@/3253840-neymar-faz-festa-de-luxo-de-28-anos-na-c-624x600-2.jpg",
    atributos: {
        passe: 88,
        drible: 99,
        chute: 82
    }
}

var cartaGabriel = {
    nome: "Mbappe",
    imagem: "https://a.espncdn.com/photo/2020/1216/r791193_1296x729_16-9.jpg",
    atributos: {
        passe: 70,
        drible: 92,
        chute: 86
    }
}


var cartaMaquina
var cartaJogador
var cartas = [cartaGiovanni, cartaLuan, cartaLucas,cartaGabriel]
// 0          1           2

function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 4)
    cartaMaquina = cartas[numeroCartaMaquina]
//SORTEANDO CARTA E FAZENDO COM QUE A CARTA DO JOGADOR NAO SEJA A MESMA QUE A DA MAQUINA.
    var numeroCartaJogador = parseInt(Math.random() * 4)
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 4)
    }
    cartaJogador = cartas[numeroCartaJogador]
    console.log(cartaJogador)

    document.getElementById('btnSortear').disabled = true //BOTAO ATIVO SORTEAR CARTA
    document.getElementById('btnJogar').disabled = false //BOTAO ATIVO JOGAR
  exibirCartaJogador()  
  
}
  function exibirCartaJogador(){  
  var divCartaJogador = document.getElementById("carta-jogador")//div que vai entrar a foto do jogador, esta no html
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`//busca a imagem da carta
  var nome = `<p class="carta-subtitle">${cartaJogador.nome} </p>`
  var opcoesTexto =""
  for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"//fazendo loop para pegar o atributo selecionado da sua carta
    }
    
    var html = "<div id= 'opcoes' class = 'carta-status'>"
  divCartaJogador.innerHTML = moldura+nome+html+opcoesTexto+ '</div>'// fazer com que na div selecionada apareça a carta dentro da moldura criada e aparecer a foto o nome e os atributos
  }

  



function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado()
    var divResultado = document.getElementById('resultado')
    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
     
      htmlResultado = '<p class= "resultado-final"> Ganhou </p>'
      
        
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        
      htmlResultado = '<p class= "resultado-final">Perdeu</p>'
      
    } else {
        htmlResultado = '<p class= "resultado-final"> empatou </p>'
    }
    divResultado.innerHTML = htmlResultado
    exibirCartaMaquina()
} 

function exibirCartaMaquina(){
  var divCartaMaquina = document.getElementById("carta-maquina")//div que vai entrar a foto do jogador, esta no html
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`//busca a imagem da carta
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome} </p>`
  var opcoesTexto =""
  for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "<br>"//fazendo loop para pegar o atributo selecionado da sua carta, mudou de input para <p> texto para mostrar os atributos da carta sem ter a opçao de selecionar
    }
    
    var html = "<div id= 'opcoes' class = 'carta-status'>"
  divCartaMaquina.innerHTML = moldura+nome+html+opcoesTexto+ '</div>'// fazer com que na div selecionada apareça a carta dentro da moldura criada e aparecer a foto o nome e os atributos
  }
  
