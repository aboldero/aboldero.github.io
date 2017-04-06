var total = 0;

// Addition

$('#a10').click(function () {
	var a10 = 10;
	var newTotal = a10 + total;
	total = newTotal;
	$('#out').html(total);
})

$('#a20').click(function () {
	var a20 = 20;
	var newTotal = a20 + total;
	total = newTotal;
	$('#out').html(total);
})

$('#a30').click(function () {
	var a30 = 30;
	var newTotal = a30 + total;
	total = newTotal;
	$('#out').html(total);
})

// Subtraction

$('#n10').click(function () {
	var n10 = 10;
	var newTotal = total - 10;
	total = newTotal;
	$('#out').html(total);
})

$('#n20').click(function () {
	var n20 = 20;
	var newTotal = total - 20;
	total = newTotal;
	$('#out').html(total);
})

$('#n30').click(function () {
	var n30 = 30;
	var newTotal = total - 30;
	total = newTotal;
	$('#out').html(total);
})

// Color Change

$('#red').click(function () {
	$('#out').css('background-color','red');
})

$('#blue').click(function () {
	$('#out').css('background-color','blue');
})

// Reset

$('#out').click(function () {
	$('#out').css('background-color','white');
	$('#out').html(0);
})