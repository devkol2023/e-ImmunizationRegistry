import { Component } from '@angular/core';

@Component({
  selector: 'app-faq-section',
  templateUrl: './faq-section.component.html',
  styleUrl: './faq-section.component.scss'
})
export class FaqSectionComponent {
  facts = [
    { title: "Jamaica’s Immunization Schedule",
      imageUrl: '/images/immunization-schedule.jpg',
      description: "Your child isn’t fully vaccinated against a disease until after they get all recommended doses. The scheduled vaccines recommended are carefully timed to provide protection to children when they are most vulnerable to diseases, and when the vaccines will produce the strongest response from the child’s immune system. It is therefore very important to follow the national schedule, keep vaccination appointments and get vaccinated on time.", expanded: false },
    
    { title: "Is getting my child vaccinated before they go to school, nursery, or daycare a must?", description: "The law – Jamaica’s Immunization Regulations of 1986 (amended 2013) – requires that all children under age 7 years of age must be adequately vaccinated before registration for school, including day cares, nurseries and basic schools. Getting your child vaccinated before they come in contact with certain diseases at school, on the playground, and elsewhere in the community or when they visit new places makes sense. Vaccine-preventable diseases (VPDs) can spread very rapidly through the school community and have devastating effects on our population if most, if not all children, are not adequately immunized. At least 95% of children (or 19 out of 20) must be adequately vaccinated to prevent or interrupt the rapid spread of VPDs if there are cases present in the population. The remaining 5% of children account for those who are not eligible to get vaccinated for medical reasons (e.g. immunocompromised, known severe vaccine reactions).", expanded: false },

    { title: "Benefits of Childhood Immunization", description: "Saves lives and prevents severe illness, disability and death caused by harmful germs. Reduces health costs for your family by preventing childhood illnesses with doctor’s visits and hospitalization. Reduces costs to Jamaica by preventing outbreaks that are expensive to control. Reduces frequent illnesses and associated loss of days from school and work. For example, a child who contracts measles may have to stay home for up to three weeks, meaning time out of school and requiring a parent to miss work.", expanded: false },

    { title: "Who should take charge of my child’s immunization journey?", description: "Ultimately, parents and caregivers must decide on whether or not to get their children vaccinated. Visit your health provider to determine if your child is adequately vaccinated based on Jamaica’s immunization schedule. Importantly, school operators and health workers are responsible along with the parents and caregivers to ensure that every child’s immunization card or Child Health & Development Passport is up-to-date with the required vaccines.", expanded: false },

    { title: "What’s the process to get my child vaccinated in Jamaica?", description: "Take the child health & development passport or immunization card to your child or ward’s doctor or nearest health centre to check if he/she is adequately vaccinated.", expanded: false }
  ];

toggleFact(fact: any) {
    fact.expanded = !fact.expanded;
}
}
