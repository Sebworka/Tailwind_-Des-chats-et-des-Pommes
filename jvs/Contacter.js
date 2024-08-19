
// _____________________________Code Javascript + Regex qui assure le fonctionnement du Formulaire _______________________________


document.getElementById('nav-toggle').addEventListener('click', () => {
    const navContent = document.getElementById('mobile-nav-content');
    navContent.classList.toggle('hidden');
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var isValid = true;

    var nom = document.getElementById('nom');
    var prenom = document.getElementById('prenom');
    var email = document.getElementById('email');
    var message = document.getElementById('message');
    var successMessage = document.getElementById('success-message');

    var namePattern = /^[a-zA-ZÀ-ÿ\s'-]+$/;
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Validation du nom
    
    if (nom.value.trim() === '') {
        document.getElementById('error-nom').classList.remove('hidden');
        isValid = false;
    } else {
        document.getElementById('error-nom').classList.add('hidden');
    }
    if (!namePattern.test(nom.value.trim())) {
        document.getElementById('error-nom-numbers').classList.remove('hidden');
        isValid = false;
    } else {
        document.getElementById('error-nom-numbers').classList.add('hidden');
    }
    if (nom.value.trim().length < 2) {
        document.getElementById('error-nom-length').classList.remove('hidden');
        isValid = false;
    } else {
        document.getElementById('error-nom-length').classList.add('hidden');
    }

    // Validation du prénom

    if (prenom.value.trim() === '') {
        document.getElementById('error-prenom').classList.remove('hidden');
        isValid = false;
    } else {
        document.getElementById('error-prenom').classList.add('hidden');
    }
    if (!namePattern.test(prenom.value.trim())) {
        document.getElementById('error-prenom-numbers').classList.remove('hidden');
        isValid = false;
    } else {
        document.getElementById('error-prenom-numbers').classList.add('hidden');
    }
    if (prenom.value.trim().length < 2) {
        document.getElementById('error-prenom-length').classList.remove('hidden');
        isValid = false;
    } else {
        document.getElementById('error-prenom-length').classList.add('hidden');
    }

    // Validation de l'email

    if (email.value.trim() === '' || !emailPattern.test(email.value.trim())) {
        document.getElementById('error-email').classList.remove('hidden');
        isValid = false;
    } else {
        document.getElementById('error-email').classList.add('hidden');
    }

    // Validation du message

    if (message.value.trim() === '') {
        document.getElementById('error-message').classList.remove('hidden');
        isValid = false;
    } else {
        document.getElementById('error-message').classList.add('hidden');
    }

    if (isValid) {
        successMessage.classList.remove('hidden');
        document.getElementById('contactForm').reset();
        setTimeout(function() {
            window.location.href = 'message.html';
        }, 2000);
    }
});

document.getElementById('resetButton').addEventListener('click', function () {
    document.getElementById('contactForm').reset();

    document.getElementById('error-nom').classList.add('hidden');
    document.getElementById('error-nom-numbers').classList.add('hidden');
    document.getElementById('error-nom-length').classList.add('hidden');
    document.getElementById('error-prenom').classList.add('hidden');
    document.getElementById('error-prenom-numbers').classList.add('hidden');
    document.getElementById('error-prenom-length').classList.add('hidden');
    document.getElementById('error-email').classList.add('hidden');
    document.getElementById('error-message').classList.add('hidden');
    document.getElementById('success-message').classList.add('hidden');
});
