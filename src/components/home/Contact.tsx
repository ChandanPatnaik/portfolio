"use client";

import { Field, FieldProps, Form, Formik } from "formik";
import * as Yup from "yup";
import { CustomInput } from "../core";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full flex items-center justify-center overflow-hidden bg-dark-slate shadow-[0_0_76px_0_rgba(10,7,22,0.004)]"
    >
      <div className="w-5/6 md:w-4/5 lg:w-3/5 h-full flex items-center relative">
        <TimeLine />
        <div className="py-12 flex flex-col gap-8 w-full relative pl-6 md:pl-8">
          <div className="text-base font-light text-white/40 tracking-wide">{`Contact />`}</div>
          <div className="w-full grid-cols-1 md:grid-cols-5 grid lg:grid-cols-11 gap-y-6 md:gap-6 items-center">
            <ContactDetails />
            <ContactUsForm />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;

const TimeLine = () => {
  return (
    <div className="absolute flex flex-col items-center top-0 left-0 h-[400%] w-4">
      <div className="w-0.5 h-14 bg-light-yellow"></div>
      <div className="w-2 h-2 border border-light-yellow rounded-full bg-transparent"></div>
      <div className="w-0.5 h-[calc(100%-4rem)] bg-light-yellow"></div>
    </div>
  );
};

const ContactDetails = () => {
  return (
    <div className="w-full flex flex-col gap-6 md:gap-8 md:col-span-6">
      <div className="font-bold text-3xl md:text-4xl flex flex-col gap-0 md:gap-2 tracking-wider text-milk">
        <p className="">{`Let's find`}</p>
        <p className="">{`solution `}</p>
        <p className="text-red-500">{`together?`}</p>
      </div>

      <div className="text-milk/60 tracking-wide md:text-lg ">
        <p>Fill in the form or just use my contacts below.</p>
        <p>‍If you need to put a project on the move, let’s work on it!</p>
      </div>

      <div className="text-milk tracking-wide hover:tracking-widest w-fit common-transition">
        chandanpatnaik81@gmail.com
      </div>
    </div>
  );
};

const ContactUsForm = () => {
  const contactSchema = [
    {
      key: "1",
      label: "Name",
      placeholder: "Enter your name",
      required: true,
      name: "name",
      type: "text",
      validationSchema: Yup.string().required("Name is required").trim(),
      initialValue: "",
      className: "w-full",
    },
    {
      key: "2",
      label: "Email",
      placeholder: "Enter your email",
      required: true,
      name: "email",
      type: "text",
      validationSchema: Yup.string()
        .required("Email is required")
        .email("Invalid email")
        .trim(),
      initialValue: "",
      className: "w-full",
    },
    {
      key: "3",
      label: "Message",
      placeholder: "Enter your message",
      required: true,
      name: "message",
      type: "textarea",
      validationSchema: Yup.string().required("Message is required"),
      initialValue: "",
      className: "w-full",
      rows: 5,
    },
  ];

  const contactSchemaInitialValues: { [key: string]: string } =
    contactSchema.reduce((accumulator, currentValue) => {
      accumulator[currentValue.name] = currentValue.initialValue;
      return accumulator;
    }, {} as { [key: string]: string });

  const contactSchemaValidationSchema: {
    [key: string]: Yup.StringSchema<string>;
  } = contactSchema.reduce((accumulator, currentValue) => {
    accumulator[currentValue.name] = currentValue.validationSchema;
    return accumulator;
  }, {} as { [key: string]: Yup.StringSchema<string> });
  return (
    <section className="md:col-span-4 lg:col-span-5 w-full">
      <Formik
        initialValues={contactSchemaInitialValues}
        validationSchema={Yup.object(contactSchemaValidationSchema)}
        onSubmit={(e) => console.log(e)}
        enableReinitialize={true}
      >
        {(formik) => (
          <Form className="w-full flex flex-col gap-3 md:gap-6">
            {contactSchema.map((inputItem) => (
              <Field name={inputItem.name} key={inputItem.key}>
                {(props: FieldProps<string>) => (
                  <div
                    className={`flex w-full gap-2 flex-col justify-center ${inputItem.className}`}
                  >
                    <p className="text-sm font-medium text-milk">
                      {inputItem.label}
                      {inputItem.required ? "*" : ""}
                    </p>
                    <div className="w-full">
                      <CustomInput
                        key={inputItem?.key}
                        InputProps={{
                          style: {
                            borderRadius: "3px",
                            height:
                              inputItem.type !== "textarea" ? "2.5rem" : "auto",
                            backgroundColor: "#e6e6e6",
                          },
                        }}
                        id={inputItem?.key}
                        name={inputItem?.name}
                        placeholder={inputItem?.placeholder}
                        fullWidth
                        type={inputItem?.type}
                        rows={inputItem?.rows}
                        value={formik?.values[inputItem?.name]}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={Boolean(
                          formik?.touched[inputItem?.name] &&
                            formik?.errors[inputItem?.name]
                        )}
                        helperText={
                          formik?.touched[inputItem?.name] &&
                          formik?.errors[inputItem?.name]
                        }
                      />
                    </div>
                  </div>
                )}
              </Field>
            ))}

            <div className="flex flex-col">
              <button
                type="submit"
                className="w-full cursor-none col-span-full  py-2 bg-light-yellow font-semibold text-white rounded-sm"
              >
                Submit Form
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </section>
  );
};
