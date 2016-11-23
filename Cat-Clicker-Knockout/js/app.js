var viewModel = function() {
	this.clickCount = ko.observable(0);
	this.name = ko.observable("Puffy");
	this.imgSrc = ko.observable("img/1.jpg");

	this.incrementCounter = function () { 
		this.clickCount(this.clickCount() + 1);
	}

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

ko.applyBindings(new viewModel());