// --- CHROME DINO HACKER CONSOLE V2.1 (GOD MODE & SPEED) ---

(function() {
    // 1. CLEANUP
    var oldMenu = document.getElementById('hacker-console-v2');
    if (oldMenu) oldMenu.remove();

    // 2. UI CONSTRUCTION (Giữ nguyên phong cách V2.1)
    var htmlContent = `
    <div id="hacker-console-v2" style="
        position: fixed; 
        top: 50px; left: 50px; 
        width: 320px; 
        background: rgba(12, 12, 12, 0.95); 
        border: 1px solid #00ff00; 
        color: #00ff00; 
        font-family: 'Consolas', 'Courier New', monospace; 
        z-index: 999999; 
        box-shadow: 0 0 15px rgba(0, 255, 0, 0.3);
        border-radius: 4px;
        font-size: 13px;">
        
        <div id="hacker-header" style="
            padding: 8px 10px; 
            background: linear-gradient(90deg, #003300, #001100); 
            cursor: move; 
            border-bottom: 1px solid #00ff00;
            display: flex; justify-content: space-between; align-items: center;
            user-select: none;">
            <span style="font-weight: bold; text-shadow: 0 0 5px #00ff00;">🦖 DINO HACKER V2.1</span>
            <span style="font-size: 10px; color: #888;">[DRAG ME]</span>
        </div>

        <div style="padding: 15px;">
            
            <div style="margin-bottom: 15px;">
                <label style="font-size: 11px; color: #aaa; text-transform: uppercase; letter-spacing: 1px;">💯 SET SCORE</label>
                
                <div style="display: flex; gap: 8px; margin-top: 6px; height: 30px;">
                    <input type="number" id="inp-score" placeholder="Target Score..." style="
                        flex: 1; background: #000; border: 1px solid #444; color: white; padding: 0 8px;
                        font-family: inherit; outline: none; box-sizing: border-box;">
                    
                    <button id="btn-set-score" style="
                        flex: 0 0 70px; background: #00ff00; color: black; border: none; 
                        font-weight: bold; cursor: pointer; font-family: inherit; font-size: 11px;">
                        SET
                    </button>
                </div>
            </div>

            <hr style="border-color: #333; border-style: dashed; margin: 10px 0;">

            <div style="margin-bottom: 15px;">
                <label style="font-size: 11px; color: #aaa; text-transform: uppercase; letter-spacing: 1px;">⚡ CHEAT FEATURES</label>
                
                <div style="margin-top: 8px; display: flex; flex-direction: column; gap: 6px;">
                    <label style="display: flex; align-items: center; cursor: pointer; user-select: none;">
                        <input type="checkbox" id="chk-god-mode" style="margin-right: 8px; accent-color: #00ff00;"> 
                        <span>💀 God Mode (Immortal)</span>
                    </label>

                    <label style="display: flex; align-items: center; cursor: pointer; user-select: none;">
                        <input type="checkbox" id="chk-speed-hack" style="margin-right: 8px; accent-color: #00ff00;"> 
                        <span>⏩ Speed Hack (x100)</span>
                    </label>
                </div>
            </div>

            <hr style="border-color: #333; border-style: dashed; margin: 10px 0;">

            <div style="margin-bottom: 10px;">
                <label style="font-size: 11px; color: #aaa; text-transform: uppercase; letter-spacing: 1px;">🚀 PHYSICS</label>
                <button id="btn-high-jump" style="
                    width: 100%; margin-top: 6px; padding: 8px; 
                    background: rgba(0, 255, 255, 0.1); color: cyan; border: 1px solid cyan; 
                    cursor: pointer; font-weight: bold; font-family: inherit; font-size: 11px;">
                    ⬆️ SET SUPER JUMP
                </button>
            </div>

            <button id="btn-close-menu" style="
                width: 100%; margin-top: 5px; background: #330000; color: #ff4444; 
                border: 1px solid #ff4444; padding: 6px; cursor: pointer; font-family: inherit; font-size: 10px;">
                EXIT SYSTEM
            </button>
        </div>
    </div>
    `;

    // 3. INJECT UI
    var container = document.createElement('div');
    container.innerHTML = htmlContent;
    document.body.appendChild(container);

    // 4. REFERENCES
    var consoleDiv = document.getElementById('hacker-console-v2');
    var header = document.getElementById('hacker-header');
    var btnSetScore = document.getElementById('btn-set-score');
    var inpScore = document.getElementById('inp-score');
    var chkGodMode = document.getElementById('chk-god-mode');
    var chkSpeedHack = document.getElementById('chk-speed-hack');
    var btnHighJump = document.getElementById('btn-high-jump');
    var btnClose = document.getElementById('btn-close-menu');

    // 5. DRAGGABLE LOGIC (Standard V2.1)
    var isDragging = false, offsetX, offsetY;
    header.onmousedown = function(e) { isDragging = true; offsetX = e.clientX - consoleDiv.offsetLeft; offsetY = e.clientY - consoleDiv.offsetTop; header.style.cursor = 'grabbing'; };
    document.onmousemove = function(e) { if (isDragging) { consoleDiv.style.left = (e.clientX - offsetX) + 'px'; consoleDiv.style.top = (e.clientY - offsetY) + 'px'; } };
    document.onmouseup = function() { isDragging = false; header.style.cursor = 'move'; };

    // 6. HACK LOGIC IMPLEMENTATION (DINO SPECIFIC)

    // Store original functions to restore later
    var originalGameOver = Runner.instance_.gameOver;
    
    // A. SET SCORE
    btnSetScore.onclick = function() {
        var score = parseInt(inpScore.value);
        if (score) {
            // Game tính điểm dựa trên distanceRan
            Runner.instance_.distanceRan = score / 0.025;
            Runner.instance_.distanceMeter.update(0, Math.ceil(Runner.instance_.distanceRan));
            console.log(">> Score set to: " + score);
            inpScore.value = "";
        }
    };

    // B. GOD MODE (BẤT TỬ)
    chkGodMode.onchange = function() {
        if (this.checked) {
            // Ghi đè hàm gameover bằng hàm rỗng
            Runner.instance_.gameOver = function(){ console.log("Blocked death!"); };
            console.log(">> GOD MODE: ON");
        } else {
            // Khôi phục hàm chết
            Runner.instance_.gameOver = originalGameOver;
            console.log(">> GOD MODE: OFF");
        }
    };

    // C. SPEED HACK
    chkSpeedHack.onchange = function() {
        if (this.checked) {
            Runner.instance_.setSpeed(100); // Tốc độ bàn thờ
        } else {
            Runner.instance_.setSpeed(10); // Tốc độ bình thường
        }
    };

    // D. SUPER JUMP
    btnHighJump.onclick = function() {
        Runner.instance_.tRex.setJumpVelocity(20); // Nhảy siêu cao
        console.log(">> Super Jump Activated");
    };

    // E. CLOSE
    btnClose.onclick = function() {
        consoleDiv.remove();
        Runner.instance_.gameOver = originalGameOver; // Reset game logic
    };

    console.log("%c [DINO] Hacker Console V2.1 Injected.", "color: lime; font-weight: bold;");

})();
