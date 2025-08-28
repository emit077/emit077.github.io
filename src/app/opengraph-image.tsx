import { ImageResponse } from 'next/og'

export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'
export const dynamic = 'force-static'

export default async function OpenGraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    fontSize: 60,
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    textAlign: 'center',
                    fontFamily: 'Arial, sans-serif',
                }}
            >
                <div style={{ fontSize: '72px', fontWeight: 'bold', marginBottom: '20px' }}>
                    Amit Sahu
                </div>
                <div style={{ fontSize: '36px', opacity: 0.9 }}>
                    Web Designer & Fullstack Developer 👨🏻‍💻
                </div>
                <div style={{ fontSize: '24px', marginTop: '20px', opacity: 0.8 }}>
                    Building elegant and professional user interfaces
                </div>
            </div>
        ),
        {
            ...size,
        }
    )
}
