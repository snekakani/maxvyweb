import {
  Heart,
  Users,
  GraduationCap,
  BookOpenCheck,
  Briefcase,
  type LucideIcon,
} from 'lucide-react';

export type CareerPage = {
  slug: string;
  name: string;
  path: string;
  icon: LucideIcon;
  tagline: string;
  hero: string;
  benefits: string[];
  gallery: string[];
  testimonials: { quote: string; name: string; role: string }[];
  positions: { title: string; location: string; type: string }[];
};

export const careerPages: CareerPage[] = [
  {
    slug: 'life-at-maxvy',
    name: 'Life at MAXVY',
    path: '/careers/life-at-maxvy',
    icon: Heart,
    tagline: 'A work culture that promotes individual growth and brings the best out of every employee.',
    hero: 'MAXVY provides a work culture which promotes individual growth and brings the best out of the employee. Employees are encouraged to share their knowledge, making for a pleasant work environment. We have an organizational structure which allows the employee to advance his/her career via the technical career ladder or managerial career ladder. A peer review based performance management system is used to recognize top performing employee. Research and Development programs are in place to increase employee awareness and broaden their skill set.',
    benefits: [
      'Competitive Salary',
      'Performance Based Bonus',
      'Health Care Assistance',
      'Awards & Recognition',
      'Educational Assistance',
    ],
    gallery: [],
    testimonials: [],
    positions: [],
  },
  {
    slug: 'work-culture',
    name: 'Work Culture',
    path: '/careers/work-culture',
    icon: Users,
    tagline: 'A culture of passion for technology solutions that impact businesses.',
    hero: 'The people are the culture. We encourage a culture of passion for technology solutions that impact businesses. We also make sure that our people pursue their individual passions. Working with us means you get an in-depth understanding of a range of industries and emerging technologies that help us build solutions that are futuristic and impactful. More importantly, the experience of being at Maxvy Technologies may help you evolve as a person toward enjoying a more fulfilling life.',
    benefits: [],
    gallery: [],
    testimonials: [],
    positions: [],
  },
  {
    slug: 'internship-program',
    name: 'Internship Program at Tirunelveli',
    path: '/careers/internship-program',
    icon: GraduationCap,
    tagline: 'A hands-on internship opportunity for freshers to gain practical work experience.',
    hero: `PURPOSE:
An internship is an opportunity for a fresher's to secure first hand and practical work experience under the guidance of a qualified and experienced Supervisor/Mentor. It also aims at active participation in the learning process through experimentation and putting into practice the knowledge acquired in the classrooms from virtual work environment at their home. For the larger benefit of the electronics background fresher's community and with a view to enrich the implementation of its various programmes, MAXVY has decided to notify these "Internship Guidelines", to provide a framework for engagement of Interns for a limited period.

ABOUT MAXVY:
MAXVY means MAXimum Value for You. MAXVY is doing R&D in semiconductor and embedded domain to develop RTL Design and Verification IP's for their customer in India as well as outside India. MAXVY's focus domains are Automotive, IoT, Mobile and Mobile influence market verticals. MAXVY is member of MIPI organization and involved to solve future technologies needs.

DEFINITIONS:
Unless the context requires otherwise, the following words shall have the meaning attributed to them in these guidelines:-

"Applicant on Internship" is a person, who wants to work for mutual benefit with MAXVY on a full-time basis with the sole purpose of enriching his knowledge in the area of expertise.
"Area of Expertise" means the subject or area in which the Applicant possesses expertise and wants to enrich it further

ELIGIBILITY:
Indian students from recognized universities in India who have secured at least 70% marks in the degree or certificate examination B.E/ B.Tech, M.E/ M.Tech and at least 75% in X and XII classes shall be eligible .
Note: - The candidates who are completed the academic course will be eligible.

No history of arrears in graduation
Possessing minimum qualifications as above shall not guarantee internship in MAXVY. Candidates having exposure in the area of intended internship with good academic background and having higher qualification, based on need shall be given preference.

DURATION OF INTERNSHIP:
Internship would be offered once in a three months per year. The minimum duration of internship shall be of three months, extendable up to one year, depending on the performance of the candidate, requirement of MAXVY and time the intern is willing to spend with MAXVY.

The areas of Internship are as follows:-

S.No    Area of Internship    Number of Position
1    IP/SoC Verification with Verilog, SV, UVM Skill set    3
2    SoC Verification with Python/cocotb Skill set    2
3    RTL Design – Verilog, Synthesis, FPGA    2
4    Embedded Design Firmware/Device Driver– C, C++, Embedded C    2
5    Others – HR/Marketing/Sales/Web Development    1

PLACE OF INTERNSHIP:
The internship will be offered at MAXVY Tirunelveli Office.

SELECTION:
The Interns will be shortlisted and selected by the respective Team for their concerned domain.
For selection of interns, personal or Phone/Skype/Zoom Interview, will be conducted. No TA/DA shall be paid to candidates for attending the personal interview.
List of selected candidates would be informed them through phone call/ personal email/sms.

CODE OF CONDUCT:
The Intern appointed by MAXVY shall observe the following Code of Conduct, which shall include but not be limited to, the following:

The Intern shall follow the rules and regulations, which are in general applicable to employees of MAXVY.
The Intern shall follow the confidentiality protocol of MAXVY and shall not reveal to any person or organization confidential information relating to MAXVY, its work and policies.
The Intern shall not claim any intellectual property right, of work done at MAXVY and has to strictly maintain the confidentiality of MAXVY's intellectual property. Any violation/infringement will be viewed adversely against the Intern to which he/she belongs and may invite appropriate action.
The students concerned shall have no claim whatsoever on the results of the project work. MAXVY retains all intellectual property rights in patents, designs,software copyright (source code) and publications, if any, that may be generated during the course of project work.
Interns may, with the prior permission of MAXVY, present their work to academic bodies and at seminars/conferences. However, even for this purpose information that is confidential to MAXVY cannot be revealed under any circumstances.
Any papers and documents written and/or published by the Intern should carry the caveat that the views are the personal views of the Intern and do not represent or reflect the views of MAXVY.
Interns will follow the advice given to them by MAXVY regarding representations to third parties.
In general, an Intern may not interact with or represent MAXVY vis- à-vis third parties. However, some Interns may specifically be authorized to interact with third parties on behalf of MAXVY depending on the nature of their roles and responsibilities.
No Intern shall interact with or represent MAXVY to the media (print and electronic).
Interns will conduct themselves professionally in their relationship with MAXVY and the public in general.
Interns are required to be present at MAXVY Tirunelveli Office from 09.00 am to 06.00 pm, unless otherwise permitted by the Supervisor/Mentor in writing.
The Intern has to make his/her own accommodation during the internship.
The Intern has to make his/her own insurance policy during the internship
In the event of unsatisfactory performance, the concerned Intern may be advised by MAXVY to discontinue the project work, before the completion of the term of internship.

PLACEMENT:
Every batch of Interns or individual Interns, as the case may be, will have a Technical Project Supervisor/Mentor from MAXVY.
The internship is neither an employment nor an assurance of an employment with MAXVY.

SUBMISSION OF REPORT/PAPER:
Work plans and work schedules shall be developed by Supervisor/Mentor and the Interns shall invariably adhere to the same.
The Interns will be required to submit a Report on the work undertaken at the end of the internship to MAXVY.
The students must furnish a "No–Demand Certificate" to MAXVY in the prescribed format after completion of project work along with a soft copy and hard copy of the project report.

TOKEN REMUNERATION:
First three month of internship, MAXVY won't provide remuneration, Extended period of internship, remuneration will provide as below
A token remuneration of Rs.10,000/- per month would be paid to an Intern, subject to satisfactory performance, duly certified by his Supervisor/Mentor.
The remuneration shall be paid after the completion of internship on submission of Report duly accepted by MAXVY.

CERTIFICATE OF INTERNSHIP:
Certificates will be issued by MAXVY to the Interns on the completion of internship and submission of Report duly countersigned and accepted by the Management Team of MAXVY.

TERMINATION:
MAXVY may disengage an Intern if MAXVY is of the view that the services of the Intern are no more required.
MAXVY may terminate the services of the Intern at any time without assigning any reasons and with immediate effect.
If the Intern decides to disengage from MAXVY, he/she should provide 2 weeks prior notice. During extended period of internship, he/she should provide 1 month prior notice.
Upon termination, the Intern must hand over to MAXVY, any papers, equipment's or other assets which might have been given to the Intern by MAXVY in course of his project work with MAXVY. This will include any badges or ID Cards which may have been issued to the Intern.
If it comes to the notice of MAXVY that the person whose services have been terminated by MAXVY continues to act in a manner which gives an impression that he is still working for MAXVY, MAXVY shall be free to take appropriate legal action against such person.
The Management Team of MAXVY may initiate appropriate action against erring Intern and decision of the Management Team of MAXVY would be final and binding on the Intern.

POWER TO REMOVE DIFFICULTIES:
The Management team of MAXVY shall have the power to remove any difficulty which may come in the way of the implementation of these guidelines.`,
    benefits: [],
    gallery: [],
    testimonials: [],
    positions: [],
  },
  {
    slug: 'training-program',
    name: 'MAXVY Training Program',
    path: '/careers/training-program',
    icon: BookOpenCheck,
    tagline: 'Bridging the gap between academia and industry with hands-on VLSI and Embedded training.',
    hero: `Maxvy Training Program(MTP) helps to make footpath for fresh graduates to enter VLSI / Embedded field by the hands on exposure professionals. We also provide training on various industry standard protocol with a nominal fee.

Advance Design Verification Training cum Internship (DV-500) - 90 days
Advance System Verilog Training (SV-200) - 45 days
Universal Verification Methodology Training (UVM-200) - 45 days
Industry Standard Protocol (ISP-100) - 45 days

If you would like to join MAXVY Training Program, Please write the mail to hr@maxvytech.com`,
    benefits: [],
    gallery: [],
    testimonials: [],
    positions: [],
  },
  {
    slug: 'current-openings',
    name: 'Current Openings',
    path: '/careers/current-openings',
    icon: Briefcase,
    tagline: 'Open roles across RTL, verification, physical design and software.',
    hero: 'We are hiring across the silicon stack. Browse current openings and apply with your resume — we move fast on strong candidates.',
    benefits: [
      'Fast and respectful process',
      'Technical interviews, no brainteasers',
      'Transparent compensation',
      'Hybrid and remote options',
      'Relocation support',
      'Global team exposure',
    ],
    gallery: [
      'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
      'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
      'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg',
      'https://images.pexels.com/photos/3184445/pexels-photo-3184445.jpeg',
    ],
    testimonials: [
      { quote: 'From first call to offer in two weeks. Respectful and technical throughout.', name: 'Priya N.', role: 'Verification Engineer' },
      { quote: 'The interview felt like a design discussion, not an interrogation.', name: 'Surya T.', role: 'RTL Engineer' },
    ],
    positions: [
      { title: 'Senior RTL Engineer — DDR5', location: 'Tirunelveli / Remote', type: 'Full-time' },
      { title: 'Verification Engineer — MIPI', location: 'Tirunelveli', type: 'Full-time' },
      { title: 'Physical Design Engineer', location: 'Tirunelveli', type: 'Full-time' },
      { title: 'RISC-V Architect', location: 'Remote', type: 'Full-time' },
      { title: 'Software Engineer — Embedded', location: 'Tirunelveli / Remote', type: 'Full-time' },
      { title: 'RTL Design Intern', location: 'Tirunelveli', type: 'Internship' },
      { title: 'Verification Intern', location: 'Tirunelveli', type: 'Internship' },
    ],
  },
];

export function findCareerPage(slug: string) {
  return careerPages.find((c) => c.slug === slug);
}