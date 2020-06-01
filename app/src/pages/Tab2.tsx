import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonAvatar, IonCardContent, IonButton, IonIcon } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { newspaperOutline, logoLinkedin, logoTwitter, logoGithub, cameraOutline } from 'ionicons/icons';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Projects</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
      <IonCard>
    <IonCardHeader>
    <IonCardTitle>Pneumonia Predictor</IonCardTitle>
    <IonCardSubtitle>PyTorch | React | Django</IonCardSubtitle>
    </IonCardHeader>
    
    <IonCardContent>
     A web application that let's you scan X-rays to find the probability of a presence of Pneumonia. 
     This application makes use of web technologies such as React and Django together with deep learning
     tools such as PyTorch to achieve this functionality.
    </IonCardContent>
    <div style={{width: "100%", alignItems: 'center', justifyContent: 'space-evenly', display: 'flex'}}>
    <IonButton expand={"block"} style={{width: '45%'}} href={"https://github.com/devbihari"}>
      <IonIcon slot='icon-only' icon={logoGithub} />
    </IonButton>
    <IonButton style={{width: '45%'}} href={"/camera"}>
      <IonIcon slot="icon-only" icon={cameraOutline} />
    </IonButton>    
    </div>
    
    </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
