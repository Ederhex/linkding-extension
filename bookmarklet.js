(function() {
    var bookmarkUrl = window.location;
    var applicationUrl = 'https://bookmarks.karscloud.nl/bookmarks/new';
    applicationUrl += '?url=' + encodeURIComponent(bookmarkUrl);
    applicationUrl += '&auto_close';
    window.open(applicationUrl);
})();
