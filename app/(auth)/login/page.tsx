"use client";
import Button from "@/app/component/button";
import useLoginUser from "@/app/hooks/use-auth";
import Image from "next/image";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";

const AuthManagement = () => {
  const [formValues, setFormValues] = useState<{
    email: string;
    password: string;
  }>({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {useLogin} = useLoginUser();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    useLogin.mutate(formValues);

    setIsSubmitting(false);
  };
  
  return (
    <div className="bg-white w-136 h-137 rounded-lg border-t-6 flex items-center flex-col py-12 px-17 border-primary">
      <ToastContainer position="top-right" />
      <Image
        src="/images/logo-admin.svg"
        alt="logo-admin"
        width={305}
        height={51}
        className="mb-5.5"
      />
      <p className="text-sm text-gray-400">
        Enter your credentials to access the dashboard
      </p>
      <form className="w-full" onSubmit={(e) => handleLogin(e)}>
        <div className="flex flex-col gap-2 w-full mt-8.5">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formValues.email}
            onChange={(e) => {
              handleChange(e);
            }}
            required
            className="rounded-lg border border-gray-400 h-13.5 px-3"
            placeholder="admin@gmail.com"
          />
        </div>
        <div className="flex flex-col gap-2 w-full mt-5">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            value={formValues.password}
            onChange={(e) => handleChange(e)}
            className="rounded-lg border border-gray-400 h-13.5 px-3"
            placeholder="*********"
          />
        </div>
        <div className="mt-11.5 w-full">
          <Button className="w-full" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Loading..." : "Sign In"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AuthManagement;
