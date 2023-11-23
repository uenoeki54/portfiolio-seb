import React from 'react';
import { LanguageContext } from '../App';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Success() {
  const { language, toFrench, toEnglish, toJapanese } =
    React.useContext(LanguageContext);
  const { languageId } = useParams();

  if (languageId === 1) {
    toEnglish();
    console.log(switchedtoenglish);
  }
  if (languageId === 2) {
    toFrench();
    console.log(switchedtofrench);
  }
  if (languageId === 3) {
    toJapanese();
    console.log(switchedtojapanese);
  }
  let message;
  let link;
  if (language === 'english') {
    message =
      'Thanks for your message. I will reply to you via email as soon as possible. ';

    link = 'Back to homepage';
  }

  if (language === 'french') {
    message = 'Merci pour votre message, je reviendrai vers vous au plus vite.';
    link = 'Retour home';
  }
  if (languageId === 3) {
    message =
      'メッセージをどうも有難うございました。まもなくお返事をさせて頂くと思っております。';
    link = 'ホメパゲ';
  }

  return (
    <section id="success">
      <h1>{message}</h1>
      <Link to="/">{link}</Link>
    </section>
  );
}

export default Success;
