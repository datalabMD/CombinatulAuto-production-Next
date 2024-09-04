import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

import Navigation from '../components/navigation'
import NumbersCard from '../components/numbers-card'
import Footer from '../components/footer'

const Anunt2 = (props) => {
  return (
    <>
      <div className="anunt2-container1">
        <Head>
          <title>Anunt-2 - SA Combinatul Auto Nr.4 din Chișinău</title>
          <meta
            name="description"
            content="SA Combinatul Auto Nr.4 din Chișinău, oferă o gamă largă de servicii electrice și mecanice la prețuri accesibile pentru fiecare."
          />
          <meta
            property="og:title"
            content="Anunt-2 - SA Combinatul Auto Nr.4 din Chișinău"
          />
          <meta
            property="og:description"
            content="SA Combinatul Auto Nr.4 din Chișinău, oferă o gamă largă de servicii electrice și mecanice la prețuri accesibile pentru fiecare."
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/7df3687e-9d61-4851-bd9b-b6ae978e2570/ea494eb0-6cf8-464c-b070-cddce041bc5c?org_if_sml=1&amp;q=80&amp;force_format=original"
          />
        </Head>
        <Navigation
          imageSrc="navigationhttps://play.teleporthq.io/static/svg/placeholders/no-image.svg"
          rootClassName="navigationroot-class-name14"
        ></Navigation>
        <main className="anunt2-main">
          <div id="transport" className="anunt2-hero section-container">
            <div className="anunt2-max-width1 max-content-container">
              <div className="anunt2-content-container">
                <h1 className="anunt2-text10">
                  <span>
                    COMBINATUL AUTO
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="anunt2-text12">nr.4</span>
                  <br></br>
                  <span className="anunt2-text14">s</span>
                  <span className="anunt2-text15">
                    ervicii de
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span className="anunt2-text17">calitate</span>
                  <br></br>
                  <span className="anunt2-text18">
                    IN
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <span className="anunt2-text19">Moldova</span>
                </h1>
                <span className="anunt2-text20">
                  <span>N</span>
                  <span className="anunt2-text22">
                    oi garantam executarea rapida și la un nivel
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span className="anunt2-text24">
                    inalt a comenzilor Dvs.
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </span>
                <div className="anunt2-btns-container1">
                  <a
                    href="https://combinatulauto.md/#servicii"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="anunt2-primary1 button-primary button-lg button"
                  >
                    servicii
                  </a>
                  <a
                    href="https://combinatulauto.md/#contacts"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="anunt2-secondary button button-outline button-lg-border"
                  >
                    adresa noastra
                  </a>
                </div>
              </div>
              <div className="anunt2-video-container">
                <div className="anunt2-container2"></div>
              </div>
            </div>
            <div className="anunt2-blue-background"></div>
          </div>
          <div className="anunt2-text-content">
            <h2 className="anunt2-text25">
              <span>
                ADUNAREA GENERALA
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>EXTRAORDINARA </span>
              <span>A ACTIONARILOR 2023</span>
              <br></br>
            </h2>
          </div>
          <div className="anunt2-blog">
            <iframe
              src="https://drive.google.com/file/d/1HCDP8ZXZYGYnOA9urLGLxOvcpT9lKvGi/preview"
              className="anunt2-iframe"
            ></iframe>
          </div>
          <div className="anunt2-container3">
            <div className="anunt2-btns-container2">
              <Link href="/news">
                <a className="anunt2-link button-primary button-lg button">
                  vezi toate noutatile
                </a>
              </Link>
            </div>
          </div>
          <div className="anunt2-numbers-banner section-container">
            <div className="anunt2-container4 max-content-container">
              <div className="anunt2-heading-container1">
                <span className="anunt2-text31">
                  Personalul intreprinderii reprezinta o echipa profesionista,
                  cu experienta vasta in domeniu.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <h1 className="anunt2-text32 Heading2">
                  <span>
                    {' '}
                    servicii la preturi accesibile
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                </h1>
              </div>
              <div className="anunt2-numbers-container">
                <NumbersCard text="expeditiii"></NumbersCard>
                <NumbersCard
                  text="ani"
                  number="12"
                  imageSrc="/interface%20time%20reset-200h.png"
                ></NumbersCard>
                <NumbersCard
                  text="evenimente"
                  number="64"
                  imageSrc="/interface%20calendar%20favorite-200h.png"
                ></NumbersCard>
                <NumbersCard
                  text="companii"
                  number="234"
                  imageSrc="/shopping%20bag%20suit%20case-200h.png"
                ></NumbersCard>
                <NumbersCard
                  text="orase"
                  number="14"
                  imageSrc="/travel%20map%20location%20pin-200h.png"
                ></NumbersCard>
                <NumbersCard
                  text="diagnosticari"
                  number="1,071"
                  imageSrc="/interface%20time%20reset-200h.png"
                ></NumbersCard>
              </div>
            </div>
          </div>
          <div className="anunt2-previous-events section-container">
            <div className="anunt2-max-width2 max-content-container">
              <div className="anunt2-heading-container2">
                <h1 className="anunt2-text34 Heading2">
                  <span>PARTENERUL TAU DE INCREDERE</span>
                </h1>
                <span className="anunt2-text36">
                  {' '}
                  garantam executarea rapida si calitativa a comenzilor
                  Dumneavoastra
                </span>
              </div>
            </div>
          </div>
        </main>
        <Footer rootClassName="footerroot-class-name14"></Footer>
      </div>
      <style jsx>
        {`
          .anunt2-container1 {
            width: 100%;
            display: flex;
            position: relative;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
          }
          .anunt2-main {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .anunt2-hero {
            position: relative;
            padding-top: 128px;
          }
          .anunt2-max-width1 {
            z-index: 1;
            align-items: stretch;
          }
          .anunt2-content-container {
            flex: 1;
            display: flex;
            max-width: 45%;
            align-items: flex-start;
            flex-direction: column;
            justify-content: center;
          }
          .anunt2-text10 {
            font-size: 60px;
            font-style: normal;
            font-family: IBM Plex Sans Condensed;
            font-weight: 700;
            line-height: 1.1;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
            text-decoration: none;
          }
          .anunt2-text12 {
            text-transform: lowercase;
          }
          .anunt2-text14 {
            color: var(--dl-color-scheme-pink);
          }
          .anunt2-text15 {
            color: var(--dl-color-scheme-pink);
            text-transform: lowercase;
          }
          .anunt2-text17 {
            color: var(--dl-color-scheme-pink);
            text-transform: lowercase;
          }
          .anunt2-text18 {
            font-style: normal;
            font-weight: 600;
            text-transform: lowercase;
          }
          .anunt2-text19 {
            font-style: normal;
            font-weight: 600;
            text-transform: capitalize;
          }
          .anunt2-text20 {
            font-style: normal;
            font-weight: 500;
            margin-bottom: 42px;
          }
          .anunt2-text22 {
            text-transform: lowercase;
          }
          .anunt2-text24 {
            text-transform: lowercase;
          }
          .anunt2-btns-container1 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .anunt2-primary1 {
            margin-right: var(--dl-space-space-oneandhalfunits);
            text-decoration: none;
          }
          .anunt2-secondary {
            text-decoration: none;
          }
          .anunt2-video-container {
            flex: 1;
            width: 200px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .anunt2-container2 {
            width: 100%;
            height: 511px;
            display: flex;
            transition: 0.3s;
            background-size: cover;
            background-image: url('/home-1200h.webp');
            background-position: center;
          }
          .anunt2-container2:hover {
            transform: scale(1.02);
            box-shadow: 5px 5px 10px 0px rgba(111, 102, 102, 0.31);
          }
          .anunt2-blue-background {
            top: 0px;
            right: 0px;
            width: 47%;
            height: 100px;
            position: absolute;
            min-height: 80%;
            background-size: cover;
            background-image: url('/blue-bg-1500w.webp');
            background-repeat: no-repeat;
          }
          .anunt2-text-content {
            width: 100%;
            display: flex;
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-oneandhalfunits);
            justify-content: space-between;
          }
          .anunt2-text25 {
            font-size: 3rem;
            text-align: center;
          }
          .anunt2-blog {
            width: 100%;
            height: var(--dl-size-size-maxwidth);
            display: flex;
            padding: var(--dl-space-space-threeunits);
            max-width: var(--dl-size-size-maxwidth);
            align-self: center;
            align-items: center;
            padding-top: 50px;
            padding-bottom: 52px;
            justify-content: space-between;
          }
          .anunt2-iframe {
            width: 1110px;
            height: var(--dl-size-size-maxwidth);
          }
          .anunt2-container3 {
            width: 100%;
            height: 243px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .anunt2-btns-container2 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .anunt2-link {
            width: 364px;
            padding-right: var(--dl-space-space-halfunit);
            text-decoration: none;
          }
          .anunt2-numbers-banner {
            display: flex;
            padding-top: var(--dl-space-space-fiveunits);
            flex-direction: column;
            background-size: cover;
            background-image: url('/29bg-1500w.webp');
          }
          .anunt2-container4 {
            flex-direction: column;
          }
          .anunt2-heading-container1 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .anunt2-text31 {
            color: var(--dl-color-scheme-white);
            font-style: normal;
            text-align: center;
            font-weight: 500;
          }
          .anunt2-text32 {
            color: var(--dl-color-scheme-white);
            text-align: center;
          }
          .anunt2-numbers-container {
            width: 100%;
            display: grid;
            grid-row-gap: var(--dl-space-space-fourunits);
            grid-column-gap: 30px;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
          }
          .anunt2-previous-events {
            display: flex;
            position: relative;
            flex-direction: column;
            padding-bottom: 150px;
          }
          .anunt2-max-width2 {
            flex-direction: column;
          }
          .anunt2-heading-container2 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .anunt2-text34 {
            text-align: center;
          }
          .anunt2-text36 {
            color: var(--dl-color-scheme-darkgray);
            font-style: normal;
            text-align: center;
            font-weight: 500;
          }
          @media (max-width: 991px) {
            .anunt2-max-width1 {
              flex-direction: column;
            }
            .anunt2-content-container {
              max-width: 100%;
              margin-bottom: 42px;
            }
            .anunt2-container2 {
              width: 583px;
            }
            .anunt2-blue-background {
              top: auto;
              width: 100%;
              bottom: 0px;
              min-height: 40%;
            }
            .anunt2-blog {
              flex-direction: column;
            }
            .anunt2-numbers-container {
              grid-template-columns: 1fr 1fr 1fr;
            }
          }
          @media (max-width: 767px) {
            .anunt2-container2 {
              width: 505px;
            }
            .anunt2-text-content {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .anunt2-blog {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .anunt2-numbers-container {
              grid-template-columns: 1fr 1fr;
            }
            .anunt2-previous-events {
              padding-bottom: var(--dl-space-space-sixunits);
            }
          }
          @media (max-width: 479px) {
            .anunt2-text10 {
              font-size: 60px;
            }
            .anunt2-container2 {
              width: 424px;
            }
            .anunt2-text-content {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .anunt2-blog {
              height: 515px;
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .anunt2-iframe {
              width: var(--dl-size-size-xxlarge);
              height: 100%;
            }
          }
        `}
      </style>
    </>
  )
}

export default Anunt2
