"use client";
import { Button } from "@/components/ui/button";
import {
  AlertTriangle,
  ArrowLeft,
  CheckCircle,
  FileText,
  ScrollText,
  ShieldCheck,
} from "lucide-react";
import { useRouter } from "next/navigation";

const TermsPage = () => {
  const router = useRouter();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Back Button */}
      <Button
        variant="outline"
        onClick={() => router.back()}
        className="flex items-center gap-2 transition mb-8"
      >
        <ArrowLeft className="w-5 h-5" />
        <span className="font-medium">Back</span>
      </Button>
      {/* Header */}
      <div className="text-center mb-12">
        <ScrollText className="mx-auto w-14 h-14 text-primary mb-4" />
        <h1 className="text-4xl font-bold text-neutral-900 dark:text-white">
          Terms & Conditions
        </h1>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">
          Last updated: August 8, 2025
        </p>
      </div>

      {/* Intro */}
      <p className="mb-8 text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
        Welcome to <span className="font-semibold">Devboard</span>. By using our
        services, you agree to comply with and be bound by these Terms &
        Conditions. Please read them carefully.
      </p>

      {/* Sections */}
      <div className="space-y-10">
        {/* Usage Rules */}
        <section>
          <div className="flex items-center gap-3 mb-3">
            <FileText className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">
              Acceptable Use
            </h2>
          </div>
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
            You agree to use our platform responsibly and in compliance with all
            applicable laws. Any misuse, including attempts to disrupt or
            compromise our systems, is strictly prohibited.
          </p>
        </section>

        {/* Privacy */}
        <section>
          <div className="flex items-center gap-3 mb-3">
            <ShieldCheck className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">
              Privacy Commitment
            </h2>
          </div>
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
            Your privacy is important to us. Our use of your data is outlined in
            our{" "}
            <a href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </section>

        {/* Termination */}
        <section>
          <div className="flex items-center gap-3 mb-3">
            <AlertTriangle className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">
              Termination of Service
            </h2>
          </div>
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
            We reserve the right to suspend or terminate accounts that violate
            these terms without prior notice.
          </p>
        </section>

        {/* Agreement */}
        <section>
          <div className="flex items-center gap-3 mb-3">
            <CheckCircle className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">
              Agreement to Terms
            </h2>
          </div>
          <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
            By using Devboard, you acknowledge that you have read, understood,
            and agreed to these Terms & Conditions.
          </p>
        </section>
      </div>

      {/* Footer Note */}
      <p className="mt-12 text-neutral-500 dark:text-neutral-400 text-sm">
        If you have any questions about these terms, contact us at{" "}
        <a
          href="mailto:terms@devboard.com"
          className="text-primary hover:underline"
        >
          terms@devboard.com
        </a>
        .
      </p>
    </div>
  );
};

export default TermsPage;
