import PageShell from "../components/PageShell";
import {
  Hero,
  Features,
  Benchmarks,
  UtilityShowcase,
  ReviewGrid,
  FaqSplit,
  ClosingCta,
} from "../components/home/HomeSections";

export default function HomePage() {
  return (
    <PageShell>
      <Hero />
      <Features />
      <Benchmarks />
      <UtilityShowcase />
      <ReviewGrid />
      <FaqSplit />
      <ClosingCta />
    </PageShell>
  );
}
