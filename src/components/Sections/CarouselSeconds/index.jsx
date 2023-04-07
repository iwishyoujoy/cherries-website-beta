import Carousel from "react-multi-carousel";
import "./index.scoped.css";

function CarouselSeconds() {
    const responsive = {
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 3,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1,
            slidesToSlide: 1
        }
    };

    const secondhandList = [
        {name: "Желтая вешалка", img: require("./images/yellow-hanger.jpg"), address: "ул. Жуковского, 39"},
        {name: "Антресоль винтаж", img: require("./images/antresol.jpg"), address: "Невский пр., 134А"},
        {name: "FjordCloth", img: require("./images/fjord.jpg"), address: "ул. Чехова, 8"},
        {name: "EVERSALE", img: require("./images/eversale.jpg"), address: "ул. Кирочная, 9"},
        {name: "Room Store", img: require("./images/roomstore.jpg"), address: "канал Грибоедова, 26"},
        {name: "Pentagon Vintage Store", img: require("./images/pentagon.jpg"), address: " ул. Курская, 28/32"},
        {name: "KISSA MARKET", img: require("./images/kissa.jpg"), address: "Большая Конюшенная, 9"},
        {name: "Fatcatshop", img: require("./images/fatcat.jpg"), address: "ул. Казанская, 7"},
        {name: "Поток", img: require("./images/potok.jpg"), address: "пер. Угловой, 3"},
        {name: "OldBaby", img: require("./images/oldbaby.jpg"), address: "пер. Антоненко, 5"}
    ];

    return (
        <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className="carousel-component"
            containerClass="container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite={false}
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            pauseOnHover
            renderArrowsWhenDisabled={false}
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={responsive}
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass="carousel"
            slidesToSlide={1}
            swipeable>
            {secondhandList.map(
                (item, key) => (
                    <div className="secondhand-container">
                        <img className="seconhand-img" src={item.img}/>
                        <div className="secondhand-text-container">
                            <div className="secondhand-text-big">
                                {item.name}
                            </div>
                            <div className="secondhand-text-small">
                                {item.address}
                            </div>
                        </div>
                    </div>
                )
            )}
        </Carousel>
    );
}

export default CarouselSeconds;