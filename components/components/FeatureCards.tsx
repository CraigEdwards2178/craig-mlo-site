const items = [
  {
    title: 'First-Time Buyer Help',
    desc: 'From pre-approval to closing—clear steps and steady communication.',
  },
  {
    title: 'Refinance Clarity',
    desc: 'Know when it makes sense and what you’ll actually save.',
  },
  {
    title: 'Tech-Forward',
    desc: 'I’m learning full-stack to build tools that remove friction.',
  },
]

export default function FeatureCards() {
  return (
    <section id="services" className="grid md:grid-cols-3 gap-5 py-10">
      {items.map((it) => (
        <div key={it.title} className="bg-[var(--card)] rounded-2xl p-6 border border-neutral-800">
          <h3 className="text-lg font-semibold">{it.title}</h3>
          <p className="text-gray-300 mt-2">{it.desc}</p>
        </div>
      ))}
    </section>
  )
}
