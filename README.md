![Build](https://github.com/toomuchrice4u/whitelist/actions/workflows/build.yml/badge.svg?branch=master)
[![Netlify Status](https://api.netlify.com/api/v1/badges/566ea990-2c37-4886-8c3b-b5b0d2077db2/deploy-status)](https://app.netlify.com/sites/whitelist-crypto/deploys)

# [View Live](https://whitelist-crypto.netlify.app)

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
