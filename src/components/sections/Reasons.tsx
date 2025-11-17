import { Shield, Users, Award, DollarSign, MapPin, Sparkles } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "医療の安全性",
    description: "医療資格を持つトレーナーによる安心・安全なトレーニング。健康状態を考慮した適切な運動指導を提供します。",
    image: "/images/training-session.jpg",
  },
  {
    icon: Users,
    title: "完全個室マンツーマン",
    description: "他の人の目を気にせず集中できる完全プライベート空間。あなただけのための特別な時間を提供します。",
    image: "/images/private-room.jpg",
  },
  {
    icon: Award,
    title: "シニア世代特化プログラム",
    description: "60代・70代の方でも安全に取り組める専門プログラム。無理なく続けられる運動で健康寿命を延ばします。",
    image: "/images/senior-training.jpg",
  },
  {
    icon: DollarSign,
    title: "リーズナブルな料金設定",
    description: "続けやすい価格帯で質の高いサービスを提供。初回限定特典もご用意しています。",
    image: "/images/gym-equipment.jpg",
  },
  {
    icon: MapPin,
    title: "駅近で通いやすい",
    description: "駅から徒歩5分の好立地。仕事帰りや買い物ついでに気軽に立ち寄れます。",
    image: "/images/gym-equipment.jpg",
  },
  {
    icon: Sparkles,
    title: "清潔で快適な空間",
    description: "常に清潔に保たれた空間と最新の設備。快適な環境でトレーニングに集中できます。",
    image: "/images/private-room.jpg",
  },
];

const Reasons = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 fade-in-up">
          選ばれる理由
        </h2>
        <p className="text-center text-muted-foreground mb-20 fade-in-up delay-100">
          私たちが提供する6つの価値
        </p>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`group relative bg-card rounded-3xl overflow-hidden shadow-smooth hover-lift fade-in-${index % 2 === 0 ? 'left' : 'right'} delay-${(index + 1) * 100}`}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={reason.image}
                  alt={reason.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-4">
                    <reason.icon className="w-8 h-8 text-primary-dark" />
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reasons;
