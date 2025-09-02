import { ImageResponse } from 'next/og'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

// Image generation
export default function AppleIcon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 80,
          background: 'linear-gradient(135deg, #2563eb, #1d4ed8)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontWeight: 'bold',
          borderRadius: '16px',
          boxShadow: '0 8px 32px rgba(37, 99, 235, 0.4)',
        }}
      >
        S
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  )
}