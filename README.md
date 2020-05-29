# react-concurrent-mode-presentation-snippets

This repo regroups all the code snippets for my presentation about React's concurrent mode. The presentation is [available here](https://docs.google.com/presentation/d/11NAeakiszE1ypTb6IU0o7vWodXsy6YO04Qsrn9DNyqE/edit?usp=sharing)

## How this repository is organized

There is 4 demos, each has 2 branches :

* An implementation of an UI pattern with the sync mode (the render mode only available for production today)
* An implementation of the same UI pattern but with concurrent mode.

All demos have their open pull request to showcase the diffs between the two implementations. The diffs summarize what will be live-coded during the presentation.

## The demos

### Demo #1 : Autocomplete UI pattern
In this example, the sync mode implementation is not fully reactive having lags which is not a great UX. The concurrent mode implentation fix the lag issues using the new [`useDeferredValue`](https://fr.reactjs.org/docs/concurrent-mode-reference.html#usedeferredvalue) hook. This hook gives us the opportunity to parallelize "unblocked" render threads for a better user experience.

* [sync mode implementation](https://github.com/LoicGoyet/react-concurrent-mode-presentation-snippets/tree/demo-1.1-autocomplete)
* [concurrent mode implementation](https://github.com/LoicGoyet/react-concurrent-mode-presentation-snippets/tree/demo-1.2-autocomplete)
* [live coding diff](https://github.com/LoicGoyet/react-concurrent-mode-presentation-snippets/pull/1)

### Demo #2 : Carousel UI pattern
The "sync mode" Carousel works fine, but we want to reduce the code budget with code splitting. To do so, we take advantage of the [`Suspense` component](https://fr.reactjs.org/docs/concurrent-mode-reference.html#suspensecomponent) and the [`React.lazy` function](https://fr.reactjs.org/docs/code-splitting.html#reactlazy). We also want to render the next slide of the carousel when its image is fully loaded into the client, so we set the assets as a resource. Then the carousel is ready to render a slide when the component and the image are both loaded, and we control the transition between to slides with the [`useTransition hook`](https://fr.reactjs.org/docs/concurrent-mode-reference.html#usetransition), which allow us "flashing" loading UI on fast loading clients. The UX and the UI is seamless for the user, the code budget is minimal, and the DX is great!

* [sync mode implementation](https://github.com/LoicGoyet/react-concurrent-mode-presentation-snippets/tree/demo-2.1-carousel)
* [concurrent mode implementation](https://github.com/LoicGoyet/react-concurrent-mode-presentation-snippets/tree/demo-2.2-carousel)
* [live coding diff](https://github.com/LoicGoyet/react-concurrent-mode-presentation-snippets/pull/3)

### Demo #3 : Image grid UI pattern
In the "sync mode", the images render in a random order (depending on the assets loading). But here with concurrent mode, we can control in which order the images renders using the [`SuspenseList` component](https://fr.reactjs.org/docs/concurrent-mode-reference.html#suspenselist)

* [sync mode implementation](https://github.com/LoicGoyet/react-concurrent-mode-presentation-snippets/tree/demo-3.1-image-grid)
* [concurrent mode implementation](https://github.com/LoicGoyet/react-concurrent-mode-presentation-snippets/tree/demo-3.2-image-grid)
* [live coding diff](https://github.com/LoicGoyet/react-concurrent-mode-presentation-snippets/pull/4)

### Demo #4 : Data fetching UI pattern
In this last demo, we introduce the "fetch as render" pattern that replaces "render then fetch" (or "fetch then render" which is not showcased here). This allow us a better control on render with `useTransition` and on the data fetch triggering with the resource pattern. We also decreased the number of re-renders, and improved the DX as the components only cares about rendering when the ressources are loaded.

* [sync mode implementation](https://github.com/LoicGoyet/react-concurrent-mode-presentation-snippets/tree/demo-4.1-player-stats)
* [concurrent mode implementation](https://github.com/LoicGoyet/react-concurrent-mode-presentation-snippets/tree/demo-4.2-player-stats)
* [live coding diff](https://github.com/LoicGoyet/react-concurrent-mode-presentation-snippets/pull/5)
