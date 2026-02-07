import React, { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormState({ name: '', email: '', message: '' });
            setTimeout(() => setIsSubmitted(false), 5000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 bg-dark relative border-t border-slate-800">
            <div className="container mx-auto px-6 max-w-5xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Let's Work Together</h2>
                    <p className="text-slate-400 text-lg">Have a project in mind? I'd love to hear about it.</p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 bg-card rounded-3xl p-8 md:p-12 border border-slate-800 shadow-2xl">
                    <div className="md:col-span-1 space-y-8">
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-6">Contact Info</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-slate-800 rounded-lg text-primary">
                                        <Mail size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 mb-1">Email</p>
                                        <a href="mailto:alex@example.com" className="text-white hover:text-primary transition-colors">alex@example.com</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="p-3 bg-slate-800 rounded-lg text-primary">
                                        <MapPin size={20} />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 mb-1">Location</p>
                                        <p className="text-white">San Francisco, CA</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700/50">
                            <p className="text-sm text-slate-400 italic">
                                "The only way to do great work is to love what you do."
                            </p>
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formState.name}
                                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-slate-300">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formState.email}
                                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                                        className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                        placeholder="john@company.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                                <textarea
                                    id="message"
                                    required
                                    rows={4}
                                    value={formState.message}
                                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting || isSubmitted}
                                className={`w-full py-4 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all ${
                                    isSubmitted 
                                    ? 'bg-green-600 hover:bg-green-700' 
                                    : 'bg-primary hover:bg-blue-600'
                                }`}
                            >
                                {isSubmitting ? (
                                    <span>Sending...</span>
                                ) : isSubmitted ? (
                                    <span>Message Sent!</span>
                                ) : (
                                    <>
                                        Send Message <Send size={18} />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;