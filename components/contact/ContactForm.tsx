"use client";

import { useActionState, useState, useEffect, useRef } from "react";
import { submitContactForm } from "@/app/contact/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { AlertCircle, CheckCircle2, Send, Loader2 } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import { subjectOptions } from "@/constants";

const initialState = {
  success: false,
  errors: {},
  message: "",
};


export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactForm,
    initialState
  );
  
  const [subject, setSubject] = useState("");
  const [formKey, setFormKey] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);

  // Handle form submission feedback
  useEffect(() => {
    if (state.success) {
      toast.success("Message sent successfully!", {
        description: "We'll get back to you within 24 hours.",
        duration: 5000,
        icon: <CheckCircle2 className="h-4 w-4" />,
      });
      
      // Reset form after successful submission
      setSubject("");
      setFormKey(prev => prev + 1);
      
      // Scroll to top to show success message
      window.scrollTo({ top: 0, behavior: "smooth" });
    }

    if (!state.success && state.errors && Object.keys(state.errors).length > 0) {
      toast.error("Please fix the errors below", {
        description: "Some fields need your attention.",
        icon: <AlertCircle className="h-4 w-4" />,
      });
      
      // Scroll to first error
      const firstErrorField = Object.keys(state.errors)[0];
      const errorElement = document.querySelector(`[name="${firstErrorField}"]`);
      errorElement?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [state]);

  // Custom handleSubmit for better UX
  const handleSubmit = async (formData: FormData) => {
    // Add loading toast
    const loadingToast = toast.loading("Sending message...", {
      description: "Please wait while we process your request.",
    });

    try {
      await formAction(formData);
      toast.dismiss(loadingToast);
    } catch (error) {
      toast.dismiss(loadingToast);
      toast.error("Something went wrong", {
        description: "Please try again later.",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto"
    >
      <Card className="border-2 shadow-lg overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-primary/5 to-primary/10 border-b">
          <CardTitle className="text-2xl font-bold flex items-center gap-2">
            <Send className="h-6 w-6 text-primary" />
            Request Legal Consultation
          </CardTitle>
          <CardDescription className="text-base">
            Fill out the form below and we'll get back to you within 24 hours.
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-6">
          <form
            key={formKey}
            ref={formRef}
            action={handleSubmit}
            className="space-y-6"
          >
            {/* Success Message */}
            <AnimatePresence>
              {state.success && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                >
                  <Alert className="bg-green-50 border-green-200 text-green-800">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <AlertDescription>
                      Your message has been sent successfully! We'll contact you shortly.
                    </AlertDescription>
                  </Alert>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Full Name Field */}
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-sm font-medium">
                Full Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="fullName"
                name="fullName"
                placeholder="John Doe"
                className={state.errors?.fullName ? "border-red-500 focus-visible:ring-red-500" : ""}
                disabled={isPending}
                autoComplete="name"
              />
              <AnimatePresence>
                {state.errors?.fullName && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-sm text-red-500 flex items-center gap-1"
                  >
                    <AlertCircle className="h-3 w-3" />
                    {state.errors.fullName[0]}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email Address <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                className={state.errors?.email ? "border-red-500 focus-visible:ring-red-500" : ""}
                disabled={isPending}
                autoComplete="email"
              />
              <AnimatePresence>
                {state.errors?.email && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-sm text-red-500 flex items-center gap-1"
                  >
                    <AlertCircle className="h-3 w-3" />
                    {state.errors.email[0]}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Subject Dropdown */}
            <div className="space-y-2">
              <Label htmlFor="subject" className="text-sm font-medium">
                Legal Matter Type <span className="text-red-500">*</span>
              </Label>
              <Select 
                onValueChange={setSubject} 
                value={subject}
                disabled={isPending}
              >
                <SelectTrigger 
                  id="subject"
                  className={state.errors?.subject ? "border-red-500 focus-visible:ring-red-500" : ""}
                >
                  <SelectValue placeholder="Select a legal matter type" />
                </SelectTrigger>
                <SelectContent>
                  {subjectOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      <span className="flex items-center gap-2">
                        <span>{option.icon}</span>
                        <span>{option.label}</span>
                      </span>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <input type="hidden" name="subject" value={subject} />
              <AnimatePresence>
                {state.errors?.subject && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-sm text-red-500 flex items-center gap-1"
                  >
                    <AlertCircle className="h-3 w-3" />
                    {state.errors.subject[0]}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium">
                Message <span className="text-red-500">*</span>
              </Label>
              <Textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Please describe your legal matter in detail..."
                className={state.errors?.message ? "border-red-500 focus-visible:ring-red-500" : ""}
                disabled={isPending}
              />
              <AnimatePresence>
                {state.errors?.message && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="text-sm text-red-500 flex items-center gap-1"
                  >
                    <AlertCircle className="h-3 w-3" />
                    {state.errors.message[0]}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <Button 
              type="submit" 
              className="w-full h-12 text-base font-semibold"
              disabled={isPending}
            >
              {isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" />
                  Request Consultation
                </>
              )}
            </Button>
          </form>
        </CardContent>

        <CardFooter className="bg-muted/50 border-t px-6 py-4">
          <p className="text-sm text-muted-foreground text-center w-full">
            By submitting this form, you agree to our{" "}
            <a href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="/terms" className="text-primary hover:underline">
              Terms of Service
            </a>
            .
          </p>
        </CardFooter>
      </Card>
    </motion.div>
  );
}