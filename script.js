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
        button.textContent = '<< Minimize 最小化';
    } else {
        content.style.display = 'none';
        button.textContent = 'Expand 拡大 >>';
    }
});

