
import { Carousel, type CarouselItem, type CarouselOptions, type IndicatorItem, type InstanceOptions } from "flowbite";

export default function initLightboxGallery(galleryElement: HTMLElement) {
    const triggers: NodeListOf<HTMLElement> = galleryElement.querySelectorAll('.creel-lbgall-trigger');
    const dialog: HTMLDialogElement | null = galleryElement.querySelector('.creel-lbgall-dialog');
    const carouselElement: HTMLElement | null = galleryElement.querySelector('.creel-lbgall-carousel');
    const itemElements: NodeListOf<HTMLElement> = galleryElement.querySelectorAll('.creel-lbgall-carousel-item');
    const indicatorElements: NodeListOf<HTMLElement> = galleryElement.querySelectorAll('.creel-lbgall-carousel-indicator');
    const prevButton: HTMLElement | null = galleryElement.querySelector('.creel-lbgall-carousel-prev');
    const nextButton: HTMLElement | null = galleryElement.querySelector('.creel-lbgall-carousel-next');

    if (triggers?.length > 0) {
        if (dialog) {
            if (carouselElement) {
                if (itemElements.length > 0) {
                    const items: CarouselItem[] = itemElements.values()
                        .map((el, ind) => ({ position: ind, el: el }))
                        .toArray();

                    // indicators are optional
                    const indicators: IndicatorItem[] = indicatorElements.values()
                        .map((el, ind) => ({ position: ind, el: el }))
                        .toArray();

                    // options with default values
                    const options: CarouselOptions = {
                        defaultPosition: 0,
                        indicators: {
                            activeClasses: "bg-base-content",
                            inactiveClasses: "bg-base-300 hover:bg-base-content",
                            items: indicators,
                        },
                    };

                    const instanceOptions: InstanceOptions = {
                        id: carouselElement.id,
                        override: true,
                    };

                    const carousel = new Carousel(
                        carouselElement,
                        items,
                        options,
                        instanceOptions,
                    );

                    prevButton?.addEventListener("click", () => {
                        carousel.prev();
                    });

                    nextButton?.addEventListener("click", () => {
                        carousel.next();
                    });

                    triggers.forEach((trig, index) => {
                        trig.addEventListener("click", () => {
                            carousel.slideTo(index);
                            dialog.showModal();
                        });
                    });
                } else {
                    console.warn("initLightboxGallery: no carousel items defined");
                }
            } else {
                console.warn("initLightboxGallery: no carousel defined");
            }
        } else {
            console.warn("initLightboxGallery: no dialog defined");
        }
    } else {
        console.warn("initLightboxGallery: no triggers defined");
    }
}

const lbGals = document.querySelectorAll('.creel-lbgall')
lbGals.forEach(initLightboxGallery);