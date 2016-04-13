chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message === 'github_star') {
      chrome.bookmarks.getSubTree('1', (node) => {
        let bookmarks = node[0].children;
        let bookmarksParent = node[0].id;
        let starsFolder = _.filter(bookmarks, { title: 'github-stars' });

        if (starsFolder.length === 0) {
          chrome.bookmarks.create({parentId: '1', title: 'github-stars'}, (node) => {
            createBookmark(node.id, request.title, request.url);
          });
        }
        else {
          createBookmark(starsFolder[0].id, request.title, request.url);
        }
      });
    }
  }
);

function createBookmark(id, title, url) {
  chrome.bookmarks.create({
    parentId: id,
    title: title,
    url: url
  });
}
