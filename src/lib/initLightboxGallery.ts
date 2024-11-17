
import { Carousel, type CarouselItem, type CarouselOptions, type IndicatorItem } from "flowbite";

export default function initLightboxGallery(galleryKey, itemCount) {
    const carouselElement = document.getElementById(`carousel${galleryKey}`);
    let items: CarouselItem[] = [];
    for (let index = 0; index < itemCount; index++) {
        const el = document.getElementById(`carousel${galleryKey}_item${index}`);
        if (el) {
            items.push({ position: index, el: el });
        }
    }

    let indicators: IndicatorItem[] = [];
    for (let index = 0; index < itemCount; index++) {
        const el = document.getElementById(`carousel${galleryKey}_ind${index}`);
        if (el) {
            indicators.push({ position: index, el: el });
        }
    }

    // options with default values
    const options: CarouselOptions = {
        defaultPosition: 1,
        indicators: {
            activeClasses: "bg-base-content",
            inactiveClasses: "bg-base-300 hover:bg-base-content",
            items: indicators,
        },
    };

    // instance options object
    const instanceOptions = {
        id: `carousel${galleryKey}`,
        override: true,
    };

    const carousel = new Carousel(
        carouselElement,
        items,
        options,
        instanceOptions,
    );

    const $prevButton = document.getElementById(`carousel${galleryKey}_prev`);
    const $nextButton = document.getElementById(`carousel${galleryKey}_next`);

    $prevButton?.addEventListener("click", () => {
        carousel.prev();
    });

    $nextButton?.addEventListener("click", () => {
        carousel.next();
    });

    const gallery = document.getElementById(`gallery${galleryKey}`);
    if (gallery) {
        for (let index = 0; index < itemCount; index++) {
            const galleryTrigger = document.getElementById(
                `gallery${galleryKey}_trigger${index}`,
            );
            galleryTrigger?.addEventListener("click", () => {
                carousel.slideTo(index);
                gallery.showModal();
            });
        }
    }
}