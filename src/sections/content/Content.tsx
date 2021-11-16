import React from 'react';
import {
  СontentFirstIcon,
  СontentSecondIcon,
  СontentThirdIcon,
} from '../../assets/image';
import { Wrapper, ContentBlock } from '../../components';

import './Content.scss';

interface IObjectsContsntsBlock {
  id: number;
  img: React.FunctionComponent<React.SVGProps<SVGSVGElement>> | any;
  withBTN: boolean;
}

const Content = () => {
  const objectsContentsBlocks: IObjectsContsntsBlock[] = [
    {
      id: Math.random(),
      img: <СontentFirstIcon />,
      withBTN: false,
    },
    {
      id: Math.random(),
      img: <СontentSecondIcon />,
      withBTN: false,
    },
    {
      id: Math.random(),
      img: <СontentThirdIcon />,
      withBTN: true,
    },
  ];

  return (
    <section>
      <Wrapper>
        <div className="content__container">
          {objectsContentsBlocks.map((elem, index) => (
            <ContentBlock
              myIcon={elem.img}
              key={elem.id}
              withBTN={elem.withBTN}
              index={index}
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Content;
