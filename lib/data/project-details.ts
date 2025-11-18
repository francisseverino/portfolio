import { StaticImageData } from 'next/image';
import { projectDetailsImages } from './project-details-images';

export interface ProjectDetail {
  id: string;
  name: string;
  title: string;
  tagline: string;
  year: number;
  heroImage: StaticImageData;
  screenshots: StaticImageData[];

  overview: {
    problem: string;
    solution: string;
    impact: string;
  };

  technologies: string[];

  learnings: {
    title: string;
    description: string;
  }[];

  details?: {
    section: string;
    content: string[];
  }[];
}

export const projectDetails: Record<string, ProjectDetail> = {
  beakr: {
    id: 'beakr',
    name: 'Beakr',
    title: 'Social/Dating App',
    tagline: 'Connect based on individuality, no judgement',
    year: 2021,
    heroImage: projectDetailsImages.beakr[0],
    screenshots: projectDetailsImages.beakr,

    overview: {
      problem:
        'Most dating and social apps feel judgmental and surface-level. People struggle to find connections that reflect who they are and what they care about.',
      solution:
        'Built an open and non-judgmental social/dating platform where users could express themselves through posts and comments, then connect with others based on genuine compatibility and individuality.',
      impact:
        'Reached more than 5,000 downloads in the first two months through a mix of ASO/SEO work, lightweight marketing experiments, and a focused social media presence.',
    },

    technologies: [
      'React Native',
      'Django',
      'PostgreSQL',
      'Firebase Firestore',
      'WebSockets',
      'AWS EC2',
      'AWS ECS',
      'AWS Load Balancer',
      'AWS RDS',
      'Redis',
      'Terraform',
    ],

    learnings: [
      {
        title: 'Real-time Architecture & Cost Optimization',
        description:
          'Implemented WebSockets with Firebase Firestore for real-time chat. Learned the hard way that Firestore costs scale with data size, not just traffic. To control costs, I wrote rules that automatically moved older conversations into PostgreSQL while keeping recent chats in Firestore for real-time performance. This hybrid setup kept the experience fast while keeping the bill under control.',
      },
      {
        title: 'UI/UX Perspective & Product Thinking',
        description:
          'Developed a real appreciation for UI and UX design. I spent hours studying popular apps and Dribbble designs, then iterating on layouts and flows until the app felt intuitive. This experience taught me that strong engineering on its own is not enough; product vision and design carry just as much weight. It permanently changed how I think about software, from pixels all the way down to the data model.',
      },
      {
        title: 'Growth & Marketing Insights',
        description:
          'Learned how much ASO, SEO, and basic marketing matter for consumer apps. Early experiments brought in more than 5,000 users, but growth slowed once I stopped pushing. The takeaway: even a solid product needs consistent marketing and storytelling or it stops growing.',
      },
      {
        title: 'The Network Effect & Cold Start Problem',
        description:
          'Saw the classic social-app cold start problem up close. Early users liked the concept but were frustrated that there were not enough people to talk to. That reaction is expected for a new network, but it still hurts. It reinforced how important it is to reach critical mass in specific niches and to keep investing in community-building, not just features.',
      },
      {
        title: 'Landing My First Job',
        description:
          'Beakr became the project that opened doors for me. Shipping a real app, getting it into the stores, and growing it to more than 5,000 users made the work concrete for hiring managers. That visibility directly helped me land my first full-time engineering role. Once that happened, I chose to step back from active marketing and treat Beakr as a completed chapter rather than an ongoing startup.',
      },
    ],

    details: [
      {
        section: 'Technical Architecture',
        content: [
          'Full-stack mobile app using React Native for cross-platform iOS and Android development',
          'Django backend with a modular architecture deployed on AWS EC2 and ECS behind a load balancer',
          'Real-time chat built with WebSockets, initially backed entirely by Firebase Firestore',
          'Custom rules that keep recent conversations in Firestore while automatically archiving older messages into PostgreSQL',
          'Redis used as a cache layer to reduce database load and improve response times',
          'Infrastructure managed with Terraform so environments can be reproduced and tracked in version control',
        ],
      },
      {
        section: 'Features & Social Experience',
        content: [
          'User profiles focused on personality and interests, with posts and comments as the main way to express identity',
          'Real-time messaging with typing indicators and read receipts',
          'Discovery system that surfaces people based on overlapping interests and engagement patterns',
          'Social features such as likes, comments, shares, and notifications that update in real time',
          'Secure user authentication via email or phone, including password reset flows',
          'Support for media uploads such as profile pictures, post photos, and basic profile verification',
        ],
      },
      {
        section: 'Go-to-Market & Growth',
        content: [
          'Optimized App Store and Google Play listings for keywords, screenshots, and conversion',
          'Set up social media marketing across Instagram, TikTok, and Twitter to collect early adopters',
          'Ran small, targeted ad campaigns to test positioning and bootstrap the initial user base',
          'Created a basic SEO presence to capture search traffic around dating and social discovery',
          'Positioned Beakr as a judgment-free alternative to traditional dating apps',
          'Reached more than 5,000 downloads in the first two months without external funding',
        ],
      },
      {
        section: 'Why Growth Plateaued',
        content: [
          'Once I accepted a full-time job, my time and focus shifted away from the app',
          'Stopped regular marketing experiments and community-building efforts',
          'Did not explore higher-leverage channels such as Reddit, niche forums, or affiliate partnerships',
          'Without sustained effort, the app stalled before reaching critical mass for a social network',
          'Walked away with a clear lesson: even good products need ongoing iteration, marketing, and founder energy to keep growing',
        ],
      },
    ],
  },

  monsai: {
    id: 'monsai',
    name: 'Monsai',
    title: 'AI Growth Companion',
    tagline: 'Bite-sized lessons for life-changing results',
    year: 2023,
    heroImage: projectDetailsImages.monsai[0],
    screenshots: projectDetailsImages.monsai,
    overview: {
      problem:
        'Most people do not learn core life skills until they feel the pain of not having them. Financial literacy, mental health, and relationships all get pushed aside. Many people do not even know helpful tools or frameworks exist, so they stay stuck in debt, anxiety, or unfulfilling relationships.',
      solution:
        'Designed an AI-powered app that delivers short daily lessons across health, wealth, mindfulness, and relationships. Combined this with AI-driven personalization, habit tracking, journaling, and a chat companion so that self-improvement fits into a busy day instead of fighting against it.',
      impact:
        'Built a production-ready AWS stack with Terraform, auto-scaling, and zero-downtime deployments that supported hundreds of users. Showed that I can take a complex idea, design the system around it, and ship a working product with real usage.',
    },

    technologies: [
      'React Native',
      'Django',
      'PostgreSQL',
      'Firebase',
      'AWS ECS',
      'AWS EC2',
      'AWS KMS',
      'AWS Load Balancer',
      'AWS ElastiCache (Redis)',
      'Terraform',
      'OpenAI API',
      'RevenueCat',
      'NewRelic',
      'Sentry',
      'BugSnag',
    ],

    learnings: [
      {
        title: 'Knowledge Gaps & Preventative Learning',
        description:
          'Saw how much pain comes from never being exposed to practical knowledge in the first place. By packaging ideas into small, structured lessons, you can give people tools before a crisis, not just after it. That idea shaped how I think about education in apps.',
      },
      {
        title: 'Smart Infrastructure Choices',
        description:
          'Invested early in a solid AWS setup with Terraform, auto-scaling, and zero-downtime deploys, even though the user base started small. This made later changes much smoother and gave me a strong foundation in production-ready practices.',
      },
      {
        title: 'AI Personalization at Scale',
        description:
          'Used the OpenAI API with embeddings and sentence similarity to connect user goals to relevant content modules. The technique is simple but powerful: users answer a few questions, and the system pieces together a path that feels tailored rather than generic.',
      },
      {
        title: 'Revenue & Business Model Trade-offs',
        description:
          'Chose RevenueCat for subscriptions instead of building custom payment logic. This came with a revenue share but removed an entire class of edge cases and maintenance work. It reinforced the idea that not every problem should be solved from scratch.',
      },
      {
        title: 'Personal Growth Through Building',
        description:
          'I used Monsai myself during a rough patch and felt the benefit of the tools and prompts I had built. That experience made the project feel less like a demo and more like a product that actually helps people, including me.',
      },
      {
        title: 'Marketing is Non-Optional',
        description:
          'Despite positive feedback and real usage, Monsai only grew to hundreds of users. I put almost all of my energy into product and infrastructure and very little into marketing, community, or distribution. The clear lesson: a strong product with weak marketing rarely breaks out, while a decent product with thoughtful distribution often does.',
      },
    ],

    details: [
      {
        section: 'Core Features',
        content: [
          'Daily bite-sized lessons across more than ten life categories such as finances, health, relationships, mindfulness, and career',
          'AI-powered personalization that matches user goals to relevant modules and lessons',
          'Habit tracker with streaks and simple visual progress',
          'Digital journal with daily prompts for reflection and review',
          'Assessments including Big Five personality, values identification, and Wheel of Life analysis',
          'AI chat companion that guides users through reflection and self-discovery',
          'Curated learning paths that mix lessons, quizzes, tips, and resources',
          'Subscription monetization implemented with RevenueCat',
        ],
      },
      {
        section: 'Technical Architecture',
        content: [
          'React Native frontend for iOS and Android with a shared, consistent user experience',
          'Django REST API responsible for authentication, business logic, and personalization decisions',
          'Firebase used for real-time notifications and initial data synchronization',
          'AWS EC2 and ECS with Docker for containerized deployments',
          'AWS Load Balancer and auto-scaling groups to handle variable traffic',
          'PostgreSQL as the primary data store for lessons, progress, and journal entries',
          'Redis via AWS ElastiCache for caching frequently accessed data',
          'Terraform for infrastructure as code so environments are reproducible and reviewable',
          'NewRelic, Sentry, and BugSnag wired in for monitoring, performance tracking, and error reporting',
        ],
      },
      {
        section: 'Personalization Engine',
        content: [
          'Users answer reflection questions through an AI chat flow',
          'OpenAI processes responses to extract themes, goals, and pain points',
          'The system suggests milestones and modules based on what the user shared',
          'Sentence embeddings link those suggestions back to specific content items',
          'Each user gets a learning path built from the modules that match their situation',
          'Recommendations update over time as users complete lessons and share feedback',
        ],
      },
      {
        section: 'Growth Strategy & Challenges',
        content: [
          'Early growth came from word of mouth and a small social media presence, leading to hundreds of signups',
          'Set up a subscription model with RevenueCat but did not run structured experiments to optimize it',
          'Did not invest in channels such as paid ads, Reddit, forums, or partnerships that could have expanded reach',
          'Skipped building a long-term content marketing engine around personal growth topics',
          'Focused almost entirely on shipping features and infrastructure, not on the marketing and growth loop',
          'Eventually shifted my focus to my day job, which meant Monsai stopped getting the attention it needed to keep growing',
          'Came away with a simple rule of thumb: product, distribution, and community all need attention if you want an app to grow beyond the early adopters.',
        ],
      },
    ],
  },

  autove: {
    id: 'autove',
    name: 'Autove',
    title: 'Auto-Parts Locator',
    tagline: 'Find parts and mechanics with a single VIN scan',
    year: 2019,
    heroImage: projectDetailsImages.autove[0],
    screenshots: projectDetailsImages.autove,
    overview: {
      problem:
        'Car owners often have to dig through multiple sites and phone calls just to find basic information about their vehicles. Whether it is paint codes, compatible parts, or trustworthy nearby mechanics, the process is slow and fragmented.',
      solution:
        'Built a mobile app that lets users scan a vehicle VIN and immediately see relevant information such as part specs, color codes, pricing, and a list of nearby mechanics pulled from Google Maps and Yelp APIs.',
      impact:
        'This was my first end-to-end mobile app in production. It showed that I could integrate several third-party APIs, design a complete user flow, and ship a working product to the app stores.',
    },

    technologies: [
      'React Native',
      'Laravel',
      'MySQL',
      'Firebase',
      'Google Maps API',
      'Yelp API',
    ],

    learnings: [
      {
        title: 'Full Product Ownership',
        description:
          'First experience taking an idea all the way from a rough sketch to a shipped app. I handled design, development, testing, deployment, and the app store submission process.',
      },
      {
        title: 'API Integration Complexity',
        description:
          'Integrating VIN decoding, Google Maps, and Yelp APIs gave me a real education in dealing with rate limits, timeouts, and messy data coming from external providers.',
      },
      {
        title: 'Mobile-First Design Thinking',
        description:
          'Designing directly for mobile screens forced me to think about constraints such as limited space, connectivity issues, and touch-first interactions. It demanded different choices than a typical web-first project.',
      },
      {
        title: 'MVP vs. Perfect Product',
        description:
          'Shipped with a focused feature set that covered VIN scanning, parts lookup, and mechanic search instead of waiting until everything felt perfect. That decision delivered real user feedback much earlier and helped me separate nice-to-have ideas from what actually mattered.',
      },
    ],

    details: [
      {
        section: 'Core Features',
        content: [
          'VIN scanning through the device camera',
          'Vehicle identification and specification lookup from the scanned VIN',
          'Paint and color code lookup for the specific vehicle',
          'Parts catalog and basic pricing information',
          'Google Maps integration to show nearby mechanics on a map',
          'Yelp API integration to display ratings and reviews for mechanics',
          'Favorites and bookmarking so users can quickly revisit important entries',
        ],
      },
      {
        section: 'Technical Stack',
        content: [
          'React Native for building a single codebase that runs on both iOS and Android',
          'Laravel backend that coordinates data processing, business logic, and external API calls',
          'MySQL database for storing vehicle specs, parts, and user data',
          'Firebase for authentication and push notifications',
          'Google Maps API for location search and map rendering',
          'Yelp API for pulling mechanic ratings and review data',
          'Custom VIN decoding logic to connect VINs to the right vehicle metadata',
        ],
      },
    ],
  },
};
