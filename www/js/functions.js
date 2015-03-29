

function vectordis(i,lat,lon)
{
    var citylat = cities.cities[i].lat;
    var citylon = cities.cities[i].lon;
    var dislat = lat - citylat;
    var dislon = lon - citylon;
    var vectordis = Math.sqrt(((dislat)*(dislat))+((dislon)*(dislon)));
    if(low==null)
    {
      low=i;
      vectordislow = vectordis;
    }
    else
    {
    if(vectordis < vectordislow)
    {
	     low=i;
	    vectordislow=vectordis;
    }
    }
    
    returned = cities.cities[low].name;
}

function getcity(lat,lon){
  
  for(var j = 0;j<6;j++)
  {
   vectordis(j,lat,lon);
  }
  document.getElementById("city").innerHTML = returned;
  autocomplete(returned)
}

function autocomplete(city)
{           
            $(function() {
            create_form(window[city]);
            $( "#automplete-1" ).autocomplete({
               source: window[city]
            });
         });
}

function create_form(array1)
{
		alert(array1[0]);
		$('#form1').append("<form action='' method='POST'>");
		$('#form1 form').append("<div class='appm'>Choose one<div/>");
		for(var i=0;i<array1.length;i++)
		    {
		 		 $('#form1 form').append("<input type='radio' name='city' value='" + array1[i]+ "'>"+array1[i]+"<br>");
		    }
		$('#form1 form').append("<br><input type='submit' id='savebutton' value='Submit' />");
}

function getsuggestions(loc)
{
				  var tarlat;
				  var tarlon;
				  tarlat = parseFloat(loc.coords.latitude);
                  tarlon = parseFloat(loc.coords.longitude);
                  document.getElementById("lat").innerHTML = loc.coords.latitude;
                  document.getElementById("lon").innerHTML = loc.coords.longitude;
                  getcity(tarlat,tarlon);
}