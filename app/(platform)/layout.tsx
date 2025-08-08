import type { PropsWithChildren } from "react";
import { Toaster } from "sonner";
import { ClerkProvider } from "@clerk/nextjs";


const PlatformLayout = ({ children }: PropsWithChildren) => {
  return (
    <ClerkProvider
      appearance={{
        layout: {
          logoImageUrl: "/logo.svg",
        },
        variables: {
          colorPrimary: "#3b82f6",
          colorText: "#1e293b",
          fontFamily: "'Inter', sans-serif",
          borderRadius: "8px",
        },
        elements: {
          card: "rounded-lg shadow-md",
          headerTitle: "text-xl font-semibold text-blue-500",
          buttonPrimary:
            "bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-md",
          input:
            "border border-blue-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
        },
      }}
    >
      {/* <QueryProvider> */}
      <Toaster richColors />
      {/* <ModalProvider /> */}
      {children}
      {/* </QueryProvider> */}
    </ClerkProvider>
  );
};

export default PlatformLayout;
