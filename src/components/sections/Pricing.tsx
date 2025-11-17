import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";

const plans = [
  {
    name: "スタンダード",
    price: "29,800",
    duration: "月4回",
    features: [
      "月4回（週1回）トレーニング",
      "1回60分のセッション",
      "食事アドバイス",
      "トレーニングウェア無料レンタル",
      "ミネラルウォーター提供",
    ],
    popular: false,
  },
  {
    name: "レギュラー",
    price: "49,800",
    duration: "月8回",
    features: [
      "月8回（週2回）トレーニング",
      "1回60分のセッション",
      "食事アドバイス＋毎日サポート",
      "トレーニングウェア無料レンタル",
      "プロテイン1ヶ月分プレゼント",
      "ボディ分析（月1回）",
      "LINEで24時間相談可能",
    ],
    popular: true,
    badge: "人気No.1",
  },
  {
    name: "プレミアム",
    price: "79,800",
    duration: "月12回",
    features: [
      "月12回（週3回）トレーニング",
      "1回60分のセッション",
      "完全オーダーメイドプログラム",
      "食事管理＋栄養士サポート",
      "サプリメント提供",
      "ボディ分析（月2回）",
      "整体・マッサージ付き",
      "優先予約権",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section className="py-20 md:py-32 bg-primary text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl animate-float delay-300" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 fade-in-up">
          料金プラン
        </h2>
        <p className="text-center text-white/80 mb-16 fade-in-up delay-100">
          あなたのライフスタイルに合わせたプランをご用意
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white text-primary rounded-3xl p-8 hover-lift fade-in-up delay-${(index + 2) * 100} ${
                plan.popular ? "ring-4 ring-gold shadow-gold transform md:scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gold text-primary-dark px-6 py-2 rounded-full font-bold flex items-center gap-2 shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    {plan.badge}
                  </div>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold">¥{plan.price}</span>
                  <span className="text-muted-foreground">/ 月</span>
                </div>
                <p className="text-muted-foreground mt-2">{plan.duration}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                    <span className="text-sm leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full text-lg py-6 rounded-xl transition-all duration-300 ${
                  plan.popular
                    ? "bg-gold hover:bg-gold-dark text-primary-dark"
                    : "bg-primary hover:bg-primary-dark text-white"
                }`}
              >
                このプランを選ぶ
              </Button>
            </div>
          ))}
        </div>

        {/* Special Offer */}
        <div className="max-w-4xl mx-auto bg-gold text-primary-dark rounded-3xl p-8 md:p-12 text-center fade-in-up delay-500 shadow-gold">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            初回限定特典
          </h3>
          <p className="text-xl mb-6">
            無料カウンセリング ＋ 体験トレーニング（60分）
          </p>
          <p className="text-lg mb-8">
            ※通常5,000円 → 完全無料
          </p>
          <Button
            size="lg"
            className="bg-primary-dark hover:bg-primary text-white font-bold text-xl px-16 py-8 rounded-xl transition-all duration-300 hover:scale-105"
          >
            今すぐ無料体験を予約する
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
