import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'
export const alt = 'Petr Kaloč — Senior Designer. Brand systems, AI production pipelines and the work that ships.'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          background: '#000000',
          color: '#F4F1EC',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ fontSize: 22, letterSpacing: 6, textTransform: 'uppercase' }}>czechdesigner.com</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 72, lineHeight: 0.95, fontWeight: 700, maxWidth: 900 }}>
            Petr Kaloč — Senior Designer
          </div>
          <div style={{ marginTop: 24, fontSize: 28, color: '#A8A8A8', maxWidth: 780 }}>
            Brand systems, AI production pipelines and the work that ships.
          </div>
        </div>
        <div style={{ width: 80, height: 8, background: '#0A3DFF' }} />
      </div>
    ),
    size,
  )
}
