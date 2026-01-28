export const appointments = Array.from({ length: 6 }, (_, i) => ({
  name: "Jane.D",
  phone: "01960685765",
  email: "admin@gmail.com",
  device: "Apple/iPhone 13pro",
  type: "Screen",
  date: "02/06/2026",
  slot: "1",
  time: `${String(9 + i).padStart(2, '0')}:00`,
}));

export const sampleCalls = [
  {
    id: 1,
    phone: "+1 (555) 345-6789",
    date: "2025-12-16",
    time: "09:42 AM",
    duration: "5:23",
    status: "AI Resolved",
    statusColor: "emerald",
    issue: "Screen",
    type: "Quote Provided",
    hasTranscript: true,
    transcript: [
      { speaker: "AI Assistant", text: "Thank you for calling UBreakFix! How can I help you today?" },
      { speaker: "Customer", text: "Hi, my iPhone 13 screen is cracked. How much would it cost to repair?" },
      
    ]
  },
 
];