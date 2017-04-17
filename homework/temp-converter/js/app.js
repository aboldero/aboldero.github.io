// Class 11 - Temperature Converter

// === GOALS ===
// 1) Build a web app that converts fahrenheit to celsius, and vice versa.
// 2) Implement if/else if/else statements that perform some sort of UI-change based on the user's input. For example, considering changing the background to blue for colder temps and red for higher temps.

// === CONSIDERATIONS ===
// 1) How will your users input the temperature? What sort of element should you use to capture this input?
// 2) What user action (browser event) will cause the conversion to happen? So far, we've seen .click() events - consider exploring key-based events: .keypress() or .keyup() or .keydown()

// === HINTS ===
// - You will have to use parseInt() or parseFloat() to convert the user's input from a string to a number
// - Formulas:
// 	Fahrenheit = (Celsius * 1.8) + 32
// 	Celsius = (Fahrenheit - 32) / 1.8

$(document).ready(function () {
	$("#convert").click(function (){
		var fDegree = $('#fahrenheit').val();
		var cDegree = $('#celsius').val();
		if (fDegree != 0) {
			var cDegree = parseFloat((fDegree - 32) / 1.8);
			$("#celsius").val(cDegree);
		} else if (cDegree != 0) {
			var fDegree = parseFloat((cDegree * 1.8) + 32);
			$("#fahrenheit").val(fDegree);
		}
	});
})

$("input:text").each(function ()
{
    // store default value
    var v = this.value;

    $(this).blur(function ()
    {
        // if input is empty, reset value to default 
        if (this.value.length == 0) this.value = v;
    }).focus(function ()
    {
        // when input is focused, clear its contents
        this.value = "";
    }); 
});