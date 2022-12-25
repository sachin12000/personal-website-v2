import { useEffect } from "react"

/**
 * Hook that attaches an event listener that is called when the provided media query is matched.
 * @param {String} mediaQuery A media query that is matched against the window
 * @param {function} eventHandler Event handler to be called when the media query is matched. The handler is passed a boolean telling if the media query is matched or not
 */
const useScreenMediaQuery = (mediaQuery, eventHandler) => {
    useEffect(() => {
        const watcher = window.matchMedia(mediaQuery);
        const listener = (e) => { if (eventHandler) {eventHandler(e.matches)} };
        // const listener = (matches) => {  console.log(matches) };
        if (watcher.addEventListener) {
            // console.log("hooked")
          watcher.addEventListener("change", listener);
        } else {
          watcher.addListener(listener);
        }
        listener(watcher);  // pass the initial matching state to the handler
        return () => {
            // console.log('unhooked')
          if (watcher.removeEventListener) {
            return watcher.removeEventListener("change", listener);
          } else {
            return watcher.removeListener(listener);
          }
        };
      }, [mediaQuery]);
}

export default useScreenMediaQuery;