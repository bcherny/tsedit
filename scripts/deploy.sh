# fail if any command fails
set -e

cd /home/tsedit
git pull origin master

npm i
npm run build
echo "Built successfully."

npm run stop
npm run start
echo "Server refreshed and restarted successfully."
