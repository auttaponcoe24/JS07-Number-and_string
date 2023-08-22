// จงเขียนฟังก์ชันในการสุ่มตัวเลข random(min, max) โดยให้ผลลัพธ์มีค่าเป็นจำนวนจริงตั้งแต่ min ถึง max (ไม่รวม max)

// 1 - 6
// min + Range
// min + 0 = 1 + 0 = 1
// 

let min = 1
let max = 6

for (let i = 0; i < 10; i++) {
    console.log(min + Math.floor(Math.random() * (max - min + 1)))
}
