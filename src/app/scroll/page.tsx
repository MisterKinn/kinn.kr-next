import dynamic from "next/dynamic";
const Animator = dynamic(
    import("react-scroll-motion").then((it) => it.Animator),
    { ssr: false }
);

import {
    ScrollContainer,
    ScrollPage,
    batch,
    Fade,
    FadeIn,
    FadeOut,
    Move,
    MoveIn,
    MoveOut,
    Sticky,
    StickyIn,
    StickyOut,
    Zoom,
    ZoomIn,
    ZoomOut,
} from "react-scroll-motion";
