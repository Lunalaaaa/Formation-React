/* Global Imports */
import { BrowserRouter, Route, Routes } from "react-router";
import { CacheProvider } from "@emotion/react";

/* Application Level Imports */
import * as UI from "@/components";
import * as Views from "@/views";

function App() {
  return (
    <div style={{height: "100%"}}>
      <BrowserRouter>
      <main>
        <UI.Header />
        <Routes>
          <Route path="/" element={<Views.Home />} />
            <Route path="/products" element={<Views.Products />} />
            <Route path="/flights" element={<Views.Flights />} />
            <Route path="/users" element={<Views.Users />} /> 
        </Routes>
      </main>
        <UI.Footer 
          adresse="895 rue de la vieille poste, 34000 Montpellier" 
          informationsLegales={
            [
              {
                lien: "/users",
                nomLien: "Gestion des utilisateurs" 
              }
            ]
          } 
          liensReseauxSociaux={
            [
              {
                icone: "discord",
                lien: "https://discord.gg",
                nomLien: "Accueil discord"
              },
              {
                icone: "facebook",
                lien: "https://facebook.com",
                nomLien: "Accueil facebook"
              },
              {
                icone: "instagram",
                lien: "https://instagram.com",
                nomLien: "Accueil instagram"
              }
            ]
          }
          mail="tkicien@armonie.group"
          tel="0430969732"

          >
          Copyrights du footer
        </UI.Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
