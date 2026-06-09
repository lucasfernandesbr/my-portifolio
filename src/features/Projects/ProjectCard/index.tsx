import { tv } from 'tailwind-variants'

import useAssets from '@stores/useAssets'

import { ProjectCardProps } from './types'

const cardVariants = tv({
  base: 'group flex justify-between rounded-2xl xs:flex-col xs:gap-7 lg:w-full lg:flex-row',
  variants: {
    variant: {
      inverted: 'lg:flex-row-reverse',
    },
  },
})

export default function ProjectCard({
  title,
  description,
  img,
  variant,
  tags,
  links,
}: ProjectCardProps) {
  const { images } = useAssets()

  return (
    <div className={cardVariants({ variant })}>
      <div className="xs:w-full xs:gap-5 xs:max-w-[320px] flex flex-col justify-center lg:max-w-none lg:flex-1 lg:basis-1/2 lg:gap-6">
        <h2 className="xs:text-2xl font-display font-semibold tracking-tight lg:text-4xl">
          {title}
        </h2>

        <p className="text-muted-fg text-sm leading-relaxed lg:text-base">
          {description}
        </p>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="border-border-ui bg-surface text-muted-fg rounded-full border px-3 py-1 text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {links && links.length > 0 && (
          <div className="flex gap-3">
            {links.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="border-border-ui text-muted-fg hover:border-support-01 hover:text-support-01 flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-sm font-medium transition-colors duration-200"
              >
                {label} ↗
              </a>
            ))}
          </div>
        )}
      </div>

      <div className="xs:w-full xs:max-w-[320px] xs:h-[216px] overflow-hidden rounded-lg lg:h-[368px] lg:w-1/2 lg:max-w-none">
        <img
          src={images[img.key]}
          alt={images[img.alt]}
          loading="lazy"
          decoding="async"
          className="bg-brand-black dark:bg-gray-70 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
    </div>
  )
}
