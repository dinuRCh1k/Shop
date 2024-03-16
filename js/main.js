document.querySelector('.burger').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav-list').classList.toggle('open');
})
document.querySelectorAll('.click-block').forEach(function(block) {
    block.addEventListener('click', function() {
        document.querySelector('.overlay').style.display = 'block';
    });
});

document.querySelector('.overlay').addEventListener('click', function() {
    this.style.display = 'none';
});