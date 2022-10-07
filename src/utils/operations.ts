export function pxToRem(px: number) {
  return `${px / 16}rem`;
}

export function getTimeHHMM(date?: number | string | Date): string {
  if (date)
    return new Intl.DateTimeFormat('pt-br', { timeStyle: 'short' }).format(new Date(date))
  else
    return new Intl.DateTimeFormat('pt-br', { timeStyle: 'short' }).format(new Date())
}

export function getDateDDMMAA(date?: number | string | Date): string {
  if (date)
    return new Intl.DateTimeFormat('pt-br').format(new Date(date))
  else
    return new Intl.DateTimeFormat('pt-br').format(new Date())
}