"use client";

import { useForm } from "react-hook-form";
import { TitleSection } from "../Title/title";
import { Button } from "../ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { fadeUpAnimation } from "@/lib/animations";

const contactFormSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.string().email(),
  message: z.string().min(1).max(500),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export const Form = () => {
  const { handleSubmit, register } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
  };

  return (
    <section
      id="contact"
      className="py-16 px-6 md:py-32 flex items-center justify-center bg-zinc-200 text-zinc-500"
    >
      <div className="w-full max-w-96 mx-auto">
        <TitleSection
          subtitle="contato"
          title="Vamos trabalhar juntos? Entre em contato!"
          className="items-center text-center"
        />
        <motion.form
          className="mt-12 w-full flex h-full flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
          {...fadeUpAnimation}
        >
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 rounded-xl outline-none focus:ring-2 ring-purple-950 transition-all"
            {...register("name")}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 rounded-xl outline-none focus:ring-2 ring-purple-950 transition-all"
            {...register("email")}
          />
          <textarea
            placeholder="Message"
            className="w-full p-2 min-h-32 max-h-52 resize-none rounded-xl outline-none focus:ring-2 ring-purple-950 transition-all"
            maxLength={500}
            {...register("message")}
          />
          <Button className="shadow-xl font-primary bg-purple-950 shadow-purple-950/80 transition-all hover:shadow-zinc-800">
            Enviar
          </Button>
        </motion.form>
      </div>
    </section>
  );
};
