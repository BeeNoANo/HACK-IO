// --- COOKIE CLICKER HACKER CONSOLE V2.1 (FIXED UI LAYOUT) ---

(function() {
    // 1. DỌN DẸP: Xóa bản cũ
    var oldMenu = document.getElementById('hacker-console-v2');
    if (oldMenu) oldMenu.remove();

    // 2. TẠO HTML (Cập nhật CSS chỉnh chu hơn)
    var htmlContent = `
    <div id="hacker-console-v2" style="
        position: fixed; 
        top: 100px; left: 100px; 
        width: 320px; 
        background: rgba(12, 12, 12, 0.95); 
        border: 1px solid #00ff00; 
        color: #00ff00; 
        font-family: 'Consolas', 'Courier New', monospace; 
        z-index: 2147483647; /* Max Z-Index để luôn nổi lên trên */
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
            <span style="font-weight: bold; text-shadow: 0 0 5px #00ff00;">💀 HACKER CONSOLE V2.1</span>
            <span style="font-size: 10px; color: #888;">[DRAG ME]</span>
        </div>

        <div style="padding: 15px;">
            
            <div style="margin-bottom: 15px;">
                <label style="font-size: 11px; color: #aaa; text-transform: uppercase; letter-spacing: 1px;">💰 Add Resources</label>
                
                <div style="display: flex; gap: 8px; margin-top: 6px; height: 30px;">
                    <input type="number" id="inp-cookies" placeholder="Amount..." style="
                        flex: 1; /* Tự co giãn */
                        background: #000; 
                        border: 1px solid #444; 
                        color: white; 
                        padding: 0 8px;
                        font-family: inherit;
                        outline: none;
                        box-sizing: border-box;
                        min-width: 0;"> <button id="btn-add-cookies" style="
                        flex: 0 0 70px; /* Chiều rộng cố định cho nút */
                        background: #00ff00; 
                        color: black; 
                        border: none; 
                        font-weight: bold; 
                        cursor: pointer; 
                        font-family: inherit;
                        text-transform: uppercase;
                        font-size: 11px;">
                        ADD
                    </button>
                </div>
            </div>

            <hr style="border-color: #333; border-style: dashed; margin: 10px 0;">

            <div style="margin-bottom: 15px;">
                <label style="font-size: 11px; color: #aaa; text-transform: uppercase; letter-spacing: 1px;">🤖 Automation</label>
                
                <div style="margin-top: 8px; display: flex; flex-direction: column; gap: 6px;">
                    <label style="display: flex; align-items: center; cursor: pointer; user-select: none;">
                        <input type="checkbox" id="chk-god-mode" style="margin-right: 8px; accent-color: #00ff00;"> 
                        <span>⚡ God Mode Clicker</span>
                    </label>

                    <label style="display: flex; align-items: center; cursor: pointer; user-select: none;">
                        <input type="checkbox" id="chk-auto-buy" style="margin-right: 8px; accent-color: #00ff00;"> 
                        <span>🏗️ Auto Buy & Upgrade</span>
                    </label>
                </div>
            </div>

            <hr style="border-color: #333; border-style: dashed; margin: 10px 0;">

            <div style="margin-bottom: 10px;">
                <label style="font-size: 11px; color: #aaa; text-transform: uppercase; letter-spacing: 1px;">🚀 Actions</label>
                <button id="btn-unlock-all" style="
                    width: 100%; margin-top: 6px; padding: 8px; 
                    background: rgba(255, 215, 0, 0.1); 
                    color: gold; 
                    border: 1px solid gold; 
                    cursor: pointer; 
                    font-weight: bold; 
                    font-family: inherit;
                    transition: all 0.2s;
                    font-size: 11px;">
                    🏆 UNLOCK ALL ACHIEVEMENTS
                </button>
            </div>

            <button id="btn-close-menu" style="
                width: 100%; margin-top: 5px;
                background: #330000; 
                color: #ff4444; 
                border: 1px solid #ff4444; 
                padding: 6px; 
                cursor: pointer;
                font-family: inherit;
                font-size: 10px;">
                EXIT SYSTEM
            </button>
        </div>
    </div>
    `;

    // 3. INJECT TO DOM
    var container = document.createElement('div');
    container.innerHTML = htmlContent;
    document.body.appendChild(container);

    // 4. ELEMENT REFERENCES
    var consoleDiv = document.getElementById('hacker-console-v2');
    var header = document.getElementById('hacker-header');
    var btnAdd = document.getElementById('btn-add-cookies');
    var inpCookies = document.getElementById('inp-cookies');
    var btnUnlock = document.getElementById('btn-unlock-all');
    var btnClose = document.getElementById('btn-close-menu');
    var chkGodMode = document.getElementById('chk-god-mode');
    var chkAutoBuy = document.getElementById('chk-auto-buy');

    // 5. DRAGGABLE LOGIC
    var isDragging = false;
    var offsetX, offsetY;

    header.onmousedown = function(e) {
        isDragging = true;
        offsetX = e.clientX - consoleDiv.offsetLeft;
        offsetY = e.clientY - consoleDiv.offsetTop;
        header.style.cursor = 'grabbing';
    };

    document.onmousemove = function(e) {
        if (isDragging) {
            consoleDiv.style.left = (e.clientX - offsetX) + 'px';
            consoleDiv.style.top = (e.clientY - offsetY) + 'px';
        }
    };

    document.onmouseup = function() {
        isDragging = false;
        header.style.cursor = 'move';
    };

    // 6. LOGIC IMPLEMENTATION

    // ADD COOKIES
    btnAdd.onclick = function() {
        var amount = parseInt(inpCookies.value);
        if (amount) {
            Game.Earn(amount);
            Game.Notify("HACK SUCCESS", `Injected ${amount.toLocaleString()} cookies!`, [16,5]);
            inpCookies.value = ""; // Xóa số sau khi nhập xong cho đẹp
        }
    };

    // UNLOCK ACHIEVEMENTS
    btnUnlock.onclick = function() {
        var count = 0;
        for (var i in Game.Achievements) {
            var ach = Game.Achievements[i];
            if (ach.won == 0) {
                ach.won = 1;
                count++;
            }
        }
        if (Game.UpgradesInStore.length > 0) Game.RebuildUpgrades(); 
        
        Game.Notify("SYSTEM OVERRIDE", `Force unlocked ${count} achievements.`, [21,1]);
        btnUnlock.innerHTML = "✅ ALL UNLOCKED";
        btnUnlock.disabled = true;
        btnUnlock.style.opacity = "0.5";
        btnUnlock.style.cursor = "not-allowed";
    };

    // CLOSE MENU
    btnClose.onclick = function() {
        clearInterval(gameLoop);
        consoleDiv.remove();
    };

    // 7. CORE LOOP (AUTO)
    var gameLoop = setInterval(function() {
        if (chkGodMode.checked) Game.ClickCookie();
        
        if (chkAutoBuy.checked) {
            if (Game.UpgradesInStore.length > 0) Game.UpgradesInStore[0].buy();
            for (var i in Game.Objects) {
                var building = Game.Objects[i];
                if (Game.cookies >= building.price) building.buy(1);
            }
        }
    }, 50);

    console.log("%c [SYSTEM] UI Updated & Layout Fixed.", "color: lime; font-weight: bold;");

})();
