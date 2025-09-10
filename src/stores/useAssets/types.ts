export type AssetsState = {
  techs: Record<string, string>
  flags: Record<string, string>
  images: Record<string, string>
  loadImages: () => Promise<void>
}
