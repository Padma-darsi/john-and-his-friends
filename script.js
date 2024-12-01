
let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  console.log(arr.map(employee=> employee.profession==="developer"? employee : null).filter(Boolean));
}
PrintDeveloperbyMap()

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((employee) => {
    employee.profession === "developer" && console.log(employee);
  });
}
PrintDeveloperbyForEach();


function addData() {
  //Write your code here, just console.log
  arr.push({ id: 4, name: "susan", age: "20", profession: "intern" });
  console.log(arr);
}
addData();

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter(employee => employee.profession !== "admin");
  console.log(arr);
}
removeAdmin();

function concatenateArray() {
  //Write your code here, just console.log
  let newArr = [
    { id: 5, name: "susan", age: "22", profession: "designer" },
    { id: 6, name: "mike", age: "25", profession: "manager" },
    { id: 7, name: "lisa", age: "21", profession: "developer" },
  ];
  let combinedArray = arr.concat(newArr);
  console.log(combinedArray);
}
concatenateArray();

