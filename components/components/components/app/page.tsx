import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import FeatureCards from '@/components/FeatureCards'
import About from '@/components/About'

export default function Page() {
  return (
    <>
      <Nav />
      <Hero />
      <FeatureCards />

      <section id="contact" className="py-12">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="text-gray-300 mt-3">Tell me a bit about your goals and timeline.</p>

        <form
          className="mt-6 grid gap-3 max-w-xl"
          onSubmit={async (e) => {
            e.preventDefault()
            const form = e.currentTarget as HTMLFormElement
            const data = Object.fromEntries(new FormData(form).entries())
            await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) })
            alert("Thanks! I'll be in touch.")
            form.reset()
          }}
        >
          <input
            name="name"
            required
            placeholder="Name"
            className="bg-[var(--card)] border border-neutral-800 rounded-xl px-4 py-3"
          />
          <input
            type="email"
            name="email"
            required
            placeholder="Email"
            className="bg-[var(--card)] border border-neutral-800 rounded-xl px-4 py-3"
          />
          <textarea
            name="message"
            required
            placeholder="How can I help?"
            rows={5}
            className="bg-[var(--card)] border border-neutral-800 rounded-xl px-4 py-3"
          />
          <button className="bg-white text-black rounded-2xl px-5 py-3 font-medium w-fit">
            Send
          </button>
        </form>
      </section>

      <footer className="py-10 text-sm text-gray-400">
        © {new Date().getFullYear()} Craig Edwards — NMLS# (add) — MA • NH • ME
      </footer>
    </>
  )
}
