import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const followerRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const followerRef2 = useRef({ x: 0, y: 0 })
  const rafRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const follower = followerRef.current
    if (!cursor || !follower) return

    const onMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
    }

    const animate = () => {
      followerRef2.current.x += (mouseRef.current.x - followerRef2.current.x) * 0.12
      followerRef2.current.y += (mouseRef.current.y - followerRef2.current.y) * 0.12
      follower.style.left = followerRef2.current.x + 'px'
      follower.style.top = followerRef2.current.y + 'px'
      rafRef.current = requestAnimationFrame(animate)
    }

    const grow = () => { follower.style.width = '50px'; follower.style.height = '50px' }
    const shrink = () => { follower.style.width = '32px'; follower.style.height = '32px' }

    const addHover = () => {
      document.querySelectorAll('a, button, .contact-card, .service-card, .info-card, .cert-card')
        .forEach(el => { el.addEventListener('mouseenter', grow); el.addEventListener('mouseleave', shrink) })
    }

    document.addEventListener('mousemove', onMove)
    rafRef.current = requestAnimationFrame(animate)
    addHover()

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-follower" ref={followerRef} />
    </>
  )
}
