$f = 'C:\PhantomKey\PWA\index.html'
$c = [System.IO.File]::ReadAllText($f)

# Add Lishi nav button
$c = $c -replace "label: `"Settings`"\s*\}\)\)\);", "label: 'Settings'})), React.createElement(NavBtn, {active: tab === 'lishi', onClick: () => setTab('lishi'), icon: React.createElement('span', {style:{fontSize:'16px'}}, String.fromCodePoint(0x1F511)), label: 'Lishi'})));"

# Add Lishi tab render
$c = $c -replace "tab === 'settings' && React.createElement\(SettingsTab", "tab === 'lishi' && React.createElement(LishiTab, null), tab === 'settings' && React.createElement(SettingsTab"

[System.IO.File]::WriteAllText($f, $c)
Write-Host "Done!"