import { ChangeEvent, FormEvent, useState, useRef } from "react";

export const UserForm = () => {
  //state
  const hobbies = [
    "Gardening",
    "Swimming",
    "Singing",
    "Working out",
    "Cleaning",
    "Dancing",
    "Playing Games",
    "Taking a walk",
    "Sleeping",
    "Cooking",
  ];

  type FormValuesProps = {
    name?: string;
    age?: number;
    photo?: File;
    gender?: string;
    maritalStatus?: string;
    isConsenting?: boolean;
    hobbies: string[];
  };

  const [formData, setFormData] = useState<FormValuesProps>({
    isConsenting: false,
    hobbies: [],
  });

  //submit function
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    alert("Details successfully submitted");
  };

  //handleChange function
  //currentTarget contains the properties needed needed
  const handleChange = ({ currentTarget }: ChangeEvent<any>) => {
    const { name, value, files, type, checked } = currentTarget;
    console.log();
    if (name === "photo") {
      setFormData((form) => {
        return {
          ...form,
          [name]: files?.[0],
        };
      });
    } else if (type === "checkbox") {
      setFormData((form) => {
        return {
          ...form,
          [name]: checked,
        };
      });
    } else {
      setFormData((form) => {
        return {
          ...form,
          [name]: value,
        };
      });
    }
  };

  //defining the ref
  const photoRef = useRef<HTMLInputElement>(null);
  return (
    <div className="bg-gray-100 sm:w-3/4 m-auto lg:w-2/4">
      <form onSubmit={handleSubmit} className="flex flex-col p-8">
        <label htmlFor="name" className="font-bold">
          Username:{" "}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name || ""}
          onChange={handleChange}
          className="inputs"
        />
        <label htmlFor="name" className="font-bold">
          Age:{" "}
        </label>
        <input
          type="number"
          id="name"
          name="age"
          value={formData.age || ""}
          onChange={handleChange}
          className="inputs"
        />
        <div>
          <label htmlFor="photo" className="font-bold inline-block">
            Photo{" "}
          </label>
          <button
            type="button"
            onClick={() => photoRef.current?.click()}
            className="ml-2 bg-blue-500 border rounded-md p-2 text-white mb-4"
          >
            {formData.photo?.name || "Click to upload"}
          </button>
        </div>
        <input
          type="file"
          id="photo"
          name="photo"
          onChange={handleChange}
          ref={photoRef}
          className="hidden"
        />
        <label htmlFor="gender" className="font-bold mb-2">
          Select Gender{" "}
        </label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="border rounded-md h-9 mb-4"
        >
          <option value="">--Select Gender</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="non-binary">Non-Binary</option>
          <option value="transgender">Transgender</option>
          <option value="none">Prefer not to state</option>
        </select>
        <p className="font-bold">Marital Status</p>
        <label htmlFor="single">
          <input
            id="single"
            type="radio"
            name="maritalStatus"
            value="single"
            checked={formData.maritalStatus === "single"}
            onChange={handleChange}
            className="mr-1"
          />
          Single
        </label>
        <label htmlFor="married">
          <input
            id="married"
            type="radio"
            name="maritalStatus"
            value="married"
            checked={formData.maritalStatus === "married"}
            onChange={handleChange}
            className="mr-1"
          />
          Married
        </label>
        <label htmlFor="divorced" className="mb-4">
          <input
            id="divorced"
            type="radio"
            name="maritalStatus"
            value="divorced"
            checked={formData.maritalStatus === "divorced"}
            onChange={handleChange}
            className="mr-1"
          />
          Divorced
        </label>
        <p className="font-bold"> Hobbies</p>
        <div className="mb-4">
          {hobbies.map((hobby, key) => {
            return (
              <label key={key} htmlFor={hobby.toLocaleLowerCase()}>
                <input
                  className="mr-1"
                  id={hobby.toLocaleLowerCase()}
                  type="checkbox"
                  name="hobbies"
                  checked={formData.hobbies?.includes(hobby)}
                  onChange={({ currentTarget: { checked } }) => {
                    if (checked) {
                      setFormData((form) => ({
                        ...form,
                        hobbies: [...form.hobbies, hobby],
                      }));
                    } else {
                      setFormData((form) => ({
                        ...form,
                        hobbies: form.hobbies.filter((item) => item !== hobby),
                      }));
                    }
                  }}
                />

                {hobby}
                <br></br>
              </label>
            );
          })}
        </div>

        <div className="flex mb-4">
          <label htmlFor="isConsentng" className="mr-2">
            Agree to terms and conditions
          </label>
          <input
            type="checkbox"
            id="isConsenting"
            name="isConsenting"
            checked={formData.isConsenting}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="border rounded-md bg-blue-500 text-white p-2 "
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};
