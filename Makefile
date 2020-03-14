install: 
		npm install

start: 
		npx node src/bin/brain-progression.js

publish: 
		npm publish --dry-run

lint:
		npx eslint .