import { Target, TrendingUp, Shield, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: Target,
    title: "目標達成率95%以上",
    description: "専属トレーナーがあなたの目標達成まで徹底サポート。一人ひとりに合わせた最適なプログラムで確実に結果を出します。",
    stat: "95%",
    label: "目標達成率",
  },
  {
    icon: TrendingUp,
    title: "平均-8kg減量成功",
    description: "3ヶ月のプログラムで平均8kgの減量に成功。リバウンドしにくい体づくりを実現します。",
    stat: "-8kg",
    label: "平均減量",
  },
  {
    icon: Shield,
    title: "医療連携で安心",
    description: "提携医療機関との連携により、健康状態を常にチェック。安全第一でトレーニングを進めます。",
    stat: "100%",
    label: "安全管理",
  },
  {
    icon: Sparkles,
    title: "継続率90%超え",
    description: "楽しく続けられるプログラムと、親身なサポートで高い継続率を実現。習慣化をサポートします。",
    stat: "90%",
    label: "継続率",
  },
];

const Benefits = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary via-primary-dark to-primary text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gold rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold rounded-full blur-3xl animate-float delay-300" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 fade-in-up">
          数字で見る私たちの実績
        </h2>
        <p className="text-center text-white/80 mb-20 fade-in-up delay-100">
          確かな実績と信頼のサポート体制
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`group relative fade-in-up delay-${(index + 2) * 100}`}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover-lift transition-all duration-500 h-full">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-gold" />
                </div>

                <div className="text-center mb-6">
                  <div className="text-5xl font-bold text-gold mb-2">
                    {benefit.stat}
                  </div>
                  <div className="text-sm text-white/70">{benefit.label}</div>
                </div>

                <h3 className="text-xl font-bold text-center mb-4">
                  {benefit.title}
                </h3>
                <p className="text-white/80 text-center leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto fade-in-up delay-600">
          <div className="text-center">
            <div className="text-4xl font-bold text-gold mb-2">15年</div>
            <p className="text-white/80">医療現場での経験</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gold mb-2">5,000名+</div>
            <p className="text-white/80">指導実績</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gold mb-2">60-70代</div>
            <p className="text-white/80">シニア層の実績多数</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
