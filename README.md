# shippop-script-test

##คำถามข้อที่ 1 (1.1 และ 1.2)

### Run script
```
node basic.js
```

##คำถามขั้อที่ 2

Prevent redundant records: 
- คือความซ้ำซ้อนของข้อมูลภายในฐานข้อมูล
- ปัญหาที่เคยเกิดขึ้นคือ 
  - ข้อมูลซ้ำซ้อน และ update anomalies คือ Insertion anomalies(ไม่สามารถเพิ่มข้อมูลได้), Deletion anomalies(ลบข้อมูลแล้วกระทบข้อมูล row อื่นด้วย) และ Modification anomalies(หากต้องการ update ข้อมูลจะต้อง update หลาย ๆ row)
- แก้ไขปัญหาโดยการนำ column ข้อมูลที่มีความซ้ำซ้อนกันแยกออกมาเป็นอีกหนึ่ง table และนำ table ที่สร้างมาใหม่ไปเป็น Foreign Key ของ table หลัก
