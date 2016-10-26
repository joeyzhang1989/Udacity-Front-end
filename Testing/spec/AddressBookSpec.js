describe ("AddressBook", function() {
	beforeEach(function() {
	var addressBook = new AddressBook(),
		thisCotact = new Contact();
	});

	var addressBook = new AddressBook(),
			thisCotact = new Contact();
	it("should be able to add a contact", function() {
		addressBook.addContact(thisCotact);
		expect(addressBook.getContact(0)).toBe(thisCotact);
	});

	it("should be able to delete a contact", function() {
		addressBook.addContact(thisCotact);
		addressBook.deleteContact(0);
		expect(addressBook.deleteContact(0)).not.toBeDefined();
	});
});

describe ("Async Address Book", function() { 
	var addressBook = new AddressBook();

	beforeEach(function(done) {
		addressBook.getInitalContacts(function () {
			done();
		});
	});

	it('should grab initial contatcs', function(done){
		expect(addressBook.initalComplete).toBe(true);
		done();
	});
});
