import { XCircleIcon } from "@heroicons/react/20/solid";
export default function Alert({ alert }: { alert: string }) {
  return (
    <div className="absolute rounded-md bg-red-50 p-1 px-4 mt-1">
      <div className="flex">
        <div className="flex-shrink-0">
          <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-red-800">{alert}</h3>
        </div>
      </div>
    </div>
  );
}
