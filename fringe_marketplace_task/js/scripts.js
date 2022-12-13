// icon function
$(document).ready(function(){
			$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
				$(this).toggleClass('open');
			});
		});

// hide and show section function (off-canvas menu, hidden nav bars, etc...)
function myFunction_gsm(sectionId) {
  let sec = document.querySelectorAll('.sec');
  sec.forEach(itm => {
    if(itm.id !== sectionId) itm.style.display = 'none'
  })
  var x = document.getElementById(sectionId);
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

let sec = document.querySelectorAll('.sec');
sec.forEach(itm => {
  itm.style.display = 'none'
})

// 	Accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// Responsive options for owl carousel
$('.owl-carousel').owlCarousel({
    items: 3,  // number of items to display
    responsive: {
      // responsive settings for different screen sizes
      0: {
        items: 1  // display 1 item on small screens
      },
      600: {
        items: 2  // display 2 items on medium screens
      },
      1000: {
        items: 3  // display 3 items on large screens
      }
    }
  });
