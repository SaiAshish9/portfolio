function goTo(link) {
  const win = window.open(link, "_blank");
  win.focus();
}

export { goTo };
