<img src="docs/assets/logo.svg" width="100px">

# uxTOMMY

My personal, non-professional website for my hobbies and whatnot.

### To do
- ~~Make tags~~
- Add filter by tags
- ~~Make an ascending/descending sorter~~
- Work on homepage / About Me
- Work on Contacts page
- ~~Make a footer~~
- ~~Add Art Gallery tab~~
- ~~Compress photos~~
- ~~Make image thumbnails lossy compressed jpegs~~
- ~~Add full screen art works onClick~~
- Add image description, tags, and info

### Developer's note
#### To deploy
- ```cd docs``` into the /docs directory and run ```m2j blogs/*.md -o blogs-metadata.json -w 0``` in **bash** (cmd doesn't work for some reason)  
- ```cd ..``` back out into the root
- Run ```npm run build```
- push the contents of /dist to the **website** branch
