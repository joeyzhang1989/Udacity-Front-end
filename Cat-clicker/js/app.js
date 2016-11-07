$(function(){

	var model = {
		init: function () {
			if (!localStorage.cats) {
                localStorage.cats = JSON.stringify([]);
            }
		},
		add: function(obj) {
			var data = JSON.parse(localStorage.cats);
            data.push(obj);
            localStorage.cats = JSON.stringify(data);
		},
		getAllCats:function () {
			return JSON.parse(localStorage.cats);
		}
	};
	var octopus = {
		addNewCats: function(name,location,count) {
			model.add ({
				catName: name,
				src: location,
				count: count
			});	
			displayView.render();
			selectView.render();
		},
		getCats: function () {
			return model.getAllCats();
		},
		init: function() {
			model.init();
			displayView.init();
			selectView.init();
		}
	};
	var displayView = {
		init: function () {
			this.catdisplay = $('#catdisplay');

		},
		render: function () {

		}
	};
	var selectView = {
		init: function () {
			this.catselection = $('#catselection');

		},
		render: function () {
			
		}
	};

});

// <p id="catName"></p>
// 			<img src="images/cat1.jpg" id="catDisplay">
// 			<p>Click score:</p>
// 			<p id="score">0</p>
// 			<div class="cat-img">
// 				<p id="catName1"></p>
// 				<img src="images/cat1.jpg">
// 			</div>


	var catName1 = "chewie";
	var catName2 = "poop";
	var catName3 = "cutie";
	var catName4 = "fury";
	var catName5 = "bubble";
	var count = 0;

	var catName = document.getElementById('catName');
	catName.textContent = catName1;

	//set the cat names to the cat images on the selection area
	function setName () {
		document.getElementById('catName1').textContent = catName1;
		document.getElementById('catName2').textContent = catName2;
		document.getElementById('catName3').textContent = catName3;
		document.getElementById('catName4').textContent = catName4;
		document.getElementById('catName5').textContent = catName5;
	}
		
	
	setName();
	var catDisplay = document.getElementById('catDisplay');
	var select = document.getElementById('cat-img');

	select.addEventListener("click", function changeCat(e) {
		 if (e.target !== e.currentTarget) {
		 	console.log(this.children);
	        catDisplay.setAttribute('src', this.children[1].getAttribute('src'));
	       	catName.setAttribute('textContent', this.children[0].getAttribute('textContent'));
	    }
	    e.stopPropagation();

	}, false);

	
	//use the Immediately-Invoked Function Expression to keep local variable
	catDisplay.addEventListener('click', (function(countcopy){
		return function () {
			countcopy += 1;
			var paragraph = document.getElementById('score');
			paragraph.textContent = countcopy;
		};
	})(count));

