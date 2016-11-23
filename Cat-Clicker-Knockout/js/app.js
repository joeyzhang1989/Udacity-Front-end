var Cat = function () {
	this.clickCount = ko.observable(0);
	this.name = ko.observable("Puffy");
	this.imgSrc = ko.observable("img/1.jpg");
	this.nickNames = ko.observableArray(["Cherry","Furry","Poop","Cutie","Short"]);
	this.level = ko.computed(function() {
       if (this.clickCount() <= 10) {
			return "New Born";
		}
		if (this.clickCount() <= 20) {
			return "Infant";
		}
		if (this.clickCount() <= 30) {
			return "Teen";
		}
		if (this.clickCount() <= 40) {
			return "Adult";
		}
    }, this);
};

var viewModel = function() {
	this.currentCat = ko.observable(new Cat());
	this.incrementCounter = function () { 
		this.clickCount(this.clickCount() + 1);
	}
};

ko.applyBindings(new viewModel());