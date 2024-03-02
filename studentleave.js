

// JavaScript to handle dropdown toggling
document.getElementById("inbox-icon").addEventListener("click", function () {
    toggleDropdown("inbox-dropdown");
});

document.getElementById("bell-icon").addEventListener("click", function () {
    toggleDropdown("bell-dropdown");
});

document.getElementById("settings-icon").addEventListener("click", function () {
    toggleDropdown("settings-dropdown");
});

function toggleDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    var allDropdowns = document.querySelectorAll('.dropdown');

    // Close all dropdowns
    allDropdowns.forEach(function (element) {
        if (element.id !== dropdownId) {
            element.style.display = "none";
        }
    });

    // Toggle the selected dropdown
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
}


var formContainer = document.getElementById("formContainer");
var openFormButton = document.getElementById("openForm");
var leaveTable = document.getElementById("leaveTable");

openFormButton.addEventListener("click", function () {
  if (formContainer.style.display === "block") {
    formContainer.style.display = "none";
  } else {
    formContainer.style.display = "block";
    leaveTable.style.display = "none";
  }
});

document.getElementById("leaveForm").addEventListener("submit", function (event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var studentId = document.getElementById("student-id").value;
  var leaveType = document.getElementById("leave-type").value;
  var startDate = document.getElementById("start-date").value;
  var endDate = document.getElementById("end-date").value;
  var reason = document.getElementById("reason").value;

  var table = document.getElementById("leaveTable");
  var newRow = table.insertRow(-1);
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);
  var cell6 = newRow.insertCell(5);
  var cell7 = newRow.insertCell(6);

  cell1.innerHTML = name;
  cell2.innerHTML = studentId;
  cell3.innerHTML = leaveType;
  cell4.innerHTML = startDate;
  cell5.innerHTML = endDate;
  cell6.innerHTML = reason;
  cell7.innerHTML = '<button class="edit-button" onclick="editRow(this)">Edit</button>';

  document.getElementById("leaveForm").reset();
  formContainer.style.display = "none";
  leaveTable.style.display = "table";
});

function editRow(button) {
  var row = button.parentNode.parentNode;
  var cells = row.getElementsByTagName("td");
  document.getElementById("name").value = cells[0].innerHTML;
  document.getElementById("student-id").value = cells[1].innerHTML;
  document.getElementById("leave-type").value = cells[2].innerHTML;
  document.getElementById("start-date").value = cells[3].innerHTML;
  document.getElementById("end-date").value = cells[4].innerHTML;
  document.getElementById("reason").value = cells[5].innerHTML;
  document.getElementById("submitBtn").value = "Update";
  formContainer.style.display = "block";
  leaveTable.style.display = "none";
  row.parentNode.removeChild(row);
}