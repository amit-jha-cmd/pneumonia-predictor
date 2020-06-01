import React from 'react';
import { IonAvatar, IonChip, IonItem, IonLabel, IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonIcon, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { wifi, star, logoGithub, logoHackernews, newspaperOutline, logoLinkedin, logoTwitter } from 'ionicons/icons';

const Tab1: React.FC = () => {
  return (
    <IonPage>
    <IonHeader>
    <IonToolbar>
    <IonTitle>About Me</IonTitle>
    </IonToolbar>
    </IonHeader>
    <IonContent>
    <IonCard>
    <IonCardHeader>
    <IonAvatar>
    <img src="https://devbihari.github.io/public/images/amit2.jpg" />
    </IonAvatar>
    <IonCardTitle>Amit Jha</IonCardTitle>
    <IonCardSubtitle>MERN | PWA | Django | Data Science</IonCardSubtitle>
    </IonCardHeader>
    
    <IonCardContent>
    My name is Amit Jha. I consider myself the Phunsuk Vangadu of Web Development and Data Science.
    No no, don't get me wrong, I'm no where as good as the actual guy but I share the same enthusiasm 
    and curiosity towards my field of interests as Mr. Phunsuk has for learning new things. 
    Here are a few link that will tell you more about me
    </IonCardContent>
    <div style={{width: "100%", alignItems: 'center', justifyContent: 'space-evenly', display: 'flex'}}>
    <IonButton href={"https://dev.to/jha"}>
      <IonIcon slot="icon-only" icon={newspaperOutline} />
    </IonButton>
    <IonButton href={"https://github.com/devbihari"}>
      <IonIcon slot='icon-only' icon={logoGithub} />
    </IonButton>
    <IonButton href={"https://devbihari.github.io/www.linkedin.com/in/devbihari"}>
      <IonIcon slot="icon-only" icon={logoLinkedin} />
    </IonButton>
    <IonButton href={"https://twitter.com/amit_jha6700"}>
      <IonIcon slot="icon-only" icon={logoTwitter} />
    </IonButton>    </div>
    
    </IonCard>
    
    </IonContent>
    </IonPage>
    );
  };
  
  export default Tab1;
  