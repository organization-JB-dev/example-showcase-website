import type { Photo } from "react-photo-album";

const breakpoints = [1080, 640, 384, 256, 128, 96, 64, 48];

function assetLink(asset: string, width: number) {
  return `https://assets.react-photo-album.com/_next/image?url=${encodeURIComponent(
    `/_next/static/media/${asset}`
  )}&w=${width}&q=75`;
}

const photos = [
  {
    asset: "/img/restaurant2.jpg",
    width: 1008,
    height: 1344,
    alt: "Hiking boots",
  },
  {
    asset: "/img/plat3.jpg",
    width: 7077,
    height: 4724,
    alt: "Hiking boots",
  },
  {
    asset: "/img/plat2.jpg",
    width: 4414,
    height: 2942,
    alt: "Hiking boots",
  },
  {
    asset: "/img/plat.jpg",
    width: 3840,
    height: 5760,
    alt: "Hiking boots",
  },
  {
    asset: "/img/plat3.jpg",
    width: 7077,
    height: 4724,
    alt: "Hiking boots",
  },
  {
    asset: "/img/plat2.jpg",
    width: 4414,
    height: 2942,
    alt: "Hiking boots",
  },
  {
    asset: "/img/restaurant2.jpg",
    width: 1008,
    height: 1344,
    alt: "Hiking boots",
  },
  {
    asset: "/img/plat3.jpg",
    width: 7077,
    height: 4724,
    alt: "Hiking boots",
  },
  {
    asset: "/img/plat2.jpg",
    width: 4414,
    height: 2942,
    alt: "Hiking boots",
  },
  {
    asset: "/img/plat.jpg",
    width: 3840,
    height: 5760,
    alt: "Hiking boots",
  },
  {
    asset: "/img/plat3.jpg",
    width: 7077,
    height: 4724,
    alt: "Hiking boots",
  },
  {
    asset: "/img/plat2.jpg",
    width: 4414,
    height: 2942,
    alt: "Hiking boots",
  },
  {
    asset: "/img/restaurant2.jpg",
    width: 1008,
    height: 1344,
    alt: "Hiking boots",
  },
  {
    asset: "/img/plat.jpg",
    width: 3840,
    height: 5760,
    alt: "Hiking boots",
  },
  {
    asset: "/img/plat3.jpg",
    width: 7077,
    height: 4724,
    alt: "Hiking boots",
  },
  {
    asset: "/img/plat2.jpg",
    width: 4414,
    height: 2942,
    alt: "Hiking boots",
  },
  {
    asset: "/img/plat3.jpg",
    width: 7077,
    height: 4724,
    alt: "Hiking boots",
  },
  {
    asset: "/img/restaurant2.jpg",
    width: 1008,
    height: 1344,
    alt: "Hiking boots",
  },
  {
    asset: "/img/plat.jpg",
    width: 3840,
    height: 5760,
    alt: "Hiking boots",
  },
  {
    asset: "/img/plat3.jpg",
    width: 7077,
    height: 4724,
    alt: "Hiking boots",
  },
  {
    asset: "/img/plat2.jpg",
    width: 4414,
    height: 2942,
    alt: "Hiking boots",
  },
  {
    asset: "/img/plat3.jpg",
    width: 7077,
    height: 4724,
    alt: "Hiking boots",
  },
].map(
  ({ asset, alt, width, height }) =>
    ({
      src: asset,
      alt,
      width,
      height,
    } as Photo)
);

export default photos;
