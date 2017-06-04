function initXHR(x, value) {
	console.log(x); 
	if (x == 'home') {
		document.getElementById("home").style.display = "block";
		document.getElementById("recipes").style.display = "none";
		document.getElementById("sRecipe").style.display = "none";
	}
	else if (x == 'recipes') {
		//		retrieveActiveRecipesFromServer('/app/json/recipes.json');
		retrieveActiveRecipesFromServer('/app/recipe/', 'recipes');
		document.getElementById("home").style.display = "none";
		document.getElementById("recipes").style.display = "block";
		document.getElementById("sRecipe").style.display = "none";		
	}
	else if (x == 'sRecipe') {
		retrieveActiveRecipesFromServer('/app/recipe/' + value, 'sRecipe');
		document.getElementById("home").style.display = "none";
		document.getElementById("recipes").style.display = "none";
		document.getElementById("sRecipe").style.display = "block";
	}
	else {
		document.getElementById("home").style.display = "block";
		document.getElementById("recipes").style.display = "none";
		document.getElementById("sRecipe").style.display = "none";
	}
}

function retrieveActiveRecipesFromServer(url, operation) {
	var xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var returnValues = JSON.parse(xmlhttp.responseText);
			if (operation == "recipes") {
				populateRecipesView('recipes', returnValues);
			}
			else if (operation == "sRecipe") {
				populateReceipeDetails('details', returnValues);				
			}
		}
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}

//DOM based function
function populateRecipesView(elementId, recipes) {
	var element = document.getElementById(elementId);
	var newElement = "<h3 class=\"panel-heading\">Recipes</h3>";

	for (var i = 0; i < recipes.length; i++) {
		newElement += "<div class=\"panel panel-info\">";
		newElement += "<h4 class=\"panel-heading\"><a href=\"javascript:initXHR('sRecipe'," +  (i+1) + ")\">"  + recipes[i].recipeTitle + "</a></h4>";
		newElement += "<div class=\"panel-body\">";
		newElement += "<p><strong>Ingredients: </strong>" + recipes[i].ingredients  + "</p>";
		newElement += "</div>";
		newElement += "<table class=\"table\" style=\"font-size:10pt;\">";
		newElement += "<tbody>";
		newElement += "<tr>";
		newElement += "<td><strong>Calories: </strong><span>" + recipes[i].calories + "</span></td>";
		newElement += "<td><strong>Fat: </strong><span>" + recipes[i].fat + "</span></td>";
		newElement += "<td><strong>Protein: </strong><span>" + recipes[i].protein + "</span></td>";
		newElement += "<td><strong>Carbohydrates: </strong><span>" + recipes[i].carbs + "</span></td>";
		newElement += "</tr>";
		newElement += "</tbody>";
		newElement += "</table>";
		newElement += "</div>";
	}

	element.innerHTML = newElement;
}

//DOM based function
function populateReceipeDetails(elementId, recipe) {
	var element = document.getElementById(elementId);
	var newElement = "";

		newElement += "<div class=\"panel panel-info\">";
		newElement += "<h4 class=\"panel-heading\">" + recipe.recipeTitle + "</h4>";
		newElement += "<ul><strong>Calories: </strong>" + recipe.calories + "</ul>";
		newElement += "<ul><strong>Protein: </strong>" + recipe.protein + "</ul>";
		newElement += "<ul><strong>Carbohydrates: </strong>" + recipe.carbs + "</ul>";
		newElement += "<ul><strong>Fat: </strong>" + recipe.fat + "</ul>";
		newElement += "<ul><strong>Sugar: </strong>" + recipe.sugar + "</ul><br><br>";
		newElement += "<ul><strong>Ingredients: </strong>" + recipe.ingredients + "</ul><br><br>";
		newElement += "<ul><strong>Instructions: </strong>" + recipe.instructions + "</ul>";
	
		

	element.innerHTML = newElement;	
}

