const questions = [
  {q:"The chapter objectives include listing methods of contraception and identifying barrier, IUCD, hormonal, and sterilization methods.", a:true},
  {q:"Lactational amenorrhea is a physiological contraceptive method acting via prolactin suppression of gonadotropins.", a:true},
  {q:"To maximize lactational contraception, 6–8 feeds/day for ≥10 minutes including midnight feed are recommended.", a:true},
  {q:"Failure rate of lactation as contraception is 0–1 per hundred women-years.", a:false},
  {q:"Fertility awareness (safe period) methods have failure rates ranging from 2–20 HWY.", a:true},
  {q:"Calendar method defines fertile days as shortest cycle −20 and longest cycle −10.", a:true},
  {q:"In a regular 28-day cycle, unsafe period is day 8–18.", a:true},
  {q:"BBT method depends on progesterone’s thermogenic effect and fertility ends 3 days after temperature rise.", a:true},
  {q:"Cervical mucus method allows intercourse when mucus is abundant, clear, and stretchable.", a:false},
  {q:"The symptothermal method combines symptoms, cervical mucus, and BBT.", a:true},
  {q:"Double-check method means using two fertility-awareness methods together.", a:true},
  {q:"Coitus interruptus has a failure rate of 10–30 HWY and is highly reliable.", a:true},
  {q:"Pre-ejaculatory fluid may contain sperm and cause pregnancy.", a:true},
  {q:"Barrier methods include male/female condoms, vaginal sponge, diaphragm, and cervical cap.", a:true},
  {q:"Male condoms are latex sheaths with reservoir tips and spermicidal use increases efficacy.", a:true},
  {q:"Advantages of condoms include low cost, STI protection, male participation, and no medical supervision.", a:true},
  {q:"Male condoms have no disadvantages and never reduce pleasure or rupture.", a:false},
  {q:"Vaginal sponge acts mechanically and chemically and absorbs sperm.", a:true},
  {q:"The diaphragm is a firm non-flexible dome fitting on the ectocervix.", a:false},
  {q:"Cervical cap is a small firm dome applied on ectocervix and may contain spermicidal.", a:true},
  {q:"Spermicides are most effective when used alone and do not need reapplication.", a:false},
  {q:"Spermicides are placed 10–15 min before coitus and reapplied for each act; no douching for 6 hours.", a:true},
  {q:"IUCD types include Lippes loop, Copper 7, Nova-T, and Copper T.", a:true},
  {q:"IUCDs are classified into non-medicated plastic and bioactive (copper or hormone releasing).", a:true},
  {q:"Copper increases IUCD efficacy and silver may reduce copper fragmentation.", a:true},
  {q:"Progesterone-releasing IUCDs are mainly used to increase menstrual bleeding.", a:false},
  {q:"IUCD mechanism is fully understood and purely mechanical.", a:false},
  {q:"IUCDs cause sterile inflammatory reaction, prostaglandin increase, and increased uterine/tubal motility.", a:true},
  {q:"Failure rate of Lippes loop is ~4 HWY while Cu-380 is <1 HWY.", a:true},
  {q:"IUCD indications include parous women, breastfeeding women, and preventing readhesion in Asherman’s.", a:true},
  {q:"IUCD insertion is preferred postmenstrually to exclude pregnancy and reduce anxiety.", a:true},
  {q:"IUCD insertion is never done postpartum or post-abortive.", a:false},
  {q:"Post-IUCD advice includes PAINS warning signs and follow-up visits.", a:true},
  {q:"IUCD complications include bleeding, pain, pregnancy, infection, missing threads, and partner discomfort.", a:true},
  {q:"Hormonal contraception includes COCP, POP, injectables, and implants.", a:true},
  {q:"COCP packs usually contain 21 tablets with estrogen and progestin.", a:true},
  {q:"High-dose pills contain >50 µg estrogen; low-dose <50 µg.", a:true},
  {q:"Sequential pills remain widely used and were never withdrawn.", a:false},
  {q:"Injectable progestins include DMPA 150 mg IM every 3 months.", a:true},
  {q:"Subdermal implants include Norplant, Norplant-2, Implanon, and biodegradable pellets.", a:true},
  {q:"Estrogen mainly suppresses HPO axis and alters endometrium and tubal motility.", a:true},
  {q:"Progestins act mainly by thickening cervical mucus and altering endometrium and tubal motility.", a:true},
  {q:"Failure rates: COCP 1 HWY, POP 2–4 HWY, injectables 0.3 HWY, implants <1 HWY.", a:true},
  {q:"Absolute contraindications include thromboembolism, breast cancer, pregnancy, liver disease, and unexplained bleeding.", a:true},
  {q:"Relative contraindications include migraine, hypertension, diabetes, varicose veins, and surgery.", a:false},
  {q:"Side effects of combined pills include nausea, headache, depression, weight gain, acne, metabolic effects, and clotting risk.", a:false},
  {q:"VACTERL association is linked to exposure to contraceptive steroids in pregnancy.", a:true},
  {q:"Estrogen in contraceptives increases milk production during breastfeeding.", a: false},
  {q:"Post-pill amenorrhea may be treated with clomiphene or bromocriptine depending on cause.", a:true},
  {q:"Male sterilization is vasectomy; female methods include tubal ligation and hysterectomy.", a:true}
];

