// จงเขียนฟังก์ชันในการแปลงค่าจากองศาเป็นเรเดียน

// <!-- PI rad = 1 * PI  === 180 -->
// <!-- PI rad = 1 * PI  === 180 -->

// <!-- 180 deg === PI rad -->
// <!-- 1  deg  ===  1*PI / 180 -->
// <!-- n deg  ===  n*PI / 180 -->

function radians(deg) {
	return (Math.PI * deg) / 180;
}

console.log(radians(180));
