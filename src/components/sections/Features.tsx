const features = [
  {
    image: "/images/gym-interior.jpg",
    title: "最新設備の完備",
    description: "効率的なトレーニングを実現する最新マシンを完備。清潔で快適な空間で集中してトレーニングできます。",
  },
  {
    image: "/images/personal-training.jpg",
    title: "完全マンツーマン指導",
    description: "あなただけのための時間を確保。周りの目を気にせず、自分のペースでトレーニングに集中できます。",
  },
  {
    image: "/images/gym-space.jpg",
    title: "充実したアメニティ",
    description: "シャワールーム、ロッカー、タオル、ウェアなど、必要なものはすべて完備。手ぶらで通えます。",
  },
];

const Features = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 fade-in-up">
          充実の設備・環境
        </h2>
        <p className="text-center text-muted-foreground mb-20 fade-in-up delay-100">
          快適にトレーニングできる環境をご用意
        </p>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-3xl shadow-smooth hover-lift fade-in-up delay-${(index + 2) * 100}`}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/60 to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-white/90 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-muted rounded-3xl p-8 md:p-12 fade-in-up delay-500">
            <h3 className="text-2xl font-bold text-center mb-6">
              無料レンタル・サービス一覧
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full" />
                  <span>トレーニングウェア（上下）</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full" />
                  <span>タオル（大・小）</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full" />
                  <span>シャワールーム完備</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full" />
                  <span>アメニティ各種</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full" />
                  <span>ミネラルウォーター</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full" />
                  <span>プロテイン（一部プラン）</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full" />
                  <span>個別ロッカー</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gold rounded-full" />
                  <span>Wi-Fi完備</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
