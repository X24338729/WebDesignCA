
function homebutton(){
							window.location.href = 'index.html';
						}
						function pages(selectElement){
							let hmPages = selectElement.value;
							if(hmPages) {
								window.location.href = hmPages;
							}
						}
						function hm_selecter(selectElement){
							let hmLang = selectElement.value;
							if(hmLang) {
								window.location.href = hmLang;
							}
						}
// Nav Bar Hover
const links = document.querySelectorAll(".navbar a");

links.forEach(link => {
  link.addEventListener("mouseover", () => {
    link.classList.add("hovered");
  });

  link.addEventListener("mouseout", () => {
    link.classList.remove("hovered");
  });
});

// Pulsating Hero Banner
window.onload = function () {
    const hero = document.querySelector(".hero-banner");

    if (!hero){return};

    const id = hero.id; 
	// page2
    if (id  === "forestPage") {
        console.log("Forest page detected");
		 hero.classList.add("forestActive1");
		 forest2();
		 function forest2()
		 {	
			hero.classList.remove("forestActive1");
			hero.classList.add("forestActive2");
			setTimeout(()=>{
			forest1();
			},2500);
		 }
		 function forest1()
		 {	 hero.classList.remove("forestActive2");
			 hero.classList.add("forestActive1");
			 setTimeout(()=>{
			 forest2();
			 },2500);
		 }
    } 
	// page3
    else if (id  === "poachingPage") {
        console.log("Poaching page detected");
		 hero.classList.add("poachingActive1");
         poaching2();
		 function poaching2()
		 {	
			hero.classList.remove("poachingActive1");
			hero.classList.add("poachingActive2");
			setTimeout(()=>{
			poaching1();
			},2500);
		 }
		 function poaching1()
		 {	 hero.classList.remove("poachingActive2");
			 hero.classList.add("poachingActive1");
			 setTimeout(()=>{
			 poaching2();
			 },2500);
		 }
    } 
	// page4
	else if (id  === "alienPage") {
        console.log("Alien page detected");
		 hero.classList.add("alienActive1");
         alien2();
		 function alien2()
		 {	
			hero.classList.remove("alienActive1");
			hero.classList.add("alienActive2");
			setTimeout(()=>{
			alien1();
			},2500);
		 }
		 function alien1()
		 {	 hero.classList.remove("alienActive2");
			 hero.classList.add("alienActive1");
			 setTimeout(()=>{
			 alien2();
			 },2500);
		 }
    } 
	// page5
	else if (id  === "communityPage") {
        console.log("Community page detected");
		 hero.classList.add("communityActive1");
         community2();
		 function community2()
		 {	
			hero.classList.remove("communityActive1");
			hero.classList.add("communityActive2");
			setTimeout(()=>{
			community1();
			},2500);
		 }
		 function community1()
		 {	 hero.classList.remove("communityActive2");
			 hero.classList.add("communityActive1");
			 setTimeout(()=>{
			 community2();
			 },2500);
		 }
    } 
	// page6
	else if (id  === "summaryPage") {
        console.log("Summary page detected");
		 hero.classList.add("summaryActive1");
         summary2();
		 function summary2()
		 {	
			hero.classList.remove("summaryActive1");
			hero.classList.add("summaryActive2");
			setTimeout(()=>{
			summary1();
			},2500);
		 }
		 function summary1()
		 {	 hero.classList.remove("summaryActive2");
			 hero.classList.add("summaryActive1");
			 setTimeout(()=>{
			 summary2();
			 },2500);
		 }
    } 
	// page7
	else if (id  === "donatePage") {
		
        console.log("Donate page detected");
		 hero.classList.add("donateActive1");
         donate2();
		 function donate2()
		 {	
			hero.classList.remove("donateActive1");
			hero.classList.add("donateActive2");
			setTimeout(()=>{
			donate1();
			},2500);
		 }
		 function donate1()
		 {	 hero.classList.remove("donateActive2");
			 hero.classList.add("donateActive1");
			 setTimeout(()=>{
			 donate2();
			 },2500);
		 }
    } 
    else {
        console.log("Unknown hero banner");
        
    }
}
// observe when scrolling
const targets = document.querySelectorAll(".watch");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("highlight");
    } else {
      entry.target.classList.remove("highlight");
    }
  });
}, {
  threshold: 0.5
});

targets.forEach(t => observer.observe(t));

// form
document.getElementById("quiz_btn").addEventListener("click", 
document.getElementById("quizForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const q1 = document.querySelector("input[name='q1']:checked");
  const q2 = document.querySelector("input[name='q2']:checked");
  const q3 = document.querySelector("option[name='q3']:checked");
  const q4 = document.querySelector("input[name='q4']:checked");
  const q5 = document.querySelector("input[name='q5']:checked");
  const q6 = document.querySelector("input[name='q6']:checked");
  const q7 = document.querySelector("input[name='q7']:checked");
  const q8 = document.querySelector("input[name='q8']:checked");
  const q9 = document.querySelector("input[name='q9']:checked");
  const q10 = document.querySelector("input[name='q10']:checked");

  if (!q1 || !q2 || !q3 || !q4 || !q5 || !q6 || !q7 || !q8 || !q9 || !q10) {
    document.getElementById("result").textContent = "Please answer all questions!";
    document.getElementById("result").classList.add("text-danger");
    return;
  }

  let score = 0;
  if (q1.value === "correct") score++;
  if (q2.value === "correct") score++;
  if (q3.value === "correct") score++;
  if (q4.value === "correct") score++;
  if (q5.value === "correct") score++;
  if (q6.value === "correct") score++;
  if (q7.value === "correct") score++;
  if (q8.value === "correct") score++;
  if (q9.value === "correct") score++;
  if (q10.value === "correct") score++;
  

  document.getElementById("result").textContent = 
    `Your score: ${score}/10`;

  document.getElementById("result").classList.remove("text-danger");
  document.getElementById("result").classList.add("text-success");
}));
document.getElementById("quiz_btn").addEventListener("click",()=>{
	document.getElementById("quizhd").hidden=false;
	document.getElementById("quiz_btn").hidden=true;
});

let currentQuestion = 0;
const questions = document.querySelectorAll(".question");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const submitBtn = document.getElementById("btnSub");

// Hide all & show first question
showQuestion(currentQuestion);

function showQuestion(index) {
  questions.forEach(q => q.style.display = "none");
  questions[index].style.display = "block";

  // Hide back button on first question
  prevBtn.style.display = index === 0 ? "none" : "inline-block";

  // Hide next button on last question
  nextBtn.style.display = index === questions.length - 1 ? "none" : "inline-block";

  // Show submit only on last question
  submitBtn.style.display = index === questions.length - 1 ? "block" : "none";
}

// Buttons
nextBtn.addEventListener("click", () => {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion(currentQuestion);
  }
});

prevBtn.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion(currentQuestion);
  }
});