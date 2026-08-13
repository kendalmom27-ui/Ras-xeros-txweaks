export const site = {
  name: "Rasx",
  fullName: "Rasx Tweaks",
  tagline: "Faster, Smoother, Sharper",
  description:
    "Rasx removes bloatware and optimizes your PC for higher FPS, lower input delay, and reduced ping. Get smoother gameplay and precision tweaks for competitive shooters.",
  discordUrl: "https://discord.gg/ZWXkTTSuc",
  twitterUrl: "#",
  youtubeUrl: "#",
  supportEmail: "support@rasxtweaks.com",
  stats: {
    customers: "10,000+",
    users: "50,000+",
  },
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/downloads", label: "Downloads" },
  { href: "/about", label: "About Us" },
] as const;

export const features = [
  {
    title: "Increase FPS",
    description: "Raise frame rates with targeted OS, driver, and game tuning.",
    icon: "fps",
  },
  {
    title: "Decrease Ping",
    description: "Lower network delay with smart routing, DNS, and QoS rules.",
    icon: "ping",
  },
  {
    title: "Reduce Latency",
    description: "Cut input lag by refining timers, buffers, and scheduling.",
    icon: "latency",
  },
  {
    title: "Boost Aim",
    description: "Sharpen precision with steadier frames and input consistency.",
    icon: "aim",
  },
] as const;

export const gameBenchmarks = [
  { game: "Fortnite", withTweaks: 542, without: 389, boost: 39 },
  { game: "Valorant", withTweaks: 612, without: 440, boost: 39 },
  { game: "Minecraft", withTweaks: 1151, without: 556, boost: 107 },
  { game: "Roblox", withTweaks: 310, without: 120, boost: 158 },
  { game: "Call of Duty Warzone", withTweaks: 260, without: 170, boost: 53 },
  { game: "Call of Duty", withTweaks: 365, without: 260, boost: 40 },
] as const;

export const reviews = [
  {
    title: "Amazing Performance Boost",
    body: "Went from struggling in ranked to smooth 240 FPS. The extreme tweaks package is insane — input delay feels way lower.",
    author: "Verified Customer",
  },
  {
    title: "Best Tweaks I've Used",
    body: "vouch rasx, 40 ping taking everyones wall on central too good almost unreal with it",
    author: "Verified Customer",
  },
  {
    title: "Extreme Performance Boost",
    body: "extreme is amazing went from 28 ping to 20-24 and a 150 fps boost",
    author: "Verified Customer",
  },
] as const;

export const faqs = [
  {
    question: "Can this harm my computer?",
    answer:
      "No — if anything it increases the longevity of your computer by reducing load and useless background apps.",
  },
  {
    question: "Is this bannable?",
    answer: "No. You cannot get banned for optimizing your computer.",
  },
  {
    question: "Are these legit?",
    answer:
      "Yes, these are 100% legit. Check our reviews above and join our Discord for even more feedback.",
  },
  {
    question: "Are these worth it?",
    answer:
      "Yes — think of these as a PC upgrade for a fraction of the price.",
  },
] as const;

export const products = [
  {
    name: "Full Optimization",
    price: "$25",
    description: "Complete Windows + gaming optimization for max performance.",
    href: "/products",
  },
  {
    name: "Extreme Tweaks",
    price: "$15",
    description: "Aggressive performance tuning for competitive gamers.",
    href: "/products",
  },
  {
    name: "Rasx Utility",
    price: "Included",
    description: "Our desktop utility — complimentary with every optimization.",
    href: "/downloads",
  },
] as const;

export const addons = [
  {
    id: "cpu-oc",
    name: "CPU Overclock",
    price: 20,
    description: "Tuned all-core clock and voltage curve with stress testing.",
  },
  {
    id: "gpu-oc",
    name: "GPU Overclock",
    price: 20,
    description: "Core/memory offsets and fan curve tuned for sustained clocks.",
  },
  {
    id: "controller-oc",
    name: "Controller Overclock",
    price: 10,
    description: "Raise controller polling rate for lower stick and trigger delay.",
  },
  {
    id: "km-oc",
    name: "Keyboard & Mouse Overclock",
    price: 10,
    description: "Push polling to 1000Hz+ and cut input latency at the peripheral.",
  },
] as const;
