# ShopBooster

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

## Stack
- TypeScript
- Vue 3 + Composition API
- Pinia state management
- TailwindCSS for rapid UI development

## LifeBooster Note
Run ```localStorage.clear()``` from chrome console if you've "purchased" all items from the shop.
The store is cached and rehydrated from localStorage and will not re-fetch all products
once they have all been purchased/checked out.