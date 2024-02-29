import { useRef, ChangeEvent } from "react";

type Props = {
  label: string;
  name: string | undefined;
  handleChange: (event: ChangeEvent<any>) => void;
};

function PhotoInput({ label, name, handleChange }: Props) {
  const photoRef = useRef<HTMLInputElement>(null);
  return (
    <div>
      <label htmlFor={name} className="font-bold">
        {label}
      </label>
      <button
        type="button"
        className="border rounded-md bg-blue-500 text-white p-2 mb-2 "
        onClick={() => photoRef.current?.click()}
      >
        {name || "Click to upload"}
      </button>
      <input
        type="file"
        accept="image/*"
        id={name}
        className="hidden"
        ref={photoRef}
        name="photo"
        onChange={handleChange}
      />
    </div>
  );
}
export default PhotoInput;
