const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));


var mybutton = document.getElementById("top");
window.onscroll = function () {
	scrollFunction();
	myFunction();
};

var header = document.getElementById("tabs");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
};

function scrollFunction() {
	if (
		document.body.scrollTop > 500 ||
		document.documentElement.scrollTop > 500
	) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
};

function topFunction() {
	document.body.scrollTop = 10;
	document.documentElement.scrollTop = 10;
};

// TABS
var tabLinks = document.querySelectorAll(".tablinks");
var tabContent = document.querySelectorAll(".tabcontent");
tabLinks.forEach(function (el) {
	el.addEventListener("click", openTabs);
});
function openTabs(el) {
	var btnTarget = el.currentTarget;
	var work = btnTarget.dataset.work;
	tabContent.forEach(function (el) {
		el.classList.remove("active");
	});
	tabLinks.forEach(function (el) {
		el.classList.remove("active");
	});
	document.querySelector("#" + work).classList.add("active");
	btnTarget.classList.add("active");
};


