import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

const HERO_IMAGE =
  'https://cdn.poehali.dev/projects/6c20b9fb-4124-45a5-b34d-eaafeb38a401/files/ce095481-7816-43a3-9d51-0adb552b2330.jpg';

const socials = [
  { name: 'Telegram', icon: 'Send', color: 'from-sky-400 to-blue-500', href: '#' },
  { name: 'Instagram', icon: 'Instagram', color: 'from-pink-500 to-purple-600', href: '#' },
  { name: 'YouTube', icon: 'Youtube', color: 'from-red-500 to-rose-600', href: '#' },
  { name: 'Email', icon: 'Mail', color: 'from-emerald-400 to-cyan-500', href: '#' },
];

const facts = [
  { icon: 'Sparkles', title: 'Креатив', text: 'Создаю проекты, которыми хочется делиться' },
  { icon: 'Rocket', title: 'Энергия', text: 'Работаю быстро и довожу идеи до результата' },
  { icon: 'Heart', title: 'Душа', text: 'Вкладываюсь в каждую деталь с любовью' },
];

const Index = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Сообщение отправлено!',
      description: 'Я свяжусь с вами в ближайшее время ✦',
    });
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden font-sans selection:bg-pink-500/40">
      {/* animated background blobs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-32 h-[480px] w-[480px] rounded-full bg-purple-600/30 blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-40 h-[520px] w-[520px] rounded-full bg-pink-600/25 blur-3xl animate-blob [animation-delay:3s]" />
        <div className="absolute bottom-0 left-1/4 h-[440px] w-[440px] rounded-full bg-cyan-500/20 blur-3xl animate-blob [animation-delay:6s]" />
      </div>

      <div className="relative z-10">
        {/* HERO */}
        <section className="container mx-auto px-6 pt-24 pb-16 md:pt-32">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="space-y-7">
              <div
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/70 opacity-0 animate-fade-up"
                style={{ animationDelay: '0.1s' }}
              >
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                Открыт для новых проектов
              </div>

              <h1
                className="font-display text-5xl font-extrabold leading-[1.05] md:text-7xl opacity-0 animate-fade-up"
                style={{ animationDelay: '0.2s' }}
              >
                Привет, я
                <br />
                <span className="text-gradient">Алекс</span>
              </h1>

              <p
                className="max-w-md text-lg leading-relaxed text-white/60 opacity-0 animate-fade-up"
                style={{ animationDelay: '0.35s' }}
              >
                Дизайнер и креатор. Превращаю смелые идеи в яркие визуальные
                истории, которые цепляют с первого взгляда.
              </p>

              <div
                className="flex flex-wrap gap-3 opacity-0 animate-fade-up"
                style={{ animationDelay: '0.5s' }}
              >
                <Button
                  size="lg"
                  className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 text-base font-semibold hover:opacity-90"
                  onClick={() =>
                    document
                      .getElementById('contact')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  Связаться
                  <Icon name="ArrowRight" size={18} className="ml-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="rounded-full border-white/20 bg-transparent px-8 text-base text-white hover:bg-white/10"
                  onClick={() =>
                    document
                      .getElementById('about')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  Обо мне
                </Button>
              </div>
            </div>

            <div
              className="relative mx-auto opacity-0 animate-fade-up"
              style={{ animationDelay: '0.4s' }}
            >
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-purple-600 via-pink-500 to-cyan-400 opacity-70 blur-2xl animate-gradient-shift [background-size:300%_300%]" />
              <div className="relative animate-float">
                <img
                  src={HERO_IMAGE}
                  alt="Алекс"
                  className="aspect-square w-[340px] rounded-[2.5rem] object-cover shadow-2xl md:w-[420px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="container mx-auto px-6 py-20">
          <div className="mb-12 text-center">
            <span className="font-display text-sm uppercase tracking-[0.3em] text-pink-400">
              О мне
            </span>
            <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
              Немного <span className="text-gradient">обо мне</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {facts.map((f, i) => (
              <div
                key={f.title}
                className="glass group rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-white/[0.07]"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 transition-transform group-hover:scale-110">
                  <Icon name={f.icon} size={26} className="text-white" />
                </div>
                <h3 className="mb-2 font-display text-xl font-semibold">
                  {f.title}
                </h3>
                <p className="leading-relaxed text-white/55">{f.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="container mx-auto px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <span className="font-display text-sm uppercase tracking-[0.3em] text-cyan-400">
                Контакты
              </span>
              <h2 className="mt-3 font-display text-4xl font-bold md:text-5xl">
                Давай <span className="text-gradient">поговорим</span>
              </h2>
            </div>

            <div className="grid gap-10 md:grid-cols-2">
              {/* form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  required
                  placeholder="Ваше имя"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="h-14 rounded-2xl border-white/10 bg-white/5 text-white placeholder:text-white/40 focus-visible:ring-pink-500"
                />
                <Input
                  required
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="h-14 rounded-2xl border-white/10 bg-white/5 text-white placeholder:text-white/40 focus-visible:ring-pink-500"
                />
                <Textarea
                  required
                  placeholder="Сообщение"
                  rows={5}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="rounded-2xl border-white/10 bg-white/5 text-white placeholder:text-white/40 focus-visible:ring-pink-500"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 text-base font-semibold hover:opacity-90"
                >
                  Отправить сообщение
                  <Icon name="Send" size={18} className="ml-1" />
                </Button>
              </form>

              {/* socials */}
              <div className="space-y-4">
                <p className="text-white/55">
                  Или свяжитесь со мной любым удобным способом:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {socials.map((s) => (
                    <a
                      key={s.name}
                      href={s.href}
                      className="glass group flex flex-col items-start gap-3 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07]"
                    >
                      <div
                        className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${s.color} transition-transform group-hover:scale-110`}
                      >
                        <Icon name={s.icon} size={22} className="text-white" />
                      </div>
                      <span className="font-display font-semibold">
                        {s.name}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="container mx-auto px-6 py-10 text-center text-sm text-white/40">
          © 2026 Алекс · Сделано с любовью
        </footer>
      </div>
    </div>
  );
};

export default Index;
