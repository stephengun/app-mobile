$(function(){
  setInterval(function(){
     $(".slideshow ul").animate({marginLeft:-500},800,function(){
        $(this).css({marginLeft:0}).find("li:last").after($(this).find("li:first"));
     })
  }, 3500);
});

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn','.bla')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
