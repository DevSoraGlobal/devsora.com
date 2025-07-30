
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Mail } from 'lucide-react';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
    {
      question: "What is DEVSORA?",
      answer: "DEVSORA is an open-source EduTech platform designed to help learners acquire practical programming skills and collaborate on real-world projects."
    },
    {
      question: "Who can join DEVSORA?",
      answer: "Anyone passionate about learning, teaching, or building real-life tech projects can join—students, educators, and developers alike."
    },
    {
      question: "Is DEVSORA really open-source?",
      answer: "Yes! Our platform is fully open-source, allowing anyone to contribute, customize, or use our resources. [VISIT TERMS AND CONDITIONS]"
    },
    {
      question: "What programming languages and skills can I learn here?",
      answer: "You’ll find hands-on learning in popular programming languages like Python, JavaScript, Java, HTML, and CSS, along with essential job-ready skills such as web development, data science, and more. New courses are regularly added to meet next-gen industry needs, while traditional programming and computer science courses are also available to help you build a strong foundation."
    },
    {
      question: "How does collaboration work on the platform?",
      answer: "Users can join teams, participate in projects, and connect with mentors and peers to learn and build together."
    },
    {
      question: "Can I contribute to the platform’s development?",
      answer: "Absolutely! We welcome contributions from developers, designers, and educators. Check our GitHub repository for open issues and guidelines."
    },
    {
      question: "Are there any costs involved?",
      answer: "No, learning essential programming skills and accessing our core courses is completely free. For those who want to go further, we offer a range of advanced, premium courses, but our mission ensures that foundational tech education is always open and accessible to everyone."
    },
    {
      question: "What makes DEVSORA different from other EduTech platforms?",
      answer: "DEVSORA combines open-source values, practical project-based learning, and a vibrant collaborative community to empower learners for real-world success."
    },
    {
      question: "How can I stay updated with new features and opportunities?",
      answer: "Join our community, follow us on social media, or subscribe to our newsletter for the latest updates."
    }
];

export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen bg-black">
      <NavBar />
      <main className="flex-grow py-20 sm:py-28">
        <div className="container mx-auto px-4">
            <div className="text-center space-y-8">
                <h1 className="font-headline text-5xl sm:text-7xl font-bold tracking-wider uppercase">
                    Get in <span className="text-primary">Touch</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                    Have questions or want to collaborate? Email us.
                </p>
                <div className="inline-flex items-center justify-center">
                    <Link href="mailto:info@devsora.com" className="flex items-center gap-4 bg-secondary p-4 rounded-lg border border-primary/30 transition-transform hover:scale-105">
                        <Mail className="h-8 w-8 text-primary" />
                        <span className="text-2xl font-semibold text-primary-foreground tracking-wider">
                            info@devsora.com
                        </span>
                    </Link>
                </div>
            </div>

            <div className="mt-24 sm:mt-32 max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <p className="font-headline text-base font-semibold leading-7 text-primary uppercase tracking-wider">FAQ</p>
                    <h2 className="font-headline mt-2 text-4xl font-bold tracking-wider text-white sm:text-5xl uppercase">Frequently Asked Questions</h2>
                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
                        Everything you need to know about the product and billing.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border-b-2 border-primary/20">
                            <AccordionTrigger className="text-left font-headline text-2xl uppercase font-bold text-white hover:no-underline hover:text-primary data-[state=open]:text-primary py-6">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="font-normal text-lg text-muted-foreground pb-6 pt-2">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
