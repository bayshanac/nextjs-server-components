'use client';

import AuthCard from "@/components/AuthCard";
import FormInput from "@/components/FormFields/FormInput";
import Link from "next/link";

function Login() {
  return (
    <AuthCard
      title="Dobrodošli"
      description="Prijavite se na #Coca-Cola podrška mladima# platformu"
      buttonLabel="Prijavi se"
      onSubmit={() => {}} // TO-DO Consider usage of server actions
      footer={
        <div className="flex justify-between items-center w-full">
          <p className="mt-3 text-xs text-center text-gray-700">
            Nemaš nalog?{" "}
            <Link href="/register" className=" text-primary hover:underline">
              Registruj se
            </Link>
          </p>
          <Link
            href="/reset-password"
            className="mt-3 text-xs text-primary hover:underline"
          >
            Resetuj lozinku
          </Link>
        </div>
      }
    >
      <FormInput label="Email" name="email" type="email" />
      <FormInput label="Lozinka" name="password" type="password" />
    </AuthCard>
  );
}

export default Login;
