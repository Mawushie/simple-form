import { ChangeEvent, FormEvent, useState } from "react";
import Input from "../components/form-components/Input";
import PhotoInput from "../components/form-components/PhotoInput";
import Select from "../components/form-components/Select";
import RadioInput from "../components/form-components/RadioInput";
import Checkbox from "../components/form-components/Checkbox";

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
    // alert("Details successfully submitted");
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
      if (hobby && checked) {
        setFormData((form) => ({
          ...form,
          hobbies: [...form.hobbies, hobby],
        }));
      } else {
        setFormData((form) => ({
          ...form,
          hobbies: formData.hobbies.filter((item) => item !== hobby),
        }));
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

  return (
    <div className="bg-gray-100 sm:w-3/4 m-auto lg:w-2/4">
      <form onSubmit={handleSubmit} className="flex flex-col p-8">
        <Input
          label="Username"
          type="text"
          name="name"
          value={formData.name || ""}
          handleChange={handleChange}
        />

        <Input
          label="Age"
          type="number"
          name="age"
          value={formData.age || ""}
          handleChange={handleChange}
        />

        <PhotoInput
          label="Photo"
          name={formData.photo?.name}
          handleChange={handleChange}
        />

        <Select
          label="Select Gender"
          name="gender"
          value={formData.gender}
          options={[
            "Male",
            "Female",
            "Non-Binary",
            "Transgender",
            "Prefer not to say",
          ]}
          handleChange={handleChange}
        />

        <RadioInput
          title="Marital Status"
          name="maritalStatus"
          handleChange={handleChange}
          options={["Single", "Married", "Divorced"]}
        />

        <Checkbox
          type="multi"
          title="Hobbies"
          options={hobbies}
          handleChange={handleChange}
        />

        <Checkbox
          type="single"
          label="Agree to Terms and Conditions"
          name="isConsenting"
          checked={formData.isConsenting}
          handleChange={handleChange}
        />

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
