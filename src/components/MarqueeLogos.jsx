import { techStack } from '../data/data'

export default function MarqueeLogos() {
  const repeatedStack = [...techStack, ...techStack, ...techStack]

  return (
    <section className="bg-white py-10 border-b-[1.5px] border-[#142127] overflow-hidden select-none">
      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <p className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-[#142127]/60">
          Engineered with battle-tested production frameworks & AI tooling
        </p>
      </div>

      <div className="relative flex overflow-hidden">
        <div className="animate-marquee-infinite flex items-center gap-6 py-2">
          {repeatedStack.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#f8f8f6] border border-[#142127]/15 hover:border-[#142127] hover:bg-[#fffa56] transition-all duration-300 group shadow-sm flex-shrink-0 cursor-default"
            >
              <span className="w-2 h-2 rounded-full bg-[#142127] group-hover:scale-125 transition-transform" />
              <span className="font-extrabold text-sm tracking-tight text-[#142127]">
                {tech.name}
              </span>
              <span className="text-[10px] font-mono text-[#142127]/50 uppercase tracking-wider group-hover:text-[#142127]">
                [{tech.category}]
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
