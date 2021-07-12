function initApp() {
     
		
            admob.banner.config({
                id: 'ca-app-pub-6844478419441129/4550125119',
                autoShow: true,
				isTesting: false,
            });

            // Create banner
            admob.banner.prepare();

            admob.interstitial.config({
                id: 'ca-app-pub-6844478419441129/8764879901',
                autoShow: false,
				isTesting: false,
            });
            admob.interstitial.prepare();
        
		
	
	
}
function fullScreen()
{
admob.interstitial.show();
//admob.interstitial.prepare();
}
document.addEventListener('admob.banner.events.LOAD_FAIL', function(event) {
  console.log(event)
});

document.addEventListener('admob.interstitial.events.LOAD_FAIL', function(event) {
  console.log(event)
});

document.addEventListener('admob.interstitial.events.CLOSE', function(event) {
  console.log(event)

  admob.interstitial.prepare()
})
document.addEventListener('deviceready', initApp, false);