(function () {
  if (sessionStorage.getItem("gvs_auth") === "1") return;

  var overlay = document.createElement("div");
  overlay.style.cssText =
    "position:fixed;top:0;left:0;width:100%;height:100%;background:#0a0a0a;z-index:999999;display:flex;align-items:center;justify-content:center;font-family:sans-serif;";

  overlay.innerHTML =
    '<div style="background:#1a1a1a;border:1px solid #333;padding:40px;border-radius:12px;width:320px;text-align:center;">' +
    '<h2 style="color:#fff;margin:0 0 8px;">GVS Site Preview</h2>' +
    '<p style="color:#888;margin:0 0 24px;font-size:14px;">Enter credentials to continue</p>' +
    '<input id="gvs-user" type="text" placeholder="Username" style="width:100%;padding:10px;margin-bottom:12px;background:#111;border:1px solid #333;border-radius:6px;color:#fff;box-sizing:border-box;font-size:14px;">' +
    '<input id="gvs-pass" type="password" placeholder="Password" style="width:100%;padding:10px;margin-bottom:16px;background:#111;border:1px solid #333;border-radius:6px;color:#fff;box-sizing:border-box;font-size:14px;">' +
    '<div id="gvs-err" style="color:#ff4444;font-size:13px;margin-bottom:12px;display:none;">Invalid credentials</div>' +
    '<button id="gvs-btn" style="width:100%;padding:11px;background:#e03d3d;border:none;border-radius:6px;color:#fff;font-size:15px;cursor:pointer;">Enter</button>' +
    "</div>";

  document.documentElement.appendChild(overlay);

  function tryLogin() {
    var u = document.getElementById("gvs-user").value;
    var p = document.getElementById("gvs-pass").value;
    if (u === "test" && p === "test") {
      sessionStorage.setItem("gvs_auth", "1");
      overlay.remove();
    } else {
      document.getElementById("gvs-err").style.display = "block";
    }
  }

  document.getElementById("gvs-btn").addEventListener("click", tryLogin);
  document.getElementById("gvs-pass").addEventListener("keydown", function (e) {
    if (e.key === "Enter") tryLogin();
  });
})();
