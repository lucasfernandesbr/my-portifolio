import { create } from 'zustand'

import { getAsyncAssets, getSyncAssets } from '@assets/getAssets'

import { AssetsState } from './types'

const useAssets = create<AssetsState>((set) => ({
  techs: getSyncAssets('techs'),
  flags: getSyncAssets('flags'),
  images: {},
  loadImages: async () => {
    const images = await getAsyncAssets('images')
    set({ images })
  },
}))

export default useAssets
