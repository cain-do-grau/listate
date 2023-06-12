var listaConvidados = [];

function enviate() {
    var adicionateNomis = document.getElementById("nomis").value;
    listaConvidados.push(adicionateNomis);
    console.log(listaConvidados);
    document.getElementById(" mostrarnomes").innerHTML = listaConvidados.toString();
}

function mostrateNomiates() {
    var i = listaConvidados.join("<br>");
    document.getElementById("nomiatesAdicionatis").innerHTML = i.toString();
    document.getElementById("btnalbeticsOrdiate").style.display = "block";

}

function albeticsOrdiate() {
    listaConvidados.sort();
    var i = listaConvidados.join("<br>");
    document.getElementById("albeticsOrdiate").innerHTML = i.toString();

}

function pesquisate() {
    var s = document.getElementById("pesquisatis").value;
    var found = 0;
    var j;
    for (j = 0; j < listaConvidados.length; j++) {
        if (s == listaConvidados[j]) {

            found = found + 1;

        }
    }
    document.getElementById("pesquisates").innerHTML = "Nome encontrado " + found + " vez(es)";
}