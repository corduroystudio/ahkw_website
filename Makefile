build:
	@echo 'Build css files'
	sass ./styles/main.scss ./styles/main.css;\
	uglifycss ./styles/main.css > ./styles/main.min.css;\
	rm -rf ./public;\
	mkdir public;\
	cp -R *.html ./public && cp -R ./indicators ./public && cp -R ./cy ./public;\
	cp ./styles/*.css ./public;\
	cp -R ./media ./public;\
	cp -R ./maps ./public;\
	cp -R ./scripts ./public;\

start:
	@echo 'Start Project'
	make build;\
	http-server ./public;\

init: 
	@echo 'Setup watchman'
	watchman watch ./
