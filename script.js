let weight;
let height;
let goal;

function start(){

let name=document.getElementById("name").value;

weight=document.getElementById("weight").value;
height=document.getElementById("height").value;
goal=document.getElementById("goal").value;

localStorage.setItem("name",name);
localStorage.setItem("weight",weight);

document.getElementById("username").innerText=name;

document.getElementById("formSection").style.display="none";
document.getElementById("menu").classList.remove("hidden");

}

/* BMI */

function showBMI(){

let h=height/100;

let bmi=(weight/(h*h)).toFixed(2);

let type="";

if(bmi<18.5) type="Underweight";
else if(bmi<25) type="Normal";
else if(bmi<30) type="Overweight";
else type="Obese";

document.getElementById("result").innerHTML=

`<div class="card">

<h3>BMI Result</h3>

BMI : ${bmi}<br>
Category : ${type}

</div>`;
}

/* calories */

function showCalories(){

let calories=weight*30;

if(goal=="loss") calories-=400;
if(goal=="gain") calories+=400;

document.getElementById("result").innerHTML=

`<div class="card">

<h3>Daily Calories</h3>

Recommended Calories : ${calories} kcal

</div>`;
}

/* workout */

function showWorkout(){

document.getElementById("result").innerHTML=

`<div class="card">

<h3>Weekly Workout Split</h3>

Monday – Chest<br>
Tuesday – Back<br>
Wednesday – Legs<br>
Thursday – Shoulders<br>
Friday – Arms<br>
Saturday – Cardio<br>
Sunday – Rest

<div class="exercise">
<img src="https://images.unsplash.com/photo-1599058917212-d750089bc07e">
</div>

</div>`;
}

/* diet */

function showDiet(){

let diet="";

if(goal=="gain") diet="High Protein Diet (~2600 kcal)";
else if(goal=="loss") diet="Fat Loss Diet (~2000 kcal)";
else diet="Balanced Diet (~2300 kcal)";

document.getElementById("result").innerHTML=

`<div class="card">

<h3>Diet Plan</h3>

${diet}<br><br>

Breakfast – Oats + Eggs<br>
Lunch – Rice + Chicken / Paneer<br>
Snack – Banana + Peanut Butter<br>
Dinner – Chapati + Vegetables

</div>`;
}

/* progress */

function showProgress(){

let target=70;

let percent=(weight/target)*100;

if(percent>100) percent=100;

document.getElementById("result").innerHTML=

`<div class="card">

<h3>Fitness Progress</h3>

Current Weight : ${weight} kg<br>
Target Weight : ${target} kg

<div class="progress">
<div class="bar" id="bar"></div>
</div>

</div>`;

setTimeout(()=>{
document.getElementById("bar").style.width=percent+"%";
},200);

}

/* chart */

function showChart(){

document.getElementById("result").innerHTML=

`<div class="card">

<h3>Weight Progress Chart</h3>

<canvas id="myChart"></canvas>

</div>`;

let ctx=document.getElementById("myChart");

new Chart(ctx,{
type:'line',
data:{
labels:["Week1","Week2","Week3","Week4"],
datasets:[{
label:"Weight Progress",
data:[weight,weight-1,weight-2,weight-3],
borderColor:"#38bdf8",
fill:false
}]
}
});
}

/* timer */

let seconds=0;
let timerInterval;

function showTimer(){

document.getElementById("result").innerHTML=

`<div class="card">

<h3>Workout Timer</h3>

<div class="timer" id="timer">0</div>

<button onclick="startTimer()">Start</button>
<button onclick="stopTimer()">Stop</button>

</div>`;
}

function startTimer(){

timerInterval=setInterval(()=>{

seconds++;

document.getElementById("timer").innerText=seconds+" sec";

},1000);

}

function stopTimer(){

clearInterval(timerInterval);

}
function logout(){

localStorage.removeItem("user");
window.location.href="login.html";

}