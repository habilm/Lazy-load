function doLazy(imageElements) {
    if ("IntersectionObserver" in window) {
        let ib = new IntersectionObserver(function (entries, observer) {
            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    const lazyImage = entry.target;

                    if (lazyImage.hasAttribute('data-background')) {
                        lazyImage.style.backgroundImage = `url(${lazyImage.getAttribute('data-background')})`;
                        lazyImage.classList.add('img-loaded');
                    }

                    if (lazyImage.hasAttribute('data-src')) {
                        lazyImage.src = lazyImage.getAttribute('data-src');
                        lazyImage.classList.add('img-loaded');
                    }

                    observer.unobserve(lazyImage);
                }
            })
        })

        imageElements.forEach(function (im) {

            ib.observe(im)
        })
    } else {
        imageElements.forEach(function (el) {
            if (el.hasAttribute('data-background')) {
                el.style.backgroundImage = `url(${el.getAttribute('data-background')})`;
                el.addClass('img-loaded');
            }

            if (el.hasAttribute('data-src')) {
                el.src = el.getAttribute('data-src');
                el.classList.add('img-loaded');
            }
        });
    }
}
