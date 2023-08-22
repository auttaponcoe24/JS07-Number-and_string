// - จงเขียนฟังก์ชันเพื่อตรวจสอบข้อความ หากในข้อความนั้นมีคำว่า xxx, sex, porn ให้ return ค่าเป็น true แต่ถ้าไม่มีให้ return ค่าเป็น false
// - ให้ตรวจสอบแบบ case-insensitive เช่น XXX, pOrn, sEX ให้ถือว่าเป็นคำเดียวกับ
// 		xxx, porn, sex ตามลำดับ

function checkporn(str) {
	if (
		str.toLowerCase() === "xxx" ||
		str.toLowerCase() === "porn" ||
		str.toLowerCase() === "sex"
	)
		return alert("true");
	return alert("false");
}

checkporn(prompt("check word?"));
