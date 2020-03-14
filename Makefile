install: 
		npm install

start: 
		npx node src/bin/brain-prime.js

publish: 
		npm publish --dry-run

lint:
		npx eslint .