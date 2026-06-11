/* Small shared UI helpers (nav highlight, toast). */
window.MCAT = window.MCAT || {};

MCAT.UI = {
  // mark the active nav link based on data-page
  initNav: function (page) {
    document.querySelectorAll(".nav-links a").forEach(function (a) {
      if (a.getAttribute("data-page") === page) a.classList.add("active");
    });
  },

  toast: function (msg) {
    let t = document.getElementById("__toast");
    if (!t) {
      t = document.createElement("div");
      t.id = "__toast";
      t.className = "toast";
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.classList.add("show");
    clearTimeout(t.__hide);
    t.__hide = setTimeout(function () { t.classList.remove("show"); }, 2200);
  },

  fmtDuration: function (sec) {
    sec = Math.max(0, Math.round(sec));
    const m = Math.floor(sec / 60), s = sec % 60;
    return m + ":" + String(s).padStart(2, "0");
  },

  fmtDate: function (iso) {
    try {
      const d = new Date(iso);
      return d.toLocaleString(undefined, { month: "short", day: "numeric", year: "numeric", hour: "numeric", minute: "2-digit" });
    } catch (e) { return iso; }
  }
};
