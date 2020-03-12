install: 
		npm install

start: 
		npx node src/bin/brain-calc.js

publish: 
		npm publish --dry-run

lint:
		npx eslint .