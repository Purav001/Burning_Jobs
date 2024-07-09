import React from 'react'
import './c.css'
const page = () => {
  return (
    <main className="main">
            <section className="home">
                <div className="home__container container">
                    <div className="home__data">
                        <span className="home__subtitle">Error 404</span>
                        <h1 className="home__title">Hey !</h1>
                        <p className="home__description">
                            We are working on this part <br/> to bring you better content courses.
                        </p>
                        <a href="/" className="home__button">
                            Go Home
                        </a>
                    </div>

                    <div className="home__img">
                        <img src="/images/ghost-img.png" alt=""/>
                        <div className="home__shadow"></div>
                    </div>
                </div>

                <footer className="home__footer">
                    <span>+91 7986573918</span>
                    <span>|</span>
                    <span>burningjobs@exemplar.co.in</span>
                </footer>
            </section>
        </main>
  )
}

export default page