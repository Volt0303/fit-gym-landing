import { Clock } from "lucide-react";

const Testimonials = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 fade-in-up">
          お客様の声
        </h2>
        <p className="text-center text-muted-foreground mb-16 fade-in-up delay-100">
          実際に通われているお客様の変化
        </p>

        {/* Coming Soon Card */}
        <div className="max-w-4xl mx-auto fade-in-up delay-200">
          <div className="bg-gradient-to-br from-primary via-primary-dark to-primary text-white rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow">
                <Clock className="w-10 h-10 text-gold" />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                準備中
              </h3>
              
              <p className="text-xl md:text-2xl mb-8 text-white/90">
                オープン後、お客様の素晴らしい変化をご紹介予定
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-4xl font-bold text-gold mb-2">Before</div>
                  <p className="text-white/80">トレーニング前の写真</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-4xl font-bold text-gold mb-2">After</div>
                  <p className="text-white/80">トレーニング後の変化</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <div className="text-4xl font-bold text-gold mb-2">Voice</div>
                  <p className="text-white/80">お客様のリアルな声</p>
                </div>
              </div>

              <div className="mt-12 bg-gold/20 border-2 border-gold rounded-2xl p-6">
                <p className="text-lg">
                  ※ オープン記念として、初期メンバーの方には特別割引をご用意しています
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
          <div className="text-center fade-in-up delay-300">
            <div className="text-5xl font-bold text-gold mb-2">5,000+</div>
            <p className="text-muted-foreground">延べ指導実績</p>
          </div>
          <div className="text-center fade-in-up delay-400">
            <div className="text-5xl font-bold text-gold mb-2">98%</div>
            <p className="text-muted-foreground">お客様満足度</p>
          </div>
          <div className="text-center fade-in-up delay-500">
            <div className="text-5xl font-bold text-gold mb-2">3ヶ月</div>
            <p className="text-muted-foreground">平均効果実感期間</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
