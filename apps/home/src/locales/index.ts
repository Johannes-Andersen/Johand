import en from './en'
import nbNO from './nb-NO'

// Cleanup this mess...
type ListPaths<T> = T extends string
  ? []
  : {
      [K in Extract<keyof T, string>]: [K, ...ListPaths<T[K]>]
    }[Extract<keyof T, string>]

type Join<T extends Array<unknown>, D extends string> = T extends []
  ? never
  : T extends [infer F]
  ? F
  : T extends [infer F, ...infer R]
  ? F extends string
    ? string extends F
      ? string
      : `${F}${D}${Join<R, D>}`
    : never
  : string

type PossiblePaths<T> = Join<ListPaths<T>, '.'>

interface TranslateProps {
  key: PossiblePaths<typeof en>
  locale: string | undefined
}

// TODO: Do not use any types
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getDescendantProp = (obj: any, desc: any) => {
  const arr = desc.split('.')
  while (arr.length && (obj = obj[arr.shift()]));
  return obj
}

const resources = {
  en,
  'nb-NO': nbNO,
}

const getSupportedLanguage = (locale: string | undefined) => {
  if (locale === 'nb-NO') return resources['nb-NO']
  if (locale === 'en') return resources['en']
  return resources['en']
}

export const translate = ({ key, locale }: TranslateProps): string => {
  const output = getDescendantProp(getSupportedLanguage(locale), key)
  if (!output) {
    console.error(`Missing translation for key: ${key}, in locale ${locale}`)
    return getDescendantProp(getSupportedLanguage('en'), key) || key
  }

  return getDescendantProp(getSupportedLanguage(locale), key)
}
