function openNav()
{
	document.getElementById("mySidenav").style.width = "350px";
}

function closeNav()
{
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";
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
