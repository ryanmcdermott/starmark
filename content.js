var starBtn = document.querySelector('[aria-label="Star this repository"]');

if (starBtn) {
  starBtn.addEventListener('click', function () {
    chrome.runtime.sendMessage({
      "message": "github_star",
      "title": document.title,
      "url": window.location.href
    });
  });
}
