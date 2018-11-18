
cd pillar/webpack 
yarn build 

cd .. 
virtualenv -p python3 env 
source env/bin/activate 

python application.py