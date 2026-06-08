document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');

    if (menuToggle && navList) {
        menuToggle.addEventListener('click', () => {
            navList.classList.toggle('active');
        });
    }

    // Validação de formulário de contato (exemplo para contato.html)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Impede o envio padrão do formulário

            const name = contactForm.querySelector('#name').value.trim();
            const email = contactForm.querySelector('#email').value.trim();
            const message = contactForm.querySelector('#message').value.trim();

            if (name === '' || email === '' || message === '') {
                alert('Por favor, preencha todos os campos do formulário.');
                return;
            }

            if (!validateEmail(email)) {
                alert('Por favor, insira um endereço de e-mail válido.');
                return;
            }

            // Se tudo estiver válido, você pode simular o envio ou fazer uma requisição AJAX
            alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
            contactForm.reset(); // Limpa o formulário
            // Aqui você pode adicionar lógica para enviar os dados para um backend
        });
    }

    function validateEmail(email) {
        const re = /[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});