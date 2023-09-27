import en from "./en.json";
import fr from "./fr.json";

interface ILang {
  genericsTerms: object;
  cv: object;
}

const lang: { en: ILang; fr: ILang } = {
  en,
  fr,
};
export default lang;
