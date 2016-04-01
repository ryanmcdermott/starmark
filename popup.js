var syncButton = document.getElementById('sync-button');
syncButton.addEventListener('click', function (e) {
  var username = document.getElementById('github-username').value;
  var spinner = document.getElementById('spinner');
  spinner.classList.remove('hidden');

  console.log(chrome);
  e.stopPropagation();
  e.preventDefault();
});
