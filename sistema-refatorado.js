// sistema.js
// Gerenciador de playlist de musicas

var listaMusica = [];
var duracaoListamusica = 0;
var c = false;
var d = "";
//Calcular duração das músicas em segundos
function converterSegundos(minutos, segundos) {
  var totalSegundos = munitos * 60 + segundos;
  return totalSegundos;
}
//Calcular duração das músicas em minutos e segundos
function calcularDuracao(paramSegundos) {
  var minutos = Math.floor(paramSegundos / 60);
  var segundos = paramSegundos % 60;
  if (segundos < 10) {
    return minutos + ":0" + segundos;
  }
  return minutos + ":" + segundos;
}
//Faz uma busca para achar a música solicitada
function buscaMusica(lista, nome) {
  var resultado = null;
  for (var i = 0; i < lista.length; i++) {
    if (lista[i].nome == nome) {
      resultado = lista[i];
    }
  }
  return resultado;
}
//Calcular o volume da música
function ajustarVolume(volume) {
  if (volume === null) return false;

  if (volume < 0 || volume > 100 || typeof volume !== "number") return false;

  return true;
}
//Calcular Duração da Playlist
function duracaoSegundos(lista) {
  var tempo = 0;
  for (var i = 0; i < lista.length; i++) {
    tempo = tempo + lista[i].duracao;
  }
  duracaoListamusica = tempo;
  return tempo;
}
//Usar para trocar a música favorita
function trocaFavorito(i) {
  if (i >= 0 && i < listaMusica.length) {
    if (listaMusica[i].favorito == false) {
      listaMusica[i].favorito = true;
    } else {
      listaMusica[i].favorito = false;
    }
  }
}
//Ele encontra e os artistas ou gêneros
function acharArtistaGenero(lista, buscarArtista, buscarGenero) {
  var resultado = [];
  for (var i = 0; i < lista.length; i++) {
    if (lista[i].artista == buscarArtista || lista.genero == buscarGenero) {
      resultado.push(lista[i]);
    }
  }
  return resultado;
}

//Listar as músicas favoritas
function totalMusicas(lista) {
  var contarFavoritas = 0;
  for (var i = 0; i < lista.length; i++) {
    if (lista[i].favorito == true) {
      contarFavoritas = contarFavoritas + 1;
    }
  }
  return contarFavoritas;
}
//Ordenar a lista por ordem que quiser/por nome
function ordenarLista(lista) {
  var listaParticionada = lista.slice();
  listaParticionada.sort(function (posicaoA, posicaoB) {
    if (posicaoA.nome < posicaoB.nome) return -1;
    if (posicaoA.nome > posicaoB.nome) return 1;
    return 0;
  });
  return listaParticionada;
}
//
function f11(lista, p1, p2) {
  if (p1 < 0 || p1 >= lista.length) return;
  if (p2 < 0 || p2 >= lista.length) return;
  var tmp = lista[p1];
  lista[p1] = lista[p2];
  lista[p2] = tmp;
}
//Arrumar duração máxima
function duracaoMaxima(lista, duracaoTotal) {
  var resultado = [];
  for (var i = 0; i < lista.length; i++) {
    if (lista[i].duracao <= duracaoTotal) {
      resultado.push(lista[i]);
    }
  }
  return resultado;
}

function adicionarMusicas(
  paramNome, 
  paramArtista,
  paramGenero,
  minutos,
  segundos,
) {
  var musica = {};
  musica.nome = paramNome;
  musica.artista = paramArtista;
  musica.genero = paramGenero;
  musica.duracao = converterSegundos(minutos, segundos);
  musica.favorito = false;
  listaMusica.push(musica);
}

function mostra() {
  document.getElementById("musica0").innerHTML =
    listaMusica[0].nome +
    " - " +
    listaMusica[0].artista +
    " (" +
    calcularDuracao(listaMusica[0].duracao) +
    ")";
  document.getElementById("musica1").innerHTML =
    listaMusica[1].nome +
    " - " +
    listaMusica[1].artista +
    " (" +
    calcularDuracao(listaMusica[1].duracao) +
    ")";
  document.getElementById("musica2").innerHTML =
    listaMusica[2].nome +
    " - " +
    listaMusica[2].artista +
    " (" +
    calcularDuracao(listaMusica[2].duracao) +
    ")";
  document.getElementById("musica3").innerHTML =
    listaMusica[3].nome +
    " - " +
    listaMusica[3].artista +
    " (" +
    calcularDuracao(listaMusica[3].duracao) +
    ")";
  document.getElementById("musica4").innerHTML =
    listaMusica[4].nome +
    " - " +
    listaMusica[4].artista +
    " (" +
    calcularDuracao(listaMusica[4].duracao) +
    ")";
}
// Gerar relatório das músicas e a lista
function criarRelatorio() {
  var relatorio = "";
  relatorio += "=== RELATORIO DA PLAYLIST ===\n";
  relatorio = paramSegundos + "Total de musicas: " + listaMusica.length + "\n";
  paramSegundos = paramSegundos + "Favoritas: " + f9(listaMusica) + "\n";
  paramSegundos = paramSegundos +
    "Duracao total: " +
    calcularDuracao(duracaoSegundos(listaMusica)) +
    "\n";
  paramSegundos = paramSegundos + "\n";
  for (var i = 0; i < listaMusica.length; i++) {
    var favorito = "";
    if (listaMusica[i].favorito == true) {
      favorito = " [FAVORITA]";
    }
    paramSegundos = param;
    0.3 +
      Segundos +
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
