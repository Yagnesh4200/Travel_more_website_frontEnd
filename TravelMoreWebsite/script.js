document.addEventListener('DOMContentLoaded', () => {
    const travelForm = document.getElementById('travelForm');

    travelForm.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const formData = new FormData(travelForm);
        window.location.href = 'payment.html';
    });
});