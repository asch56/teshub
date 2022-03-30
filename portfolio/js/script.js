// event saat navbar di klik

$('.page-scroll').on('click', function(e){

	//AMBIL ISI HREF
	var tujuan = $(this).attr('href');
	//ambil elemen ybs
	var elementujuan = $(tujuan);

	$('body').scrollTop(700);

	e.preventDefault();

});