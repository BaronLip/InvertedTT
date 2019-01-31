var overlayOne = document.querySelector('.challenge .active');

overlayOne.addEventListener('mouseover', function(e){
  if(e.target.classList.contains('challenge active')) {
    e.target.classList.remove('active');
  } else {
    e.target.classList.add('active');
  }
});


// 1.  mouse over - mission statement text fades out.
// 2. challenge statement fades in.
// 3. mouse off - challenge statement fades out. 