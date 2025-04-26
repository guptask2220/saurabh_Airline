import Img1 from "../../../assets/img.png";

export default function StatCard({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow flex items-center justify-between gap-2">
      <div className="flex flex-col">
        <span className="text-gray-500">{title}</span>
        <span className="text-2xl font-bold">{value}</span>
      </div>
      <div>
        <img src={Img1} alt="stat" className="w-40 h-20 object-contain" />
      </div>
    </div>
  );
}
