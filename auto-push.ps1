$repoPath = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location $repoPath

Write-Host "Monitoring repository: $repoPath"
Write-Host "Auto-push is active. Press Ctrl+C to stop."

while ($true) {
    try {
        $status = git status --porcelain

        if (-not [string]::IsNullOrWhiteSpace($status)) {
            $branch = git branch --show-current
            if ([string]::IsNullOrWhiteSpace($branch)) {
                $branch = "main"
            }

            $timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
            Write-Host "[$timestamp] Detected changes on branch: $branch"

            git add .
            git commit -m "Auto commit at $timestamp" 2>$null

            git pull --rebase origin $branch 2>$null
            git push origin $branch

            Write-Host "[$timestamp] Push successful."
        }
    }
    catch {
        Write-Host "[$(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')] Error: $($_.Exception.Message)"
    }

    Start-Sleep -Seconds 10
}
