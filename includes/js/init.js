var initAnalytics = function(){
	window.ga.startTrackerWithId('UA-86538752-1')
}
var initSudoAnalytics = function(){
	if (typeof analytics === undefined){
		analytics = new Object();
	}
	var ga = new Object()
	ga.trackEvent = function(){}
	window.ga = analytics
}


// this is for the old GA plugin, no longer in use
/*
var initAnalytics = function(){
	window.analytics.startTrackerWithId('UA-76493599-1')	
}

var sendAnalyticsEvent = function(category, action, label, value){
	try{
		window.analytics.trackEvent(category, action, label, value)
	} catch (e){
		// plugin isn't working / on browser
	}
}
*/

function checkConnection() {
	try {
		var networkState = navigator.network.connection.type;
	
		var states = {};
		states[Connection.UNKNOWN]  = 'Unknown connection';
		states[Connection.ETHERNET] = 'Ethernet connection';
		states[Connection.WIFI]     = 'WiFi connection';
		states[Connection.CELL_2G]  = 'Cell 2G connection';
		states[Connection.CELL_3G]  = 'Cell 3G connection';
		states[Connection.CELL_4G]  = 'Cell 4G connection';
		states[Connection.NONE]     = 'No network connection';
	
		return states[networkState];
	} catch (e){
		console.log(e);
	}
}


var backButton = function(){
	$('.back').on('click',function(){
		$(this).parent().slideUp();
		$(this).parent().removeClass('shown');
		initQuestionHistory();
	});
}


var app = document.URL.indexOf( 'http://' ) === -1 && document.URL.indexOf( 'https://' ) === -1;
if ( app ) {
	document.addEventListener("deviceready", function(){
		initAnalytics();
		startScreen();
		backButton();
		initLocalStorage();
		initFlashcards();
		displayAllSubjects();
		initSearch();
		initQuickDemo();
	});
} else {
	window.addEventListener("load", function(){
		//initSudoAnalytics();
		startScreen();
		backButton();
		initLocalStorage();
		initFlashcards();
		displayAllSubjects();
		initSearch();
		//initReferences();
		initQuickDemo();
	})
}



