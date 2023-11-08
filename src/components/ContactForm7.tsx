import { useEffect, useRef, useState } from "react";

type Props = {
  formId: string;
  formMarkup: string;
};

export default function ContactForm7({ formId, formMarkup }: Props) {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const formWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (formWrapperRef?.current) {
      const formElement =
        formWrapperRef.current.getElementsByTagName("form")?.[0];
      if (formElement) {
        const handleSubmit = async (e: SubmitEvent) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget as any);
          await fetch(
            `${import.meta.env.PUBLIC_PROTOCOL}${
              import.meta.env.PUBLIC_WP_URL
            }/wp-json/contact-form-7/v1/contact-forms/${formId}/feedback`,
            {
              method: "POST",
              body: formData,
            },
          );
          setShowSuccessMessage(true);
        };
        formElement.addEventListener("submit", handleSubmit);
        return () => {
          formElement.removeEventListener("submit", handleSubmit);
        };
      }
    }
  }, [formId, formWrapperRef]);

  return showSuccessMessage ? (
    <div className="bg-green-600 p-4 text-white font-bold">
      Thank you for your message!
    </div>
  ) : (
    <div
      className="max-w-[--content-size] mx-auto"
      ref={formWrapperRef}
      dangerouslySetInnerHTML={{ __html: formMarkup }}
    />
  );
}
