document.addEventListener('DOMContentLoaded', function() {

  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      
      // Убираем active у всех кнопок и контентов
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));

      // Добавляем active к текущей
      button.classList.add('active');
      const targetTab = button.getAttribute('data-tab');
      document.getElementById(targetTab).classList.add('active');

    });
  });

  // Плавный переход при загрузке
  const contentWrapper = document.querySelector('.content');
  if (contentWrapper) {
    contentWrapper.style.opacity = 0;
    setTimeout(() => {
      contentWrapper.style.transition = 'opacity 1s';
      contentWrapper.style.opacity = 1;
    }, 300);
  }

});