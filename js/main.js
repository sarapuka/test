$(function(){
  
	$('.slider__inner, .news__slider-inner').slick({
		 nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
		 prevArrow: '<button type="button" class="slick-btn slick-prev"> </button>',
		 infinite: false
	   
	 });
	
	$('select').styler();
	
	$('.header__btn-menu').on('click', function(){
		$('.menu ul').slideToggle();
	  });  
	//   $('.menu ul').on('click', function(){
	// 	$('.menu ul').fadeOut(100);
	//   });
	});	
	$(document).ready( function() {
		$("#fl_inp").change(function(){
			 var filename = $(this).val().replace(/.*\\/, "");
			 $("#fl_nm").html(filename);
		});
	});
$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("спасибо, ожидайте звонка!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
//e-mail
function onEmail(t) {
	document.getElementById('error').innerHTML = '';
	document.getElementById('message').innerHTML = '';
	if(t.form.email.value!=''){
		fetch('https://htmlweb.ru/json/service/email?email='+encodeURIComponent(t.form.email.value)
					)
			.then(
				function(data){
					if (data.status !== 200) {
						return Promise.reject(new Error(data.statusText));
					}
					return data.json();
				})
			.then(
				function(data){
					console.log('data:',data);
					var o;
					for(var key in data) {
						if (key in t.form) t.form[key].value = data[key];
						else {
							o = document.getElementById(key);
							if (o)o.innerHTML = data[key]
						}
					}
				})
			.catch(
				function(error) {
					console.error(error)
				});
	}
}
