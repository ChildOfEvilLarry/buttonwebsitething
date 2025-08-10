// Simple script for navigation highlight (optional)
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            links.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Counter logic
    let counter = 0;
    const counterValue = document.getElementById('counter-value');
    const incrementBtn = document.getElementById('increment-btn');
    const resetBtn = document.getElementById('reset-btn');

    if (counterValue && incrementBtn && resetBtn) {
        incrementBtn.addEventListener('click', function() {
            counter++;
            counterValue.textContent = counter;
        });
        resetBtn.addEventListener('click', function() {
            counter = 0;
            counterValue.textContent = counter;
        });
    }

    // Dark mode toggle
    const darkModeBtn = document.getElementById('dark-mode-toggle');
    if (darkModeBtn) {
        darkModeBtn.addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            if (document.body.classList.contains('dark-mode')) {
                darkModeBtn.textContent = 'Light Mode';
            } else {
                darkModeBtn.textContent = 'Dark Mode';
            }
        });
    }
});
