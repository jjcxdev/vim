import { GlobalMotions } from "../utils/KeyLabels";

export default function GlobalCommands() {
  return (
    <>
      <h2 className="text-gray-400 py-4">&#47;&#47; Global Commands </h2>
      <div className="columns-3 w-full max-w-[950px] p-2 whitespace-nowrap rounded-lg border border-gray-700 h-full">
        {Object.entries(GlobalMotions).map(([key, { global }]) => (
          <div key={key}>
            <div className="flex text-xs py-[2px] gap-2">
              <div className="px-2 whitespace-nowrap py-[2px] rounded-md text-white border border-gray-700 bg-gray-50/10">
                {key}
              </div>
              <div className="whitespace-nowrap text-gray-400">{global}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
