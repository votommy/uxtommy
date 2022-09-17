<img src="docs/assets/logo.svg" width="100px">

# uxTOMMY

My personal, non-professional website for my hobbies and whatnot.

### To do
- ~~Make tags~~
- Add filter by tags for blog
- Work on homepage / About Me
- Work on Contacts page
- ~~Make a footer~~

### Developer's note
#### To deploy
- ```cd docs``` into the /docs directory and run ```m2j blogs/*.md -o blogs-metadata.json -w 0``` in **bash** (cmd doesn't work for some reason)  
- ```cd ..``` back out into the root
- Run ```npm run build``` and push the contents of /dist to the **website** branch.
