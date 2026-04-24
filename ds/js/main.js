/* Grepfox Design System — Interactive components */
document.addEventListener('DOMContentLoaded', () => {

  // ── Tabs ──────────────────────────────────────────────────
  document.querySelectorAll('.tabs').forEach(tabBar => {
    const tabs = tabBar.querySelectorAll('.tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('tab--active'));
        tab.classList.add('tab--active');
      });
    });
  });

  // ── Segments ──────────────────────────────────────────────
  document.querySelectorAll('.segments').forEach(bar => {
    const segs = bar.querySelectorAll('.segment');
    segs.forEach(seg => {
      seg.addEventListener('click', () => {
        segs.forEach(s => s.classList.remove('segment--active'));
        seg.classList.add('segment--active');
      });
    });
  });

  // ── Accordion ─────────────────────────────────────────────
  document.querySelectorAll('.accordion').forEach(acc => {
    const items = acc.querySelectorAll('.accordion-item');
    items.forEach(item => {
      item.addEventListener('click', () => {
        const wasOpen = item.classList.contains('accordion-item--open');
        items.forEach(i => {
          i.classList.remove('accordion-item--open');
          const ic = i.querySelector('.accordion-item__icon');
          if (ic) ic.innerHTML = icon('plus', 18);
        });
        if (!wasOpen) {
          item.classList.add('accordion-item--open');
          const ic = item.querySelector('.accordion-item__icon');
          if (ic) ic.innerHTML = icon('minus', 18);
        }
      });
    });
  });

  // ── Toggles ───────────────────────────────────────────────
  document.querySelectorAll('.toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('toggle--on');
      toggle.classList.toggle('toggle--off');
      const knob = toggle.querySelector('.toggle__knob');
      if (toggle.classList.contains('toggle--on')) {
        knob.style.left = '26px';
        knob.style.background = 'var(--gf-void)';
        toggle.style.background = 'var(--gf-accent)';
      } else {
        knob.style.left = '2px';
        knob.style.background = 'var(--gf-bone)';
        toggle.style.background = 'var(--gf-rule)';
      }
    });
  });
});
