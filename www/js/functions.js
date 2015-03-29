function vectordis(i)
{
    var citylat = cities.cities[i].lat;
    var citylon = cities.cities[i].lon;
      var dislat = tarlat - citylat;
      var dislon = tarlon - citylon;
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
    
    return cities.cities[low].name;
}

function getcity(){
  for(var j = 0;j<6;j++)
  {
    ret = vectordis(j);
  }
  document.getElementById("city").innerHTML = ret;
}

function getsuggestions()
{
                     $.post( 
            		 "http://vesitpremierleague.url.ph/returntoajaxcity.php",
		             { city: ret,
		              },
			             function(data) {
			        		array = data.split(',');
			                $(function() { 
			                create_form();       
			            $( "#automplete-1" ).autocomplete({
			               source: array
			            });
			         });
			             }
			          );
}

function create_form()
{
		$('#form1').append("<form action='' method='POST'>");
		$('#form1 form').append("<div class='appm'>Choose one<div/>");
		for(var i=0;i<array[0];i++)
		    {
		 		 $('#form1 form').append("<input type='radio' name='city' value='" + array[i+1]+ "'>"+array[i+1]+"<br>");
		    }
		$('#form1 form').append("<br><input type='submit' id='savebutton' value='Submit' />");
}


function getcoods(loc)
{
                  document.getElementById("lat").innerHTML = loc.coords.latitude;
                  document.getElementById("lon").innerHTML = loc.coords.longitude;
                  tarlat = parseFloat(loc.coords.latitude);
                  tarlon = parseFloat(loc.coords.longitude);
}