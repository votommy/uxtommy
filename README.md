<img src="docs/assets/logo.svg" width="100px">

# uxTOMMY

My personal, non-professional website for my hobbies and whatnot.

### To do
- [x] Make tags
- [ ] Add filter by tags
- [x] Make an ascending/descending sorter
- [x] Work on homepage / About Me
- [x] Work on Contacts page
- [x] Make a footer
- [x] Add Art Gallery tab
- [x] Compress photos
- [x] Make image thumbnails lossy compressed jpegs
- [x] Add full screen art works onClick
- [ ] Add image description, tags, and info

### Developer's note
#### To run in dev mode
- Run `npm run dev`
#### To deploy
- ```cd docs``` into the /docs directory and run ```m2j blogs/*.md -o blogs-metadata.json -w 0``` in **bash** (cmd doesn't work for some reason)
    - Make sure to have [markdown-to-json](https://www.npmjs.com/package/markdown-to-json) installed for this to work.
- ```cd ..``` back out into the root
- Run ```npm run build```
- push the contents of /dist to the **website** branch
