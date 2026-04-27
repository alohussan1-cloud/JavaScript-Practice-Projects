
const Data = [
  {
    name: "Ali Khan",
    rollNo: 101,
    marks: {
      math: 78,
      english: 82,
      physics: 75,
      chemistry: 70,
      biology: 80,
      computer: 88,
      urdu: 85
    }
  },
  {
    name: "Sara Ahmed",
    rollNo: 102,
    marks: {
      math: 85,
      english: 88,
      physics: 79,
      chemistry: 83,
      biology: 90,
      computer: 92,
      urdu: 86
    }
  },
  {
    name: "Usman Raza",
    rollNo: 103,
    marks: {
      math: 68,
      english: 72,
      physics: 70,
      chemistry: 65,
      biology: 74,
      computer: 80,
      urdu: 78
    }
  },
  {
    name: "Ayesha Noor",
    rollNo: 104,
    marks: {
      math: 90,
      english: 91,
      physics: 88,
      chemistry: 89,
      biology: 92,
      computer: 95,
      urdu: 90
    }
  },
  {
    name: "Hassan Ali",
    rollNo: 105,
    marks: {
      math: 75,
      english: 70,
      physics: 72,
      chemistry: 68,
      biology: 76,
      computer: 85,
      urdu: 80
    }
  },
  {
    name: "Fatima Zahra",
    rollNo: 106,
    marks: {
      math: 88,
      english: 85,
      physics: 82,
      chemistry: 86,
      biology: 90,
      computer: 93,
      urdu: 89
    }
  },
  {
    name: "Bilal Ahmed",
    rollNo: 107,
    marks: {
      math: 60,
      english: 65,
      physics: 62,
      chemistry: 58,
      biology: 67,
      computer: 72,
      urdu: 70
    }
  },
  {
    name: "Zain Malik",
    rollNo: 108,
    marks: {
      math: 82,
      english: 78,
      physics: 80,
      chemistry: 77,
      biology: 83,
      computer: 88,
      urdu: 84
    }
  },
  {
    name: "Noor Fatima",
    rollNo: 109,
    marks: {
      math: 92,
      english: 90,
      physics: 89,
      chemistry: 91,
      biology: 94,
      computer: 96,
      urdu: 93
    }
  },
  {
    name: "Imran Shah",
    rollNo: 110,
    marks: {
      math: 70,
      english: 74,
      physics: 72,
      chemistry: 69,
      biology: 73,
      computer: 78,
      urdu: 76
    }
  }
];

let RollNo=''
let obtainedMarks =''
let count =''
let Percentage =''
let GradeMath =''
function totalSubjects(){ 
  Data.forEach((i)=>{
   if(i.rollNo == RollNo){
      count = Object.keys(i.marks).length
  }  })
}


let display = document.querySelector(".StudentData")
let display1 = document.querySelector(".Result")
function SearchRoll(){
  let inputRoll = document.getElementById("inputRoll").value
   RollNo = inputRoll 
   document.getElementById("inputRoll").value =''
   Data.forEach((item)=>{
     if(item.rollNo == RollNo){
       display.innerHTML = `
       
       <h3 style="text-align: center; color: #667eea;"> ${item.name} - Roll No: ${RollNo} </h3>
       <p> Math      : ${item.marks.math} </p>
       <p> English   : ${item.marks.english} </p>
       <p> Biology   : ${item.marks.biology} </p>
       <p> Chemistry : ${item.marks.chemistry} </p>
       <p> Physics   : ${item.marks.physics} </p>
       <p> Computer  : ${item.marks.computer} </p>
       <p> Urdu      : ${item.marks.urdu} </p>
       <button id="totalBtn" onclick="CalculateTotal()"> Total Marks </button>
       <button onclick ="showPercentage()"> Percentage </button>
       <button onclick ="showGrade()"> Grade </button>
       
       ` 
       display1.innerHTML = `   
       <button class ="reset" onclick ="Reset()"> Reset </button>  `
      }
      
    })
    totalSubjects()
}

function combineMarks(){
  Data.forEach((x)=>{
  
      if(x.rollNo == RollNo){
        obtainedMarks = x.marks.math+x.marks.biology+x.marks.chemistry+
        x.marks.physics+x.marks.urdu+x.marks.english+
        x.marks.computer 
      }
})}

function CalculateTotal(){
    combineMarks()
    document.getElementById("totalBtn").disabled = true
    Data.forEach((x)=>{
      if(x.rollNo == RollNo){
        display.innerHTML += `
        <p id = "Para"> Total Marks : ${obtainedMarks} out of ${count*100} </p>
        `}
      })
    
  }
    
function showPercentage(){
  combineMarks()
  Data.forEach((y)=>{
      if(y.rollNo == RollNo){
         Percentage = (obtainedMarks/(count*100))*100
         display.innerHTML += `
       <p> Percentage : ${Math.floor(Percentage*100)/100}%</p>
         `
      }
    }
  )
  
}


function showGrade(){
  
  if(Percentage >= 80 && Percentage <= 100){
    display.innerHTML += `
    <p> You have gotten A1 Grade </p>
    `
  } else if(Percentage >=70 && Percentage <80){
    display.innerHTML += `
    <p> You have gotten A Grade </p>
    `
  } else if(Percentage >=60 && Percentage <70){
    display.innerHTML += `
    <p> You have gotten B Grade </p>
    `
  }else if(Percentage >=50 && Percentage <60){
    display.innerHTML += `
    <p> You have gotten C Grade </p>
    `
  }else if(Percentage >=33 && Percentage <50){
    display.innerHTML += `
    <p> You have gotten D Grade </p>
    `
  } else {
     display.innerHTML += `
    <p> You Failed  </p>
    `
  }
}

function Reset(){
  display.innerHTML = ''
  display1.innerHTML = ''

}