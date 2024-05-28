type Tag = {
	color?: string
	content: string
}

type PresentationContent = {
	title: string
	text: string
	tag: Tag
}

export type PresentationProps = {
	content: PresentationContent
}
