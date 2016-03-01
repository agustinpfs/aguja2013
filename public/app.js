

setTimeout(function(){
    document.getElementById("video").play()
    document.getElementById('v').style.display = 'block'


}, 10000);



function showForm() {
	$( ".Layout-contact" ).fadeToggle( 1000 )
}

function showLeyend() {
	$( ".Layout-leyend" ).fadeToggle( 3000 )
}
// function moveServices() {
// $( ".servicesh2" ).toggleClass('status1--services, status2--services')
// $( ".Layout-services_content" ).fadeToggle( 400 )
// }
// function moveContact() {
// $( ".Layout-services_content" ).fadeOut( 200 ) 
// $( ".Layout-techno_content" ).fadeOut( 200 ) 
// $( ".servicesh2" ).removeClass('status2--services') 
// $( ".technoh2" ).removeClass('status2') 
// $( ".servicesh2" ).addClass('status1--services u-displayNone')
// $( ".technoh2" ).addClass('status1 u-displayNone')
// $( ".contacth2" ).toggleClass('status1--contact, status2--contact')
// 	setTimeout(function(){
// 		$( ".Layout-h1" ).addClass('status2--logo')
// 		$( ".contacth2" ).addClass('status3--contact')
// 		setTimeout(function(){
// 			$( ".Contact" ).slideDown( 500 )
// 			$( ".icon-logo1" ).fadeIn( 1000 )
// 		}, 500)

// 	}, 200)
// }

$( ".Layout-dev, #submit" ).on( "click", showForm )
$( "#submit" ).on( "click", showLeyend )


  
  
