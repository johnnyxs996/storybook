export type PageConfigurationContent = {
  type: 'text' | 'image',
  content: string | string[]
}

export type PageConfiguration = {
  headerImage?: string,
  title?: string,
  subtitle?: string,
  subSubtitle?: string,
  content?: PageConfigurationContent[]
}
