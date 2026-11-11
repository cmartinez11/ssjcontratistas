import { useState } from 'react'

const variants = {
  primary: 'bg-cat text-navy hover:bg-[#e8b900]',
  outline: 'border border-white/70 text-white hover:bg-white hover:text-navy',
  dark: 'bg-navy text-white hover:bg-navy-deep',
}

export function Button({ href, variant = 'primary', className = '', children, ...rest }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-sm px-6 py-3 font-semibold transition-colors duration-200 ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  )
}

export function Photo({ src, alt, className = '', eager = false }) {
  const [ok, setOk] = useState(true)
  return (
    <div className={`relative overflow-hidden bg-navy-deep ${className}`}>
      {ok ? (
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => setOk(false)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <span className="absolute inset-0 grid place-items-center p-4 text-center text-sm text-white/60">{alt}</span>
      )}
    </div>
  )
}

export function Logo({ light = false, className = '' }) {
  return (
    <a href="#" className={`inline-flex items-center ${className}`} aria-label="SSJ Contratistas, inicio">
      <img
        src="/images/logo-ssj-contratista.jpeg"
        alt="SSJ Contratistas"
        className={
          light
            ? 'h-16 md:h-20 w-auto object-contain bg-white p-2 rounded-md shadow-sm'
            : 'h-14 md:h-16 w-auto object-contain'
        }
      />
    </a>
  )
}
