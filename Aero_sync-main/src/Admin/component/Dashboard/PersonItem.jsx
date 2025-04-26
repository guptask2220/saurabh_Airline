export default function PersonItem({ name, position, img }) {
    return (
      <div className="flex items-center gap-4">
        <img
        src={img}
        alt={name}
        className="w-12 h-12  object-cover"
      />
        <div>
          <p className="font-medium">{name}</p>
          <p className="text-[10px] text-gray-500">{position}</p>
        </div>
      </div>
    );
  }
  