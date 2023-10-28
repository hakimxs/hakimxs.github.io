<script src="popup.js">document.addEventListener("DOMContentLoaded", function() {
    const popupLink = document.getElementById("showPopup");
    const popup = document.getElementById("popup");
    const closePopup = document.getElementById("closePopup");

    popupLink.addEventListener("click", function(event) {
        event.preventDefault();
        popup.style.display = "flex";
    });

    closePopup.addEventListener("click", function() {
        popup.style.display = "none";
    });
});
</script>
