var dataSource = [];
var no=0;

function showTable(){
    resetForm();
	document.getElementById("add-new-div").style.display = 'block';
	document.getElementById("tour-places-div").style.display = 'block';
}

function BackToaddPlace() {
    resetForm();
	document.getElementById("add-new-div").style.display = 'block';
    document.getElementById("tour-places-div").style.display = 'none';
}

function resetForm() {
    document.getElementById('name').value = "";
    document.getElementById('pic').value = "";
}

function addPlace() {
    debugger
    var newPlace = {
        name: document.getElementById('name').value
    };

    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();

    if (document.getElementById('pic').value !== "") {
        reader.addEventListener("load", function () {
            newPlace.pic = reader.result;

            dataSource.push(newPlace);
            clearGrid();
            loadGrid(dataSource);
        });
    }
    else {
        dataSource.push(newPlace);
        clearGrid()
        loadGrid(dataSource);
    }

    if (file) {
        reader.readAsDataURL(file);
    }
}

function loadGrid(data) {
    data.forEach(function (row) {
        var table = document.getElementById("table-places");
        var newRow = table.insertRow(table.rows.length);

        var cel1 = newRow.insertCell(0);
        var cel2 = newRow.insertCell(1);


        cel1.innerHTML = row.name;

        //Create Image DOM element
		var x = document.createElement("IMG");
		x.setAttribute("src", "");
		x.setAttribute("width", "304");
		x.setAttribute("height", "228");
		x.setAttribute("alt", "something");
		x.setAttribute("id", "new-img"+(++no));
        cel2.appendChild(x);
        //Add picture
		var preview = document.querySelector("img#new-img" + no);
        preview.src = row.pic;
    });
    showTable();
}

function clearGrid() {
    var table = document.getElementById("table-places");
    for (var i = table.rows.length - 1; i > 0; --i)
        table.deleteRow(i);
}
