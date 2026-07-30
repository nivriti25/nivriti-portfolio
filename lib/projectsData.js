export const projectsData = [
  {
    id: 1,
    title: "E-Commerce Website",
    slug: "mookambika-sarees",
    project_overview: "Designed and fully deployed a live storefront for a handloom silk saree retailer, taking it from wireframe through to a production site currently serving real customers.",
    the_problem: "Traditional handloom retailers face challenges adopting complex e-commerce platforms. They need a simple, trusted digital presence that highlights product authenticity and facilitates direct, informal communication with buyers.",
    the_solution: "Built a lightweight, highly responsive web storefront with a custom bento-style catalog, a rating system, and direct social messaging integrations.",
    key_features: "- Filterable product catalogue across six weave categories (Kanchipuram, Banarasi, Patola, Organza, Paithani, Tussar)\n- PIN-protected admin dashboard for moderating and approving customer reviews before publication\n- Integrated WhatsApp and Instagram for direct customer inquiries, prioritizing a mobile-first UI",
    technologies_used: "HTML5, CSS3, JavaScript, Supabase (PostgreSQL)",
    lessons_learned: "Designed a mobile-first interface optimized for non-technical audiences, structured a review moderation database schema, and successfully deployed a production site serving live traffic.",
    github_link: "https://github.com/nivriti25",
    live_link: "https://srimookambikadevisilksareescenter.com"
  },
  {
    id: 2,
    title: "Freelancer Invoice Tracker",
    slug: "invoice-tracker",
    project_overview: "Built a full-stack, multi-tenant invoicing and payment-tracking application with a FastAPI backend and a React (Vite) + Tailwind frontend.",
    the_problem: "Freelancers lose productive hours managing invoice paperwork, tracking dynamic GST rates, sending follow-ups, and handling online payments manually across various clients.",
    the_solution: "Created an automated dashboard with an interactive PDF invoice builder, payment gateway integration, and automated scheduler cron reminders.",
    key_features: "- Dynamic PDF invoice builder with auto-calculating GST/tax totals and automated email delivery\n- Integrated Razorpay for online payments, including a mock mode for local sandbox testing\n- Automated overdue-invoice detection and reminder emails via scheduled GitHub Actions workflows",
    technologies_used: "React, Vite, Tailwind CSS, FastAPI, PostgreSQL (Supabase), Razorpay, Resend API",
    lessons_learned: "Mastered full-stack state coordination, payment processing integration, PDF rendering, automated email workflows, and CI/CD scheduled action pipelines.",
    github_link: "https://github.com/nivriti25",
    live_link: ""
  },
  {
    id: 3,
    title: "Smart Blind Stick for the Visually Impaired",
    slug: "smart-blind-stick",
    project_overview: "Engineered an assistive device using ultrasonic sensors and buzzer modules for real-time obstacle detection feedback.",
    the_problem: "Visually impaired individuals require immediate, tactile or auditory feedback to detect nearby obstacles in their walking path to avoid accidents.",
    the_solution: "Programmed an Arduino microcontroller to compute distance thresholds and trigger proportional auditory warnings.",
    key_features: "- Proximity calculation using ultrasonic rangefinders\n- Dynamic multi-level audio feedback loop that intensifies based on obstacle closeness",
    technologies_used: "Arduino, C++",
    lessons_learned: "Wrote hardware control algorithms, handled microsecond pulse timing, managed sensor calibrations, and designed ergonomic visual aid systems.",
    github_link: "https://github.com/nivriti25",
    live_link: ""
  }
];
