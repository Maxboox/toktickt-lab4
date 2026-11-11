import { useState } from 'react';

export default function Lab4Demo() {
  const [showAction, setShowAction] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 p-8 font-sans">
      {/* Header */}
      <header className="bg-green-800 text-white p-4 rounded-t-lg shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          ⏱ TokTickt <span className="text-sm font-normal bg-green-700 px-2 py-1 rounded">Lab 4 Dashboard</span>
        </h1>
        <div className="flex gap-4">
          <span>Welcome back, Michael!</span>
        </div>
      </header>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 my-6">
        {[
          { label: "New", value: "14", color: "text-green-600" },
          { label: "Open", value: "23", color: "text-blue-600" },
          { label: "In Progress", value: "18", color: "text-yellow-600" },
          { label: "Waiting for Requester", value: "7", color: "text-orange-500" },
          { label: "My Assigned", value: "16", color: "text-purple-600" }
        ].map((metric, i) => (
          <div key={i} className="bg-white p-4 rounded-lg shadow border-t-4 border-green-500">
            <p className="text-gray-500 text-sm">{metric.label}</p>
            <p className={`text-3xl font-bold ${metric.color}`}>{metric.value}</p>
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Recent Tickets */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4 border-b pb-2">
            <h2 className="text-lg font-semibold text-gray-700">My Recent Tickets</h2>
            <button className="text-green-600 hover:underline">View all</button>
          </div>
          <ul className="space-y-3">
            {[1, 2, 3].map((_, i) => (
              <li key={i} className="flex justify-between items-center border-b pb-2">
                <div>
                  <p className="font-semibold text-green-800">TKT-2025-00123</p>
                  <p className="text-sm text-gray-500">Laptop battery drains quickly</p>
                </div>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">In Progress</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Actions Taken Demo */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4 border-b pb-2">
            <h2 className="text-lg font-semibold text-gray-700">Actions Taken</h2>
            <button 
              onClick={() => setShowAction(!showAction)}
              className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 text-sm"
            >
              + Add Action
            </button>
          </div>
          
          {showAction && (
            <div className="bg-gray-50 p-4 rounded border mb-4">
              <input type="text" placeholder="Action Description" className="w-full mb-2 p-2 border rounded" />
              <input type="text" placeholder="Result" className="w-full mb-2 p-2 border rounded" />
              <label className="flex items-center text-sm mb-2">
                <input type="checkbox" className="mr-2" /> Follow-up Required?
              </label>
              <button className="bg-green-600 text-white w-full p-2 rounded hover:bg-green-700">Save Action</button>
            </div>
          )}

          <div className="border-l-4 border-green-500 pl-4 py-2">
            <p className="text-sm text-gray-500">Performed by Michael (IT Staff) - Just now</p>
            <p className="font-semibold">Checked hardware and replaced battery</p>
            <p className="text-sm text-gray-700">Result: Problem solved, ticket can be resolved.</p>
          </div>
        </div>
      </div>
    </div>
  );
}