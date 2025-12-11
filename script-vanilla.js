document.addEventListener('DOMContentLoaded', function() {

    const tabButtons = document.querySelectorAll('.tab-btn');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('active');
            });

            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });

            this.classList.add('active');

            const tabId = this.dataset.tab;
            const targetContent = document.getElementById(tabId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {

    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); 

            const targetId = this.getAttribute('href'); 
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth' 
                });
            }
        });
    });
});

document.getElementById('loadQuote').addEventListener('click', function() {
    fetch('https://api.quotable.io/random')
        .then(response => {
            if (!response.ok) {
                throw new Error('Сетевая ошибка');
            }
            return response.json(); 
        })
        .then(data => {
            document.querySelector('#quote p').textContent = data.content;
            
            document.querySelector('#quote cite').textContent = data.author;
        })
        .catch(error => {
            document.querySelector('#quote p').textContent = 'Не удалось загрузить цитату :(';
            document.querySelector('#quote cite').textContent = '';
            console.error('Ошибка:', error);
        });
});

document.addEventListener('DOMContentLoaded', function() {
    const draggable = document.getElementById('draggable');

    let offsetX = 0;
    let offsetY = 0;
    let isDragging = false;

    draggable.addEventListener('mousedown', function(e) {
        offsetX = e.clientX - draggable.getBoundingClientRect().left;
        offsetY = e.clientY - draggable.getBoundingClientRect().top;

        isDragging = true;
        draggable.classList.add('dragging');
    });

    document.addEventListener('mousemove', function(e) {
        if (!isDragging) return;

        draggable.style.left = (e.clientX - offsetX) + 'px';
        draggable.style.top = (e.clientY - offsetY) + 'px';
        draggable.style.position = 'fixed';
    });

    document.addEventListener('mouseup', function() {
        if (isDragging) {
            isDragging = false;
            draggable.classList.remove('dragging');
        }
    });

    draggable.addEventListener('dragstart', function(e) {
        e.preventDefault();
    });
});