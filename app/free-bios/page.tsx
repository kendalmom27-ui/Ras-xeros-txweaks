import PageShell from "../../components/PageShell";
import FreeBiosModal from "../../components/FreeBiosModal";

export default function FreeBiosPage() {
  return (
    <PageShell>
      <main className="min-h-screen bg-black pt-28 text-white flex items-center justify-center px-6">
        <FreeBiosModal />
      </main>
    </PageShell>
  );
}
