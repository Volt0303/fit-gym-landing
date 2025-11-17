import { Award, GraduationCap, Heart, Users } from "lucide-react";

const Trainer = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 fade-in-up">
          トレーナー紹介
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
          {/* Trainer Image */}
          <div className="fade-in-left delay-200">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-gold to-gold-light rounded-3xl blur-xl opacity-30 animate-pulse-glow" />
              <img
                src="/images/trainer-profile.jpg"
                alt="トレーナープロフィール"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>

          {/* Trainer Info */}
          <div className="space-y-8 fade-in-right delay-300">
            <div>
              <h3 className="text-3xl font-bold mb-2">山田 太郎</h3>
              <p className="text-xl text-gold font-semibold">代表トレーナー</p>
            </div>

            {/* Qualifications */}
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">保有資格</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• 理学療法士</li>
                    <li>• NSCA認定パーソナルトレーナー</li>
                    <li>• 健康運動指導士</li>
                    <li>• 栄養コンシェルジュ2つ星</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">経歴</h4>
                  <ul className="text-muted-foreground space-y-1">
                    <li>• 総合病院リハビリテーション科 勤務10年</li>
                    <li>• 大手パーソナルジム トレーナー歴5年</li>
                    <li>• 延べ5,000名以上の指導実績</li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">メッセージ</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    医療の現場で培った知識と経験を活かし、一人ひとりの体の状態に合わせた安全で効果的なトレーニングを提供します。年齢や体力に不安がある方でも安心してご相談ください。あなたの健康的な毎日をサポートさせていただきます。
                  </p>
                </div>
              </div>
            </div>

            {/* Medical Collaboration */}
            <div className="bg-gold/10 border-2 border-gold rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary-dark" />
                </div>
                <div>
                  <h4 className="font-bold mb-2">医療連携システム</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    提携医療機関との連携により、持病をお持ちの方でも医師の許可のもと安全にトレーニングを開始できます。定期的な健康チェックも実施しています。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trainer;
