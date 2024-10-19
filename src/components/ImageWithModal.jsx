import * as Dialog from "@radix-ui/react-dialog";
import { Children, useState } from "react";

export default function ImageWithModal(props) {
    return (
        <div>
            <Dialog.Root>
                <Dialog.Trigger asChild>
                    <div>
                        <figure>
                            <img
                                src={props.src}
                                alt={props.alt}
                                className="m-auto max-h-screen/50 cursor-pointer"
                            />
                            {props.title && (
                                <figcaption className="text-center text-sm text-text">
                                    {props.title}
                                </figcaption>
                            )}
                        </figure>
                    </div>
                </Dialog.Trigger>
                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-bg opacity-80" />
                    <Dialog.Content className="fixed left-1/2 top-1/2 flex max-h-screen/90 w-screen/90 -translate-x-1/2 -translate-y-1/2 flex-col items-center rounded-md border bg-bg-offset p-4">
                        <Dialog.Title className="m-0 mb-2 font-medium text-text">
                            {props.title ? props.title : props.alt}
                        </Dialog.Title>
                        <img
                            src={props.src}
                            alt={props.alt}
                            className="h-full max-h-full"
                        />
                        <Dialog.Close asChild>
                            <button
                                type="button"
                                className="absolute right-4 top-4 inline-flex h-6 w-6 items-center justify-center rounded-full text-interaction hover:text-interaction-highlight focus:outline-none"
                                aria-label="Close"
                            >
                                {props.closeIcon}
                            </button>
                        </Dialog.Close>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
    );
}
