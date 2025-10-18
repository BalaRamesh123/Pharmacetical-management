export default function LBLVariationGenerator() {
  const variations = [
    { id: 1, layout: "1-Pager", preview: "/assets/sample1.png" },
    { id: 2, layout: "2-Pager", preview: "/assets/sample2.png" },
    { id: 3, layout: "4-Pager", preview: "/assets/sample3.png" },
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6">
      {variations.map((v) => (
        <div key={v.id} className="border rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg transition">
          <img src={v.preview} alt={v.layout} className="w-full h-48 object-cover" />
          <div className="p-4 text-center">
            <h3 className="font-semibold text-gray-800">{v.layout}</h3>
            <button className="btn-primary mt-2 w-full">Download PDF</button>
          </div>
        </div>
      ))}
    </div>
  );
}
