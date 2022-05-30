let slideIndex = [1, 1];
viewSlides(1);
function changeSlide(n) {
  viewSlides((slideIndex[0] += n));
}
function viewSlides(n) {
  let ele = document.getElementsByClassName("slide");
  if (n > ele.length) {
    slideIndex[0] = 1;
  }
  if (n < 1) {
    slideIndex[0] = ele.length;
  }
  for (i = 0; i < ele.length; i++) {
    ele[i].style.display = "none";
  }
  ele[slideIndex[0] - 1].style.display = "block";
}
