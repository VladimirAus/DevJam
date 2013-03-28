
describe ("Translate Word", function() {
	
	beforeEach(function() {
		this.addMatchers({
			toMatchElementSymbols: function(Array) {
				for (var i=0; i < Array.length; i++) {
					if (Array[i].toLowerCase() != this.actual[i].symbol.toLowerCase())
					{
						return false;
					}		
				}
				return true;
			},
			toMatchElementNames: function(Array) {
				for (var i=0; i < Array.length; i++) {
					if (Array[i].toLowerCase() != this.actual[i].name.toLowerCase())
					{
						return false;
					}
				}
				return true;
			}
		})
	})
	it ("translates frag to francium and silver", function() {
		var translator = new PTEWordTranslator(pteJSON);
			
		expect(translator.translateWord("frag")).toMatchElementSymbols(new Array("fr", "ag"));
	});
	it ("translates F to fluorine", function() {
		var translator = new PTEWordTranslator(pteJSON);
			
		expect(translator.translateWord("F")).toMatchElementNames(new Array("fluorine"));
	});
	it ("returns empty when it fails translation", function() {
		var translator = new PTEWordTranslator(pteJSON);
		
		expect(translator.translateWord("OMGZ0RZ")).toEqual(new Array());
	});
});