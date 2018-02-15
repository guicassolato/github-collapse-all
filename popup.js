function scopedToggle(scope) {
  var code = "for (el of document.querySelectorAll('.p-1" + scope + "')) { el.click() }";
  chrome.tabs.executeScript(null, { code: code });
  console.log('scope: '+ scope)
  window.close();
}

function toggle(e) {
  scopedToggle('');
}

function expand(e) {
  scopedToggle('[aria-expanded="false"]');
}

function collapse(e) {
  scopedToggle('[aria-expanded="true"]');
}

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.action.toggle').addEventListener('click', toggle);
  document.querySelector('.action.expand').addEventListener('click', expand);
  document.querySelector('.action.collapse').addEventListener('click', collapse);
});
