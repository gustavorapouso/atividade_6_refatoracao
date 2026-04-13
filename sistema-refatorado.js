// sistema.js
// Gerenciador de playlist de musicas

var listaMusica = [];
var duracaoListamusica = 0;
var booleano = false;
var relatorioFinal = "";
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
//Trocar posição das músicas
function trocaPosicao(lista, troca1, troca2) {
  if (troca1 < 0 || troca1 >= lista.length) return;
  if (troca2 < 0 || troca2 >= lista.length) return;
  var valorTemporario = lista[troca1];
  lista[troca1] = lista[troca2];
  lista[troca2] = valorTemporario;
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
//Adiciona a música na playlist
function adicionarMusicas(paramNome, paramArtista, paramGenero, minutos, segundos,) {
  var musica = {};
  musica.nome = paramNome;
  musica.artista = paramArtista;
  musica.genero = paramGenero;
  musica.duracao = converterSegundos(minutos, segundos);
  musica.favorito = false;
  listaMusica.push(musica);
}
//Mostra o nome dos artista das músicas
function mostraListamusica() {
  for(var i = 0; i < listaMusica.length; i++){
    var texto = listaMusica[i].nome + " - " + listaMusica[i].artista + " / " + calcularDuracao(listaMusica[i].duracao) + ".";
    document.getElementById("musica" + i).innerHTML = texto;
  }
}
// Gerar relatório das músicas e a lista
function criarRelatorio() {
  var relatorio = "";
  relatorio = relatorio + "=== RELATORIO DA PLAYLIST ===\n";
  relatorio = relatorio + "Total de musicas: " + listaMusica.length + "\n";
  relatorio = relatorio + "Favoritas: " + f9(listaMusica) + "\n";
  relatorio = relatorio+  "Duracao total: " + calcularDuracao(duracaoSegundos(listaMusica)) + "\n";
  relatorio = relatorio + "\n";
  for (var i = 0; i < listaMusica.length; i++) {
    var favorito = "";
    if (listaMusica[i].favorito == true) {
      favorito = " [FAVORITA]"
    }
    relatorio = relatorio + (i + 1) + ". " + listaMusica[i].nome + " - " + listaMusica[i].artista + " (" + calcularDuracao(listaMusica[i].duracao) + ")" + favorito + "\n";
  }
  relatorioFinal = relatorio;
  console.log(relatorio);
  return relatorio;
}
