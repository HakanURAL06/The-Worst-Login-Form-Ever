
let mode = localStorage.getItem('mode') || "username";
let step = parseInt(localStorage.getItem('currentStep')) || 1;
let userVal = localStorage.getItem('userVal') || "";
let passVal = localStorage.getItem('passVal') || "";
let isFinished = localStorage.getItem('isFinished') === "true";


if (!localStorage.getItem('targetUserLen')) {
    localStorage.setItem('targetUserLen', Math.floor(Math.random() * 4) + 4);
}
if (mode === "password" && !localStorage.getItem('targetPassLen')) {
    localStorage.setItem('targetPassLen', Math.floor(Math.random() * 5) + 6);
}

const targetUserLen = parseInt(localStorage.getItem('targetUserLen'));
const targetPassLen = parseInt(localStorage.getItem('targetPassLen') || 0);

window.onload = () => {
    if (isFinished) {
        document.getElementById('movable-container').classList.add('hidden');
        document.getElementById('success-screen').classList.remove('hidden');
        document.getElementById('final-user').innerText = userVal;
        document.getElementById('final-pass').innerText = passVal;
        return;
    }
    const panel = document.getElementById('movable-container');
    const maxX = window.innerWidth - panel.offsetWidth;
    const maxY = window.innerHeight - panel.offsetHeight;
    panel.style.left = Math.random() * maxX + "px";
    panel.style.top = Math.random() * maxY + "px";
    drawMath();
    document.getElementById('status-text').innerText = 
        `${mode === "username" ? "Username" : "Password"} Entry: ${step}. Character`;
    

    scheduleRandomScare();
};

function drawMath() {
    const canvas = document.getElementById('math-canvas');
    const ctx = canvas.getContext('2d');
    const target = (mode === "username") ? targetUserLen : targetPassLen;
    ctx.fillStyle = "#111";
    ctx.font = "20px Georgia";
    ctx.fillText(`Cevap: √(${target * target}) + (sin²x + cos²x) - 1`, 20, 50);
}


function performScare(isCaught = false) {
    const overlay = document.getElementById('scare-overlay');
    const audio = document.getElementById('scare-audio');
    
    overlay.classList.remove('hidden');
    audio.play().catch(e => console.log("Ses için etkileşim bekleniyor..."));

    
    setTimeout(() => {
        overlay.classList.add('hidden');
        if (isCaught) {
            location.reload(); 
        }
    }, 500);
}


function scheduleRandomScare() {
    if (isFinished) return;
    
    
    const randomTime = Math.random() * (20000 - 8000) + 8000;
    
    setTimeout(() => {
        if (!isFinished) {
            performScare(false); 
            scheduleRandomScare(); 
        }
    }, randomTime);
}


const zombie = document.getElementById('zombie-chaser');
let zombieX = 0, zombieY = 0, mouseX = 0, mouseY = 0, chaseStarted = false;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX; mouseY = e.clientY;
    if (!chaseStarted && !isFinished) {
        zombie.classList.remove('hidden');
        chaseStarted = true;
        chaseLoop();
    }
});

function chaseLoop() {
    if (!chaseStarted || isFinished) return;
    const dx = mouseX - zombieX;
    const dy = mouseY - zombieY;
    const dist = Math.sqrt(dx*dx + dy*dy);

    zombieX += (dx / dist) * 2.3;
    zombieY += (dy / dist) * 2.3;
    zombie.style.left = (zombieX - 32) + 'px';
    zombie.style.top = (zombieY - 32) + 'px';

    if (dist < 20) {
        chaseStarted = false;
        localStorage.clear();
        performScare(true); 
    } else {
        requestAnimationFrame(chaseLoop);
    }
}


document.getElementById('submit-btn').addEventListener('click', () => {
    const val = document.getElementById('mega-input').value;
    const currentStored = (mode === "username") ? userVal : passVal;
    const currentTarget = (mode === "username") ? targetUserLen : targetPassLen;

    if (val.length === step && val.startsWith(currentStored)) {
        if (mode === "username") localStorage.setItem('userVal', val);
        else localStorage.setItem('passVal', val);

        if (step >= currentTarget) {
            if (mode === "username") {
                localStorage.setItem('mode', "password");
                localStorage.setItem('currentStep', 1);
                alert("Username Entered");
            } else {
                localStorage.setItem('isFinished', "true");
            }
        } else {
            localStorage.setItem('currentStep', step + 1);
        }
        location.reload();
    } else {
        localStorage.clear();
        performScare(true); 
    }
});