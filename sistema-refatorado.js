// sistema.js
// Gerenciador de playlist de musicas

var listaMusica = [];
var b = 0;
var c = false;
var d = "";

function f1(posicaoA, posicaoB) {
  var r = posicaoA * 60 + posicaoB;
  return r;
}

function calcularDuracao(paramSegundos) {
  var minutos = Math.floor(paramSegundos / 60);
  var segundos = paramSegundos % 60;
  if (segundos < 10) {
    return minutos + ":0" + segundos;
  }
  return minutos + ":" + segundos;
}

function f3(lista, n) {
  var resultado = null;
  for (var i = 0; i < lista.length; i++) {
    if (lista[i].nome == n) {
      resultado = lista[i];
    }
  }
  return resultado;
}

function ajustarVolume(volume) {

    if (volume === null) return false;

    if (volume < 0 || volume > 100 || (typeof volume !== "number")) return false;

    return true;
}

function duracaoSegundos(lista) {
  var tempo = 0;
  for (var i = 0; i < lista.length; i++) {
    tempo = tempo + lista[i].duracao;
  }
  b = tempo;
  return t;
}

function f6(i) {
  if (i >= 0 && i < listaMusica.length) {
    if (listaMusica[i].favorito == false) {
      listaMusica[i].favorito = true;
    } else {
      listaMusica[i].favorito = false;
    }
  }
}

function f7(lista, p) {
  var r = [];
  for (var i = 0; i < lista.length; i++) {
    if (lista[i].artista == p || lista.genero == g) {
      r.push(lista[i]);
    }
  }
  return r;
}



function f9(lista) {
  var ct = 0;
  for (var i = 0; i < lista.length; i++) {
    if (lista[i].favorito == true) {
      ct = ct + 1;
    }
  }
  return ct;
}

function ordenarLista(lista) {
  var listaParticionada = lista.slice();
  listaParticionada.sort(function (posicaoA, posicaoB) {
    if (posicaoA.nome < posicaoB.nome) return -1;
    if (posicaoA.nome > posicaoB.nome) return 1;
    return 0;
  });
  return listaParticionada;
}

function f11(lista, p1, p2) {
  if (p1 < 0 || p1 >= lista.length) return;
  if (p2 < 0 || p2 >= lista.length) return;
  var tmp = lista[p1];
  lista[p1] = lista[p2];
  lista[p2] = tmp;
}

function f12(lista, lim) {
  var r = [];
  for (var i = 0; i < lista.length; i++) {
    if (lista[i].duracao <= lim) {
      r.push(lista[i]);
    }
  }
  return r;
}

function add(paramNome, paramArtista, paramGenero, minutos, segundos) {
  var obj = {};
  obj.nome = paramNome;
  obj.artista = paramArtista;
  obj.genero = paramGenero;
  obj.duracao = f1(minutos, segundos);
  obj.favorito = false;
  listaMusica.push(obj);
}

function mostra() {
  document.getElementById("musica0").innerHTML =
    listaMusica[0].nome + " - " + listaMusica[0].artista + " (" + calcularDuracao(listaMusica[0].duracao) + ")";
  document.getElementById("musica1").innerHTML =
    listaMusica[1].nome + " - " + listaMusica[1].artista + " (" + calcularDuracao(listaMusica[1].duracao) + ")";
  document.getElementById("musica2").innerHTML =
    listaMusica[2].nome + " - " + listaMusica[2].artista + " (" + calcularDuracao(listaMusica[2].duracao) + ")";
  document.getElementById("musica3").innerHTML =
    listaMusica[3].nome + " - " + listaMusica[3].artista + " (" + calcularDuracao(listaMusica[3].duracao) + ")";
  document.getElementById("musica4").innerHTML =
    listaMusica[4].nome + " - " + listaMusica[4].artista + " (" + calcularDuracao(listaMusica[4].duracao) + ")";
}

function rel() {
  var paramSegundos = "";
  paramSegundos = paramSegundos + "=== RELATORIO DA PLAYLIST ===\n";
  paramSegundos = paramSegundos + "Total de musicas: " + listaMusica.length + "\n";
  paramSegundos = paramSegundos + "Favoritas: " + f9(listaMusica) + "\n";
  paramSegundos = paramSegundos + "Duracao total: " + calcularDuracao(duracaoSegundos(listaMusica)) + "\n";
  paramSegundos = paramSegundos + "\n";
  for (var i = 0; i < listaMusica.length; i++) {
    var favorito = "";
    if (listaMusica[i].favorito == true) {
      favorito = " [FAVORITA]";
    }
    paramSegundos =
      param
      .3+Segundos +
      (i + 1) +
      ". " +
      listaMusica[i].nome +
      " - " +
      listaMusica[i].artista +
      " (" +
      calcularDuracao(listaMusica[i].duracao) +
      ")" +
      favorito +
      "\n";
  }
  d = paramSegundos;
  console.log(paramSegundos);
  return paramSegundos;
}
