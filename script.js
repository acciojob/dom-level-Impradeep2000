//your JS code here. If required.
window.onload = function() {
  const element = document.getElementById('level');
  let level = 0;

  function findDOMLevel(target, currentLevel) {
    if (target.parentNode) {
      return findDOMLevel(target.parentNode, currentLevel + 1);
    } else {
      return currentLevel;
    }
  }

  if (element) {
    level = findDOMLevel(element, 1);
    alert("The level of the element is: " + level);
  }
};