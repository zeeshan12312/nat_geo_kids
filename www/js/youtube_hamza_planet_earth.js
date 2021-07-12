// YOU WILL NEED TO ADD YOUR OWN API KEY IN QUOTES ON LINE 5, EVEN FOR THE PREVIEW TO WORK.
// 
// GET YOUR API HERE https://console.developers.google.com/apis/api


// https://developers.google.com/youtube/v3/docs/playlistItems/list

// https://console.developers.google.com/apis/api/youtube.googleapis.com/overview?project=webtut-195115&duration=PT1H

// <iframe width="560" height="315" src="https://www.youtube.com/embed/qxWrnhZEuRU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

// https://i.ytimg.com/vi/qxWrnhZEuRU/mqdefault.jpg

 	var key = 'AIzaSyCtS5DMCJuq3EEmujwqsezyFhXftj8js1s';
   // var playlistId = playlist;
    var URL = 'https://www.googleapis.com/youtube/v3/playlistItems';

var backbuttonpress = 0;
$(document).ready(function () {

   if(navigator.onLine){
  //alert('online');
 } else {
  alert('Please connect to internet and restart app.');
 }

	
	
	document.addEventListener("backbutton", function(e){
		 if(backbuttonpress === 0)
		 {
			navigator.app.exitApp(); 
		 }
       
       else { 
		    e.preventDefault();
			fullScreen();
	backbuttonpress = 0;
	// menu.classList.toggle('active');
	//toggler.classList.toggle('active');
	
	 $(".categories").show();
	  $(".page-content").hide();
		   
       }
    }, false);
});


function home()
{
	backbuttonpress = 0;
	fullScreen();
	 menu.classList.toggle('active');
	toggler.classList.toggle('active');
	
	 $(".categories").show();
	  $(".page-content").hide();
}
  function loadVids(playlistId, menu1) {
	   backbuttonpress = 1;
	 fullScreen();
	  if(menu1 == 1)
		  {
			  menu.classList.toggle('active');
			  toggler.classList.toggle('active');
		  }
	  $(".categories").hide();
	  $(".page-content").show();
	  $('.row').html('<div class="loader"><div class="page-loader"></div></div>');
		var options = {
        part: 'snippet',
        key: key,
        maxResults: 50,
        playlistId: playlistId
    }
        $.getJSON(URL, options, function (data) {
            var id = data.items[0].snippet.resourceId.videoId;
            //mainVid(id);
            resultsLoop(data);
        });
    }


    function resultsLoop(data) {
		$('.row').html("");
		
		//$('.row').html("");
        $.each(data.items, function (i, item) {

            var thumb = item.snippet.thumbnails?item.snippet.thumbnails.medium.url:'https://www.radiationreport.com/wp-content/uploads/2013/08/no-preview.jpg';
            var title = item.snippet.title;
            var desc = item.snippet.description.substring(0, 100);
            var vid = item.snippet.resourceId.videoId;


            $('.row').append(`<div class="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div class="card" style="background-color:#5A6169; color:#fff;">
                <img class="card-img-top" src="${thumb}" alt="${title}">
                <div class="card-body">
                  <h4 class="card-title">${title}</h4>
                  <p class="card-text">${desc}</p>
                  <button style="width:100%;" type="button" class="btn btn-pill btn-warning playvideo" onclick="mainVid('${vid}')">
                 Play Video</button>
                </div>
              </div>
            </div>`);
        });
    }
 function mainVid(id) {
		/*$('#exampleModal').modal('show'); 
		//alert('test');
        $('.video').html(`<iframe width="100%" height="350" src="https://www.youtube.com/embed/${id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`); */
	 fullScreen();
	 try {
        window.InAppYouTube.openVideo(id, {
          fullscreen: true
        }, function(result) {
          // console.log(JSON.stringify(result));
        }, function(reason) {
          // console.log(reason);
        });
      } catch(e) {
        // Exception!
      }

    }





