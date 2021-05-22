import { products } from '../../utils/db'
import { useState } from "react"
import { useKeenSlider } from "keen-slider/react"

import styles from '../../styles/slides/ProductosGaleria.module.css'

function ArrowLeft(props) {
  const disabeld = props.disabled ? " arrow--disabled" : ""
  return (
    <svg
      onClick={props.onClick}
      className={"arrow arrow--separated arrow--left arrow--dark" + disabeld}
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
      className={"arrow arrow--separated arrow--right arrow--dark" + disabeld}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
    </svg>
  )
}

export default function ProductosSlides({ selected, slides, variant }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slidesPerView: slides,
    spacing: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
  })

  const currentProducts = products.filter(product => product.line == selected)

  return (
    <div className='navigation-container'>
      <div className="navigation-wrapper" id="inicio">
        <div ref={sliderRef} className="keen-slider">
          {currentProducts.map(product => (
            <div className="keen-slider__slide" key={product.id}>
              <Producto product={product} variant={variant}/>
            </div>
          ))}
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
        <div className="dots dnone">
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
  )
}

  function Producto({product, variant}) {
    return (
      <div className={styles.producto}>
        <div className={styles.image_container}>
          <img src={product.images.url} alt={product.images.alt} />
        </div>
        <h1 className={styles.title}>{product.name}</h1>
        <p>${product.price}</p>
        {variant != 'mobile' && <p>{product.description}</p>}
      </div>
    )
  }