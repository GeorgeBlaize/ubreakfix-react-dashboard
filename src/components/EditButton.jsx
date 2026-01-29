// src/components/EditButton.jsx
export default function EditButton() {
  return (
    <button className="absolute -bottom-2 -right-2 bg-zinc-950 p-1 rounded-full shadow-lg shadow-cyan-900/30">
      <div className="bg-cyan-600 w-10 h-10 rounded-full flex items-center justify-center text-xl hover:bg-cyan-500 transition-colors">
        ✏
      </div>
    </button>
  );
}