function eliminarFila() {
	var fin = true
	while (fin) {
		if (document.getElementById("fila")) {
			$("#fila").remove()
		} else {
			fin = false
		}
	}
}


function renderTableFiltered(listaFiltrada) {

	return listaFiltrada.map(function (element) {
		var html = ""
		html += "<tr id='fila'><td scope='row'><a href='" + element.url + "'>" + element.first_name
		element.middle_name == null ? html += " " : html += " " + element.middle_name + " "
		html += element.last_name + "</a></td><td>" + element.party + "</td><td>" + element.state + "</td><td>" + element.seniority + "</td><td>" + element.votes_with_party_pct + "%</td></tr>"
		return html;
	}).join("")
}

function miFiltro(listacompleta) {
	var chekeados = Array.from(document.querySelectorAll("input[name=party]:checked")).map(input => input.value)
	console.log(chekeados)
	var selected = document.querySelector("select").value;
	console.log(selected)

	listaFiltrada = listacompleta.filter(member => chekeados.includes(member.party) && (selected == "" ? true : selected == member.state))
	console.log(listaFiltrada)
	return listaFiltrada

}

function obtenerValores() {
	if (document.getElementById("tabla")) {
		eliminarFila()
		var html = renderTableFiltered(miFiltro(data.results[0].members))
		document.getElementById("tabla").innerHTML = html
	}
}
obtenerValores()