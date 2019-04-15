function renderTable(data){
  var html = renderRows(data);
  document.getElementById("senate-data").innerHTML = html;
}

function renderRows(data) {
    return data.results.map(function(element){
      return element.members.map(function(element){
        var html = "";
        html += "<tr><td>" + element.first_name; 
        element.middle_name == null ? html += " " : html += " " + element.middle_name + " ";  
        html += element.last_name + "</td><td>" + element.party + "</td><td>" + element.state + "</td><td>" + element.seniority + "</td><td>" + element.votes_with_party_pct + "%</td></tr>";
        return html;
      }).join("");
  });
}

renderTable(datasenate);