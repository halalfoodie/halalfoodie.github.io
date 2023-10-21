$(document).ready(function() {
  $('.food').click(function() {
    $('.nav-links').toggleClass('active');
  });
});

var button = document.getElementById('expandButton');
var content = document.getElementById('expandableContent');

button.addEventListener('click', function () {
    if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        button.textContent = 'Read Less >>';
    } else {
        content.style.display = 'none';
        button.textContent = 'Read More >>';
    }
});

