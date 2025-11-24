
function homebutton(){
							window.location.href = 'homePage.html';
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
window.onmouseover=function(){
	const navBar=document.querySelector(".navbar");
	
	 if (!navBar){return};
	 
	 const id2=navBar.id;
}
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
