"use client";

import AuthCard from "@/components/AuthCard";
import FormInput from "@/components/FormFields/FormInput";
import Link from "next/link";

function ResetPassword() {
  return (
    <AuthCard
      title="Resetuj svoju lozinku"
      description="Unesite email kako biste dobili link za resetovanje lozinke."
      buttonLabel="Resetuj"
      onSubmit={() => {}} // TO-DO Consider usage of server actions
      footer={
        <div className="flex justify-between items-center w-full">
          <p className="mt-3 text-xs text-center text-gray-700">
            Nazad na{" "}
            <Link href="/login" className=" text-primary hover:underline">
              prijavu
            </Link>
          </p>
        </div>
      }
    >
      <FormInput label="Email" name="email" type="email" />
    </AuthCard>
  );
}

export default ResetPassword;
