import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import QuivoLogo from "@/components/quivo-logo";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: <QuivoLogo size="md" />,
    },
  };
}
