---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% assign topics = "llm,LLM;interpretability,Interpretability;theory,Theory;diffusion,Diffusion;reinforcement-learning,Reinforcement Learning;multi-agent,Multi-Agent;control,Control;robotics,Robotics;optimization,Optimization;power-systems,Power Systems" | split: ";" %}

<style>
  .pub-intro { margin-bottom: 1.2em; }

  /* ---- controls ---- */
  .pub-controls {
    margin: 0 0 1.4em;
    padding: 0 0 1em;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  }
  .pub-controls__row {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.5em 0.75em;
    margin-bottom: 0.8em;
  }
  .pub-controls__row:last-child { margin-bottom: 0; }
  .pub-controls__label {
    font-size: 0.72em;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #6b7280;
    margin-right: 0.15em;
  }

  /* segmented All / Highlighted toggle */
  .pub-seg {
    display: inline-flex;
    border: 1px solid #8b1a1a;
    border-radius: 999px;
    overflow: hidden;
  }
  .pub-seg__btn {
    border: 0;
    background: transparent;
    color: #8b1a1a;
    font-weight: 700;
    font-size: 0.85em;
    padding: 0.4em 1.1em;
    cursor: pointer;
    -webkit-transition: all 0.15s ease;
            transition: all 0.15s ease;
  }
  .pub-seg__btn.is-active {
    background: #8b1a1a;
    color: #fff;
  }

  /* topic pills */
  .pub-topic {
    border: 1px solid rgba(139, 26, 26, 0.5);
    background: transparent;
    color: #8b1a1a;
    font-size: 0.8em;
    font-weight: 600;
    padding: 0.28em 0.8em;
    border-radius: 999px;
    cursor: pointer;
    -webkit-transition: all 0.15s ease;
            transition: all 0.15s ease;
  }
  .pub-topic:hover { background: rgba(139, 26, 26, 0.08); }
  .pub-topic.is-on {
    background: #8b1a1a;
    color: #fff;
    border-color: #8b1a1a;
  }
  .pub-count {
    font-size: 0.8em;
    color: #6b7280;
    margin-left: auto;
  }

  /* ---- list ---- */
  .pub-list { list-style: none; padding: 0; margin: 0; }
  .pub-item {
    padding: 0.85em 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.07);
  }
  .pub-item[hidden] { display: none; }
  .pub-title {
    display: block;
    font-weight: 700;
    line-height: 1.35;
  }
  .pub-authors { display: block; font-size: 0.92em; }
  .pub-venue { font-style: italic; color: #555; font-size: 0.9em; }
  .pub-link {
    font-size: 0.82em;
    font-weight: 600;
    white-space: nowrap;
    margin-left: 0.15em;
  }
  .pub-link::before { content: "["; }
  .pub-link::after  { content: "]"; }
  .pub-award {
    display: inline-block;
    font-size: 0.72em;
    font-weight: 700;
    letter-spacing: 0.02em;
    padding: 0.1em 0.55em;
    margin-left: 0.2em;
    border-radius: 4px;
    background: #f3e2bb;
    color: #7a5713;
    white-space: nowrap;
  }
  .pub-award::before { content: "\1F3C6\00A0"; } /* trophy + nbsp */
  .pub-chips { margin-top: 0.4em; display: flex; flex-wrap: wrap; gap: 0.35em; }
  .pub-chip {
    font-size: 0.68em;
    font-weight: 600;
    letter-spacing: 0.02em;
    padding: 0.12em 0.5em;
    border-radius: 999px;
    background: rgba(0, 0, 0, 0.06);
    color: #555;
  }
  .pub-chip--hl {
    background: rgba(139, 26, 26, 0.12);
    color: #8b1a1a;
  }
  .pub-empty { display: none; color: #6b7280; font-style: italic; padding: 1em 0; }
  .pub-empty.is-shown { display: block; }

  /* ---- dark mode ---- */
  html[data-theme="dark"] .pub-controls { border-bottom-color: rgba(216, 181, 104, 0.25); }
  html[data-theme="dark"] .pub-controls__label,
  html[data-theme="dark"] .pub-count { color: #8b97ad; }
  html[data-theme="dark"] .pub-seg { border-color: #d8b568; }
  html[data-theme="dark"] .pub-seg__btn { color: #d8b568; }
  html[data-theme="dark"] .pub-seg__btn.is-active { background: #d8b568; color: #0a1426; }
  html[data-theme="dark"] .pub-topic { color: #d8b568; border-color: rgba(216, 181, 104, 0.5); }
  html[data-theme="dark"] .pub-topic:hover { background: rgba(216, 181, 104, 0.12); }
  html[data-theme="dark"] .pub-topic.is-on { background: #d8b568; color: #0a1426; border-color: #d8b568; }
  html[data-theme="dark"] .pub-item { border-bottom-color: rgba(255, 255, 255, 0.08); }
  html[data-theme="dark"] .pub-venue { color: #97a2b6; }
  html[data-theme="dark"] .pub-award { background: rgba(216, 181, 104, 0.22); color: #eccd85; }
  html[data-theme="dark"] .pub-chip { background: rgba(255, 255, 255, 0.08); color: #b9c2d0; }
  html[data-theme="dark"] .pub-chip--hl { background: rgba(216, 181, 104, 0.16); color: #d8b568; }
</style>

<p class="pub-intro">You can also find my publications on <a href="https://scholar.google.com/citations?user=oFIXoy8AAAAJ&hl=en&oi=ao">my Google Scholar profile</a>.</p>

<div class="pub-controls">
  <div class="pub-controls__row">
    <span class="pub-controls__label">Show</span>
    <div class="pub-seg" role="group" aria-label="Show papers">
      <button type="button" class="pub-seg__btn is-active" data-view="highlighted">Highlighted</button>
      <button type="button" class="pub-seg__btn" data-view="all">All</button>
    </div>
    <span class="pub-count" id="pub-count"></span>
  </div>
  <div class="pub-controls__row">
    <span class="pub-controls__label">Topics</span>
    <button type="button" class="pub-topic is-on" data-tag="__all__">All Topics</button>
    {% for t in topics %}{% assign parts = t | split: "," %}
    <button type="button" class="pub-topic" data-tag="{{ parts[0] }}">{{ parts[1] }}</button>
    {% endfor %}
  </div>
</div>

<ul class="pub-list" id="pub-list">
  {% for pub in site.data.publications %}
  <li class="pub-item" data-highlighted="{{ pub.highlighted }}" data-tags="{% for s in pub.tags %}{{ s }} {% endfor %}">
    <span class="pub-title">{{ pub.title | escape }}</span>
    <span class="pub-authors">{{ pub.authors | escape | replace: '**Guannan Qu**', '<strong>Guannan Qu</strong>' }}</span>
    <span class="pub-venue">{{ pub.venue | escape }}</span>{% if pub.award %} <span class="pub-award">{{ pub.award | escape }}</span>{% endif %}{% for l in pub.links %}<a class="pub-link" href="{{ l.url }}" target="_blank" rel="noopener">{{ l.text | escape }}</a>{% endfor %}
    <span class="pub-chips">
      {% if pub.highlighted %}<span class="pub-chip pub-chip--hl">★ Highlighted</span>{% endif %}
      {% for s in pub.tags %}{% assign lbl = s %}{% for t in topics %}{% assign parts = t | split: "," %}{% if parts[0] == s %}{% assign lbl = parts[1] %}{% endif %}{% endfor %}<span class="pub-chip" data-tag="{{ s }}">{{ lbl }}</span>{% endfor %}
    </span>
  </li>
  {% endfor %}
</ul>

<p class="pub-empty" id="pub-empty">No papers match the current filters.</p>

<script>
(function () {
  var list = document.getElementById('pub-list');
  if (!list) return;
  var items = Array.prototype.slice.call(list.querySelectorAll('.pub-item'));
  var segBtns = document.querySelectorAll('.pub-seg__btn');
  var topicBtns = document.querySelectorAll('.pub-topic');
  var countEl = document.getElementById('pub-count');
  var emptyEl = document.getElementById('pub-empty');

  var view = 'highlighted'; // 'highlighted' | 'all'
  var topic = '__all__';    // '__all__' or a single tag slug

  function setView(v) {
    view = v;
    segBtns.forEach(function (x) {
      x.classList.toggle('is-active', x.getAttribute('data-view') === v);
    });
  }

  function setTopic(t) {
    topic = t;
    topicBtns.forEach(function (x) {
      x.classList.toggle('is-on', x.getAttribute('data-tag') === t);
    });
  }

  function apply() {
    var shown = 0;
    items.forEach(function (it) {
      var isHl = it.getAttribute('data-highlighted') === 'true';
      var tags = (it.getAttribute('data-tags') || '').trim().split(/\s+/).filter(Boolean);
      var viewOk = (view === 'all') || isHl;
      var tagOk = (topic === '__all__') || tags.indexOf(topic) !== -1;
      var visible = viewOk && tagOk;
      it.hidden = !visible;
      if (visible) shown++;
    });
    if (countEl) countEl.textContent = 'Showing ' + shown + ' of ' + items.length;
    if (emptyEl) emptyEl.classList.toggle('is-shown', shown === 0);
  }

  segBtns.forEach(function (b) {
    b.addEventListener('click', function () {
      setView(b.getAttribute('data-view'));
      apply();
    });
  });

  topicBtns.forEach(function (b) {
    b.addEventListener('click', function () {
      var t = b.getAttribute('data-tag');
      if (t === '__all__' || t === topic) {
        // clicking "All Topics" (or the already-selected topic) resets to all topics
        setTopic('__all__');
      } else {
        // selecting a single topic: show all papers in that topic
        setTopic(t);
        setView('all');
      }
      apply();
    });
  });

  apply();
})();
</script>
