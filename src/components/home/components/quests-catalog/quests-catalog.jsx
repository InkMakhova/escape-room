import { ReactComponent as IconAllQuests } from 'assets/img/icon-all-quests.svg';
import { ReactComponent as IconAdventures } from 'assets/img/icon-adventures.svg';
import { ReactComponent as IconHorrors } from 'assets/img/icon-horrors.svg';
import { ReactComponent as IconMystic } from 'assets/img/icon-mystic.svg';
import { ReactComponent as IconDetective } from 'assets/img/icon-detective.svg';
import { ReactComponent as IconScifi } from 'assets/img/icon-scifi.svg';
import * as S from './quests-catalog.styled';
import QuestList from './components/quest-list/quest-list';
import { useState } from 'react';
import { CatalogTabs } from '../../../../const';

const QuestsCatalog = (props) => {
  const {quests} = props;

  const [activeTab, setActiveTab] = useState(CatalogTabs.All);

  const getQuestList = (quests) => {
    if (activeTab === CatalogTabs.All) {
      return quests;
    } else {
      
    }
    return activeTab === CatalogTabs.All ? quests : quests.filter((quest) => quest.type === activeTab);
  }

  return (
    <>
      <S.Tabs>
        <S.TabItem>
          <S.TabBtn isActive={activeTab === CatalogTabs.All} onclick={() => setActiveTab(CatalogTabs.All)}>
            <IconAllQuests />
            <S.TabTitle>{CatalogTabs.All}</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem isActive={activeTab === CatalogTabs.Adventure} onclick={() => setActiveTab(CatalogTabs.Adventure)}>
          <S.TabBtn>
            <IconAdventures />
            <S.TabTitle>{CatalogTabs.Adventure}</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem>
          <S.TabBtn isActive={activeTab === CatalogTabs.Horror} onclick={() => setActiveTab(CatalogTabs.Horror)}>
            <IconHorrors />
            <S.TabTitle>{CatalogTabs.Horror}</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem>
          <S.TabBtn isActive={activeTab === CatalogTabs.Mystic} onclick={() => setActiveTab(CatalogTabs.Mystic)}>
            <IconMystic />
            <S.TabTitle>{CatalogTabs.Mystic}</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem>
          <S.TabBtn isActive={activeTab === CatalogTabs.Detective} onclick={() => setActiveTab(CatalogTabs.Detective)}>
            <IconDetective />
            <S.TabTitle>{CatalogTabs.Detective}</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>

        <S.TabItem>
          <S.TabBtn isActive={activeTab === CatalogTabs.SciFi} onclick={() => setActiveTab(CatalogTabs.SciFi)}>
            <IconScifi />
            <S.TabTitle>{CatalogTabs.SciFi}</S.TabTitle>
          </S.TabBtn>
        </S.TabItem>
      </S.Tabs>

      <QuestList quests={quests && quests.length > 0 ? quests.filter((quest) => quest.type === activeTab) : ''}/>
    </>
  )};

export default QuestsCatalog;
