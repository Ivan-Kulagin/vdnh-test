export interface ImageMeta {
    src: string,
    alt: string
}

export interface EventItem {
    id: number,
    img: ImageMeta,
    title: string,
    date: string,
    href: string,
    type: string,
    unix: number,
}
