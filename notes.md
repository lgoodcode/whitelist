## Important modifications

These are some changes made from the original starter version that

### Absolute path imports

To allow absolute paths imports like this:

```ts
import Component from 'components/Button'
```

Need to add the baseUrl in `tsconfig.json`:

```json
{
   "compilerOptions": {
      "baseUrl": "src"
   }
}  
```

Need to add resolve import setting in `.eslintrc`:

```json
{
   "settings": {
      "import/resolver": {
         "node": {
            "moduleDirectory": ["node_modules", "src/"]
         }
      }
   }
}
```

Need to add modulePath resolving for Jest in `package.json`:

```json
{
   "jest": {
      "modulePaths": [
         "<rootDir>/src"
      ],
   }
}
```

### 3 spaced tabs for Prettier

3 spaces give just enough space to help identify different levels while not using
too much room for the code.

### Eslint rule

Added the strict equality check rule and updated the space before paren rule for
async and anynon arrow functions:

```json
{
   "eqeqeq": "error", // this enforces strict equality checks (2 === 2)
   "space-before-function-paren": ["error", {
      "anonymous": "always",
      "named": "never",
      "asyncArrow": "always"
    }]
}
```

### scripts

Added `npm run analyze` script with the `scripts/analyze.js` file which uses the `webpack-bundle-analyzer` plugin
that is installed as a dev dependency. Run it to see the stats of the build bundle.

### Removed stylelint

This is because the MaterialUI handles most of the styling and any custom styled components
should be styled in a seperate component file or styled inline with the sx prop.

REMOVED:

- STYLELINT FILES
- CSS LINT SCRIPTS IN NPM PACKAGE.JSON
- VSCODE SETTINGS THAT DISABLED BUILT IN CSS VALIDATION

### Tests

Renamed tests directory to __tests__ so that it is ignored by webpack

### Jest extension

Install the Jest extension for testing integrated in VS Code

### Configure VS Code keyboard mapping to jump to closing tag

In keyboard settings, set the emmet go to matching pair binging to `Ctrl + M` or
whatever you want to quickly jump to the closing tag.

## NEED TO LOOK INTO WEBPACK WORKBOX TO AUTO GENERATE SERVICE WORKER

## CLEAN DEPENDENCIES - SOME SHOULD BE MOVED TO DEV SO IT DOESN'T CLOG PROD BUILD TIME

## husky

On a new project it is recommended to re-install the husky directory because it
didn't work on this project out of the box.

- MUST run `npx husky install`
- Need lint-staged module
- need to configure the lint-staged glob property with the command as the value
- create the husky bash script `npx husky add .husky/pre-commit "npx lint-staged"`

Now whenever committing, it will verify the source files don't contain any silly
errors that will waste time and resources when running the Github action CI/CD
pipeline.

To bypass the pre-commit script, like when making formatting changes or basic
edits, use the `--no-verify` or `-n` shorthand flag.

RUN THE COMMIT THROUGH THE GIT BASH IF POSSIBLE TO SEE THE ERRORS
