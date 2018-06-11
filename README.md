# Asynchronous Callbacks



In your README.md describe the exported values of each module you have defined. Every function description should include it's airty (expected number of parameters), the expected data for each paramiter (data-type and limitations), and it's behavior (for both valid and invalued use). Feel free to write any additional information in your README.md.

## Modules

- The reader.js module exports a function with an airty of 2, that expects an array of files and a callback function.  The callback function should return an error, if any, and if none, the contents of the files in the order they were requested.

### Notes

- When I came back to finish this up, I had no idea where I left off, and the only contents of this file was a single line, commented out, that said "This is why you leave notes about where you left off, James".  So I managed to teach myself a lesson.

- I've been putting this off for days and now I can't for the life of me figure out what it was I was stuck on.  As far as I can tell everything works.  I wrote one additional test to make sure it wasn't loading the files in the incorrect order and it passed.  

