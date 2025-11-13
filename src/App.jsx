import { useMemo } from 'react'
import Spline from '@splinetool/react-spline'
import { Sparkles, Shield, Zap, ArrowRight, Check } from 'lucide-react'

function GradientBadge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold tracking-wide text-white bg-gradient-to-r from-purple-500 via-fuchsia-500 to-amber-500 shadow-md shadow-fuchsia-500/30">
      <Sparkles className="h-3.5 w-3.5" /> {children}
    </span>
  )
}

function Stat({ value, label }) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-amber-500">{value}</div>
      <div className="mt-1 text-sm text-white/70">{label}</div>
    </div>
  )
}

function Feature({ Icon, title, desc }) {
  return (
    <div className="group relative rounded-2xl p-6 backdrop-blur-xl bg-white/5 ring-1 ring-white/10 hover:ring-white/20 transition-all duration-300 hover:translate-y-[-2px] hover:shadow-2xl hover:shadow-purple-500/10">
      <div className="absolute inset-0 -z-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-tr from-purple-500/10 via-sky-500/10 to-amber-500/10" />
      <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500/20 via-fuchsia-500/20 to-amber-500/20 text-white ring-1 ring-white/20">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-4 text-lg font-bold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-white/70">{desc}</p>
    </div>
  )
}

function Plan({ name, price, features, highlight }) {
  return (
    <div className={`group relative rounded-2xl p-6 backdrop-blur-xl bg-white/5 ring-1 ${highlight ? 'ring-amber-400/60' : 'ring-white/10'} hover:ring-white/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/10`}
      onMouseMove={(e) => {
        const target = e.currentTarget
        const rect = target.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        target.style.setProperty('--mx', `${(x - rect.width / 2) / 30}deg`)
        target.style.setProperty('--my', `${-(y - rect.height / 2) / 30}deg`)
      }}
      onMouseLeave={(e) => {
        const target = e.currentTarget
        target.style.setProperty('--mx', '0deg')
        target.style.setProperty('--my', '0deg')
      }}
      style={{ transform: 'perspective(900px) rotateX(var(--my)) rotateY(var(--mx))' }}
    >
      {highlight && (
        <div className="absolute -top-3 right-4">
          <GradientBadge>Most Popular</GradientBadge>
        </div>
      )}
      <h4 className="text-white font-semibold text-lg">{name}</h4>
      <div className="mt-2 flex items-end gap-1">
        <span className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-amber-300">{price}</span>
        <span className="text-white/60">/mo</span>
      </div>
      <ul className="mt-6 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm text-white/80">
            <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-purple-500/30 to-amber-500/30 text-emerald-300 ring-1 ring-white/15">
              <Check className="h-3.5 w-3.5" />
            </span>
            {f}
          </li>
        ))}
      </ul>
      <button className="btn btn-primary btn-shake mt-6 w-full inline-flex items-center justify-center gap-2">
        Get Started <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  )
}

export default function App() {
  const features = useMemo(
    () => [
      {
        Icon: Zap,
        title: 'Blazing-fast responses',
        desc: 'Sub-200ms generation powered by optimized AI pipelines and smart caching.'
      },
      {
        Icon: Shield,
        title: 'Enterprise-grade security',
        desc: 'SOC2-ready privacy, isolated data, and role-based controls by default.'
      },
      {
        Icon: Sparkles,
        title: 'Delightful voice & chat',
        desc: 'Natural conversations, neural voices, and multimodal understanding.'
      }
    ],
    []
  )

  const plans = useMemo(
    () => [
      {
        name: 'Starter',
        price: '$19',
        features: [
          '5,000 requests included',
          '1 voice + chat channel',
          'Email support'
        ]
      },
      {
        name: 'Pro',
        price: '$49',
        highlight: true,
        features: [
          '50,000 requests included',
          'Custom voices & styles',
          'Priority support'
        ]
      },
      {
        name: 'Scale',
        price: '$99',
        features: [
          'Unlimited requests',
          'Dedicated cluster',
          'SLA + SSO + Audit logs'
        ]
      }
    ],
    []
  )

  return (
    <div className="min-h-screen w-full bg-[#06070c] text-white selection:bg-purple-500/30 selection:text-white">
      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#06070c]/60 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-purple-500 via-fuchsia-500 to-amber-500" />
            <span className="text-white font-semibold tracking-wide">AIVault</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <button className="btn btn-ghost">Sign in</button>
            <button className="btn btn-primary btn-shake hidden sm:inline-flex">Get started</button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Soft gradient glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[60rem] w-[60rem] rounded-full bg-gradient-conic from-purple-500/15 via-sky-500/10 to-amber-500/15 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-8 py-20 md:py-28 items-center">
          <div className="relative z-10">
            <GradientBadge>Digital AI Product</GradientBadge>
            <h1 className="mt-5 text-4xl md:text-6xl font-extrabold leading-tight">
              Sell AI experiences that feel alive
            </h1>
            <p className="mt-4 text-base md:text-lg text-white/70 max-w-xl">
              Launch your AI voice and chat agents with a stunning, high‑converting storefront. Beautiful motion, crisp UX, and instant checkout — all in one.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <button className="btn btn-primary btn-shake inline-flex items-center gap-2">
                Start free <ArrowRight className="h-4 w-4" />
              </button>
              <button className="btn btn-ghost">Live demo</button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-6">
              <Stat value="200K+" label="Sessions served" />
              <Stat value="99.9%" label="Uptime" />
              <Stat value="<200ms" label="Latency" />
            </div>
          </div>

          {/* Spline 3D animation */}
          <div className="relative h-[420px] md:h-[520px] lg:h-[600px] rounded-3xl overflow-hidden ring-1 ring-white/10 bg-white/5">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <Feature key={i} Icon={f.Icon} title={f.title} desc={f.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold">Simple, transparent pricing</h2>
            <p className="mt-3 text-white/70">Pay as you grow. Cancel anytime.</p>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {plans.map((p) => (
              <Plan key={p.name} name={p.name} price={p.price} features={p.features} highlight={p.highlight} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl p-8 md:p-12 ring-1 ring-white/10 bg-gradient-to-br from-purple-600/20 via-fuchsia-600/20 to-amber-500/20">
            <div className="absolute inset-0 pointer-events-none" aria-hidden>
              <div className="absolute -top-20 -right-16 h-64 w-64 rounded-full bg-purple-400/20 blur-3xl" />
              <div className="absolute -bottom-16 -left-10 h-64 w-64 rounded-full bg-amber-400/20 blur-3xl" />
            </div>
            <div className="relative z-10 grid lg:grid-cols-2 gap-6 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-extrabold">Ready to launch your AI product?</h3>
                <p className="mt-2 text-white/70">Get a beautiful storefront with animations, hover effects, and a micro‑interaction shake that drives clicks.</p>
              </div>
              <div className="flex flex-wrap items-center gap-3 lg:justify-end">
                <button className="btn btn-primary btn-shake">Create my store</button>
                <button className="btn btn-ghost">Talk to sales</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>© {new Date().getFullYear()} AIVault. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a className="hover:text-white transition-colors" href="#">Privacy</a>
            <a className="hover:text-white transition-colors" href="#">Terms</a>
            <a className="hover:text-white transition-colors" href="#">Status</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
