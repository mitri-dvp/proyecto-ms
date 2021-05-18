import { products } from '../../utils/db'
import { useState, useEffect } from "react"
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

export default function ProductosSlides({selected}) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    loop: true,
    slidesPerView: 3,
    spacing: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
  })

  useEffect(() => {
    console.log(products)
    const linea_1 = products.filter(product => product.categoria == 1)

    console.log(linea_1)
  }, [])

  if(selected == 1)  return (
    <div className='navigation-container'>
      <div className="navigation-wrapper" id="inicio">
        <div ref={sliderRef} className="keen-slider">
          <div className="keen-slider__slide number-slide1">
            {Producto(1)}
          </div>
          <div className="keen-slider__slide number-slide2">
            {Producto(2)}
          </div>
          <div className="keen-slider__slide number-slide3">
            {Producto(1)}
          </div>
          <div className="keen-slider__slide number-slide4">
            {Producto(1)}
          </div>
          <div className="keen-slider__slide number-slide5">
            {Producto(1)}
          </div>
          <div className="keen-slider__slide number-slide6">
            {Producto(1)}
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

  if(selected == 2) {
    return '2 :)'
  }

  return 'defecto'
}


function Producto(n) {
  switch (n) {
    case 1:
    return (
    <div className={styles.producto}>
      <div className={styles.image_container}>
        <img src="/assets/hero-4.jpg" alt="" />
      </div>
      <h1 className={styles.title}>nombre del producto 1</h1>
      <p>$19.99</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, deleniti!</p>
    </div>
    )
    case 2:
    return (
      <div className={styles.producto}>
        <div className={styles.image_container}>
          <img src="/assets/hero-4.jpg" alt="" />
        </div>
        <h1 className={styles.title}>nombre del producto 2</h1>
        <p>$19.99</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis, deleniti!</p>
      </div>
      )
    default:
      break;
  }
}