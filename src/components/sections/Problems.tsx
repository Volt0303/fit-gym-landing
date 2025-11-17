import { AlertCircle, TrendingDown, Activity, Heart } from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    title: "ダイエットが続かない",
    description: "何度も挑戦しては失敗を繰り返している",
  },
  {
    icon: Heart,
    title: "健康への不安",
    description: "年齢とともに増える体の悩みや生活習慣病",
  },
  {
    icon: Activity,
    title: "体力の低下",
    description: "以前のように動けなくなってきた",
  },
  {
    icon: AlertCircle,
    title: "運動の仕方がわからない",
    description: "何から始めればいいのか分からず一歩が踏み出せない",
  },
];

const Problems = () => {
  return (
    <section className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 fade-in-up">
          こんなお悩みありませんか？
        </h2>
        <p className="text-center text-muted-foreground mb-16 fade-in-up delay-100">
          一人で悩まず、プロに相談してみませんか
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`bg-card p-8 rounded-2xl shadow-smooth hover-lift fade-in-up delay-${(index + 2) * 100}`}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <problem.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-center mb-4">
                {problem.title}
              </h3>
              <p className="text-center text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center fade-in-up delay-600">
          <div className="inline-block bg-gold/10 border-2 border-gold rounded-2xl p-8">
            <p className="text-xl md:text-2xl font-bold text-primary mb-2">
              そのお悩み、解決できます！
            </p>
            <p className="text-muted-foreground">
              医療の知識を持つプロフェッショナルが、あなたに最適なプログラムを提案します
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;
