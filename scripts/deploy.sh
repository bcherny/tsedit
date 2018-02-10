# fail if any command fails
set -e

cd /home/tsedit
git pull origin master

yarn
yarn build
echo "Built successfully."

yarn stop
yarn start
echo "Server refreshed and restarted successfully."
