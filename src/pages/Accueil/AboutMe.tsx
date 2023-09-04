import { Box, Button } from "@mui/material";
import { sidebarBackground, sidebarItemClicked } from "../../assets/colors";
import { useState } from "react";
import Login from "../Login/Login";
import { useAppSelector } from "../../redux/app/hooks";
import { getSessionToken } from "../../redux/features/login/LoginSlice";
import classNames from "classnames";

const AboutMe = () => {
  const [voirPlus, setVoirPlus] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  const token = useAppSelector(getSessionToken);

  return (
    <Box>
      <div className="text-xl py-1 pr-5">Hello there 👋</div>
      <div
        className={classNames("text-5xl", !token && "cursor-pointer")}
        style={{
          fontWeight: 700,
        }}
        onClick={
          !token
            ? () => {
                setOpenLogin(true);
              }
            : undefined
        }
      >
        I'm Edison KASSIN
      </div>
      <div
        className="text-3xl py-3"
        style={{
          fontWeight: 700,
        }}
      >
        Ingénieur de conception des Télécommunications et Développeur Fullstack
      </div>

      <div className="text-justify pr-5 mt-3">
        {!voirPlus ? (
          <p>
            Je suis un développeur fullstack web et ingénieur en
            télécommunications spécialisé en architecture réseau. Fort de plus
            de 3 ans d'expérience, je maîtrise ReactJS, React Native, Node.js et
            PHP pour créer des expériences interactives. En plus du
            développement, j'ai exploré le marketing digital et la rédaction
            web. Ma capacité à m'adapter rapidement et à collaborer efficacement
            est un atout. En dehors de la technologie, j'aime la musique, le
            sport et les jeux vidéo. Explorez mon site pour en savoir plus et
            n'hésitez pas à me contacter pour discuter de vos besoins
            technologiques. <br />
          </p>
        ) : (
          <VoirPlusText />
        )}
        <div className="flex justify-start mt-5">
          <Button
            style={{
              background: !voirPlus ? sidebarBackground : sidebarItemClicked,
              color: !voirPlus ? sidebarItemClicked : sidebarBackground,
              padding: "10px 50px",
            }}
            className="shadow-md"
            onClick={() => setVoirPlus((plus) => !plus)}
          >
            {!voirPlus ? "Voir plus" : "Reduire"}
          </Button>
        </div>
      </div>

      {openLogin && (
        <Login open={openLogin} onClose={() => setOpenLogin(false)} />
      )}
    </Box>
  );
};

export default AboutMe;

const VoirPlusText = () => {
  return (
    <p className="text-justify mb-3">
      Je suis ravi de vous accueillir sur ma plateforme en ligne. Permettez-moi
      de me présenter : je suis un développeur fullstack web et ingénieur de
      conception des télécommunications, spécialisé en architecture réseau
      informatique et télécoms. Avec plus de 3 ans d'expérience professionnelle
      à mon actif, j'ai acquis une expertise solide et diversifiée dans le
      domaine de la technologie. <br />
      <br />
      Pendant mes 2 années en tant que développeur fullstack, j'ai pu explorer
      en profondeur les langages et les outils qui propulsent le web moderne. Ma
      maîtrise de <b>ReactJS, React Native, Node.js et PHP</b> me permet de
      créer des expériences interactives et intuitives pour les utilisateurs,
      que ce soit sur le web ou sur les appareils mobiles.
      <br />
      <br />
      En plus de mon expérience en développement, j'ai consacré une année à me
      plonger dans le monde du marketing digital et de la rédaction web. Cette
      expérience m'a permis d'élargir mes compétences au-delà du code et de
      comprendre l'importance de la communication efficace et de la création de
      contenu de qualité.
      <br />
      <br /> L'une des caractéristiques qui me distingue est mon rôle de
      pionnier au sein des équipes avec lesquelles j'ai eu le privilège de
      travailler. Mon dynamisme et ma nature sociale me permettent de collaborer
      efficacement avec des collègues aux horizons variés. Mon aptitude à
      m'adapter rapidement aux nouvelles situations et technologies est une
      qualité que je mets en avant pour offrir des solutions innovantes et
      adaptées aux défis qui se présentent.
      <br />
      <br /> En dehors de ma passion pour la technologie, j'ai une vie bien
      équilibrée grâce à des hobbies diversifiés. La musique, le sport et les
      jeux vidéo sont mes échappatoires créatives, me permettant de maintenir
      mon esprit vif et ma créativité en éveil.
      <br />
      <br /> Je vous invite à explorer mon site pour en savoir plus sur mes
      projets passés, mes compétences et ma philosophie de travail. N'hésitez
      pas à me contacter si vous avez des questions, des idées de collaboration
      ou simplement pour discuter de vos besoins technologiques. Merci de votre
      visite et j'ai hâte de pouvoir échanger avec vous !
    </p>
  );
};
