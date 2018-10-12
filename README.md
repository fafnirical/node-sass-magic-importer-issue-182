# Reproduction repository for [node-sass-magic-importer#182](https://github.com/maoberlehner/node-sass-magic-importer/issues/182)

## Reproduction steps

1. Clone the repository
2. Install NPM dependencies:

   ```sh
   npm install
   ```

3. Try to run a build:

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
