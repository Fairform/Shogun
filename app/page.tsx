import IndustryForm from ../../../components/IndustryForm';;

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold">Fairform Compliance</h1>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Generate Audit-Ready Compliance Packs in Minutes
          </h1>
          <p className="text-lg text-gray-600">
            Customized for your industry. No legal expertise required.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <IndustryForm />
        </div>
      </main>
    </div>
  );
}
