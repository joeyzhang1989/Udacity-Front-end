var cats = [
        {
            clickCount : 0,
            name : 'Cherry',
            imgSrc : 'img/cat1.jpg',
            imgAttribution : 'https://www.flickr.com/photos/bigtallguy/434164568',
            nickNames: ["Ginger"]
        },
        {
            clickCount : 0,
            name : 'Furry',
            imgSrc : 'img/cat2.jpg',
            imgAttribution : 'https://www.flickr.com/photos/xshamx/4154543904',
            nickNames: ["Fu"]
        },
        {
            clickCount : 0,
            name : 'Poop',
            imgSrc : 'img/cat3.jpg',
            imgAttribution : 'https://www.flickr.com/photos/kpjas/22252709',
            nickNames: ["Po"]
        },
        {
            clickCount : 0,
            name : 'Cutie',
            imgSrc : 'img/cat4.jpg',
            imgAttribution : 'https://www.flickr.com/photos/malfet/1413379U59',
            nickNames: ["Ti"]
        },
        {
            clickCount : 0,
            name : 'Short',
            imgSrc : 'img/cat5.jpg',
            imgAttribution : 'https://www.flickr.com/photos/onesharp/9648464288',
            nickNames: ["Mie"]
        }
    ]

var Cat = function (data) {
	this.clickCount = ko.observable(data.clickCount);
	this.name = ko.observable(data.name);
	this.imgSrc = ko.observable(data.imgSrc);
	this.imgAttribution = ko.observable(data.imgAttribution);
	this.nickNames = ko.observableArray(data.nickNames);
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
		else {
			return "Ninja";
		}
    }, this);
};

var viewModel = function() {
	var self = this;

	this.catList = ko.observableArray([]);

	cats.forEach(function(catItem) {
		self.catList.push( new Cat(catItem));
	});

	this.currentCat = ko.observable( this.catList()[0]);

	this.setCurrentCat = function (clickedCat) {
        self.currentCat(clickedCat);
	}

	this.incrementCounter = function () { 
		self.currentCat().clickCount(self.currentCat().clickCount() + 1);
	}
};

ko.applyBindings(new viewModel());