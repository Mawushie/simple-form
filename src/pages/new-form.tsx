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
  };

  //handleChange function
  //currentTarget contains the properties needed needed
  const handleChange = (
    { currentTarget }: ChangeEvent<any>,
    hobby?: string
  ) => {
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
      if (name === "isConsenting") {
        setFormData((form) => {
          return {
            ...form,
            [name]: checked,
          };
        });
      }
      let updatedArray: any = [...formData.hobbies, hobby];
      if (hobby && checked) {
        setFormData((form) => ({
          ...form,
          hobbies: [...form.hobbies, hobby],
        }));
      } else {
        updatedArray = formData.hobbies.filter((item) => item !== hobby);
        setFormData((form) => ({ ...form, hobbies: updatedArray }));
      }
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
    <div>
      <form onSubmit={handleSubmit} className="user-form">
        <label htmlFor="name">Username: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name || ""}
          onChange={handleChange}
        />
        <label htmlFor="name">Age: </label>
        <input
          type="number"
          id="name"
          name="age"
          value={formData.age || ""}
          onChange={handleChange}
        />
        <label htmlFor="photo">Photo: </label>
        <button
          type="button"
          onClick={() => photoRef.current?.click()}
          className="upload"
        >
          {formData.photo?.name || "Click to upload"}
        </button>
        <input
          type="file"
          id="photo"
          name="photo"
          onChange={handleChange}
          ref={photoRef}
          className="hide"
        />
        <label htmlFor="gender">Select Gender </label>
        <select
          id="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="">--Select Gender</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="non-binary">Non-Binary</option>
          <option value="transgender">Transgender</option>
          <option value="none">Prefer not to state</option>
        </select>
        <p>Marital Status</p>
        <label htmlFor="single">
          <input
            id="single"
            type="radio"
            name="maritalStatus"
            value="single"
            checked={formData.maritalStatus === "single"}
            onChange={handleChange}
          />
          Single
        </label>
        <br></br>
        <label htmlFor="married">
          <input
            id="married"
            type="radio"
            name="maritalStatus"
            value="married"
            checked={formData.maritalStatus === "married"}
            onChange={handleChange}
          />
          Married
        </label>
        <br></br>
        <label htmlFor="divorced">
          <input
            id="divorced"
            type="radio"
            name="maritalStatus"
            value="divorced"
            checked={formData.maritalStatus === "divorced"}
            onChange={handleChange}
          />
          Divorced
        </label>
        <br></br> <br></br>
        <label>
          Hobbies<br></br>
          {hobbies.map((hobby, key) => {
            return (
              <label key={key} htmlFor={hobby.toLocaleLowerCase()}>
                <input
                  id={hobby.toLocaleLowerCase()}
                  type="checkbox"
                  name="hobbies"
                  checked={formData.hobbies?.includes(hobby)}
                  onChange={(event) => handleChange(event, hobby)}
                />

                {hobby}
                <br></br>
              </label>
            );
          })}
        </label>
        <br></br>
        <input
          type="checkbox"
          id="isConsenting"
          name="isConsenting"
          checked={formData.isConsenting}
          onChange={handleChange}
        />
        <label htmlFor="isConsentng">Agree to terms and conditions</label>
        <br></br> <br></br>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};
