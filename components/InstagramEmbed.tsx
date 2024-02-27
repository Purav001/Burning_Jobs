// components/InstagramEmbed.tsx
import React from 'react'

const InstagramEmbed: React.FC = () => {
  return (
    <div>
      <blockquote
        className="instagram-media"
        data-instgrm-captioned
        data-instgrm-permalink="https://www.instagram.com/p/C21xrCxRkeE/"
        data-instgrm-version="8"
        style={{
          background: '#FFF',
          border: '0',
          borderRadius: '3px',
          boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
          margin: '1px',
          maxWidth: '658px',
          padding: '0',
          width: '99.375%',
          WebkitCalc: '100% - 2px',
          calc: '100% - 2px',
        }}
      >
        <div style={{ padding: '8px' }}>
          <div
            style={{
              background: '#F8F8F8',
              lineHeight: '0',
              marginTop: '40px',
              padding: '33.3125% 0',
              textAlign: 'center',
              width: '100%',
            }}
          >
            <div
              style={{
                background:
                  'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAMAAAApWqozAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAMUExURczMzPf399fX1+bm5mzY9AMAAADiSURBVDjLvZXbEsMgCES5/P8/t9FuRVCRmU73JWlzosgSIIZURCjo/ad+EQJJB4Hv8BFt+IDpQoCx1wjOSBFhh2XssxEIYn3ulI/6MNReE07UIWJEv8UEOWDS88LY97kqyTliJKKtuYBbruAyVh5wOHiXmpi5we58Ek028czwyuQdLKPG1Bkb4NnM+VeAnfHqn1k4+GPT6uGQcvu2h2OVuIf/gWUFyy8OWEpdyZSa3aVCqpVoVvzZZ2VTnn2wU8qzVjDDetO90GSy9mVLqtgYSy231MxrY6I2gGqjrTY0L8fxCxfCBbhWrsYYAAAAAElFTkSuQmCC); display:block; height:44px; margin:0 auto -44px; position:relative; top:-22px; width:44px;',
              }}
            ></div>
          </div>
          <p style={{ margin: '8px 0 0 0', padding: '0 4px' }}>
            <a
              href="https://www.instagram.com/p/C21xrCxRkeE/"
              style={{
                color: '#000',
                fontFamily: 'Arial, sans-serif',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 'normal',
                lineHeight: '17px',
                textDecoration: 'none',
                wordWrap: 'break-word',
              }}
              target="_blank"
            >
              Bring some friends, a special one, or them all. Experience what
              makes our reputation so hard to beat. 🥩 🥩 Reserve your table.
            </a>
          </p>
          <p
            style={{
              color: '#c9c8cd',
              fontFamily: 'Arial, sans-serif',
              fontSize: '14px',
              lineHeight: '17px',
              marginBottom: '0',
              marginTop: '8px',
              overflow: 'hidden',
              padding: '8px 0 7px',
              textAlign: 'center',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}
          >
            A post shared by{' '}
            <a
              href="https://www.instagram.com/nani_bilona_ghee/"
              style={{
                color: '#c9c8cd',
                fontFamily: 'Arial, sans-serif',
                fontSize: '14px',
                fontStyle: 'normal',
                fontWeight: 'normal',
                lineHeight: '17px',
              }}
              target="_blank"
            >
              Jervois Steak House Auckland
            </a>{' '}
            (@jervoisakl) on
            <time
              style={{
                fontFamily: 'Arial, sans-serif',
                fontSize: '14px',
                lineHeight: '17px',
              }}
              dateTime="2018-03-13T01:30:04+00:00"
            >
              Mar 12, 2018 at 6:30pm PDT
            </time>
          </p>
        </div>
      </blockquote>

      <script async defer src="//www.instagram.com/embed.js"></script>
    </div>
  )
}

export default InstagramEmbed
