Synchronous/blocking: 

* It's sequential execution of code line by line exec of code.
* It's going to hold the until it completes.
* e.g while, for

Asynchronous /non-blocking code:
* Do not halt the execution of code.
* callbacks, promises, async/await.
* setTimeout(), readFile(), fetch() etc.


# why react ?
-> library -> javascript -> UI library -> components -> atomic units or smaller elements of a web UI. -> reusable components.
-> Component based arch.
-> Virtual DOM -> Diffing algo to find all the nodes where the changes occured apply the changes on that specific element or rerender the specific element.
-> Declarative syntax: it create the UI faster and interactive.
-> Facebook , it's higher community support.
-> next.js (Framework) 
-> angular.js (Framework) -> react.js 

<!-- vue.js ->library -> nuxt.js(framework) -->

<!-- create-react-app  -> vite -->

create-react-app -> webpack , (Deprecated)
->vite (bundler) -> react application (Faster)
## Bundlers: 
1. Code compilation 
2. module resolutions (when you try to use modules within the application)
3. Asset management: audio, video , image.
4. HMR (hot module reload/replacement)
5. it builts the application -> production built
6. dev environment 
<!-- Ryan dhal -->

## Why we need run time env for react ?