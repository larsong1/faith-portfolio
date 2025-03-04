'use client';
import React from 'react';
import { useForm } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm('xvgzeyva');
  return (
    <>
      {state.succeeded ? (
        <p className="text-center">THANKS. YOUR EMAIL HAS BEEN RECEIVED</p>
      ) : (
        <div className="mx-auto max-w-2xl tracking-widest">
          <div className="text-2xl mb-7">CONTACT</div>
          <form className="grid gap-y-6" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-y-2">
              <label
                className="block font-[family-name:--font-family-display] leading-5 text-[--color-text-default]"
                htmlFor="name"
              >
                YOUR NAME
              </label>
              <input
                className="h-12 appearance-none rounded-full border-0 px-4 text-[--color-text-default] outline-none ring-1 ring-inset ring-[--color-border-default] placeholder:text-[--color-text-muted] focus-visible:ring-[--color-border-active]"
                id="name"
                name="name"
                required
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label
                className="block font-[family-name:--font-family-display] leading-5 text-[--color-text-default]"
                htmlFor="email"
              >
                EMAIL
              </label>
              <input
                className="h-12 appearance-none rounded-full border-0 px-4 text-[--color-text-default] outline-none ring-1 ring-inset ring-[--color-border-default] placeholder:text-[--color-text-muted] focus-visible:ring-[--color-border-active]"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <label
                className="block font-[family-name:--font-family-display] leading-5 text-[--color-text-default]"
                htmlFor="message"
              >
                MESSAGE
              </label>
              <textarea
                className="h-[100px] resize-y appearance-none rounded-xl border-0 px-3 py-2 text-[--color-text-default] outline-none ring-1 ring-inset ring-[--color-border-default] placeholder:text-[--color-text-muted] focus-visible:ring-[--color-border-active]"
                id="message"
                name="message"
                required
              />
            </div>
            <div className="flex flex-row-reverse gap-x-6">
              <button
                className="cursor-pointer rounded-full bg-black px-8 py-3 text-lg font-semibold leading-6 text-white transition-colors duration-200 hover:bg-gray-500 focus-visible:bg-[--color-primary-active] focus-visible:outline focus-visible:outline-4 focus-visible:outline-[--color-highlight]"
                type="submit"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
