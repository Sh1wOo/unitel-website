import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Model = () => {
  useGSAP(() => {
    gsap.fromTo('#heading', 
      {
        y: 100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '#heading',
          start: 'top bottom-=30',  // Starts animation when the top of the heading is 50px above the bottom of the viewport
          end: 'top center',        // Ends animation when the top of the heading reaches the center of the viewport
          scrub: 1,                 // Smooth scrubbing, takes 1 second to catch up to the scrollbar
          // markers: true,            // Temporarily add markers to see the trigger points (remove in production)
          toggleActions: 'play none none reverse'  // Play on enter, reverse on leave
        }
      }
    );
  }, [])

  return (
    <section className='common-padding-sm'>
      <div className='screen-max-width'>
        <h1 id='heading' className='section-heading'>
          Осмотреть ближе.
        </h1>
        <div className='w-full h-[75vh] md:h-[90vh] overflow-hidden relative'>
        </div>
      </div>
    </section>
  )
}

export default Model