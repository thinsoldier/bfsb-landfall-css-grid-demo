landfall = function ()
{
	showForm = function()
	{
		$('#form').toggleClass('active');
		$('.p1').toggleClass('inactive');
		$('#register').toggleClass('inactive');
	}
	
	toggleForm = showForm;
	

	openForm = function()
	{
		$('#form').addClass('active');
		$('.p1').addClass('inactive');
		$('#register').addClass('inactive');
	}

	closeForm = function()
	{
		$('#form').removeClass('active');
		$('.p1').removeClass('inactive');
		$('#register').removeClass('inactive');
	}

	onlyOneCheck = function()
	{
		var find = $('input.mutuallyexclusive:checked');
		if( find.length > 1 ){ 
			$('.THERECANBEONLYONE').addClass('active');
			self.blockSubmission();
		} else { 
			$('.THERECANBEONLYONE').removeClass('active');
			self.allowSubmission();
		}
	}
	
	blockSubmission = function()
	{
		$('#submitbutton').fadeOut();
	}


	allowSubmission = function()
	{
		$('#submitbutton').fadeIn();
	}

	init = function()
	{
		$('#register').click( showForm );
		
		$('#cancel-form').click( showForm );
		
		$('.p1').click( closeForm );
		
		$('input.mutuallyexclusive').click( onlyOneCheck );
		
		$('.init').removeClass('init').addClass('xinit');
		
	   if(window.location.hash) 
	   { 
	   	// console.log('hash present');
	   	// Always show the form area if there is a hash in the url.
	    	openForm();
	   }
	   
	   if(window.location.search.match(/showThanks/) != null) 
	   {
	   	openForm();
	   	// console.log('thanks view');
	   	// If definitely on the showThanks view, close the form area after 30 seconds
	   	setTimeout(function(){ closeForm() }, 30500);
	   } else {
	   	// console.log('initial view');
	   	// If looking at a fresh page load, auto show form after 30 seconds
	   	// setTimeout(function(){ openForm() }, 30500);
	   }
    }
    
    // make internal methods available externally.
    var methods = {
    showForm:showForm,
    toggleForm:toggleForm,
    closeForm:closeForm,
    onlyOneCheck:onlyOneCheck,
    blockSubmission:blockSubmission,
    allowSubmission:allowSubmission,
    init:init
    }    
    return methods;
}();


$( function(){ landfall.init() } );