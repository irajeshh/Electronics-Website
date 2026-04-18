// Dynamically import navBar.html and footer.html for categories.html
fetch('navBar.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('navbar-container').innerHTML = data;
    });

fetch('footer.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('footer-container').innerHTML = data;
    });
