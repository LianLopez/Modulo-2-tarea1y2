var info = "";
var paginaSenador = Boolean;

function eliminarFila() {
	var fin = true;
	while (Boolean(fin) == true) {
		if (document.getElementById("fila")) {
			$("#fila").remove();
		} else {
			fin = false;
		}
	}
}


function renderTableFiltered(data, party) {
	for (let i = 0; i < party.length; i++) {
			if (party[i].checked) {
				info += data.results.map(function (element) {
					return element.members.map(function (element) {
						if (element.party == party[i].value) {
							var html = "";
							html += "<tr id='fila'><td scope='row'><a href='" + element.url + "'>" + element.first_name;
							element.middle_name == null ? html += " " : html += " " + element.middle_name + " ";
							html += element.last_name + "</a></td><td>" + element.party + "</td><td>" + element.state + "</td><td>" + element.seniority + "</td><td>" + element.votes_with_party_pct + "%</td></tr>";
							return html;
						}
					}).join("");
				});
			}
	
	}
	return info;
}

function obtenerValores() {
	if (document.getElementById("tabla1")) {
		paginaSenador = true;
	} else {
		paginaSenador = false;
	}
	var republican = document.getElementById("R");
	var democrat = document.getElementById("D");
	var independient = document.getElementById("I");
	var party = [republican, democrat, independient];
	var state = document.getElementById("selectstate").value;
	if (Boolean(paginaSenador) == true) {
		eliminarFila();
		var html = renderTableFiltered(datasenate, party);
		document.getElementById("tabla1").innerHTML = html;
		info = "";
	} else {
		eliminarFila();
		var html = renderTableFiltered(datahouse, party);
		document.getElementById("tabla2").innerHTML = html;
		info = "";
	}
}

window.onload = function () {
	obtenerValores();
}



