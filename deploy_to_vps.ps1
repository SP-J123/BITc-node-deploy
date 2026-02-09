$ServerIP = "94.130.168.255"
$User = "root"
$RemotePath = "/root/bitconnect"

Write-Host "Starting deployment to $ServerIP..." -ForegroundColor Green

# 1. Create remote directory
Write-Host "Creating remote directory..."
ssh -o StrictHostKeyChecking=no $User@$ServerIP "mkdir -p $RemotePath"

# 2. Upload files
Write-Host "Uploading files (Enter password if prompted)..."
# Exclude node_modules (redundant if folder is clean, but safe to add)
scp -o StrictHostKeyChecking=no -r * "$User@${ServerIP}:$RemotePath"

# 3. Make script executable and run it
Write-Host "Executing deployment script..."
ssh -o StrictHostKeyChecking=no $User@$ServerIP "chmod +x '$RemotePath/install_and_run.sh' && '$RemotePath/install_and_run.sh'"

Write-Host "Done! Application should be live at http://$ServerIP" -ForegroundColor Green
