"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Clock,
  Database,
  FileText,
  Lock,
  ShieldCheck,
} from "lucide-react";
import { useRouter } from "next/navigation";

const PrivacyPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-neutral-900">
      <main className="flex-1 max-w-4xl w-full mx-auto px-6 py-12">
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
          <ShieldCheck className="mx-auto w-14 h-14 text-primary mb-4" />
          <h1 className="text-4xl font-bold text-neutral-900 dark:text-white">
            Privacy Policy
          </h1>
          <p className="mt-2 text-neutral-600 dark:text-neutral-400">
            Last updated: August 8, 2025
          </p>
        </div>

        {/* Intro */}
        <p className="mb-8 text-lg text-neutral-700 dark:text-neutral-300 leading-relaxed">
          At <span className="font-semibold">Devboard</span>, we value your
          privacy and are committed to protecting your personal information.
          This Privacy Policy explains how we collect, use, and safeguard your
          data.
        </p>

        {/* Sections */}
        <div className="space-y-10">
          {/* Data Collection */}
          <section>
            <div className="flex items-center gap-3 mb-3">
              <Database className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">
                Information We Collect
              </h2>
            </div>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              We collect information that you provide directly, such as your
              name, email address, and account details. We may also collect
              technical information automatically, such as IP address and device
              information.
            </p>
          </section>

          {/* Data Usage */}
          <section>
            <div className="flex items-center gap-3 mb-3">
              <FileText className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">
                How We Use Your Information
              </h2>
            </div>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              We use your data to provide and improve our services, personalize
              your experience, send important updates, and ensure platform
              security.
            </p>
          </section>

          {/* Security */}
          <section>
            <div className="flex items-center gap-3 mb-3">
              <Lock className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">
                Data Security
              </h2>
            </div>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              We implement industry-standard security measures to protect your
              information from unauthorized access, alteration, or disclosure.
            </p>
          </section>

          {/* Retention */}
          <section>
            <div className="flex items-center gap-3 mb-3">
              <Clock className="w-6 h-6 text-primary" />
              <h2 className="text-2xl font-semibold text-neutral-900 dark:text-white">
                Data Retention
              </h2>
            </div>
            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              We retain your data only for as long as necessary to fulfill the
              purposes outlined in this policy or as required by law.
            </p>
          </section>
        </div>

        {/* Footer note */}
        <p className="mt-12 text-neutral-500 dark:text-neutral-400 text-sm">
          If you have questions about our Privacy Policy, please contact us at{" "}
          <a
            href="mailto:privacy@devboard.com"
            className="text-primary hover:underline"
          >
            privacy@devboard.com
          </a>
          .
        </p>
      </main>
    </div>
  );
};

export default PrivacyPage;
