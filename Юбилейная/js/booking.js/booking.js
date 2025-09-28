document.getElementById('bookingForm').addEventListener('submit', function(e){
  e.preventDefault();
  alert('Форма отправлена (тестовая версия)');
  this.reset();
});