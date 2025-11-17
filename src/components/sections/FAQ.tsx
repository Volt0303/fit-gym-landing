import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "運動経験がなくても大丈夫ですか？",
    answer: "もちろん大丈夫です。お客様の体力レベルに合わせて、無理のないプログラムを組み立てます。運動未経験の方でも安心して始められるよう、基礎から丁寧に指導いたします。",
  },
  {
    question: "何歳から通えますか？シニアでも大丈夫？",
    answer: "年齢制限はございません。60代、70代の方も多く通われています。医療資格を持つトレーナーが、お客様の健康状態を考慮しながら安全にトレーニングを進めますので、ご安心ください。",
  },
  {
    question: "持病があっても通えますか？",
    answer: "持病の種類や程度にもよりますが、医師の許可があれば可能です。提携医療機関との連携システムもございますので、まずは無料カウンセリングでご相談ください。",
  },
  {
    question: "どのくらいの期間で効果が出ますか？",
    answer: "個人差はありますが、多くの方が2〜3ヶ月で体の変化を実感されています。定期的なボディ分析で進捗を確認しながら、モチベーションを維持できるようサポートいたします。",
  },
  {
    question: "食事制限は厳しいですか？",
    answer: "無理な食事制限は行いません。お客様のライフスタイルに合わせた、続けやすい食事アドバイスを提供します。楽しみながら健康的な食習慣を身につけていただけます。",
  },
  {
    question: "トレーニングウェアを持っていないのですが？",
    answer: "トレーニングウェアは無料でレンタルしています。シューズのみご持参いただければ、手ぶらで通っていただけます。お仕事帰りや買い物ついでにも気軽にお越しください。",
  },
  {
    question: "予約の変更やキャンセルはできますか？",
    answer: "前日までのご連絡であれば、無料で変更・キャンセルが可能です。急な予定変更にも柔軟に対応いたしますので、お気軽にご相談ください。",
  },
  {
    question: "入会金や契約期間の縛りはありますか？",
    answer: "入会金は22,000円（税込）です。契約期間の縛りはなく、月単位でのご契約となります。ライフスタイルの変化に合わせて、柔軟にプラン変更も可能です。",
  },
];

const FAQ = () => {
  return (
    <section className="py-20 md:py-32 bg-muted">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 fade-in-up">
          よくあるご質問
        </h2>
        <p className="text-center text-muted-foreground mb-16 fade-in-up delay-100">
          お客様からよくいただく質問をまとめました
        </p>

        <div className="max-w-4xl mx-auto fade-in-up delay-200">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl px-8 shadow-smooth border-none"
              >
                <AccordionTrigger className="text-left text-lg font-semibold hover:text-gold transition-colors py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-16 fade-in-up delay-300">
          <p className="text-lg mb-6">他にご質問がある方はお気軽にお問い合わせください</p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary-dark text-white font-bold text-lg px-12 py-6 rounded-xl transition-all duration-300 hover:scale-105"
          >
            無料カウンセリングで相談する
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
