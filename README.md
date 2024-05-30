# ColourPalette - CSS Variable Generator Website
- CSS variable export 
- save themes to a list of themes
- preview components like UI Colours 
- Dark/light mode toggle in global context


## Routes

- "/" : homepage
    - CSS generator available here
- "/generator" : CSS generator page
    - CSS generator available here



## Contexts

- Base Colour 
    - hex colour of new theme
- Localstorage manager for list of CSS themes
    - Array of Theme Lists
- Localstorage manager for current CSS theme
    - One Theme List
- list of CSS themes
    - Array of Theme Lists
- Current CSS theme
    - One Theme List


- Base Colour
    - Hex colour of new theme
- Current CSS theme
    - one theme list
    - localstorage
- List of CSS themes
    - array of theme list
    - localstorage



## Data

### Colour Object

```JS
{
    hex: "#000000",
    strength: 100,
    rgba: [255, 255, 255, 255]
}
```

### Theme List 

```JS
{
    name: "violet eggplant",
    colours: [
        // Colour objects go here
    ]
}
```

