// ข้อ 1

/* 1.1 ) เขียน function แสดงค่าทาง console โดย function รับ parameter 2 ตัว ได้แก่

- firstName: String
- lastName: String
- ผลลัพธ์ที่ได้ อยู่ในรูปแบบ
    “Hello Shippop, My name is {{firstName}} {{lastName}}”
    
- เงื่อนไขเพิ่มเติม
    - ถ้า firstName เท่ากับ คำว่า “Shippop” แสดง "Best Online Shipping Platform" 
*/
const fullname = (firstName, lastName) => {
    return `Hello Shippop, My name is ${firstName === 'Shippop' ? 'Best Online Shipping Platform' : firstName} ${lastName}`
}

console.log(fullname('Techit', 'Kakaew'))
console.log(fullname('Shippop', 'Test'))

/* ------------------------------------------------------------------------------------------------ */

/* 1.2 ) ถ้าหากต้องการ copy “array of object” ใน Nodejs มีวิธีการใดบ้าง ยกตัวอย่างมาอย่างน้อย 1 วิธี */

let mockArrayOfObject = [
    {
        id: 1,
        name: 'Luffy'
    },
    {
        id: 2,
        name: 'Roronoa Zoro'
    }
]

let method1 = [...mockArrayOfObject]

let method2 = JSON.parse(JSON.stringify(mockArrayOfObject))

let method3 = mockArrayOfObject.map(x => x)

console.log(method1)
console.log(method2)
console.log(method3)
