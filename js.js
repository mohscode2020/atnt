

document.getElementById('userIdForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const userId = document.getElementById('userId').value;
    if (userId) {
        // Redirect to the second page with the User ID as a query parameter
        window.location.href = `page.html?userId=${encodeURIComponent(userId)}`;
    }
});


const params = new URLSearchParams(window.location.search);
const userId = params.get('userId') || 'N/A'; // Default to 'N/A' if no ID is found

// Display the User ID on the page
document.getElementById('userIdDisplay').textContent = userId;



