import { joinURL, cleanDoubleSlashes, withoutProtocol, parseURL, withQuery } from 'ufo'

// import {} from '#image'
//@ts-ignore
export function getImage(src, { modifiers, baseURL } = {}, { options, $img }) {
  const { width, height, fit, quality, ...providerModifiers } = modifiers
  /** kalau local file, maka tambahkan hostname dari website ini */
  if (parseURL(src).host === undefined) {
    src = joinURL( options.providers.photon.defaults.baseDomain, src)
  } else {
    /** hapus  protocolnya */
    src = withoutProtocol(src)
  }
  /** set base URL random URL from ix.wp.com */
  baseURL = 'https://i' + Math.floor(Math.random() * 3) + '.wp.com'

  return {
    /** bersihkan double slash, gabungkan baseURL & src, serta tambahkan querystring */
    url: cleanDoubleSlashes(withQuery(joinURL(baseURL, src), {w:width,h:height,quality,fit, ...providerModifiers}))
  }
}