import { useEffect, useRef } from 'react'
import { GradFlow } from 'gradflow'

// Animated WebGL gradient (Stripe-like shader) used as a section background.
// Colors / motion match the 21st.dev "stripe-like-gradient-shader" config.
export default function GradientShader({ className = '' }) {
  const ref = useRef(null)

  // GradFlow measures its canvas from the parent's clientWidth/Height, but it
  // only re-reads that size on a window 'resize' event — never via a
  // ResizeObserver. On first mount (or any layout/container change) the canvas
  // can get stuck at 0x0 and render nothing. Forward our container's size
  // changes (and the initial layout pass) as a resize so it always re-measures.
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const fire = () => window.dispatchEvent(new Event('resize'))
    const ro = new ResizeObserver(fire)
    ro.observe(el)
    fire()
    return () => ro.disconnect()
  }, [])

  return (
    <div ref={ref} className={`absolute inset-0 h-full w-full ${className}`}>
      <GradFlow
        config={{
          color1: { r: 255, g: 255, b: 255 },
          color2: { r: 66, g: 255, b: 233 },
          color3: { r: 129, g: 6, b: 190 },
          speed: 0.4,
          scale: 1,
          type: 'stripe',
          noise: 0.08,
        }}
      />
    </div>
  )
}
