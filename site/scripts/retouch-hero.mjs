// Re-applies the Grepfox logo to the phone screen in the home hero photo.
// The source Unsplash photo shows a third-party logo on the phone; this
// script covers the screen with a dark sleep-screen and our logo mark.
// Run after a fresh seed downloads the original: node scripts/retouch-hero.mjs
import sharp from 'sharp'

const SRC = 'public/media/home-hero-server-room.jpg'
const W = 1920
const H = 1077
const k = 1920 / 1439
const pt = ([x, y]) => `${(x * k).toFixed(1)},${(y * k).toFixed(1)}`
const TL = [572, 322]
const TR = [706, 310]
const BR = [752, 545]
const BL = [606, 572]
const poly = [TL, TR, BR, BL].map(pt).join(' ')
const cx = ((572 + 706 + 752 + 606) / 4) * k
const cy = ((322 + 310 + 545 + 572) / 4) * k

const overlaySvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="scr" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#16100c"/>
      <stop offset="1" stop-color="#0a0807"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#ff5a1f" stop-opacity="0.28"/>
      <stop offset="0.7" stop-color="#ff5a1f" stop-opacity="0.07"/>
      <stop offset="1" stop-color="#ff5a1f" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <polygon points="${poly}" fill="url(#scr)"/>
  <ellipse cx="${cx}" cy="${cy}" rx="120" ry="120" fill="url(#glow)"/>
</svg>`

const logo = await sharp('public/assets/logo-mark.svg', { density: 144 }).resize(92, 92).png().toBuffer()
const logoRot = await sharp(logo).rotate(-6, { background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer()
const meta = await sharp(logoRot).metadata()

const out = await sharp(SRC)
  .composite([
    { input: Buffer.from(overlaySvg), left: 0, top: 0 },
    { input: logoRot, left: Math.round(cx - meta.width / 2), top: Math.round(cy - meta.height / 2) },
  ])
  .jpeg({ quality: 88 })
  .toBuffer()

await sharp(out).toFile(SRC)
await sharp(out).toFile('public/media/home-hero-server-room-1920x1077.jpg')
await sharp(out).resize(400, 224, { fit: 'cover' }).jpeg({ quality: 82 }).toFile('public/media/home-hero-server-room-400x224.jpg')
console.log('hero retouched: logo applied to phone screen')
