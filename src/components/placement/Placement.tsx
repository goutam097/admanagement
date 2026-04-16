import { useEffect, useState } from "react";

const wallOptions = [
  { label: "General wall", value: "general_wall" },
  { label: "Fan wall", value: "fan_wall" },
  { label: "Favourite wall", value: "favourite_wall" },
  { label: "Prayer wall", value: "prayer_wall" },
  { label: "Physical wall", value: "physical_church_wall" },
  { label: "Virtual church wall", value: "virtual_church_wall" },
];
const Placement = ({ onChange }: { onChange: (val: string[]) => void }) => {
  const [selectedWalls, setSelectedWalls] = useState<string[]>([
    "general_wall",
  ]);

  useEffect(() => {
    onChange(["general_wall"]);
  }, []);

  const handleChange = (value: string) => {
    setSelectedWalls((prev) => {
      let updated;

      if (prev.includes(value)) {
        if (prev.length === 1) return prev;

        updated = prev.filter((item) => item !== value);
      } else {
        updated = [...prev, value];
      }

      onChange(updated);
      return updated;
    });
  };

  return (
    <>
      <p>
        Choose where you want to show your ad.The more placements you select,
        the more opportunities you'll have to reach your target audience
      </p>
      {wallOptions.map((item) => (
        <div className="mb-3" key={item.value}>
          <div className="rounded-2xl border border-gray-100 bg-gray-50 px-6 py-6">
            <label className="flex cursor-pointer items-center gap-3 text-sm font-medium text-gray-700">
              <input
                type="checkbox"
                value={item.value}
                checked={selectedWalls.includes(item.value)}
                onChange={() => handleChange(item.value)}
              />
              {item.label}
            </label>
            <div>
              <small>
                Show your ad on {item.label.toLowerCase()} placement
              </small>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
export default Placement;
