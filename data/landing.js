import {
  BarChart3,
  Receipt,
  PieChart,
  CreditCard,
  Globe,
  Zap,
  Shield,
  TrendingUp,
  Wallet,
  Target,
  Sparkles,
  Clock,
  Mail,
} from "lucide-react";

// Stats Data
export const statsData = [
  {
    value: "75K+",
    label: "Active Members",
  },
  {
    value: "$3.5B+",
    label: "Assets Managed",
  },
  {
    value: "24/7",
    label: "Support Available",
  },
  {
    value: "4.8/5",
    label: "Average Rating",
  },
];

// Features Data
export const featuresData = [
  {
    icon: <Receipt className="h-6 w-6" />,
    title: "Snap & Track Receipts",
    description:
      "Take a photo of any receipt and we'll extract the details automatically. No more typing in amounts or trying to remember what you bought last Tuesday. Just snap, and it's done.",
  },
  {
    icon: <PieChart className="h-6 w-6" />,
    title: "See Your Spending Patterns",
    description:
      "Ever wonder why you're broke by the 20th? Our charts show you exactly where your money disappears. Coffee runs, subscriptions you forgot about, that impulse buy—it's all there, visualized.",
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Set Realistic Budgets",
    description:
      "Create budgets that actually work for your life. Not some generic 'spend less' advice, but real limits based on what you actually spend. Get alerts before you blow it, not after.",
  },
  {
    icon: <CreditCard className="h-6 w-6" />,
    title: "Multiple Accounts, One View",
    description:
      "Got a checking account, savings, and three credit cards? Track them all in one place. See your total financial picture without logging into five different apps.",
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email Alerts",
    description:
      "Emails users monthly summaries of their total income and expenses, provides AI-generated spending insights, and sends alerts when their monthly budget exceeds 80%.",
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Track Your Progress",
    description:
      "Watch your savings grow, see your debt shrink, and understand your financial trends over time. Finally, a way to see if you're actually getting ahead or just treading water.",
  },

];

// How It Works Data
export const howItWorksData = [
  {
    icon: <Wallet className="h-8 w-8" />,
    title: "Create Your First Account",
    description:
      "Start by adding an account—your checking, savings, or credit card. Give it a name, set a starting balance, and you're ready. Takes about 30 seconds.",
  },
  {
    icon: <Receipt className="h-8 w-8" />,
    title: "Start Logging Transactions",
    description:
      "Every time you spend money, add it. Use the receipt scanner for purchases, or manually enter quick transactions. The more you log, the clearer your picture becomes.",
  },
  {
    icon: <TrendingUp className="h-8 w-8" />,
    title: "Understand Your Money",
    description:
      "Check your dashboard to see where your money goes. Set budgets, track progress, and make smarter decisions. Knowledge is power, and now you have it.",
  },
];

// Testimonials Data
export const testimonialsData = [
  {
    name: "Marcus Chen",
    role: "Freelance Designer",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    quote:
      "I was terrible with money. Like, really terrible. This app showed me I was spending $300 a month on takeout. THREE HUNDRED. Now I actually cook, and I'm saving real money for the first time in my life.",
  },
  {
    name: "Sarah Kim",
    role: "Graduate Student",
    image: "https://randomuser.me/api/portraits/women/28.jpg",
    quote:
      "As a student, every dollar matters. The receipt scanner is a lifesaver—I just take a photo after grocery shopping and it's logged. No more losing receipts or forgetting what I spent. Simple and it actually works.",
  },
  {
    name: "David Rodriguez",
    role: "Small Business Owner",
    image: "https://randomuser.me/api/portraits/men/67.jpg",
    quote:
      "I needed to separate my business and personal expenses, but most apps made it complicated. Here, I just create different accounts and track them separately. It's straightforward, which is exactly what I needed.",
  },
];