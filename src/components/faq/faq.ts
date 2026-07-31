import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-faq',
  imports: [],
  templateUrl: './faq.html',
  styleUrl: './faq.css',
})
export class Faq {
  readonly faqItems = [
    {
      question: 'What technologies do you work with?',
      answer: 'I mainly work with Angular, TypeScript, JavaScript, HTML5, CSS3, Bootstrap and Git/GitHub.'
    },
    {
      question: 'Do you build responsive websites?',
      answer: 'Yes. All my projects are designed to work smoothly across desktop, tablet and mobile devices.'
    },
    {
      question: 'Do you have experience with Angular?',
      answer: 'Yes. I have built multiple Angular applications using standalone components, routing, APIs and reusable UI components.'
    },
    {
      question: 'Can I see your previous projects?',
      answer: 'Absolutely. You can find my projects in the Portfolio section along with GitHub repositories and live demos.'
    },
    {
      question: 'Are you available for internships or freelance work?',
      answer: 'Yes. I am open to internship opportunities, freelance projects and junior front-end developer roles.'
    },
    {
      question: 'How can I contact you?',
      answer: 'You can reach me through the Contact section, LinkedIn or GitHub.'
    }
  ];

  private readonly openQuestionIndex = signal<number | null>(0);

  toggleQuestion(index: number): void {
    this.openQuestionIndex.update((currentIndex) => currentIndex === index ? null : index);
  }

  isQuestionOpen(index: number): boolean {
    return this.openQuestionIndex() === index;
  }
}
