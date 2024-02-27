import { ReadonlyURLSearchParams } from 'next/navigation'

export const round2 = (num: number) =>
  Math.round((num + Number.EPSILON) * 100) / 100

export function convertDocToObj(doc: any) {
  doc._id = doc._id.toString()
  return doc
}

export const formatNumber = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const formatId = (x: string) => {
  return `..${x.substring(20, 24)}`
}

export const createUrl = (
  pathname: string,
  params: URLSearchParams | ReadonlyURLSearchParams
) => {
  const paramsString = params.toString()
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`

  return `${pathname}${queryString}`
}
