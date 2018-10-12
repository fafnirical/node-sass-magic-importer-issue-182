# Reproduction repository for [node-sass-magic-importer#182](https://github.com/maoberlehner/node-sass-magic-importer/issues/182)

## Reproduction steps

1. Clone the repository
2. Install NPM dependencies:

   ```sh
   npm install
   ```

3. Try to run a build (with Gulp):

   ```sh
   npm run build
   ```

   This should result in the following error:

   ```
   Error in plugin "sass"
   Message:
      src\index.scss
   Error: File to import not found or unreadable: ~@glidejs/glide/src/assets/sass/glide.core.
         on line 2 of src/index.scss
   >> @import "~@glidejs/glide/src/assets/sass/glide.core";

      ^
   ```

4. Try to run a build (with node-sass CLI):

   ```sh
   npm run build:cli
   ```

   This should result in the following error:

   ```
   {
     "status": 1,
     "file": "/path/to/your/repository/src/index.scss",
     "line": 2,
     "column": 1,
     "message": "File to import not found or unreadable: ~@glidejs/glide/src/assets/sass/glide.core.",
     "formatted": "Error: File to import not found or unreadable: ~@glidejs/glide/src/assets/sass/glide.core.\n        on line 2 of src/index.scss\n>> @import '~@glidejs/glide/src/assets/sass/glide.core';\n\n   ^\n"
   }
   ```
