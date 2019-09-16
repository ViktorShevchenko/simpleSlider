let btn_prev = document.querySelector('.prev');
let btn_next = document.querySelector('.next');
let images = document.querySelectorAll('#gallery .photos img');

let i = 0;

btn_prev.addEventListener('click', prev_image_show);
btn_next.addEventListener('click', next_image_show);

function prev_image_show(){
	images[i].className = '';
	i--;
	if(i < 0){
		i = images.length - 1;
	}
	images[i].className = 'showed';

}

function next_image_show(){
	images[i].className = '';
	i++;
	if(i >=images.length){
		i = 0;
	}
	images[i].className = 'showed';
}
































