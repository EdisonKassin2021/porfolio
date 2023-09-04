/* eslint-disable @typescript-eslint/no-explicit-any */
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
// import supabase from "./configs/supabase";

function App() {
  // const [errors, setErrors] = useState(null);
  // const [datas, setDatas] = useState(null);

  // useEffect(() => {
  // (async () => {
  //   const { data: Formations, error } = await supabase
  //     .from("Formations")
  //     .select();
  //   console.log("error", error);
  //   alert(Formations?.length);
  // })();
  // }, []);

  useEffect(() => {
    // Remplacez 'votre_nom_utilisateur' par votre nom d'utilisateur GitHub
    const username = "EdisonKassin2021";

    // Remplacez 'votre_token_github' par votre token d'accès GitHub (si nécessaire)
    const token = "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";

    // Configurer l'en-tête d'autorisation si vous avez un token d'accès GitHub
    const headers = token ? { Authorization: `token ${token}` } : {};

    axios
      .get(`https://api.github.com/users/${username}/repos`, { headers })
      .then((response) => {
        // Filtrer les référentiels qui commencent par "PROJECT-"
        const filteredRepositories = response.data.filter((repo: any) =>
          repo.name.startsWith("PROJECT-")
        );
        console.log(filteredRepositories);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des référentiels GitHub :",
          error
        );
      });
  }, []);

  return (
    <div className="h-full w-full">
      <Outlet />
    </div>
  );
}

export default App;
