
console.log(document.getElementById("title"));

function sayHello(){
	var name=document.getElementById("name").value;
	var message = "<h2>Hello "+name+ " !</h2>"; // So here <h2> works as HTML element as "innerHTML" is called. But if we'll not
	// invoke "innerHTML" and simply use the "textContent" property , <h2> tag will printed as a string. 
	console.log(message);

	document.getElementById("content")
	.textContent= message; // there is a property to be able to insert text inside of an element.
	//if I say "textContent", and say the textContent is equal to message, and put a semicolon after that,
	// and save that, so now when I say, Yaakov, and say, Say It, this message shows up on the browser.

	document.getElementById("content")
	.innerHTML= message; // So when we say "innerHTML", the thing that gets assigned to it is going to be interpreted as HTML 
	// tag/element and therefore rendered.

	if(name === "student"){
		var title = document.querySelector("#title").textContent; // the method we could use, and instead of "getElementById",
		// is called "querySelector". because "getElementById" really just restricts you to be able to select things within your
		// page by ***ID***, but you might want to be able to select it by other things. So, like for example, the way you select 
		// things using CSS. 
		// And in this case, "querySelector" takes not the ID name but actually, a selector. So if we wanted to select it by ID,
		// in this case, title, you would do the same thing you would do in CSS by selecting this element. Well, the way you would
		// do that is, you would actually specify #title iside the quotation.
		// Using "querySelector", we can specify the particular element which we want to retrieve, suppose for example we want to 
		// retrieve <p> element, so we specify the "p" tag inside the "querySelector" similar like we specify in CSS , as-
		// ***document.querySelector("p");***
		title += " is interesting!"
		document.querySelector("#title").textContent = title;

	}
	console.log(document.querySelector("p"));
}