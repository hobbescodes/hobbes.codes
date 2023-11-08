"use client";

import { useForm } from "@tanstack/react-form";
import { valibotValidator } from "@tanstack/valibot-form-adapter";
import { optional, string, minLength, email } from "valibot";

import { Button, Input, Textarea } from "components/core";

const FIELDS = [
  {
    name: "name",
    label: "Name",
    placeholder: "John Doe",
    validationSchema: optional(string([minLength(3, "Name must be at least 3 characters long.")])),
    type: "input",
  },
  {
    name: "email",
    label: "Email Address",
    placeholder: "john.doe@example.com",
    validationSchema: optional(string([email("Invalid email address.")])),
    type: "input",
  },
  {
    name: "message",
    label: "Message",
    placeholder: "Hello, I would like to connect with you...",
    validationSchema: optional(
      string([minLength(10, "Message must be at least 10 characters long.")]),
    ),
    type: "textarea",
  },
];

interface ContactForm {
  name?: string;
  email?: string;
  message?: string;
}

const ContactForm = () => {
  const { Field, Provider, Subscribe } = useForm<ContactForm, typeof valibotValidator>();

  return (
    <Provider>
      <form className="w-full max-w-lg duration-1000 animate-in fade-in-0" autoComplete="off">
        <div className="flex flex-col gap-4">
          {FIELDS.map(({ name, label, placeholder, validationSchema, type }) => (
            <Field
              key={name}
              name={name}
              validator={valibotValidator}
              onChangeAsync={validationSchema}
              onChangeAsyncDebounceMs={500}
            >
              {(field) => {
                const onChangeError = field.getMeta().errorMap.onChange;
                const InputField = type === "input" ? Input : Textarea;

                return (
                  <div className="relative">
                    <InputField
                      name={name}
                      label={label}
                      placeholder={placeholder}
                      //@ts-ignore due to mapping of FIELDS, error is thrown, but it works
                      value={field.state.value ?? ""}
                      onChange={(e) => field.handleChange(e.target.value)}
                      onBlur={() => {
                        if (onChangeError) {
                          field.setValue(undefined);
                        }
                      }}
                    />
                    {onChangeError && (
                      <em
                        className="absolute right-0 top-2 whitespace-nowrap text-xs text-red-500"
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
        </div>
        <Subscribe>
          {({ canSubmit, values }) => {
            const { name, email, message } = values;

            const isFormValid = name && email && message;

            return (
              <div className="relative mt-10 flex flex-col items-center gap-2">
                <Button
                  type="submit"
                  size="lg"
                  className="disabled:hover:bg-primary-500 w-full justify-center"
                  isDisabled={!isFormValid || !canSubmit}
                >
                  Submit
                </Button>
              </div>
            );
          }}
        </Subscribe>
      </form>
    </Provider>
  );
};

export default ContactForm;
