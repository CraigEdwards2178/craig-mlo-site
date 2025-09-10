import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="py-16 md:py-24">
      <p className="text-sm uppercase tracking-widest text-gray-400">
        MA • NH • ME Mortgages
      </p>
      <h1 className="text-4xl md:text-6xl font-bold mt-3 leading-tight">
        Mortgages made simple.
        <span className="block text-gray-300 font-normal">
          Dad life, fitness, and tech—rolled into one trusted guide.
        </span>
      </h1>
      <p className="mt-6 text-lg text-gray-300 max-w-2xl">
        I help families buy and refinance with clarity. I also build simple tools to make the
        process faster and easier.
      </p>
      <div className="mt-8 flex gap-3">
        <a href="#contact" className="inline-flex items-center rounded-2xl px-5 py-3 bg-white text-black font-medium">
          Start a conversation <ArrowRight className="ml-2 h-4 w-4" />
        </a>
        <a href="#services" className="inline-flex items-center rounded-2xl px-5 py-3 border border-gray-500">
          See services
        </a>
      </div>
    </section>
  )
}
