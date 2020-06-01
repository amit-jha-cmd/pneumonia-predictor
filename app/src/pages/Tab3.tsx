import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { usePhotoGallery } from '../hooks/usePhotoGallery';
const Tab3: React.FC = () => {
  const {takePhoto}= usePhotoGallery();
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
