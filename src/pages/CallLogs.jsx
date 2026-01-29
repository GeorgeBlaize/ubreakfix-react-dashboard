import { useState } from 'react';
import { sampleCalls } from '../data/mockData';
import CallDetails from '../components/CallDetails';

export default function CallLogs() {
  const [selected, setSelected] = useState(sampleCalls[0]);

  return (
    <div className="p-5 lg:p-6 xl:p-8 bg-zinc-950/50 min-h-screen">


      <div className="grid lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px] gap-6 lg:gap-8">
        
        <div className="space-y-3 lg:space-y-4">
          {sampleCalls.map(call => (
            <div
              key={call.id}
              onClick={() => setSelected(call)}
              className={`glass-card p-5 lg:p-6 cursor-pointer transition-all ${
                selected?.id === call.id ? 'ring-2 ring-blue-600/50' : 'hover:ring-1 hover:ring-zinc-600/50'
              }`}
            >
            
            </div>
          ))}
        </div>

       
        <div className="lg:sticky lg:top-6 h-fit">
          <CallDetails call={selected} />
        </div>
      </div>
    </div>
  );
}