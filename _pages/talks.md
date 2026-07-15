---
layout: archive
title: "Talks"
permalink: /talks/
author_profile: true
---

<style>
  .talks-list {
    margin-top: 0.5em;
  }
  .talk-item {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  }
  .talk-item > summary {
    list-style: none;
    cursor: pointer;
    display: flex;
    align-items: baseline;
    gap: 0.5em;
    padding: 0.7em 0;
    color: #8b1a1a;
    font-weight: 700;
    -webkit-user-select: none;
            user-select: none;
  }
  .talk-item > summary::-webkit-details-marker {
    display: none;
  }
  .talk-item > summary::before {
    content: "\25B8"; /* ▸ */
    display: inline-block;
    flex: 0 0 auto;
    -webkit-transition: -webkit-transform 0.2s ease;
            transition: transform 0.2s ease;
  }
  .talk-item[open] > summary::before {
    -webkit-transform: rotate(90deg);
            transform: rotate(90deg);
  }
  .talk-item > summary:hover {
    text-decoration: underline;
  }
  .talk-meta {
    font-weight: 400;
    color: #6b7280;
  }
  .talk-body {
    padding: 0.25em 0 1.25em;
  }
  .pdf-embed {
    position: relative;
    width: 100%;
    height: 80vh;
    min-height: 420px;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 6px;
    overflow: hidden;
    background: #f4f4f4;
  }
  .pdf-embed iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }
  .pdf-download {
    display: inline-block;
    margin-top: 0.6em;
    font-size: 0.9em;
    font-weight: 600;
  }

  /* Dark mode: gold accent to match the site theme */
  html[data-theme="dark"] .talk-item {
    border-bottom-color: rgba(216, 181, 104, 0.25);
  }
  html[data-theme="dark"] .talk-item > summary {
    color: #d8b568;
  }
  html[data-theme="dark"] .talk-meta {
    color: #8b97ad;
  }
  html[data-theme="dark"] .pdf-embed {
    border-color: rgba(216, 181, 104, 0.25);
    background: #0c1a30;
  }
</style>

Click a talk below to view the slides inline. Slides load only when a talk is expanded.

<div class="talks-list" markdown="0">

  <details class="talk-item">
    <summary>Dynamical System Perspectives of LLMs <span class="talk-meta">2026</span></summary>
    <div class="talk-body">
      <div class="pdf-embed">
        <iframe src="/files/dynamical_system_LLM_2026.pdf#view=FitH" title="Dynamical System Perspectives of LLMs — 2026 (slides)" loading="lazy"></iframe>
      </div>
      <a class="pdf-download" href="/files/dynamical_system_LLM_2026.pdf" target="_blank" rel="noopener">Open / download PDF ↗</a>
    </div>
  </details>

  <details class="talk-item">
    <summary>Locally Interdependent Multi-Agent MDP <span class="talk-meta">2026</span></summary>
    <div class="talk-body">
      <div class="pdf-embed">
        <iframe src="/files/LIMDP2026.pdf#view=FitH" title="LIMDP" loading="lazy"></iframe>
      </div>
      <a class="pdf-download" href="/files/LIMDP2026.pdf" target="_blank" rel="noopener">Open / download PDF ↗</a>
    </div>
  </details>

  <details class="talk-item">
    <summary>Sampling-Based Methods for Optimal Control: Theory, Algorithms, and Applications <span class="talk-meta">2025</span></summary>
    <div class="talk-body">
      <div class="pdf-embed">
        <iframe src="/files/Sampling2025.pdf#view=FitH" title="Sampling-Based Methods for Optimal Control: Theory, Algorithms, and Applications" loading="lazy"></iframe>
      </div>
      <a class="pdf-download" href="/files/Sampling2025.pdf" target="_blank" rel="noopener">Open / download PDF ↗</a>
    </div>
  </details>

  <details class="talk-item">
    <summary>Structure-Exploiting RL for Networked Systems <span class="talk-meta">2025</span></summary>
    <div class="talk-body">
      <div class="pdf-embed">
        <iframe src="/files/Structure_exploiting2026.pdf#view=FitH" title="Structure-Exploiting RL for Networked Systems" loading="lazy"></iframe>
      </div>
      <a class="pdf-download" href="/files/Structure_exploiting2026.pdf" target="_blank" rel="noopener">Open / download PDF ↗</a>
    </div>
  </details>

  <!--
  ===== To add another talk, copy this block, drop the PDF in /files/, and edit =====
  <details class="talk-item">
    <summary>Talk title here <span class="talk-meta">— Venue, Year</span></summary>
    <div class="talk-body">
      <div class="pdf-embed">
        <iframe src="/files/YOUR-TALK.pdf#view=FitH" title="Talk title (slides)" loading="lazy"></iframe>
      </div>
      <a class="pdf-download" href="/files/YOUR-TALK.pdf" target="_blank" rel="noopener">Open / download PDF ↗</a>
    </div>
  </details>
  -->

</div>
