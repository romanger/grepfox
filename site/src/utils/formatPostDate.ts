export const formatPostDate = (iso?: string | null): string =>
  iso
    ? new Date(iso)
        .toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
        .toUpperCase()
    : ''
