"use client";

import { useMutation } from "@tanstack/react-query";
import { userLogin } from "../services/auth.service";

const useAuth = () => {
  const loginMutation = useMutation({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      const res = await userLogin(email, password);
      return res;
    },
  });

  return loginMutation;
};

export default useAuth;
