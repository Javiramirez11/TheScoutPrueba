document.addEventListener('DOMContentLoaded', function() {
    var loadMoreBtn = document.querySelector('.load-more-btn');
    var loadLessBtn = document.querySelector('.load-less-btn');
    var content = document.querySelector('.content');
    var paragraphs = document.querySelectorAll('.content p');

    loadMoreBtn.addEventListener('click', function() {
        content.classList.add('show-more');
        loadMoreBtn.style.display = 'none';
        loadLessBtn.style.display = 'inline-block';
    });

    loadLessBtn.addEventListener('click', function() {
        content.classList.remove('show-more');
        loadLessBtn.style.display = 'none';
        loadMoreBtn.style.display = 'inline-block';
    });

    if (paragraphs.length > 2) {
        loadMoreBtn.style.display = 'inline-block';
    }
});
