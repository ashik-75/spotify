(function () {
  'use strict';

  const copied = new Set();

  // ── Styles ──────────────────────────────────────────────────
  const style = document.createElement('style');
  style.textContent = `
    @keyframes acIn { from { opacity:0; transform:translateX(20px); } to { opacity:1; transform:translateX(0); } }
  `;
  document.head.appendChild(style);

  // ── Toast ───────────────────────────────────────────────────
  function showToast(text) {
    const old = document.getElementById('ac-toast');
    if (old) old.remove();
    const t = document.createElement('div');
    t.id = 'ac-toast';
    t.style.cssText = `
      position:fixed; top:24px; right:24px;
      background:#0f3460; color:#7ec8e3;
      font-family:monospace; font-size:13px;
      padding:12px 18px; border-radius:8px;
      box-shadow:0 6px 24px rgba(0,0,0,0.45);
      z-index:999999; border-left:4px solid #7ec8e3;
      max-width:380px; word-break:break-all;
      animation:acIn 0.25s ease; line-height:1.7;
    `;
    t.innerHTML = `<div style="color:#aaa;font-size:11px;margin-bottom:4px;">📋 Copied to clipboard</div><div>${text}</div>`;
    document.body.appendChild(t);
    setTimeout(() => { t.style.transition = 'opacity 0.4s'; t.style.opacity = '0'; setTimeout(() => t.remove(), 400); }, 3500);
  }

  // ── Clipboard ───────────────────────────────────────────────
  function toClip(text) {
    navigator.clipboard.writeText(text).catch(() => {
      const ta = document.createElement('textarea');
      ta.value = text; ta.style.cssText = 'position:fixed;opacity:0;';
      document.body.appendChild(ta); ta.select();
      document.execCommand('copy'); ta.remove();
    });
  }

  // ── Get name from the same row as a given element ───────────
  function getNameFromRow(el) {
    const row = el.closest('[role="row"]');
    if (!row) return '';
    const cell = row.querySelector('[data-testid="contact-name-cell"]');
    return cell ? cell.textContent.trim() : '';
  }

  // ── Handle a newly visible email element ────────────────────
  function handleEmailEl(el) {
    const email = el.textContent.trim().toLowerCase();

    // Must look like a real email
    if (!email.includes('@')) return;
    if (email.includes('apollo.io') || email.includes('example.com')) return;

    // Skip if already copied
    if (copied.has(email)) return;
    copied.add(email);

    const name = getNameFromRow(el);
    const text = name ? `${name},${email}` : email;

    toClip(text);
    showToast(text);
    console.log('%c[Apollo Catcher] ✓', 'color:#7ec8e3;font-weight:bold;', text);
  }

  // ── Scan existing email cells on page ───────────────────────
  function scanExisting() {
    document.querySelectorAll('[data-testid="EditableEmailCell__link"]').forEach(handleEmailEl);
  }

  // ── MutationObserver — watch for email cells appearing ──────
  const observer = new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      // Case 1: new node added that IS or CONTAINS the email cell
      mutation.addedNodes.forEach(node => {
        if (node.nodeType !== 1) return;

        // The node itself
        if (node.matches?.('[data-testid="EditableEmailCell__link"]')) {
          handleEmailEl(node);
          return;
        }

        // Or a descendant inside the added node
        node.querySelectorAll('[data-testid="EditableEmailCell__link"]').forEach(handleEmailEl);
      });

      // Case 2: text content changed inside an existing email cell
      if (mutation.type === 'characterData') {
        const el = mutation.target.parentElement?.closest('[data-testid="EditableEmailCell__link"]');
        if (el) handleEmailEl(el);
      }

      // Case 3: child changes inside an email cell (span text swap)
      if (mutation.type === 'childList' && mutation.target) {
        const el = mutation.target.closest?.('[data-testid="EditableEmailCell__link"]');
        if (el) handleEmailEl(el);
      }
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
    characterData: true,
  });

  // Scan anything already on screen
  scanExisting();

  console.log('%c[Apollo Catcher] ✓ Active — watching for emails in rows', 'color:#7ec8e3;font-weight:bold;');

})();
