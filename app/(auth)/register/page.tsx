"use client";

import AuthCard from "@/components/AuthCard";
import CountrySelect from "@/components/FormFields/CountrySelect";
import FormInput from "@/components/FormFields/FormInput";
import Link from "next/link";

function Register() {
  return (
    <AuthCard
      title="Dobrodošli"
      buttonLabel="Registruj se"
      onSubmit={() => {}} // TO-DO Consider usage of server actions
      footer={
        <div className="flex justify-between items-center w-full">
          <p className="mt-3 text-xs text-center text-gray-700">
            Imaš nalog?{" "}
            <Link href="/login" className=" text-primary hover:underline">
              Prijavi se
            </Link>
          </p>
        </div>
      }
      size="3xl"
    >
      <div className="grid grid-cols-2 gap-4">
        <FormInput label="Ime i prezime" name="name" />
        <FormInput label="Email" name="email" type="email" />
        <FormInput label="Broj telefona" name="phone" type="tel" />
        <CountrySelect label="Država" name="country" />
        <FormInput label="Grad" name="city" />
        <FormInput label="Poštanski broj" name="postcode" />
        <FormInput label="Adresa" name="address" />
        <FormInput label="Organizacija" name="organization" />
        <FormInput label="Lozinka" name="password" type="password" />
      </div>
    </AuthCard>
  );
}

export default Register;
