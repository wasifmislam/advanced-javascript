const students = [
    {id: 21, name: "rakin"},
    {id: 31, name: "selim"},
    {id: 41, name : "jamal"},
    {id: 61, name: "kamal"}
]
const names = students.map( s => s.name);
const ids = students.map( s => s.id);
const specificIds = students.filter(s => s.id>40)
const oneId = students.find(s => s.id>40)
console.log(oneId);