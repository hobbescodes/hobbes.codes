"use client";

import { useForm } from "@tanstack/react-form";
import { valibotValidator } from "@tanstack/valibot-form-adapter";
import { string, minLength } from "valibot";

import { Button, Input, Textarea } from "components/core";

const FIELDS = [
  {
    name: "name",
    label: "Name",
    placeholder: "John Doe",
    validationSchema: string([minLength(3, "Name must be at least 3 characters long.")]),
    type: "input",
    isRequired: true,
  },
  {
    name: "message",
    label: "Message",
    placeholder: "Hello, I would like to connect with you...",
    validationSchema: string([minLength(10, "Message must be at least 10 characters long.")]),
    type: "textarea",
    isRequired: true,
  },
];

interface ContactForm {
  name?: string;
  message?: string;
}

interface Props {
  sendEmail: (formData: FormData) => void;
}

const ContactForm = ({ sendEmail }: Props) => {
  const { Field, Provider, Subscribe } = useForm<ContactForm, typeof valibotValidator>();

  return (
    <Provider>
      <form
        action={sendEmail}
        className="w-full max-w-lg duration-1000 animate-in fade-in-0"
        autoComplete="off"
      >
        <div className="flex flex-col gap-6 sm:gap-4">
          {FIELDS.map(({ name, label, placeholder, validationSchema, type, isRequired }) => (
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
                      required={isRequired}
                      disabled={name === "email"}
                      //@ts-ignore due to mapping of FIELDS, there is a TS error, but it works
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
        </div>
        <Subscribe>
          {({ canSubmit, isSubmitting, values }) => {
            const { name, message } = values;

            const isFormValid = name && message ? canSubmit : false;

            return (
              <div className="relative mt-10 flex flex-col items-center gap-2">
                <Button
                  type="submit"
                  size="lg"
                  className="disabled:hover:bg-primary-500 w-full justify-center"
                  isDisabled={!isFormValid}
                  isLoading={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
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
