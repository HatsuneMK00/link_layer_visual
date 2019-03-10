const pointCount = 7;
const circleRadius = 160;
const startAnimDelta = 5;
const circumference = Math.PI * circleRadius * 2;

var selectedItemIndex = -1;

var circlePath = document.getElementById('mask-circle');

/**
 * @description On Mouse Leave event handler for points
 */
const onMouseLeave = () => {
	let index = (selectedItemIndex !== -1) ? selectedItemIndex : 0;
	calculateOffset(index);
};

/**
 * @description On Click event handler for points
 * @param {Number} index - Index of list item
 */
const onClick = (index) => {
	//If already selected, deselect
	selectedItemIndex = (selectedItemIndex === index) ? -1 : index;
	calculateOffset(index);
	
	//Find active item, deselect
	let activeListItem = document.querySelectorAll('.navigation-circle-list-item.active');
	if (activeListItem.length > 0) activeListItem[0].classList.remove('active');
	
	//Find new item by index, select
	let listItem = document.querySelectorAll('.navigation-circle-list-item:nth-of-type(' + selectedItemIndex + ')');
	if (listItem.length > 0) listItem[0].classList.add('active');

	if(index==1){
		setTimeout(function () {
			window.location.href="html/pre_beginning.html"
        },300)
	}if(index==2){
		setTimeout(function () {
			window.location.href="html/pre_nowrong.html"
        },300)
	}if(index==3){
		setTimeout(function () {
			window.location.href="html/pre_atFault.html"
        },300)
	}if(index==4){
		setTimeout(function () {
			window.location.href="html/pre_SW.html"
        },300)
	}if(index==5){
		setTimeout(function () {
			window.location.href="html/pre_RBN.html"
        },300)
	}if(index==6){
		setTimeout(function () {
			window.location.href="html/pre_SR.html"
        },300)
	}if(index==7){
		setTimeout(function () {
			window.location.href="html/pre_beginning.html"
        },300)
	}
};

/**
 * @description - Calculate offset for circle path by index of list item
 * @param {Number} index - Index of list item
 */
const calculateOffset = (index=0) => {
	let offset = 0;

	if (index !== 0) offset = (circumference / pointCount) * (pointCount - index);
	
	circlePath.style.strokeDashoffset = `${offset}px`;
};

// INTRO

let buffer = 500;
let delay = 1000 * (1 + (pointCount / startAnimDelta) - (1 / startAnimDelta)) + buffer;

// setTimeout(() => onClick(1), delay);