import { fetchAllClasses } from "@/backend/services/ClasseService";

import { Title } from "@/ui-components/Title";
import { TabClasses } from "./components/TabClasses";
import { FooterButtons } from "./components/FooterButtons";

export default async function EscolherClassePage() {
  const { classes } = await fetchAllClasses();
  return (
    <>
      <div className="flex-4 flex items-center">
        <div className="flex flex-col items-center justify-center gap-20">
          <Title text="Escolha a Classe" />
          <TabClasses classes={classes} />
        </div>
      </div>
      <FooterButtons classes={classes} />
    </>
  );
}
