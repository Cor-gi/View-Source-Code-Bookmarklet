window.view_source_code = function() {
var opensourcewin = window.open('about:blank');
var sourceWin = opensourcewin.document;
sourceWin.write('
    var pretext = sourceWin.body.appendChild(sourceWin.createElement("pre"));
    pretext.style.overflow = 'auto';
    pretext.style.whiteSpace = 'pre-wrap';
    pretext.appendChild(sourceWin.createTextNode(document.documentElement.innerHTML));
}
