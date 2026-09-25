'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';
import { heroSlides } from '@/data/hero-slides';

export function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((v) => (v + 1) % heroSlides.length), 6500);
    return () => clearInterval(id);
  }, []);

  const slide = heroSlides[active];

  return (
    <section className="relative min-h-[620px] overflow-hidden bg-navy text-white sm:min-h-[680px]">
      {heroSlides.map((item, i) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-700 ${i === active ? 'opacity-100' : 'opacity-0'}`}
          aria-hidden={i !== active}
        >
          <img src={item.imageUrl} alt="" className="h-full w-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy/75 via-navy/35 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
        </div>
      ))}

      <div className="section-shell relative z-10 flex min-h-[620px] flex-col justify-end pb-8 pt-[100px] sm:min-h-[680px] sm:pb-10 sm:pt-[110px]">
        <div key={slide.id} className="float-in max-w-2xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[.28em] text-gold">{slide.eyebrow}</p>
          <h1 className="display whitespace-pre-line text-5xl font-black uppercase leading-[.88] tracking-[-.02em] sm:text-7xl">
            {slide.title}
          </h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-blue-100/85">{slide.text}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            {slide.ctaPrimary && (
              <Link
                href={slide.ctaPrimary.href}
                className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-navy transition hover:bg-white"
              >
                {slide.ctaPrimary.label} <ArrowUpRight size={16} />
              </Link>
            )}
            {slide.ctaSecondary && (
              <Link
                href={slide.ctaSecondary.href}
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-bold transition hover:border-leaf hover:text-leaf"
              >
                {slide.ctaSecondary.label}
              </Link>
            )}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between gap-4 border-t border-white/15 pt-5">
          <div className="flex gap-2">
            {heroSlides.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setActive(i)}
                className={`h-1.5 rounded-full transition-all ${i === active ? 'w-10 bg-gold' : 'w-4 bg-white/35'}`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setActive((active + heroSlides.length - 1) % heroSlides.length)}
              className="rounded-full border border-white/25 p-2 hover:border-white"
              aria-label="Previous slide"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => setActive((active + 1) % heroSlides.length)}
              className="rounded-full border border-white/25 p-2 hover:border-white"
              aria-label="Next slide"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
