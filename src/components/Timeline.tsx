export default function Timeline() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-24">
      <h2 className="text-4xl font-bold mb-12">Education</h2>

      <div className="space-y-10 border-l border-slate-700 pl-8">
        <div>
          <p className="text-indigo-400">2025 - Present</p>
          <h3 className="text-2xl font-semibold mt-2">
            ENS Marrakech
          </h3>
          <p className="text-slate-400 mt-2">
            Computer Science
          </p>
        </div>

        <div>
          <p className="text-indigo-400">Previous</p>
          <h3 className="text-2xl font-semibold mt-2">
            Previous Studies
          </h3>
          <p className="text-slate-400 mt-2">
            Add your academic history here.
          </p>
        </div>
      </div>
    </section>
  );
}