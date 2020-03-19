install: 
		npm install

start: 
		node bin/brain-progression.js

publish: 
		npm publish --dry-run

lint:
		npx eslint .