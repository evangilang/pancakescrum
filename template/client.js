var $ = function(val){
	return document.querySelector(val);
};

var css = function(val){
	return document.querySelector(val).style;
}

window.addEventListener('mousemove', function(event){

	var x = event.clientX;
	var y = event.clientY;
	var i = 4;

	css('.satu').transform = 'translate(-'+ x/i +'%, -'+ y/i +'%)';
	css('.satu').display = 'inherit';

	css('.dua').transform = 'translate(-'+ x/i +'%, -'+ y/i +'%)';
	css('.dua').display = 'inherit';

	css('.tiga').transform = 'translate(-'+ x/i +'%, -'+ y/i +'%)';
	css('.tiga').display = 'inherit';
});