import { create } from 'zustand'

import { getAsyncAssets, getSyncAssets } from '@stores/useAssets/getAssets'

import { AssetsState } from './types'

const useAssets = create<AssetsState>((set, get) => ({
  techs: getSyncAssets('techs'),
  flags: getSyncAssets('flags'),
  images: {},
  imagesLoaded: false,
  loadImages: async () => {
    if (get().imagesLoaded) return
    const images = await getAsyncAssets('images')
    set({ images, imagesLoaded: true })
  },
}))

export default useAssets
