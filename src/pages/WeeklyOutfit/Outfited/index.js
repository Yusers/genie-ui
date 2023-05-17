import Card from '~/components/Layout/components/Card';
import OwlCarousel from 'react-owl-carousel';
import './Outfited.scss';

const DataCard = [
  {
    id: 1,
    imgSrc: '/images/outfit/home_outfit.jfif',
    title: 'Monday',
    description:
      "Today's outfit is all about comfort and style. The loose-fitting shirt paired with the high-waisted Continue...",
    link: {
      pants: 'https://urlis.net/st9xzzvm',
      tShirt: 'https://urlis.net/ko14whxr',
      shoes: 'https://urlis.net/jc95vpt4',
    },
  },
  {
    id: 2,
    imgSrc: '/images/outfit/home_outfit2.jfif',
    title: 'Tuesday',
    description:
      "Today's outfit is all about comfort and style. The loose-fitting shirt paired with the high-waisted Continue...",
    link: {
      pants: 'https://urlis.net/st9xzzvm',
      tShirt: 'https://urlis.net/ko14whxr',
      shoes: 'https://urlis.net/jc95vpt4',
    },
  },
  {
    id: 3,
    imgSrc: '/images/outfit/home_outfit3.jfif',
    title: 'Wednesday',
    description:
      "Today's outfit is all about comfort and style. The loose-fitting shirt paired with the high-waisted Continue...",
    link: {
      pants: 'https://urlis.net/st9xzzvm',
      tShirt: 'https://urlis.net/ko14whxr',
      shoes: 'https://urlis.net/jc95vpt4',
    },
  },
  {
    id: 4,
    imgSrc: '/images/outfit/home_outfit4.jfif',
    title: 'Thursday',
    description:
      "Today's outfit is all about comfort and style. The loose-fitting shirt paired with the high-waisted Continue...",
    link: {
      pants: 'https://urlis.net/st9xzzvm',
      tShirt: 'https://urlis.net/ko14whxr',
      shoes: 'https://urlis.net/jc95vpt4',
    },
  },
  {
    id: 5,
    imgSrc: '/images/outfit/home_outfit5.jfif',
    title: 'Friday',
    description:
      "Today's outfit is all about comfort and style. The loose-fitting shirt paired with the high-waisted Continue...",
    link: {
      pants: 'https://urlis.net/st9xzzvm',
      tShirt: 'https://urlis.net/ko14whxr',
      shoes: 'https://urlis.net/jc95vpt4',
    },
  },
  {
    id: 6,
    imgSrc: '/images/outfit/home_outfit6.jfif',
    title: 'Saturday',
    description:
      "Today's outfit is all about comfort and style. The loose-fitting shirt paired with the high-waisted Continue...",
    link: {
      pants: 'https://urlis.net/st9xzzvm',
      tShirt: 'https://urlis.net/ko14whxr',
      shoes: 'https://urlis.net/jc95vpt4',
    },
  },
  {
    id: 7,
    imgSrc: '/images/outfit/home_outfit7.jfif',
    title: 'Sunday',
    description:
      "Today's outfit is all about comfort and style. The loose-fitting shirt paired with the high-waisted Continue...",
    link: {
      pants: 'https://urlis.net/st9xzzvm',
      tShirt: 'https://urlis.net/ko14whxr',
      shoes: 'https://urlis.net/jc95vpt4',
    },
  },
];

function Outfited() {
  return (
    <div className="Outfited">
      <OwlCarousel
        className="owl-theme"
        autoplay={true}
        autoplayTimeout={2000}
        loop={true}
        margin={10}
        items={4}
      >
        {DataCard.map((card, idx) => (
          <div className="item" key={idx}>
            <Card card={card} isCardChildren={true} />
          </div>
        ))}
      </OwlCarousel>
      ;
    </div>
  );
}

export default Outfited;
