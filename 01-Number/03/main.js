// จงเขียนฟังก์ชันในการคำนวณแต้มจากยอดซื้อขาย โดยทุกยอดซื้อ 100 บาท จะได้ 1 แต้ม หากคำนวณแล้วได้แต้มไม่เป็นจำนวนเต็มให้ปัดเศษลง


const spend = 1540;

// const point = Math.trunc(1540 / 100)

function calcPoint (spend) {
    return Math.trunc(1540 / 100)
}
console.log(calcPoint(spend))