# wovn-icons

Library to use WOVN.io svg icons as components.

## Installation
#### npm
```
npm install wovn-icons
```

#### yarn
```
yarn add wovn-icons
```

## Usage
```vue
// main.js
<script>
import Vue from 'vue'
import App from './App.vue'
import WovnIcons from 'wovn-icons'

Vue.use(WovnIcons)

new Vue({
  render: h => h(App),
}).$mount('#app')
</script>

// App.vue
<template>
  <div id="app" class="App">
    <wovn-icon
      :name="icon_name"
      :class-name="class_name"
      :width="icon_width"
      :height="icon_height"
      :color="icon_color icon_hover_color"
    >
    </wovn-icon>
  </div>
</template>
```

#### props
| props name | props value                                                                                                                         |
|------------|-------------------------------------------------------------------------------------------------------------------------------------|
| name       | (String) name of the icon                                                                                                           |
| className  | (String) class for the icon                                                                                                         |
| width      | (Number, String) width of the icon                                                                                                  |
| height     | (Number, String) height of the icon                                                                                                 |
| color      | (String) hex code for color of the icon can have a second hexa with a space to define the hover color (eg: color="#FF0000 #DDEE00") |
