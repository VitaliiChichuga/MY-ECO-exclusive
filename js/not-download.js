$('body').on('contextmenu', function (e) {
  if (window.screen.width < 1279) {
    return false;
  }
  return true;
});
