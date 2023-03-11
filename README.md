# vue-ie

### 디렉토리 구조
```
root/
│
├── babel.config.js
├── jsconfig.json
├── package.json
├── postcss.config.js
├── vue.config.js
├── yarn.lock
│
├── public
│   ├── animate.css
│   ├── favicon.ico
│   ├── fonts
│   │   ├── fonts.css
│   │   ├── woff
│   │   └── woff2
│   └── index.html
└── src
    ├── App.vue
    ├── assets
    │   ├── data
    │   ├── fonts
    │   ├── images
    │   └── styles
    │       ├── _variables.scss
    │       ├── _mixins.scss
    │       ├── component
    │       │   ├── _borders.scss
    │       │   ├── _buttons.scss
    │       │   ├── _colors.scss
    │       │   ├── _container.scss
    │       │   ├── _display.scss
    │       │   ├── _forms.scss
    │       │   ├── _grid.scss
    │       │   ├── _reset.scss
    │       │   ├── _sizes.scss
    │       │   ├── _spacing.scss
    │       │   └── _typography.scss
    │       ├── pages
    │       │   ├── Gro.scss
    │       │   ├── Apv.scss
    │       │   ├── Qm.scss
    │       │   ├── Tr.scss
    │       │   ├── Myp.scss
    │       │   └── ...
            ├── global.scss
    │       └── main.scss
    │     
    ├── components
    │   ├── LoadingSpinner.vue
    │   ├── BaseButton.vue
    │   ├── Appbar
    │   │   ├── Appbar.scss
    │   │   └── Appbar.vue
    │   ├── Dialogs
    │   │   ├── BottomSheet.vue
    │   │   ├── Dialog.vue
    │   │   ├── FullDialog.vue
    │   │   ├── ConfirmDialog.vue
    │   │   └── AlertDialog.vue
    │   ├── Forms
    │   │   ├── TextField.vue
    │   │   ├── Checkbox.vue
    │   │   ├── RadioButton.vue
    │   │   ├── toggleSwitch.vue
    │   │   └── fileUpload.vue
    │   ├── Sidebar
    │   │   ├── Sidebar.vue
    │   │   └── Sidebar.scss
    │   ├── TabNav
    │   │   ├── TabNav.vue
    │   │   └── TabNav.scss
    │   ├── Tabs
    │   │   ├── Tabs.vue
    │   │   ├── Tab.vue
    │   │   └── Tabs.scss
    │   └── Toast
    │       ├── Toast.vue
    │       ├── Toast.scss
    │       └── ToastContainer.vue
    ├── layouts
    │   ├── AppLayout.vue
    │   ├── BaseLayout.vue
    │   └── EmptyLayout.vue
    ├── main.js
    ├── mixin
    │   └── toggleMixin.js
    ├── router
    │   ├── ApvRoutes.js
    │   ├── GroRoutes.js
    │   ├── MypRoutes.js
    │   ├── QmRoutes.js
    │   ├── TrRoutes.js
    │   └── index.js
    └── views
        ├── Home
        ├── Example
        ├── NotFound.vue
        ├── Gro
        ├── Apv
        ├── Myp
        ├── Qm
        └── Tr
```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn local
yarn dev
yarn prod
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```