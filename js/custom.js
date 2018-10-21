jQuery(document).ready(function(){
    jQuery("#gallery").unitegallery();
});

// Get the modal
var modal = document.getElementById('availabilityModal');
var ratesModal = document.getElementById('ratesModal');

// Get the link that opens the modal
var btn = document.getElementById("Availability");
var btn2 = document.getElementById("Rates");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeAvailability")[0];
var ratespan = document.getElementsByClassName("closeRates")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    if (event.target == ratesModal) {
        ratesModal.style.display = "none";
    }

}


// Rates
//
// When the user clicks on the button, open the modal
btn2.onclick = function() {
    ratesModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
ratespan.onclick = function() {
    ratesModal.style.display = "none";
}
