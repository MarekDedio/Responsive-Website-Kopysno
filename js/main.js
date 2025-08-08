function openNav()
{
	document.getElementById("mySidenav").style.width = "350px";
}

function closeNav()
{
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";
}

function okno()
{
		var a = window.innerWidth;
		var y = document.getElementsByClassName("list-group-item");
		mybutton = document.getElementById("myBtn");
		if(a<1150)
			{
			document.getElementById("Kontakt").style.display="none";
			document.getElementById("a1").style.display="block";
			document.getElementById("Wiecej").style.display="block";

			for (i = 0; i < y.length; i++)
				{
					y[i].style.paddingRight = "5%";
					y[i].style.paddingLeft = "5%";
				}
			}
		if(a>1150)
			{
				document.getElementById("Kontakt").style.display="block";
				document.getElementById("a1").style.display="none";
				document.getElementById("Wiecej").style.display="none";

				for (i = 0; i < y.length; i++)
				{
					y[i].style.paddingRight = "25%";
					y[i].style.paddingLeft = "25%";
				}
			}
		if(a<1130)
			{
			document.getElementById("Archiwum").style.display="none";
			document.getElementById("a2").style.display="block";

			document.getElementById("a22").style.display="block";
			}
		if(a>1130)
			{
				document.getElementById("Archiwum").style.display="block";
				document.getElementById("a2").style.display="none";

				document.getElementById("a22").style.display="none";
			}
		if(a<965)
			{
			document.getElementById("Dawni").style.display="none";
			document.getElementById("a3").style.display="block";
			}
		if(a>965)
			{
				document.getElementById("Dawni").style.display="block";
				document.getElementById("a3").style.display="none";
			}
		if(a<863)
			{
			document.getElementById("Informacja").style.display="none";
			document.getElementById("a4").style.display="block";
			document.getElementById("a41").style.display="block";
			document.getElementById("a42").style.display="block";
			document.getElementById("a43").style.display="block";
			document.getElementById("a44").style.display="block";
			document.getElementById("a45").style.display="block";

			}
		if(a>863)
			{
				document.getElementById("Informacja").style.display="block";
				document.getElementById("a4").style.display="none";
				document.getElementById("a41").style.display="none";
				document.getElementById("a42").style.display="none";
				document.getElementById("a43").style.display="none";
				document.getElementById("a44").style.display="none";
				document.getElementById("a45").style.display="none";
			}
		if(a<776)
			{
			document.getElementById("Lokalizacja").style.display="none";
			document.getElementById("a5").style.display="block";
			document.getElementById("a51").style.display="block";
			}
		if(a>776)
			{
				document.getElementById("Lokalizacja").style.display="block";
				document.getElementById("a5").style.display="none";
				document.getElementById("a51").style.display="none";
			}
		if(a<557)
			{
			document.getElementById("Aktualnosci").style.display="none";
			document.getElementById("a6").style.display="block";
			}
		if(a>557)
			{
				document.getElementById("Aktualnosci").style.display="block";
				document.getElementById("a6").style.display="none";
			}
		if(a<300)
			{
			document.getElementById("Strona").style.display="none";
			document.getElementById("a7").style.display="block";
			}
		if(a>300)
			{
				document.getElementById("Strona").style.display="block";
				document.getElementById("a7").style.display="none";
			}

}
function ShowHideSearchBar()
	{
		var x = document.getElementById("SearchBar");
		if(x.style.display == "none")
		{
			x.style.display = "block"
		}
		else
		{
			x.style.display = "none"
		}
	}

function dissapear()
{
    var x = document.getElementById("SearchBar");
    if(x.style.display == "block")
    {
        x.style.display = "none"
    }
}

function TextHeightScale()
{
    var GTH = document.getElementById("GettingTextHeight");
    var vv = window.innerWidth;
    if(vv<=1800){
        GTH.style.fontSize = "16px";
    }
    else
    {
        GTH.style.fontSize = "0.88vw";
    }
}

function dost()
{
    t = document.getElementById("texto");
    g = document.getElementById("GettingTextHeight");
    a = window.innerWidth;
    if(a<1800 && a>1150)
    {
        t.style.paddingRight = "25%";
        t.style.paddingLeft = "25%";
    }
    if(a>1800 || a<1150)
    {
        t.style.paddingRight = "10px";
        t.style.paddingLeft = "10px";
    }
}

mybutton = document.getElementById("myBtn");
window.onscroll = function()
{
    myFunction();
    scrollFunction();
}
function scrollFunction()
{
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
    {
        mybutton.style.display = "block";
    }
    else
    {
        mybutton.style.display = "none";
    }
}
function topFunction()
{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
function myFunction()
{
    var BannerHeight = document.getElementById("BannerImage").offsetHeight;
    var header = document.getElementById("myHeader");
    if (window.pageYOffset > BannerHeight)
    {
        header.classList.add("sticky");
        document.getElementById("texto").style.paddingTop="42px";
    }
    else
    {
        header.classList.remove("sticky");
        document.getElementById("texto").style.paddingTop="0px";
    }
}

function BothIntervals()
{
    myFunction();
    TextHeightScale();
    dost();
}

// Fetch and insert navigation
fetch('navigation.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('myHeader').innerHTML = data;
        setInterval(okno,25)
    });

// Get the modal
const modal = document.getElementById('myModal');
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");

var img = document.querySelectorAll('.thumbnail');

for (var i=0; i<img.length; i++){

    img[i].onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    modalImg.alt = this.alt;
    captionText.innerHTML = this.alt;
}
}
// When the user clicks on <span> (x), close the modal
modal.onclick = function() {
    img01.className += " out";
    setTimeout(function() {
       modal.style.display = "none";
       img01.className = "modal-content";
     }, 400);
}

setInterval(BothIntervals,25);
