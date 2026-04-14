/**
 * @param {{ id?: string, title: string, description: string, icon: import('react').ReactNode }} props
 */
export default function ContentCard({ id, title, description, icon }) {
  return (
    <div id={id} className="bg-[#1C1C1C] p-8 rounded-3xl shadow-lg relative h-64 flex flex-col justify-between">
      <div className="flex flex-col">
        <span className="text-xs font-semibold uppercase text-gray-400">{description}</span>
        <h2 className="text-xl font-bold text-white mt-1">{title}</h2>
      </div>

      <div className="self-end mt-auto">
        {icon}
      </div>
    </div>
  );
}