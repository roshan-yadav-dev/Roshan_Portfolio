export const caseStudiesData = [
  {
    id: 'offerjob-case-study',
    title: 'OfferJob',
    summary: 'AI-powered hiring experience designed to reduce friction between talent discovery and recruiter evaluation.',
    problem: 'Legacy hiring workflows were slow, incomplete, and difficult to navigate from both the candidate and recruiter side.',
    targetUsers: 'Job seekers, recruiters, and hiring managers.',
    userNeeds: [
      'Clear visibility into open roles',
      'Relevant candidate-job matching',
      'Low-friction application workflow',
      'Focused recruiter prioritization'
    ],
    userJourney: [
      'Candidate discovers role and reviews responsibilities.',
      'Application context is matched to experience and skills.',
      'Recruiter reviews the candidate profile and fit.',
      'Decision and next-stage workflow are made more efficiently.'
    ],
    designDecisions: [
      'Simplified information hierarchy to reduce cognitive overload.',
      'Clear role and candidate states to support decision-making.',
      'Dashboard structure designed for fast scanning and focused action.'
    ],
    interfaceDesign: 'The interface blends product clarity and utility: role cards, profile summaries, and action-driven dashboards with a clean visual hierarchy.',
    figmaToReact: 'I translated design intent into reusable React components and structured content blocks that keep the interface consistent while scaling to product complexity.',
    technicalChallenges: [
      'Balancing product clarity with rich candidate data',
      'Designing reusable patterns for different user roles',
      'Ensuring the UI remained responsive across dense information layouts'
    ],
    futureImprovements: [
      'Add candidate status management and role-specific workflow states.',
      'Refine matching explanations to help recruiters understand AI suggestions.',
      'Improve dashboard personalization for candidate and recruiter engagement.'
    ]
  },
  {
    id: 'codequest-case-study',
    title: 'Code Quest',
    summary: 'Learning platform focused on user motivation, progression, and structured skill development through a quest-based workflow.',
    problem: 'A learning product needs to remain engaging, progressive, and easy to understand so users continue building skills consistently.',
    targetUsers: 'Students and early-career learners interested in coding practice.',
    userNeeds: [
      'Clear learning roadmap',
      'Motivating progress feedback',
      'Task clarity and structured challenge flow',
      'Low-friction onboarding'
    ],
    userJourney: [
      'User lands on a quest or challenge path.',
      'Progress and skill milestones are visible in context.',
      'User completes a challenge and receives reinforcement.',
      'The system builds momentum toward the next learning milestone.'
    ],
    designDecisions: [
      'Use gamified progress cues without overcomplicating the UI.',
      'Keep educational flows structured and readable at a glance.',
      'Prioritize clarity of progression so learners know what to do next.'
    ],
    interfaceDesign: 'The product uses accessible cards, status states, and clean progression patterns to keep focus on learning tasks and momentum.',
    figmaToReact: 'The design system is built to map directly into reusable cards, stat blocks, and challenge layouts that remain consistent as the product grows.',
    technicalChallenges: [
      'Designing clear hierarchy for educational content',
      'Matching progress states to intuitive user expectations',
      'Keeping product interactions lightweight and responsive'
    ],
    futureImprovements: [
      'Add more detailed challenge analytics and milestone tracking.',
      'Introduce streak and achievement personalization.',
      'Expand challenge categories and adaptive learning recommendations.'
    ]
  },
  {
    id: 'mini-erp-crm-case-study',
    title: 'Mini ERP/CRM',
    summary: 'Operations dashboard concept focused on business workflow clarity, lead management, and structured customer operations.',
    problem: 'Teams need a unified system for operational tasks without a cluttered interface or overly complex enterprise tooling.',
    targetUsers: 'Operations teams, customer relationship teams, and small-business stakeholders.',
    userNeeds: [
      'Fast summary of operational status',
      'Actionable data visibility',
      'A clean interface for workflow coordination',
      'Simple systems for team tasks and record management'
    ],
    userJourney: [
      'User opens the dashboard and scans operational metrics.',
      'They review key entities such as leads, tasks, and records.',
      'They identify actions requiring follow-up and task ownership.',
      'The workflow moves toward resolution with a clear task list.'
    ],
    designDecisions: [
      'Prioritize task flow and status visibility over dense data presentation.',
      'Use a modular grid to support product growth without visual clutter.',
      'Design around business workflow clarity and operational actionability.'
    ],
    interfaceDesign: 'The UI is built around dashboard blocks, structured entity views, and clear action sequences so teams can understand status and prioritize next steps.',
    figmaToReact: 'I translate the design into reusable modules for cards, summaries, and list views so the same design system can support several business workflows.',
    technicalChallenges: [
      'Balancing business complexity with usability',
      'Structuring data and actions for multiple operational views',
      'Keeping the interface simple enough for regular day-to-day work'
    ],
    futureImprovements: [
      'Add deeper reporting and team-level analytics.',
      'Expand workflow automation and role-based permissions.',
      'Refine dashboard personalization for different departments.'
    ]
  }
];
