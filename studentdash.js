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