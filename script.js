	function calculate() {




		var name   = document.getElementById('name').value;
		var loveName   = document.getElementById('loveName').value;

	         if (name == '') {
	         	alert('Please enter your name');
	         } else if (loveName == '') {
	         	alert('Please enter your love name');

	         } else if (!isNaN(name)) {
                alert('Numbers are not allowed');
	         } else if (!isNaN(loveName)) {
                alert('Numbers are not allowed');

	         } else if (name.length <= 2) {
                alert('This is not your name');
	         } else if (loveName.length <= 2) {
	         	alert('this is not your love name');
	         } else {

                let mathRandom = Math.random() * 100;
                let ans        = Math.floor(mathRandom);

	         	document.getElementById('result').value = ans+'%';

	         }




	}