"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { NewListingForm } from "../../../../types/newListingForm";
import { useCreateListing } from "../../../../hooks/createListing";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const NewListingPage = () => {
  const { user } = useUser();
  const router = useRouter();

  const { register, handleSubmit } = useForm<NewListingForm>({
    defaultValues: {
      address: "",
      pricePerDay: 0,
      image: "",
      available: false,
    },
  });

  const { createListing } = useCreateListing();

  const onSubmit = async (data: NewListingForm) => {
    try {
      const response = await createListing({
        ...data,
        ownerId: user?.id,
      });

      console.log("Listing created successfully", response);

      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

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
          {...register("pricePerDay", { valueAsNumber: true })}
        />
        <input
          type="text"
          placeholder="Image url"
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("image")}
        />
        <div className="flex justify-start space-x-2">
          <input
            type="checkbox"
            className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("available")}
          />
          <label>Available</label>
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
