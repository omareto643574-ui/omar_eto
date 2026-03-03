let redScore = 0;
let blueScore = 0;
let redPoints = 0;
let bluePoints = 0;
let time = 240;
let timerInterval;

// تسجيل الدخول
function login(){
    const user = document.getElementById("username").value.trim();
    if(user){
        document.getElementById("loginPage").style.display="none";
        document.getElementById("gamePage").style.display="block";
        document.getElementById("welcome").innerText = "أهلاً يا " + user + " 👑";
    } else {
        alert("اكتب اسمك أولاً!");
    }
}

// الضغط على Enter لتسجيل الدخول
document.getElementById("username").addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        login();
    }
});

// بدء الماتش
function startMatch(){
    document.getElementById("whistle").play();
    document.getElementById("crowd").play();

    redScore = 0;
    blueScore = 0;
    updateScore();

    time = 240;
    clearInterval(timerInterval);

    timerInterval = setInterval(()=>{
        if(time>0){
            time--;
            let m = Math.floor(time/60);
            let s = time%60;
            document.getElementById("timer").innerText =
            `${m.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`;
        }else{
            clearInterval(timerInterval);
            endMatch();
        }
    },1000);
}

// تسجيل جول
function goal(team){
    if(team==="red") redScore++;
    if(team==="blue") blueScore++;
    updateScore();
}

// تحديث النتيجة
function updateScore(){
    document.getElementById("redScore").innerText=redScore;
    document.getElementById("blueScore").innerText=blueScore;
}

// انتهاء الماتش وحساب النقاط
function endMatch(){
    if(redScore>blueScore){
        redPoints+=3;
        alert("🔴 الأحمر كسب!");
    }
    else if(blueScore>redScore){
        bluePoints+=3;
        alert("🔵 الأزرق كسب!");
    }
    else{
        redPoints+=1;
        bluePoints+=1;
        alert("تعادل 🤝");
    }

    document.getElementById("redPoints").innerText=redPoints;
    document.getElementById("bluePoints").innerText=bluePoints;
}

// كروت
function card(type){
    if(type==="yellow") alert("🟨 كارت أصفر!");
    if(type==="red") alert("🟥 كارت أحمر!");
}

// إعادة ضبط اللعبة
function resetGame(){
    clearInterval(timerInterval);
    redScore=0;
    blueScore=0;
    updateScore();
    document.getElementById("timer").innerText="04:00";
}
