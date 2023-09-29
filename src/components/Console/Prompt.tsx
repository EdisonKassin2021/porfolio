import { ReactNode } from "react";
import { CONSOLE_COMMANDS } from "./useConsoleEntry";
import "./console.css";
import { CV } from "../../Mock/CV";
import _ from "lodash";

export const getOutput = (input: CONSOLE_COMMANDS | string): ReactNode => {
  switch (input) {
    case CONSOLE_COMMANDS.help:
      return (
        <div className="table-container">
          <table className="custom-table">
            <thead>
              <tr>
                <td className="table-header">COMMANDE</td>
                <td className="table-header">DESCRIPTION</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="table-cell">help</td>
                <td className="table-cell">
                  Retourne la liste des commandes disponibles
                </td>
              </tr>
              <tr>
                <td className="table-cell">info</td>
                <td className="table-cell">
                  Retourne toutes les informations concernant l'administrateur
                </td>
              </tr>
              <tr>
                <td className="table-cell">language</td>
                <td className="table-cell">
                  Retourne tous les niveaux de langues que l'administrateur
                  parle
                </td>
              </tr>
              <tr>
                <td className="table-cell">formation</td>
                <td className="table-cell">
                  Retourne tous les diplômes de l'administrateur
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );

    case CONSOLE_COMMANDS.info:
      return (
        <div className="table-container">
          <table className="custom-table">
            <thead>
              <tr>
                <td className="table-header">TITRE</td>
                <td className="table-header">VALEUR</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="table-cell">nom</td>
                <td className="table-cell">Saturnin Edison Tchola KASSIN</td>
              </tr>
              <tr>
                <td className="table-cell">date de naissance</td>
                <td className="table-cell">29 Novembre</td>
              </tr>
              <tr>
                <td className="table-cell">situation</td>
                <td className="table-cell">Célibataire</td>
              </tr>
              <tr>
                <td className="table-cell">job actuel</td>
                <td className="table-cell">Fullstack Developer</td>
              </tr>
            </tbody>
          </table>
        </div>
      );

    case CONSOLE_COMMANDS.language:
      return (
        <div className="table-container">
          <table className="custom-table">
            <thead>
              <tr>
                <td className="table-header">LANGUES</td>
                <td className="table-header">NIVEAUX</td>
              </tr>
            </thead>
            <tbody>
              {_.map(CV.languages, (lang: any) => (
                <tr>
                  <td className="table-cell">{lang.intitule}</td>
                  <td className="table-cell">{lang.niveau}/6</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case CONSOLE_COMMANDS.formation:
      return (
        <div className="table-container">
          <table className="custom-table">
            <thead>
              <tr>
                <td className="table-header">DIPLOME</td>
                <td className="table-header">ECOLE</td>
                <td className="table-header">ANNEE</td>
              </tr>
            </thead>
            <tbody>
              {_.map(CV.educations, (educ: any) => (
                <tr>
                  <td className="table-cell">{educ.qualification}</td>
                  <td className="table-cell">{educ.ecole}</td>
                  <td className="table-cell">{educ.year}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    default:
      return "Invalid command";
  }
};
const Prompt = ({ children }: any) => {
  return (
    <div className="flex flex-col justify-start w-full">
      <span style={{ color: "#4CAF50", fontSize: "16px" }}>
        Portfolio/Edison{" "}
        <span className="italic" style={{ fontSize: "10px" }}>
          (utilise 'help' pour voir les commandes disponibles)
        </span>
      </span>
      {children && (
        <div
          className="flex items-center gap-2 w-full"
          style={{ color: "#4CAF50", fontSize: "16px" }}
        >
          <span>#</span> <div className="w-full grow">{children}</div>
        </div>
      )}
    </div>
  );
};

export default Prompt;
