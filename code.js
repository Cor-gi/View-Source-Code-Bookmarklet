var opensourcewin = window.open('about:blank');
var sourceWin = opensourcewin.document;
sourceWin.write('

<!DOCTYPE html>
<html>
<head>
<title>Source of ' + location.href + '</title>
<meta name="viewport" content="width=device-width" />
</head>
<body>
</body>
</html>');
var pretext = sourceWin.body.appendChild(sourceWin.createElement("pre"));
    pretext.style.overflow = 'auto';
    pretext.style.whiteSpace = 'pre-wrap';
    pretext.appendChild(sourceWin.createTextNode(document.documentElement.innerHTML));
