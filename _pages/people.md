---
layout: archive
title: "People"
permalink: /people/
author_profile: true
---

<style>
  .people-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.4em;
    margin: 1em 0 2.2em;
  }
  @media screen and (max-width: 47em) {
    .people-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media screen and (max-width: 30em) {
    .people-grid { grid-template-columns: 1fr; }
  }
  .person-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1.4em 1em 1.2em;
    border: 1px solid rgba(0, 0, 0, 0.12);
    border-radius: 14px;
  }
  .person-photo {
    width: 160px;
    height: 160px;
    border-radius: 50%;
    object-fit: cover;
    display: block;
    margin-bottom: 0.75em;
    border: 2px solid rgba(139, 26, 26, 0.55);
  }
  .person-photo--placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3em;
    font-weight: 700;
    letter-spacing: 0.02em;
    color: #fff;
    background: linear-gradient(135deg, #8b1a1a, #b5473f);
    border-color: transparent;
  }
  .person-name {
    font-weight: 700;
    font-size: 1.05em;
    line-height: 1.25;
    /* reserve up to two lines so names of different lengths keep rows aligned */
    min-height: 2.5em;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .person-role {
    font-size: 0.84em;
    color: #6b7280;
    margin-top: 0.15em;
  }
  .person-co {
    font-size: 0.82em;
    color: #6b7280;
    font-style: italic;
    margin-top: 0.3em;
    /* reserve one line so cards without a co-advisor keep the honors row aligned */
    min-height: 1.15em;
  }
  .person-honors {
    list-style: none;
    padding: 0;
    margin: 0.75em 0 0;
    font-size: 0.76em;
    line-height: 1.3;
    color: #555;
    text-align: left;
    align-self: stretch;
  }
  .person-honors li {
    display: flex;
    gap: 0.35em;
    margin-bottom: 0.28em;
  }
  .person-honors li::before {
    content: "\1F3C6"; /* trophy */
    flex: 0 0 auto;
  }
  .person-links {
    margin-top: auto; /* pin to the bottom so icons align across cards */
    padding-top: 0.85em;
    display: flex;
    justify-content: center;
    gap: 0.85em;
    font-size: 1.1em;
  }
  .person-links a {
    color: #8b1a1a;
    text-decoration: none;
  }
  .person-links a:hover {
    color: #b5473f;
  }

  /* dark mode */
  html[data-theme="dark"] .person-card {
    border-color: rgba(216, 181, 104, 0.25);
    background: rgba(255, 255, 255, 0.03);
  }
  html[data-theme="dark"] .person-photo {
    border-color: rgba(216, 181, 104, 0.55);
  }
  html[data-theme="dark"] .person-photo--placeholder {
    background: linear-gradient(135deg, #b98f34, #d8b568);
    color: #0a1426;
  }
  html[data-theme="dark"] .person-role,
  html[data-theme="dark"] .person-co,
  html[data-theme="dark"] .person-honors {
    color: #97a2b6;
  }
  html[data-theme="dark"] .person-links a {
    color: #d8b568;
  }
  html[data-theme="dark"] .person-links a:hover {
    color: #eccd85;
  }
</style>

## Current members

### PhD Students

<div class="people-grid">
  {% for p in site.data.people.phd %}
  <div class="person-card">
    {% if p.photo %}
    <img class="person-photo" src="{{ '/images/' | append: p.photo }}" alt="{{ p.name }}" style="object-position: {{ p.photo_pos | default: 'center' }};">
    {% else %}
    <div class="person-photo person-photo--placeholder" aria-hidden="true">{{ p.name | split: " " | first | slice: 0, 1 }}{{ p.name | split: " " | last | slice: 0, 1 }}</div>
    {% endif %}
    <div class="person-name">{{ p.name }}</div>
    <div class="person-role">{{ p.program | default: "PhD Student" }}{% if p.start %} · {{ p.start }}{% endif %}{% if p.note %} ({{ p.note }}){% endif %}</div>
    <div class="person-co">{% if p.coadvisor %}Co-advised with {{ p.coadvisor }}{% endif %}</div>
    {% if p.honors and p.honors.size > 0 %}
    <ul class="person-honors">
      {% for h in p.honors %}<li>{{ h }}</li>{% endfor %}
    </ul>
    {% endif %}
    <div class="person-links">
      {% if p.homepage %}<a href="{{ p.homepage }}" target="_blank" rel="noopener" title="Homepage" aria-label="Homepage of {{ p.name }}"><i class="fas fa-globe"></i></a>{% endif %}
      {% if p.email %}<a href="mailto:{{ p.email }}" title="Email" aria-label="Email {{ p.name }}"><i class="fas fa-envelope"></i></a>{% endif %}
      {% if p.scholar %}<a href="{{ p.scholar }}" target="_blank" rel="noopener" title="Google Scholar" aria-label="Google Scholar of {{ p.name }}"><i class="fas fa-graduation-cap"></i></a>{% endif %}
      {% if p.github %}<a href="{{ p.github }}" target="_blank" rel="noopener" title="GitHub" aria-label="GitHub of {{ p.name }}"><i class="fab fa-github"></i></a>{% endif %}
    </div>
  </div>
  {% endfor %}
</div>

### Master Students

- Euijin Hong 
- Jivesh Jain

<!-- **Visitors** -->

## Past members

**Master Students**
- Yumeng Xiu (next position: CMU PhD)
- Eric Xu (next position: UC Berkeley EECS PhD)


**Selected Visitors**
- Han Xu (Master visiting student, next position: Caltech PhD)
- Junxuan Shen (Undergrad visiting student from Caltech, next position: MIT EECS PhD)
- Yang Hu (Undergrad virtual visitor, next position: Harvard PhD)
- Ruixiao Yang (Undergrad virtual visitor, next position: MIT PhD)
- Yizhou Zhang (Undergrad virtual visitor, next position Caltech PhD)
- Emile Anand (Undergrad visiting student, next position: Georgia Tech PhD)
