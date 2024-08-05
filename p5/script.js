const panels = document.querySelectorAll('.panel');

const triggerPs = (ps, value) => {
  ps[0].style.display = value;
  ps[2].style.display = value;
}

const shrinkPanels = (panels) => {
  panels.forEach((p) => {
    const ps = p.querySelectorAll('p');
    triggerPs(ps, 'none');
    p.style.flexGrow = 1;
  });
}

shrinkPanels(panels);

panels.forEach((panel) => {
  panel.addEventListener('click', e => {
    const panelPs = e.currentTarget.querySelectorAll('p');
    shrinkPanels(panels);
    triggerPs(panelPs, 'block');
    e.currentTarget.style.flexGrow = 8;
  })
})
