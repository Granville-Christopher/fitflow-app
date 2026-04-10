import { useState } from 'react';

const FAQ_ITEMS = [
  { q: 'Do I need gym equipment?', a: 'No. Our workouts are designed for bodyweight or minimal equipment (resistance bands optional). You can do them at home, in a hotel, or anywhere.' },
  { q: 'How long are the workouts?', a: '15–30 minutes typically. The AI adapts session length based on your schedule and energy. Busy day? Shorter session. Feeling strong? Go longer.' },
  { q: 'Can I cancel anytime?', a: 'Yes. Cancel in-app anytime — no phone calls, no hassle. You keep access until the end of your billing period.' },
  { q: "What if I don't see results in 12 weeks?", a: "We offer a 12-week money-back guarantee. Follow your plan for 12 weeks — if you're not satisfied, we'll refund you. No questions asked." },
  { q: 'Are the meal plans customizable?', a: 'Yes. Tell us your dietary preferences, allergies, and goals in the onboarding quiz. We build personalized meal plans with grocery lists and recipes.' },
  { q: 'Do you offer a free trial?', a: 'Yes. 14 days free — no credit card required. Try the full program and decide if it\'s right for you.' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-transparent to-green-500/5" id="faq">
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-16">
          <span className="inline-block py-2 px-4 rounded-full text-sm font-semibold text-green-400 mb-4 bg-white/10 backdrop-blur-xl border border-white/20">FAQ</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Questions? <span className="gradient-text">Answered.</span>
          </h2>
        </div>
        <div className="max-w-[700px] mx-auto flex flex-col gap-3">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              className={`p-5 md:p-6 rounded-2xl cursor-pointer transition-all bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/10 ${openIndex === i ? 'ring-2 ring-green-500/40' : ''}`}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="flex items-center justify-between gap-4">
                <span className="font-semibold text-base md:text-lg">{item.q}</span>
                <span className="flex-shrink-0 w-7 h-7 flex items-center justify-center rounded-lg bg-green-500/20 text-xl font-light text-green-400">
                  {openIndex === i ? '−' : '+'}
                </span>
              </div>
              <div className={`overflow-hidden transition-[max-height] duration-300 ease-out ${openIndex === i ? 'max-h-64' : 'max-h-0'}`}>
                <p className="pt-4 m-0 text-green-200 text-sm md:text-base leading-relaxed">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
