# react-project-with-ie8


## Contains
- react 0.14.3 (IE8 support)
- redux 3.5.1
- react-router 2.0.1
- react-router-redux 4.0.2
- babel 6.7.7
- es6-promise
- fetch-ie8
- es3ify-loader
- babel-plugin-add-module-exports


##.babelrc
```babelrc
{
  "presets": ["es2015", "react", "stage-1"],
  "plugins": [
    "add-module-exports",
  ]
}
```

## Install module
```bash
$ npm install
```

##Run dev
```bash
$ npm run dev
```

##Build bundle
```bash
$ npm run build
```

## Add es5-shim/sham
```html
<!--[if lt IE 9]>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.7/es5-shim.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/es5-shim/4.5.7/es5-sham.min.js"></script>
<![endif]-->
```
