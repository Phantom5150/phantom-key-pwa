$f = 'C:\PhantomKey\PWA\index.html'
$c = [System.IO.File]::ReadAllText($f)
$i = $c.IndexOf('<div id="root">')
$e = $c.IndexOf('</div>', $i) + 6
$c = $c.Substring(0, $i) + '<div id="root"></div>' + $c.Substring($e)
[System.IO.File]::WriteAllText($f, $c)
Write-Host "Done"