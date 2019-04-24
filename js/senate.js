function renderTable(data, i) {
	var html = renderRows(data);
	if (i == true) {
		document.getElementById("tabla1").innerHTML = html;
	} else {
		document.getElementById("tabla2").innerHTML = html;
	}
}

function renderRows(data) {
	return data.results.map(function (element) {
		return element.members.map(function (element) {
			var html = "";
			html += "<tr><td scope='row'><a href='" + element.url + "'>" + element.first_name;
			element.middle_name == null ? html += " " : html += " " + element.middle_name + " ";
			html += element.last_name + "</a></td><td>" + element.party + "</td><td>" + element.state + "</td><td>" + element.seniority + "</td><td>" + element.votes_with_party_pct + "%</td></tr>";
			return html;
		}).join("");
	});
}
if (document.getElementById("tabla1")) {
	var i = true;
	renderTable(datasenate, i);
} else {
	var i = false;
	renderTable(datahouse, i);
}