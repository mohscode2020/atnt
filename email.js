const params = new URLSearchParams(window.location.search);
const userId = params.get('userId') || 'N/A'; // Default to 'N/A' if no ID is found

document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('button');

  document.getElementById('form')
    .addEventListener('submit', function(event) {
      event.preventDefault();
      
      btn.value = 'Sending...';

      const serviceID = 'default_service';
      const templateID = 'template_b47jy1l';

      emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
          btn.value = 'Send Email';
          alert('Sent!');
        }, (err) => {
          btn.value = 'Send Email';
          alert(JSON.stringify(err));
        });
    });
});
