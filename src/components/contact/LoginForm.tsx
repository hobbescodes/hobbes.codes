"use client";

import { useForm } from "@tanstack/react-form";
import { valibotValidator } from "@tanstack/valibot-form-adapter";
import { email, minLength, string } from "valibot";

import { OAuthForm } from "components/contact";
import { Button, Input } from "components/core";

const FIELDS = [
  {
    name: "email",
    label: "Email Address",
    placeholder: "you@example.com",
    validationSchema: string([email("Invalid email address.")]),
  },
  {
    name: "password",
    label: "Password",
    placeholder: "••••••••",
    validationSchema: string([minLength(8, "Minimum 8 characters.")]),
    type: "password",
  },
];

interface LoginForm {
  email?: string;
  password?: string;
}

interface Props {
  signIn: (formData: FormData) => Promise<never>;
  signUp: (formData: FormData) => Promise<never>;
}

const LoginForm = ({ signIn, signUp }: Props) => {
  const { Field, Provider, Subscribe } = useForm<LoginForm, typeof valibotValidator>();

  return (
    <Provider>
      <form
        className="text-foreground flex w-full flex-1 flex-col justify-center gap-6 duration-1000 animate-in fade-in-0 sm:max-w-md sm:gap-4"
        action={signIn}
      >
        {FIELDS.map(({ name, label, placeholder, validationSchema, type }) => (
          <Field key={name} name={name} validator={valibotValidator} onChange={validationSchema}>
            {(field) => {
              const onChangeError = field.getMeta().errorMap.onChange;

              return (
                <div className="relative">
                  <Input
                    label={label}
                    name={name}
                    placeholder={placeholder}
                    //@ts-ignore due to mapping of FIELDS, there is a TS error, but it works
                    value={field.state.value ?? ""}
                    onChange={(e) => field.handleChange(e.target.value)}
                    onBlur={() => {
                      if (onChangeError) {
                        field.setValue("");
                      }
                    }}
                    type={type}
                    required
                    autoComplete="off"
                  />
                  {onChangeError && (
                    <em
                      className="absolute -bottom-4 right-0 whitespace-nowrap text-xs text-red-500 sm:top-2"
                      role="alert"
                    >
                      *{onChangeError}
                    </em>
                  )}
                </div>
              );
            }}
          </Field>
        ))}
        <Subscribe>
          {({ canSubmit, values }) => {
            const { email, password } = values;

            const isFormValid = email && password && canSubmit;

            return (
              <div className="flex flex-col gap-2">
                <Button size="lg" isDisabled={!isFormValid} className="mt-6 justify-center">
                  Sign In
                </Button>
                <Button
                  size="lg"
                  isDisabled={!isFormValid}
                  formAction={signUp}
                  variant="outline"
                  className="justify-center"
                >
                  Sign Up
                </Button>
              </div>
            );
          }}
        </Subscribe>

        <OAuthForm />
      </form>
    </Provider>
  );
};

export default LoginForm;
