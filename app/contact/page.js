"use client"

import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
    
    const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORM); // Replace YOUR_FORM_ID with your actual Formspree form ID

    if (state.succeeded) {
        return <div className="w-full h-screen flex justify-center items-center"> <h1 className="text-5xl">Thanks for your submission,I will get back to you ASAP!</h1>
        </div>
    }

    return (
        <div className='w-full h-screen bg-slate-100 flex justify-center items-center'>
            <main className='w-full max-w-md bg-white p-8 rounded'>
                <h1 className='text-xl font-bold mb-4'>Contact Me</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                        <input id="name" type="text" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
                        <ValidationError prefix="Name" field="name" errors={state.errors} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input id="email" type="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
                        <ValidationError prefix="Email" field="email" errors={state.errors} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input id="phone" type="tel" name="phone" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
                        <ValidationError prefix="Phone" field="phone" errors={state.errors} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                        <textarea id="message" name="message" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"></textarea>
                        <ValidationError prefix="Message" field="message" errors={state.errors} />
                    </div>
                    <button type="submit" disabled={state.submitting} className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                        Submit
                    </button>
                </form>
            </main>
        </div>
    );
}
