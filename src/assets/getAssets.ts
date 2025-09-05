const syncAssetGlobs = {
  techs: import.meta.glob('./techs/*.svg', { eager: true }),
  flags: import.meta.glob('./flags/*.webp', { eager: true }),
}

const asyncAssetGlobs = {
  images: import.meta.glob('./images/*.{jpg,png,webp}', {
    eager: false,
  }),
}

export function getSyncAssets(type: keyof typeof syncAssetGlobs) {
  const files = syncAssetGlobs[type]

  return Object.fromEntries(
    Object.entries(files).map(([key, value]) => {
      const fileName = key
        .split('/')
        .pop()!
        .replace(/\.\w+$/, '')
      return [fileName, (value as any).default]
    }),
  ) as Record<string, string>
}

export async function getAsyncAssets(type: keyof typeof asyncAssetGlobs) {
  const files = asyncAssetGlobs[type]

  const resolved = await Promise.all(
    Object.entries(files).map(async ([key, value]) => {
      const mod = typeof value === 'function' ? await value() : value
      const fileName = key
        .split('/')
        .pop()!
        .replace(/\.\w+$/, '')
      return [fileName, (mod as any).default || mod]
    }),
  )

  return Object.fromEntries(resolved) as Record<string, string>
}
