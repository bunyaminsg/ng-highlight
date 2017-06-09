# HighlightJS Directive For Angular2+

## Install

```
    npm install ng-highlight
```

## Usage

Add any theme (css) from [highlight.js](https://highlightjs.org/download/) to your `index.html` file.

E.g.

```
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/9.12.0/styles/default.min.css">
```

Then:

`app.module.ts`

```
    ...
    import { HighlightDirective } from 'ng-highlight'

    @NgModule({
         declarations: [
             ...,
             HighlightDirective
         ],
         ...
    })
    export class AppModule { }
```

`app.component.html`

```
    <pre><code appHighlight class="lang-...">{{...}}</code></pre>
```
