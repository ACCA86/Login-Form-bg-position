const left = document.querySelector('.left img');
const right = document.querySelector('.right');
const small = document.querySelector('.small');
const con = document.querySelector('.con');

/* === First : Occure Animation ===*/
	left.classList.add('moveright');
	right.classList.add('moveleft');
	small.classList.add('back');
/* === Second : Occure Animation ===*/
const stop = ()=>{
	left.classList.remove('moveright');
	right.classList.remove('moveleft');
	small.classList.remove('back');
}
left.addEventListener('mouseenter',stop)
right.addEventListener('mouseenter',stop)
small.addEventListener('mouseenter',stop)
con.addEventListener('mouseenter',stop)
/* === THEN : Occure Animation Again ===*/
const move = ()=>{
	left.classList.add('moveright');
	right.classList.add('moveleft');
	small.classList.add('back');
}
left.addEventListener('mouseleave',move);
right.addEventListener('mouseleave',move);
small.addEventListener('mouseleave',move);
con.addEventListener('mouseenter',move)