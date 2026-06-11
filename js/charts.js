/* Tiny dependency-free SVG charts. */
window.MCAT = window.MCAT || {};
MCAT.Charts = {
  // Donut: pct 0-100, color, returns SVG string
  donut: function (pct, color, bigText, smallText) {
    const r = 60, c = 2 * Math.PI * r, cx = 75, cy = 75;
    const filled = Math.max(0, Math.min(100, pct)) / 100 * c;
    return '' +
      '<svg width="150" height="150" viewBox="0 0 150 150">' +
        '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="#e6eaee" stroke-width="14"/>' +
        '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="none" stroke="' + color + '" stroke-width="14" ' +
          'stroke-linecap="round" stroke-dasharray="' + filled + ' ' + (c - filled) + '" ' +
          'transform="rotate(-90 ' + cx + ' ' + cy + ')"/>' +
      '</svg>';
  },

  // Line chart for daily accuracy.
  // series: [{date:'YYYY-MM-DD', accuracy}]
  line: function (series, width, height) {
    width = width || 760; height = height || 240;
    const padL = 38, padR = 16, padT = 16, padB = 34;
    const W = width - padL - padR, H = height - padT - padB;

    // y gridlines 0,25,50,75,100
    let grid = "";
    [0, 25, 50, 75, 100].forEach(function (v) {
      const y = padT + H - (v / 100) * H;
      grid += '<line x1="' + padL + '" y1="' + y + '" x2="' + (padL + W) + '" y2="' + y + '" stroke="#eceff2" stroke-dasharray="3 3"/>';
      grid += '<text x="' + (padL - 8) + '" y="' + (y + 4) + '" text-anchor="end" font-size="11" fill="#9aa3ab">' + v + '%</text>';
    });

    if (!series.length) {
      return '<svg width="100%" viewBox="0 0 ' + width + ' ' + height + '">' + grid +
        '<text x="' + (padL + W / 2) + '" y="' + (padT + H / 2) + '" text-anchor="middle" font-size="13" fill="#9aa3ab">No data yet — complete a passage to see your trend.</text></svg>';
    }

    const n = series.length;
    const xFor = function (i) { return n === 1 ? padL + W / 2 : padL + (i / (n - 1)) * W; };
    const yFor = function (v) { return padT + H - (v / 100) * H; };

    let path = "", area = "", dots = "", labels = "";
    series.forEach(function (pt, i) {
      const x = xFor(i), y = yFor(pt.accuracy);
      path += (i === 0 ? "M" : "L") + x.toFixed(1) + " " + y.toFixed(1) + " ";
      dots += '<circle cx="' + x.toFixed(1) + '" cy="' + y.toFixed(1) + '" r="4" fill="#5b6cf0"/>';
      dots += '<title>' + pt.date + ': ' + pt.accuracy + '%</title>';
      // x labels: show first, middle, last
      if (i === 0 || i === n - 1 || (n > 2 && i === Math.floor((n - 1) / 2))) {
        labels += '<text x="' + x.toFixed(1) + '" y="' + (padT + H + 20) + '" text-anchor="middle" font-size="11" fill="#6a7680">' + MCAT.Charts.shortDate(pt.date) + '</text>';
      }
    });
    area = path + "L" + xFor(n - 1).toFixed(1) + " " + (padT + H) + " L" + xFor(0).toFixed(1) + " " + (padT + H) + " Z";

    return '<svg width="100%" viewBox="0 0 ' + width + ' ' + height + '">' +
      grid +
      '<path d="' + area + '" fill="rgba(91,108,240,.10)"/>' +
      '<path d="' + path + '" fill="none" stroke="#5b6cf0" stroke-width="2.5" stroke-linejoin="round"/>' +
      dots + labels +
      '</svg>';
  },

  shortDate: function (iso) {
    const m = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    const d = new Date(iso + "T00:00:00");
    return d.getDate() + m[d.getMonth()] + " " + d.getFullYear();
  }
};
