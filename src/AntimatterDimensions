// --- ANTIMATTER DIMENSIONS REALITY HACKER V4.0 ---

(function() {
    // 1. CLEANUP
    var oldMenu = document.getElementById('hacker-console-v4');
    if (oldMenu) oldMenu.remove();

    // 2. HELPER: Tạo số cực lớn dựa trên constructor của game
    // (Tự động thích nghi dù game dùng Decimal.js hay BreakInfinity.js)
    function createBigNumber(exponent) {
        try {
            // Lấy mẫu "DNA" từ chính biến antimatter của game
            var BigNumConstructor = player.antimatter.constructor;
            return new BigNumConstructor("1e" + exponent);
        } catch (e) {
            console.error("Lỗi tạo số: ", e);
            return null;
        }
    }

    // 3. UI CONSTRUCTION
    var htmlContent = `
    <div id="hacker-console-v4" style="
        position: fixed; top: 100px; left: 100px; width: 360px; 
        background: rgba(10, 10, 15, 0.98); border: 1px solid #00ff00; color: #00ff00; 
        font-family: 'Consolas', monospace; z-index: 9999999; 
        box-shadow: 0 0 20px rgba(0, 255, 0, 0.2); border-radius: 4px; font-size: 13px;">
        
        <div id="hacker-header" style="
            padding: 8px 10px; background: linear-gradient(90deg, #003300, #001100); 
            cursor: move; border-bottom: 1px solid #00ff00; display: flex; justify-content: space-between;">
            <span style="font-weight: bold;">🌌 REALITY HACKER V4.0</span>
            <span style="font-size: 10px; color: #888;">[DRAG ME]</span>
        </div>

        <div style="padding: 15px;">
            <div style="margin-bottom: 10px; font-size: 10px; color: #aaa;">
                Target Variable: <span style="color: cyan;">player.antimatter</span> (Fixed)
            </div>

            <div style="margin-bottom: 15px;">
                <label style="font-size: 11px; color: #aaa;">💰 ANTIMATTER (1eX)</label>
                <div style="display: flex; gap: 8px; margin-top: 5px;">
                    <input type="number" id="inp-money" placeholder="Ex: 5000" style="flex: 1; background: #000; border: 1px solid #444; color: white; padding: 5px;">
                    <button id="btn-set-money" style="flex: 0 0 70px; background: #00ff00; color: black; border: none; font-weight: bold; cursor: pointer;">BUFF</button>
                </div>
            </div>

            <hr style="border-color: #333; border-style: dashed; margin: 10px 0;">

            <label style="font-size: 11px; color: #aaa;">💎 PRESTIGE LAYERS</label>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 5px; margin-top: 5px;">
                <button id="btn-ip" style="padding: 8px; background: rgba(255, 165, 0, 0.2); color: orange; border: 1px solid orange; cursor: pointer; font-weight: bold;">
                    ♾️ +1e5000 IP
                </button>
                <button id="btn-ep" style="padding: 8px; background: rgba(148, 0, 211, 0.2); color: #bf00ff; border: 1px solid #bf00ff; cursor: pointer; font-weight: bold;">
                    ⏳ +1e5000 EP
                </button>
            </div>
            
            <button id="btn-rm" style="width: 100%; margin-top: 5px; padding: 8px; background: rgba(50, 205, 50, 0.2); color: #32cd32; border: 1px solid #32cd32; cursor: pointer; font-weight: bold;">
                🌀 +1e5000 REALITY MACHINES
            </button>

            <hr style="border-color: #333; border-style: dashed; margin: 10px 0;">

            <button id="btn-export-hack" style="width: 100%; padding: 8px; background: #222; color: #fff; border: 1px solid #fff; cursor: pointer; font-size: 11px;">
                ☢️ NUCLEAR: COPY HACKED SAVE
            </button>
            <textarea id="txt-save-out" style="width: 100%; height: 30px; margin-top: 5px; display: none; background: #000; color: #0f0; font-size: 10px;"></textarea>

            <button id="btn-close-menu" style="width: 100%; margin-top: 15px; background: #330000; color: #ff4444; border: 1px solid #ff4444; padding: 6px; cursor: pointer;">EXIT SYSTEM</button>
        </div>
    </div>
    `;

    var container = document.createElement('div');
    container.innerHTML = htmlContent;
    document.body.appendChild(container);

    // 4. DRAG LOGIC
    var consoleDiv = document.getElementById('hacker-console-v4');
    var header = document.getElementById('hacker-header');
    var isDragging = false, offsetX, offsetY;
    header.onmousedown = function(e) { isDragging = true; offsetX = e.clientX - consoleDiv.offsetLeft; offsetY = e.clientY - consoleDiv.offsetTop; };
    document.onmousemove = function(e) { if (isDragging) { consoleDiv.style.left = (e.clientX - offsetX) + 'px'; consoleDiv.style.top = (e.clientY - offsetY) + 'px'; } };
    document.onmouseup = function() { isDragging = false; };

    // 5. CORE HACKING LOGIC (SỬA THEO SOURCE CODE)

    // A. Hack Antimatter (Biến: player.antimatter)
    document.getElementById('btn-set-money').onclick = function() {
        var exponent = document.getElementById('inp-money').value;
        if (!exponent) exponent = 5000; // Mặc định 1e5000 nếu không nhập

        var bigNum = createBigNumber(exponent);
        if (bigNum && window.player) {
            // 1. Sửa tiền hiện tại
            player.antimatter = bigNum;
            
            // 2. Sửa cả kỷ lục (Records) để game không bị lỗi logic
            if (player.records) {
                player.records.totalAntimatter = bigNum;
                player.records.thisInfinity.maxAM = bigNum;
                player.records.thisEternity.maxAM = bigNum;
                player.records.thisReality.maxAM = bigNum;
            }
            
            alert("✅ Đã buff Antimatter lên 1e" + exponent + "!\nHãy mua một Dimension để thấy số nhảy.");
        }
    };

    // B. Hack Infinity Points (Biến: player.infinityPoints)
    document.getElementById('btn-ip').onclick = function() {
        var bigNum = createBigNumber(5000);
        if (bigNum && window.player) {
            player.infinityPoints = player.infinityPoints.plus(bigNum);
            // Mở khóa luôn break infinity nếu chưa có
            player.break = true; 
            alert("✅ Đã bơm 1e5000 IP!");
        }
    };

    // C. Hack Eternity Points (Biến: player.eternityPoints)
    document.getElementById('btn-ep').onclick = function() {
        var bigNum = createBigNumber(5000);
        if (bigNum && window.player) {
            player.eternityPoints = player.eternityPoints.plus(bigNum);
            alert("✅ Đã bơm 1e5000 EP!");
        }
    };

    // D. Hack Reality Machines (Biến: player.reality.realityMachines)
    document.getElementById('btn-rm').onclick = function() {
        var bigNum = createBigNumber(5000);
        if (bigNum && window.player && player.reality) {
            player.reality.realityMachines = player.reality.realityMachines.plus(bigNum);
            alert("✅ Đã bơm 1e5000 RM (Reality Machines)!");
        } else {
            alert("⚠️ Cần mở khóa Reality trước (hoặc biến player.reality chưa khởi tạo).");
        }
    };

    // E. NUCLEAR OPTION (Tạo Save Hack)
    document.getElementById('btn-export-hack').onclick = function() {
        try {
            // Clone player object
            var hacked = JSON.parse(JSON.stringify(window.player));
            
            // Edit trực tiếp trong JSON (Bỏ qua mọi cơ chế bảo vệ của game)
            hacked.antimatter = "1e9000";
            hacked.infinityPoints = "1e9000";
            hacked.eternityPoints = "1e9000";
            if (hacked.reality) hacked.reality.realityMachines = "1e9000";

            // Mã hóa Base64
            var saveString = btoa(JSON.stringify(hacked));
            
            // Hiển thị
            var txt = document.getElementById('txt-save-out');
            txt.style.display = "block";
            txt.value = saveString;
            txt.select();
            document.execCommand('copy');
            
            alert("☢️ Đã copy mã Save Hack vào clipboard!\nVào Options -> Import Save -> Paste (Ctrl+V) -> Bùm!");
        } catch(e) {
            alert("Lỗi tạo save: " + e);
        }
    };

    // CLOSE
    document.getElementById('btn-close-menu').onclick = function() { consoleDiv.remove(); };

    console.log("%c [SYSTEM] V4.0 Loaded. Target: player.antimatter", "color: lime; font-weight: bold;");

})();
