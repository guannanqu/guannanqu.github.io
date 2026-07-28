/*
 * Publications page: Highlighted/All toggle + single-select topic filter.
 * Kept in an external file (not inline) so the site's HTML compressor, which
 * collapses newlines in production, cannot break line comments.
 */
(function () {
  "use strict";

  function init() {
    var list = document.getElementById("pub-list");
    if (!list) return;

    var items = Array.prototype.slice.call(list.querySelectorAll(".pub-item"));
    var segBtns = document.querySelectorAll(".pub-seg__btn");
    var topicBtns = document.querySelectorAll(".pub-topic");
    var countEl = document.getElementById("pub-count");
    var emptyEl = document.getElementById("pub-empty");

    var view = "highlighted"; /* 'highlighted' | 'all' */
    var topic = "__all__"; /* '__all__' or a single tag slug */

    function setView(v) {
      view = v;
      segBtns.forEach(function (x) {
        x.classList.toggle("is-active", x.getAttribute("data-view") === v);
      });
    }

    function setTopic(t) {
      topic = t;
      topicBtns.forEach(function (x) {
        x.classList.toggle("is-on", x.getAttribute("data-tag") === t);
      });
    }

    function apply() {
      var shown = 0;
      items.forEach(function (it) {
        var isHl = it.getAttribute("data-highlighted") === "true";
        var tags = (it.getAttribute("data-tags") || "").trim().split(/\s+/).filter(Boolean);
        var viewOk = view === "all" || isHl;
        var tagOk = topic === "__all__" || tags.indexOf(topic) !== -1;
        var visible = viewOk && tagOk;
        it.hidden = !visible;
        if (visible) shown++;
      });
      if (countEl) countEl.textContent = "Showing " + shown + " of " + items.length;
      if (emptyEl) emptyEl.classList.toggle("is-shown", shown === 0);
    }

    segBtns.forEach(function (b) {
      b.addEventListener("click", function () {
        setView(b.getAttribute("data-view"));
        apply();
      });
    });

    topicBtns.forEach(function (b) {
      b.addEventListener("click", function () {
        var t = b.getAttribute("data-tag");
        if (t === "__all__" || t === topic) {
          setTopic("__all__");
        } else {
          setTopic(t);
          setView("all");
        }
        apply();
      });
    });

    apply();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
