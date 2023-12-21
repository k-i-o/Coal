document.addEventListener("DOMContentLoaded", function() {

    initializeEditor("");

});

function openSettings() {
    document.querySelector("#settings-modal").classList.add("modal-active");
}

function closeSettings() {
    document.querySelector("#settings-modal").classList.remove("modal-active");
}