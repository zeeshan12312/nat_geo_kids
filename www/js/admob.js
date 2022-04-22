function initApp() {
     
		
            admob.banner.config({
                id: 'AD-ID',
                autoShow: true,
				isTesting: false,
            });

            // Create banner
            admob.banner.prepare();

            admob.interstitial.config({
                id: 'AD-ID',
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
