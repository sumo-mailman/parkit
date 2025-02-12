"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { NewListingForm } from "../../../../types/newListingForm";

const NewListingPage = () => {
  const { register, handleSubmit } = useForm<NewListingForm>({
    defaultValues: {
      address: "",
      pricePerDay: 0,
      imageUrl: "",
      availability: false,
    },
  });

  const onSubmit = (data: NewListingForm) => console.log(data);

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Create a New Listing
      </h2>
      <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Listing address"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("address")}
        />
        <input
          type="number"
          placeholder="Price per day"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("pricePerDay")}
        />
        <input
          type="text"
          placeholder="Image url"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("imageUrl")}
        />
        <div className="flex justify-start space-x-2">
          <input
            type="checkbox"
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("availability")}
          />
          <label>Availability</label>
        </div>
        <input
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        ></input>
      </form>
    </div>
  );
};

export default NewListingPage;
