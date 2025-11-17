import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Mail, ArrowRight } from "lucide-react";

const Access = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 fade-in-up">
          アクセス・店舗情報
        </h2>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          {/* Store Info */}
          <div className="space-y-8 fade-in-left delay-200">
            <div>
              <h3 className="text-3xl font-bold mb-8">店舗情報</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">住所</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      〒150-0001<br />
                      東京都渋谷区神宮前1-2-3<br />
                      フィットネスビル3F
                    </p>
                    <p className="text-sm text-gold mt-2">
                      ※ 渋谷駅から徒歩5分
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">電話番号</h4>
                    <a 
                      href="tel:03-1234-5678"
                      className="text-muted-foreground hover:text-gold transition-colors text-lg"
                    >
                      03-1234-5678
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">営業時間</h4>
                    <p className="text-muted-foreground">
                      平日：9:00 - 22:00<br />
                      土日祝：9:00 - 20:00<br />
                      定休日：毎週水曜日
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">メールアドレス</h4>
                    <a 
                      href="mailto:info@example-gym.jp"
                      className="text-muted-foreground hover:text-gold transition-colors"
                    >
                      info@example-gym.jp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gold/10 border-2 border-gold rounded-2xl p-6">
              <h4 className="font-bold mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-gold" />
                アクセス
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• JR渋谷駅 東口より徒歩5分</li>
                <li>• 東京メトロ副都心線 B3出口より徒歩3分</li>
                <li>• 駐車場：提携パーキングあり（割引適用）</li>
              </ul>
            </div>
          </div>

          {/* Map */}
          <div className="fade-in-right delay-300">
            <div className="bg-muted rounded-3xl overflow-hidden shadow-smooth h-full min-h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.747658355331!2d139.70273687655492!3d35.66573917258472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ca8bf6c84ad%3A0x84915e5a9e95fb2e!2z5p2x5Lqs6YO95riL6LC35Yy6!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "500px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="店舗地図"
              />
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="max-w-4xl mx-auto fade-in-up delay-400">
          <div className="relative bg-gradient-to-br from-gold via-gold-dark to-gold text-primary-dark rounded-3xl p-12 md:p-16 text-center overflow-hidden shadow-gold">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float" />
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-float delay-300" />
            </div>

            <div className="relative z-10">
              <h3 className="text-3xl md:text-5xl font-bold mb-6">
                まずは無料カウンセリングから
              </h3>
              <p className="text-xl md:text-2xl mb-8">
                あなたの目標や悩みをお聞かせください
              </p>
              <p className="text-lg mb-10 opacity-90">
                ※ 無理な勧誘は一切いたしません<br />
                お気軽にご相談ください
              </p>
              
              <Button
                size="lg"
                className="bg-primary-dark hover:bg-primary text-white font-bold text-xl px-16 py-10 rounded-2xl transition-all duration-300 hover:scale-105 shadow-2xl animate-pulse-glow"
              >
                今すぐ無料カウンセリングを予約
                <ArrowRight className="ml-3 w-7 h-7" />
              </Button>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>お電話でも受付中</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>当日予約OK</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Access;