let index=0;
let answered=false;
let results=[];

const qText=document.getElementById("questionText");
const counter=document.getElementById("counter");
const trueBtn=document.getElementById("trueBtn");
const falseBtn=document.getElementById("falseBtn");
const nextBtn=document.getElementById("nextBtn");
const retryBtn=document.getElementById("retryBtn");
const qList=document.getElementById("questionsList");

function toggleMenu(){
  const m=document.getElementById("sideMenu");
  const o=document.getElementById("overlay");
  if(m.style.right==="0px"){m.style.right="-250px";o.style.display="none";}
  else{m.style.right="0";o.style.display="block";}
}

function startQuiz(){
  shuffle();
  index=0;
  results=Array(questions.length).fill(null);
  document.getElementById("home").style.display="none";
  document.getElementById("quiz").style.display="block";
  document.querySelector(".options").style.display="flex";
  document.getElementById("questionsBtn").style.display="block";
  retryBtn.style.display="none";
  loadQuestion();
}

function loadQuestion(){
  answered=false;
  trueBtn.style.background="#3498db";
  falseBtn.style.background="#3498db";
  nextBtn.style.display="none";
  counter.innerText=`Question ${index+1} / ${questions.length}`;
  qText.innerText=questions[index].q;
}

function answer(val){
  if(answered) return;
  answered=true;
  const correct=questions[index].a;
  results[index]=(val===correct);

  if(val===correct){
    (val?trueBtn:falseBtn).style.background="#27ae60";
  }else{
    (val?trueBtn:falseBtn).style.background="#e74c3c";
    (correct?trueBtn:falseBtn).style.background="#27ae60";
  }

  if(results.every(r=>r!==null)){
    finishQuiz();
  }else{
    nextBtn.style.display="inline-block";
  }
}

function nextQuestion(){
  index = results.findIndex((r,i)=>r===null && i>index);
  if(index===-1){
    index = results.findIndex(r=>r===null);
  }
  loadQuestion();
}

function finishQuiz(){
  qText.innerText=`✅ Finished — Score: ${results.filter(r=>r).length} / ${questions.length}`;
  document.querySelector(".options").style.display="none";
  document.getElementById("questionsBtn").style.display="none";
  nextBtn.style.display="none";
  retryBtn.style.display="inline-block";
}

function retryQuiz(){
  startQuiz();
}

function toggleQuestions(){
  qList.innerHTML="";
  qList.style.display=qList.style.display==="block"?"none":"block";
  results.forEach((r,i)=>{
    const d=document.createElement("div");
    d.className="q-item "+(r===true?"correct":r===false?"wrong":"unanswered");
    d.innerText=i+1;
    d.onclick=()=>{
      index=i;
      loadQuestion();
      qList.style.display="none";
    };
    qList.appendChild(d);
  });
}

function shuffle(){
  questions.sort(()=>Math.random()-0.5);
}
