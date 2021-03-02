//циклы
"use strict";
let flag = true;
outer: for (let i = 0; flag; i++)
{
 alert(`i=${i}`);
	inputer: for (let j = 10; flag; j--) {
		alert(`j=${j}`);
		if (j == i) {
			flag = false;
		}
		else {
			break;
		}
	}
}
alert(flag);