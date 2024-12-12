"use client";

import { useRouter, usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const changeLocale = (locale) => {
    const pathSegments = pathname.split("/");
    pathSegments[1] = locale; // Cambia el segmento del idioma
    const newPathname = pathSegments.join("/");
    router.push(newPathname);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        className="px-2 py-1 border rounded bg-gray-200 dark:bg-gray-800 text-sm dark:text-white"
        onClick={() => changeLocale("en")}
      >
        EN
      </button>
      <button
        className="px-2 py-1 border rounded bg-gray-200 dark:bg-gray-800 text-sm dark:text-white"
        onClick={() => changeLocale("es")}
      >
        ES
      </button>
    </div>
  );
}
