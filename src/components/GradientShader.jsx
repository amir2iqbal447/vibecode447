import { GradFlow } from 'gradflow'

// Animated WebGL gradient (Stripe-like shader) used as a section background.
// Colors / motion match the 21st.dev "stripe-like-gradient-shader" config.
// Renders a full-bleed canvas; place inside a `relative` container.
export default function GradientShader({ className = '' }) {
  return (
    <div className={`absolute inset-0 ${className}`}>
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
