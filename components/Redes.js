import { useKeenSlider } from "keen-slider/react"
import { useState } from 'react'

import { Slide1 } from './slides/RedesSlides'

import styles from '../styles/Redes.module.css'

function ArrowLeft(props) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={"arrow arrow--left arrow--dark" + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>
  )
}

function ArrowRight(props) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={"arrow arrow--right arrow--dark" + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </svg>
  )
}

export default function Redes() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    loop: true,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
  })

  return (
    <section className={styles.container} id="redes">
      <h1>Síguenos</h1>
      <div className="navigation-container quienes-somos--slider">
        <div className="navigation-wrapper">
          <div ref={sliderRef} className="keen-slider">
            <div className="keen-slider__slide number-slide1">
              <Slide1 />
            </div>
            <div className="keen-slider__slide number-slide2">
              <Slide1 />
            </div>
            <div className="keen-slider__slide number-slide3">
              <Slide1 />
            </div>
          </div>
          {slider && (
            <>
              <ArrowLeft
                onClick={(e) => e.stopPropagation() || slider.prev()}
                disabled={currentSlide === 0}
              />
              <ArrowRight
                onClick={(e) => e.stopPropagation() || slider.next()}
                disabled={currentSlide === slider.details().size - 1}
              />
            </>
          )}
        </div>
        {slider && (
          <div className="dots">
            {[...Array(slider.details().size).keys()].map((idx) => {
              return (
                <button
                  key={idx}
                  onClick={() => {
                    slider.moveToSlideRelative(idx)
                  }}
                  className={"dot" + (currentSlide === idx ? " active" : "")}
                />
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
